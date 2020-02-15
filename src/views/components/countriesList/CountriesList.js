import React from "react";
import ListItem from "./ListItem.js";
import { Row, Col } from "react-bootstrap";

class CountriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const countries = this.props.countries;

    return (
      <React.Fragment>
        <Row className="mt-2">
          <Col md="6">
            {countries &&
              countries.map(c => <ListItem country={c} mobile={false} />)}
          </Col>
          <Col md="6">{!this.props.isMobileSized && "Web browser"}</Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default CountriesList;
