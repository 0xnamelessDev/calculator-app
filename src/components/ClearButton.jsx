import React from "react";
import "../style/ClearButton.css"

const ClearButton = (props) => (
    <div className="clear-button"
    onClick={props.manageClick}>
        {props.children}
    </div>
);

export default ClearButton;