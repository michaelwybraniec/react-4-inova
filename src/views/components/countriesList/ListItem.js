import React from "react";
import { Row, Col, Card, Accordion } from "react-bootstrap";

class ListItem extends React.Component {
  render() {
    const { country, mobile } = this.props || {};
    return (
      <div>
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
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default ListItem;
