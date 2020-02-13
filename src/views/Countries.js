import React from "react";
import SingleSearchBar from "./components/forms/SingleSearchBar.js";
import { Row, Col } from "react-bootstrap";

class Countries extends React.Component {
  render() {
    return (
      <Row>
        <Col className="pt-2">
          <SingleSearchBar />
        </Col>
      </Row>
    );
  }
}

export default Countries;
