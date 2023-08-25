import React from "react";
import "./styles.css"

function Button({text,onClick,disabled,style}){
    return(
        <div onClick={onClick} className="custom-btn" disabled={disabled} 
        style={style}>{text}</div>
    )
}

export default Button;