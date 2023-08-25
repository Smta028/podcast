import React from "react";
import "./styles.css"

function Loader() {
    return (
        <div className="wrapper">
            <div className="lds-spinner"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader;
