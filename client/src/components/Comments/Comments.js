import React from "react";
import "./Comments.css";

const Comments = props => (
    
    <div className="col-md-7" id="comments-container">

       <ul>
       <strong>comments:</strong> {props.comments}
       </ul>
       
    </div>
)

export default Comments;