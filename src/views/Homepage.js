import React from "react";
import Container from "@material-ui/core/Container";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Countries from "./Countries.js";


class Homepage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Header />
          <Countries />
          <Footer />
        </Container>
      </React.Fragment>
    );
  }
}

export default Homepage;
