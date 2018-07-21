import React, { Component } from "react";
import "./Comments.css";
import API from "../../utils/API";

class Comments extends Component {
  state = {
    newComment: "",
    comments: []
  }

  componentDidMount() {
    this.setState({ comments: this.props.comments });
  }

  submitComment = event => {
    event.preventDefault();
    if (this.props.userId) {
      API.saveComment({
        text: this.state.newComment,
        picture: this.props.pictureId,
        user: this.props.userId
      }).then(res => this.setState({ newComment: "", comments: this.state.comments.concat([res.data]) }));
    }
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (

      <div className="col-md-7" id="comments-container">
        <form>
          <div className="form-group">
            <textarea className="form-control" id="comment" rows="3" name="newComment" value={this.state.newComment} onChange={this.handleInputChange} placeholder="What do you think it is?"></textarea>
          </div>
          <button id="comment-submit" type="button" className="btn btn-primary" data-toggle="modal" data-target={this.props.isLoggedIn ? "" : "#userLogin"} onClick={this.submitComment}>Submit</button>
        </form>
        <ul className="comment-list list-group list-group-flush">
          <strong className="comments-header">comments:</strong>
          {this.state.comments.map(comment => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={comment._id}>
              {comment.text}
              <span className="badge badge-primary badge-pill" key={comment._id}>{comment.upvoteCount}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments;