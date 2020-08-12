import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import PostList from "./PostList";
import NewPostModal from "./NewPostModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    Posts: []
  };

  componentDidMount() {
    this.resetState();
  }

  getPosts = () => {
    axios.get(API_URL).then(res => this.setState({ Posts: res.data }));
  };

  resetState = () => {
    this.getPosts();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <PostList
              Posts={this.state.Posts}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewPostModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;