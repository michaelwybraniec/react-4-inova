import React from "react";
import SingleSearchBar from "./components/forms/SingleSearchBar.js";
import { Row, Col } from "react-bootstrap";

class Countries extends React.Component {
  state = { searchInput: "" };

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
