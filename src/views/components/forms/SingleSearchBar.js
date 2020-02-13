import React from "react";
import { Form, FormControl, Row, Col } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

class SingleSearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: ""
    };
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  handleClick = () => {
    console.log("SingleSearchBar: handleClick", this.state.searchInput);
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
            variant="contained"
            color="primary"
            endIcon={<SearchIcon />}
            onClick={this.handleClick}>
            Find
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
