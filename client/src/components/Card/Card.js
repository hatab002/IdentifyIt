import React from "react";
import "./Card.css";
import Comments from '../Comments';

const Card = props => (
    <div className="container">
        <div className="row">
            <div className="col-md-12" id="card">
                <div className="row">
                    <div className="col-md-5">
                        <img id="selected-image" src={props.image} />
                    </div>
                    <Comments
                    comments={props.comments}
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Card;