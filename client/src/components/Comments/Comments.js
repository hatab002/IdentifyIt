import React, { Component } from "react";
import "./Comments.css";
import API from "../../utils/API";
import socketIOClient from "socket.io-client";


class Comments extends Component {
  state = {
    newComment: "",
    comments: [],
    alertShow: false,
    alertBoldText: "",
    alertOtherText: ""
  }

  componentDidMount() {
    this.setState({ comments: this.props.comments });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ comments: nextProps.comments})
  }

  submitComment = event => {
    event.preventDefault();
    if (this.props.userId) {
      API.saveComment({
        text: this.state.newComment,
        picture: this.props.pictureId,
        user: this.props.userId
      }).then(res => this.setState({ newComment: "", comments: this.state.comments.concat([res.data]) }));
      const socket = socketIOClient('http://localhost:3001')
        socket.on("new_comment", (new_comment) =>{
          this.props.updateAlert(true, new_comment, this.state.newComment);
        });
    }
  }

  deleteComment = (commentId) => {
    API.deleteComment(commentId)
      .then(res => this.setState({comments: this.state.comments.filter(comment => comment._id != commentId)}));
  }

  markSolved = (commentId) => {
    API.updateComment(commentId, {isCorrect: true})
      .then(res => {
        API.updatePicture(res.data.picture, {isSolved: true})
          .then(picRes => {
            if (picRes.status === 200) {
              this.setState({comments: this.state.comments.map(comment => {
                if (comment._id === commentId) {
                  comment.isSolved = true;
                }
              })})
            }
          });
      });
  }

  upvoteComment = (commentId, newUpvoteCount) => {
    
     API.updateComment(commentId, {
       upvoteCount: newUpvoteCount +1
     }).then(res => this.setState(this.state.comments.map(upvote => {
       if (commentId === upvote._id) {
         upvote.upvoteCount ++
       }
     })));
  }

  downvoteComment = (commentId, newUpvoteCount) => {

      API.updateComment(commentId, {
        upvoteCount: newUpvoteCount -1
      }).then(res => this.setState(this.state.comments.map(upvote => {
        if (commentId === upvote._id) {
          upvote.upvoteCount --
        }
      })));
   }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  render() {

    return (

      <div className="col-md-7" id="comments-container">
        <form>
          <div className="form-group">
            <textarea className="form-control" id="comment" rows="3" name="newComment" value={this.state.newComment} onChange={this.handleInputChange} placeholder="What do you think it is?"></textarea>
          </div>
          <button id="comment-submit" type="button" className="btn btn-primary" data-toggle="modal" data-target={this.props.isLoggedIn ? "" : "#createAccount"} onClick={this.submitComment}>Submit</button>
        </form>
        <ul className="comment-list list-group list-group-flush">
          {this.state.comments.map(comment => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={comment._id}>
             <span className="comment-span">
             <p className="username">{comment.user.username}</p>
            <p className="comment-text">{comment.text}</p>
            </span>
              <span className="badge badge-primary badge-pill" key={comment._id}>
              {this.props.pictureUserId === this.props.userId && <i className="far fa-check-circle" onClick={() => this.markSolved(comment._id)}></i>}              
              <i id="arrow-up" className="fas fa-arrow-alt-circle-up" onClick={() => this.upvoteComment(comment._id, comment.upvoteCount)}/>
              <i id="arrow-down" className="fas fa-arrow-alt-circle-down" onClick={() => this.downvoteComment(comment._id, comment.upvoteCount)} />
              {comment.upvoteCount}
              {this.props.userId === comment.user._id && <i className="fas fa-trash-alt" onClick={() => this.deleteComment(comment._id)}></i>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments;
