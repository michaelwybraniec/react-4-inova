import React from "react";
import SingleSearchBar from "./components/forms/SingleSearchBar.js";
import CountriesList from "./components/countriesList/CountriesList.js";
import { Row, Col, Spinner } from "react-bootstrap";

class Countries extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      APIRawReponse: [],
      singleSearch: false,
      countries: [],
      country: {},
      isLoading: true
    };
  }
  formatJSON = (data, all = true) => {
    return (
      data &&
      data.map(c => ({
        flag: c.flag,
        nativeName: c.nativeName ? c.nativeName : "",
        capital: c.capital ? c.nativeName : "",
        population: c.population ? c.population : 0,
        languages: c.languages ? c.languages.map(l => l.name) : [],
        timezones: c.timezones ? c.timezones : [],
        currenciesNames: c.currencies ? c.currencies.map(c => c.name) : [],
        nameOfBorderCountries: all
          ? c.borders
            ? c.borders.map(code => {
                const country = data.find(
                  country =>
                    country.cioc === code || country.alpha3Code === code
                );
                return country.name ? country.name : code;
              })
            : []
          : !all
          ? c.borders.map(code => {
              const country = this.state.APIRawReponse.find(
                country => country.cioc === code || country.alpha3Code === code
              );
              return country ? country.name : code;
            })
          : {}
      }))
    );
  };

  APIgetAll = (all = true) => {
    this.setState({ isLoading: true });
    let url = this.state.searchInput
      ? `https://restcountries.eu/rest/v2/name/${this.state.searchInput}`
      : "https://restcountries.eu/rest/v2/all";
    fetch(url)
      .then(results => {
        return results.json();
      })
      .then(data => {
        if (all) {
          data = [...this.formatJSON(data)];
          this.setState({ APIRawReponse: data });
          this.setState({ countries: data });
          this.setState({ singleSearch: false });
          this.setState({ isLoading: false });
          // console.table(this.state.countries.slice(0, 10));
        } else {
          data = [...this.formatJSON(data, false)];
          this.setState({ country: data });
          this.setState({ singleSearch: true });
          this.setState({ isLoading: false });
          // console.table(this.state.country.slice(0, 10));
        }
      });
  };

  componentDidMount() {
    this.APIgetAll();
  }

  getSearchInputData = SingleSearchBarData => {
    this.setState({ searchInput: SingleSearchBarData }, () => {
      this.APIgetAll(false);
    });
  };

  render() {
    const data = !this.state.singleSearch
      ? this.state.countries
      : this.state.country;

    return (
      <>
        <Row>
          <Col className="pt-2">
            <SingleSearchBar countriesCallback={this.getSearchInputData} />
            {this.state.isLoading && (
              <Spinner animation="border" className="mt-4" />
            )}
            <CountriesList
              countries={data}
              isMobileSized={this.props.isMobileSized}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default Countries;
