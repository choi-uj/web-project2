import React from "react";
import './Side.scss'

function Side() {
    return(
        <div className="side">
            <div className="side-menu">
                <button><i className="ri-instagram-line"></i></button>
                <button onClick="window.open('http://pf.kakao.com/_xjxcEDn', '_blank')"><i className="ri-chat-smile-ai-line"></i></button>
                <button><span>1:1</span></button>
            </div>
            <button className="side-home">
                <i className="ri-arrow-up-s-line"></i>
            </button>
        </div>
    );
}

export default Side;