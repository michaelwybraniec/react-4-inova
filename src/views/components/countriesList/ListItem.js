import React from "react";
import CountryDetails from "../countryDetails/CountryDetails.js";
import { Row, Col, Card, Accordion } from "react-bootstrap";

class ListItem extends React.Component {
  render() {
    const { country } = this.props;
    return (
      <React.Fragment>
        <Row className="mt-2">
          <Col md="6">
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
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
          </Col>
          <Col md="6">{!this.props.isMobileSized && "Web browser"}</Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ListItem;
