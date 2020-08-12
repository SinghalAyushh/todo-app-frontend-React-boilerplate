import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewPostForm extends React.Component {
  state = {
    id: 0,
    title: "",
    desc: ""
    
  };

  componentDidMount() {
    if (this.props.Post) {
      const { id,title,desc} = this.props.Post;
      this.setState({id,title,desc});
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createPost = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editPost = e => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/api/api/todos/${this.state.id}/` , this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.Post ? this.editPost : this.createPost}>
        <FormGroup>
          <Label for="name">Title:</Label>
          <Input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.title)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Description:</Label>
          <Input
            type="text"
            name="desc"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.desc)}
          />
        </FormGroup>
        
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewPostForm;