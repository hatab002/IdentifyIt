import React from "react";

const Card = props => {
    return (
        <div>
            {props.alert.show &&
            <div className="container">
                <br />
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>User already exists!</strong> Please login with your existing account.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            }
        </div>
    )
};

export default Card;
