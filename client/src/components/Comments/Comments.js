import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./Comments.css";

const Comments = props => (
    
    <div className="col-md-7" id="comments-container">

       <ul>
       <strong>comments:</strong> {props.comments}
       </ul>
       
    </div>
)

export default Comments;