import React from "react";

const Alert = props => {
    return (
        <div>
            {props.alertShow &&
            <div className="container">
                <br />
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>{props.alertBoldText}</strong> {props.alertOtherText}
                    <button type="button" className="close" onClick={() => props.hideAlert()} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            }
        </div>
    )
};

export default Alert;
