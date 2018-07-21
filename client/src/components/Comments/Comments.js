import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Comments.css";

const Comments = props => (

  <div className="col-md-7" id="comments-container">
    <Form>
      < FormGroup>
        <Input type="textarea" name="text" id="exampleText" placeholder="What do you think it is?" />
      </FormGroup>
      <Button id="comment-submit" >Submit</Button>
    </Form>
    <ul className="comment-list">
      <strong>comments:</strong> {props.comments}
    </ul>
  </div>
)

export default Comments;