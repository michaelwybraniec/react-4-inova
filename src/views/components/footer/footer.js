import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class BFooter extends React.Component {
  render() {
    return (
      <Row className="float-down text-bottom align-bottom pull-down">
        <Col>
          All Rights Reserved. Designed and Developed by{" "}
          <a href="#/about">Michael Wybraniec</a>.
        </Col>
      </Row>
    );
  }
}
export default BFooter;
