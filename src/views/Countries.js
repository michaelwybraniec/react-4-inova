import React from "react";
import SingleSearchBar from "./components/forms/SingleSearchBar.js";
import CountriesList from "./components/countriesList/CountriesList.js";
import CountryDetails from "./components/countryDetails/CountryDetails.js";

import { Row, Col, Alert } from "react-bootstrap";

class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      APIRawResponse: [],
      singleSearch: false,
      countries: [],
      country: [],
      isLoading: true,
      error: null,
      selectedCountry: []
    };
  }

  formatJSON = (data, all = true) => {
    return (
      data &&
      data.map(c => ({
        flag: c.flag,
        alpha3Code: c.alpha3Code ? c.alpha3Code : "",
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
              const country = this.state.APIRawResponse.find(
                country => country.cioc === code || country.alpha3Code === code
              );
              return country ? country.name : code;
            })
          : {}
      }))
    );
  };

  APIGetAll = (all = true) => {
    this.setState({ isLoading: true });
    let url = this.state.searchInput
      ? `https://restcountries.eu/rest/v2/name/${this.state.searchInput}`
      : "https://restcountries.eu/rest/v2/all";
    fetch(url)
      .then(results => {
        return results.json();
      })
      .then(response => {
        if (all) {
          this.setState({ APIRawResponse: response });
          response = [...this.formatJSON(response)];
          this.setState({ countries: response });
          this.setState({ singleSearch: false });
          this.setState({ isLoading: false });
          this.setState({ error: null });
          this.setState({ country: [] });
          this.setState({
            selectedCountry:
              response.find(c => c.nativeName === "Polska") || null
          });
        } else {
          if (!response.status || response.status !== 404) {
            response = [...this.formatJSON(response, false)];
            this.setState({ country: response });
            this.setState({ singleSearch: true });
            this.setState({ isLoading: false });
            this.setState({ error: null });
            this.setState({
              selectedCountry: !this.props.isMobileSized
                ? response.length === 1
                  ? response[0]
                  : []
                : []
            });
          } else if (response.status && response.status === 404) {
            this.setState({
              error: {
                status: response.status,
                message: response.message,
                messageCustom:
                  "Ops! Nothing found, but did you try to search on Mars ?"
              }
            });
            this.setState({ country: [] });
            this.setState({ singleSearch: true });
            this.setState({ isLoading: false });
            this.setState({ selectedCountry: [] });
          } else {
            console.error("APIGetAll error: response:", response);
          }
        }
      });
  };

  componentDidMount() {
    this.APIGetAll();
  }

  getSearchInputData = SingleSearchBarData => {
    this.setState({ searchInput: SingleSearchBarData }, () => {
      this.APIGetAll(false);
    });
  };

  selectedCountryCallback = country => {
    console.log("parent", country);
    this.setState({ selectedCountry: country });
  };

  render() {
    const data = !this.state.singleSearch
      ? this.state.countries
      : this.state.country;

    return (
      <>
        <Row>
          <Col className="pt-4">
            <SingleSearchBar
              countriesCallback={this.getSearchInputData}
              isLoading={this.state.isLoading}
            />
            {this.state.error && (
              <Alert className="mt-2" variant="warning">
                {this.state.error.messageCustom}
              </Alert>
            )}
            <Row className="mt-2">
              <Col md="6">
                <CountriesList
                  key={data.alpha3Code}
                  countries={data}
                  isMobileSized={this.props.isMobileSized}
                  selectedCountryCallback={this.selectedCountryCallback}
                />
              </Col>
              <Col md="6">
                <CountryDetails country={this.state.selectedCountry} />
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default Countries;
