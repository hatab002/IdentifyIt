import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./Comments.css";

const Comments = props => (
    
    <div className="col-md-7" id="comments-container">

       <ul>
       <strong>comments:</strong> {props.comments}
       </ul>

       {/* function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const formInstance = (
  <form>
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Your Guess"
      placeholder="Enter text"
    />
    <Button type="submit">Submit</Button>
  </form>
);

render(formInstance);
        */}
    </div>
)

export default Comments;