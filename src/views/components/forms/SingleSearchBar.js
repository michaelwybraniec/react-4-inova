import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";

class SingleSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      query: ""
    };
  }

  onClick = t => {
    console.log(t);
  };

  render() {
    return (
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button type="submit" onClick={() => this.onClick()}>
          Submit
        </Button>
      </Form>
    );
  }
}
export default SingleSearchBar;
