import React, { Component } from "react";
import { Table } from "reactstrap";
import NewPostModal from "./NewPostModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class PostList extends Component {
  render() {
    const Posts = this.props.Posts;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>title</th>
            <th>Desc</th>
           
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!Posts || Posts.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            Posts.map(Post => (
              <tr key={Post.id}>
                <td>{Post.title}</td>
                <td>{Post.desc}</td>
                <td align="center">
                  <NewPostModal
                    create={false}
                    Post={Post}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    id={Post.id}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default PostList;