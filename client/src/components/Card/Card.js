import React from "react";
import "./Card.css";
import Comments from '../Comments';

const Card = props => {

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12" id="card">
                    <div className="row">
                        <div className="col-md-5">
                            <img id="selected-image" src={props.image} alt={props.description} />
                        </div>
                        <Comments 
                        comments={props.comments}
                        pictureId={props.pictureId}
                        pictureUserId={props.pictureUserId}
                        userId={props.userId}
                        user={props.user}
                        updateAlert={props.updateAlert}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;