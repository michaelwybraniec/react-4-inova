import React from "react";
import CountryDetails from "../countryDetails/CountryDetails.js";
import { Row, Col, Card, Accordion } from "react-bootstrap";

class ListItem extends React.Component {
  handleClick = () => {
    if (!this.props.isMobileSized) {
      this.props.selectedCountryCallback(this.props.country);
    }
  };

  render() {
    const { country } = this.props;
    return (
      <React.Fragment>
        <Accordion>
          <Card className="mb-2">
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              onClick={this.handleClick}>
              <Row>
                <Col className="text-left">
                  <b>{country.alpha3Code}</b>
                  {" - "}
                  {country.nativeName}
                </Col>
              </Row>
            </Accordion.Toggle>
            {this.props.isMobileSized && (
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <CountryDetails country={country} />
                </Card.Body>
              </Accordion.Collapse>
            )}
          </Card>
        </Accordion>
      </React.Fragment>
    );
  }
}

export default ListItem;
