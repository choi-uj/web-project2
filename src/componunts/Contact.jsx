// Contact
import React from "react";
import "./Contact.scss";

function Contact() {
    return(
        <section className="contact">
            <div className="cont-txt">
                <h2>Design-Build<br />Process</h2>
                <div className="cont pro-1">
                    <div className="process">
                        <div className="round-btn">Step1<br />사전안내</div>
                        <ul>
                            <li>사전질문지 작성 및 제출</li>
                            <li>전화상담</li>
                            <li>현장미팅 스케줄 조율</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="cont-img"></div>
        </section>
    );
}

export default Contact;