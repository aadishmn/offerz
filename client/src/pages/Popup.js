import React from "react";
import './pop.css'

export default function Popup({msg,resetForm}){
    return(
        <>
            <div className="popup">
                <div className="pop-content">
                    <span className="popup-msg">{msg}</span>
                    <span className="close" onClick={resetForm} >X</span>
                </div>
            </div>
        </>
    )
}