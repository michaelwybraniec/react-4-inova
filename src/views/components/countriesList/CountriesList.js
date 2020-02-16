import React from "react";
import ListItem from "./ListItem.js";

class CountriesList extends React.Component {
  // Pull request for pagination in progress
  /*   componentWillUpdate() {
    const countries = [...this.props.countries];
    function chunk(array, size) {
      const chunked_arr = [];
      let copied = [...array]; //
      const numOfChild = Math.ceil(copied.length / size); // Round up to the nearest integer
      for (let i = 0; i < numOfChild; i++) {
        chunked_arr.push(copied.splice(0, size));
      }
      return chunked_arr;
    }
    let chunked = chunk(countries, 4);
    console.log(chunked);
  } */
  render() {
    const countries = [...this.props.countries];

    return (
      <React.Fragment>
        {countries &&
          countries.map(c => (
            <ListItem
              key={c.alpha3Code}
              country={c}
              isMobileSized={this.props.isMobileSized}
              selectedCountryCallback={this.props.selectedCountryCallback}
            />
          ))}
      </React.Fragment>
    );
  }
}

export default CountriesList;
