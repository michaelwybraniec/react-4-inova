import React from "react";
import { Form, FormControl, Row, Col, Spinner, Button } from "react-bootstrap";

class SingleSearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick = () => {
    this.props.countriesCallback(this.state.searchInput);
  };

  render() {
    return (
      <React.Fragment>
        <Form inline>
          <FormControl
            type="text"
            value={this.state.searchInput}
            name="searchInput"
            placeholder="country name..."
            onChange={this.handleChange.bind(this)}
            className="mr-sm-2"
          />

          <Button
            style={{ width: 100 }}
            variant="primary"
            onClick={this.handleClick}>
            {this.props.isLoading ? (
              <span className="">
                {" "}
                <Spinner animation="border" size="sm" className="" />
              </span>
            ) : (
              "Find"
            )}
          </Button>

          {this.state.searchInput && (
            <span className="pl-2">
              You are typing: <b>{this.state.searchInput}</b>
            </span>
          )}
        </Form>
      </React.Fragment>
    );
  }
}

export default SingleSearchBar;
