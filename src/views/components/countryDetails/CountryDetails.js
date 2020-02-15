import React from "react";
import { Row, Col, Card, Accordion, Image } from "react-bootstrap";

class ListItem extends React.Component {
  render() {
    const { country, isMobileSized } = this.props;

    return (
      <React.Fragment>
        <Row className="mt-2">
          <Col>
            <Image src={country.flag} thumbnail />
            <div>
              <pre>{JSON.stringify(country, null, 2)}</pre>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ListItem;
