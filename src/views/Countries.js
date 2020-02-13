import React from "react";
import SingleSearchBar from "./components/forms/SingleSearchBar.js";
import { Row, Col } from "react-bootstrap";

class Countries extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      countries: []
    };
  }

  formatData = data => {
    const clonnedData = [...data];
    return clonnedData.map(c => ({
      flag: c.flag,
      nativeName: c.nativeName ? c.nativeName : "",
      capital: c.capital ? c.nativeName : "",
      population: c.population ? c.population : 0,
      languages: c.languages ? c.languages.map(l => l.name) : [],
      timezones: c.timezones ? c.timezones : [],
      currenciesNames: c.currencies ? c.currencies.map(c => c.name) : [],
      nameOfBorderCountries: c.borders
        ? c.borders.map(code => {
            const country = data.find(
              country => country.cioc === code || country.alpha3Code === code
            );
            return country.name ? country.name : code;
          })
        : []
    }));
  };

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ countries: this.formatData(data) });
        console.log(this.state.countries);
      });
  }

  getSearchInputData = SingleSearchBarData => {
    this.setState({ searchInput: SingleSearchBarData });
    console.log("parent: Countries ", this.state.searchInput);
  };

  render() {
    return (
      <Row>
        <Col className="pt-2">
          <SingleSearchBar countriesCallback={this.getSearchInputData} />
        </Col>
      </Row>
    );
  }
}

export default Countries;
