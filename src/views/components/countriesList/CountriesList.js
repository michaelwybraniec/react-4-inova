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
          <Col>
            {countries &&
              countries.map(c => (
                <ListItem
                  key={c.alpha3Code}
                  country={c}
                  isMobileSized={this.props.isMobileSized}
                />
              ))}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default CountriesList;
