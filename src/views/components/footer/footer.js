import React from "react";
import { Row, Col } from "react-bootstrap";

class BFooter extends React.Component {
  render() {
    return (
      <Row className="float-down text-bottom align-bottom pull-down">
        <Col>
          All Rights Reserved. Developed by{" "}
          <a href="#/about">Michael Wybraniec</a>.
        </Col>
      </Row>
    );
  }
}
export default BFooter;
