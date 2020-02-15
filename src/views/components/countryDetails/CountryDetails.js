import React from "react";
import { Row, Col, Card, Accordion, Image } from "react-bootstrap";

class ListItem extends React.Component {
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
        nameOfBorderCountries: c.nameOfBorderCountries
      }))
    );
  };

  render() {
    const { country, isMobileSized } = this.props;

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
                      <Image src={country.flag} thumbnail />
                      <div>
                        <pre>{JSON.stringify(country, null, 2)}</pre>
                      </div>
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
