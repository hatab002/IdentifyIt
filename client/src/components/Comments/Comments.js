import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Comments.css";

const Comments = props => (

    <div className="col-md-7" id="comments-container">
      <ul>
       <strong>comments:</strong> {props.comments}
       </ul>

      <Form>
        < FormGroup>
            <Label for="exampleText">What do you think the image is?</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
         <Button>Submit</Button>
      </Form>

    </div>
)

export default Comments;