import React from "react";
import "./Card.css";
import Comments from '../Comments';

const Card = props => {

    console.log(props)
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12" id="card">
                    <div className="row">
                        <div className="col-md-5">
                            <img id="selected-image" src={props.image} alt={props.description}/>
                        </div>
                        <Comments 
                        comments={props.comments}
                        pictureId={props.pictureId}
                        userId={props.userId}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;