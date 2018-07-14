import React from "react";
import "./Card.css";
import Comments from '../Comments';
import witts from "../../witts.json";

const Card = props => (
    <div className="container">
        <div className="row">
            <div className="col-md-12" id="card">
                <div className="row">
                    <div className="col-md-5">
                        <img id="selected-image" src={props.image} />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Card;