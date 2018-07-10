import React from "react";
import "./Card.css";
import Comments from '../Comments';

const Card = props => (

        <div className="col-md-10" id="card">
            <div className="img-container">
                <img id="selected-image" src="https://media.self.com/photos/5aeb2496a982843a568c9dab/4:3/w_728,c_limit/extreme-morning-person.jpg" alt="image-holder"/>
            </div>
            <Comments />
        </div>
);

export default Card;