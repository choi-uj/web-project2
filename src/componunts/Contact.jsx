// Contact
import React from "react";
import "./Contact.scss";
import CircularBtn from "./CircularBtn";

function Contact() {
    return(
        <section className="contact">
            <div className="cont-txt">
                <div className="contact-main">
                    <h2>Design-Build<br />Process</h2>
                    <div className="process-btn">
                        <a href="#cont-1p"></a>
                        <a href="#cont-2p"></a>
                        <a href="#cont-3p"></a>
                        <a href="#cont-4p"></a>
                        <a href="#cont-5p"></a>
                        <a href="#cont-6p"></a>
                    </div>
                </div>
                    <div className="process cont-1p">
                        <div className="contact-btn">
                            <CircularBtn
                                as="a" href="#cont-2p"
                                text={<>Step1.<br /> 사전안내</>}
                            />
                        </div>
                        <ul>
                            <li>사전질문지 작성 및 제출</li>
                            <li>전화상담</li>
                            <li>현장미팅 스케줄 조율</li>
                        </ul>
                    </div>
                    <div className="process cont-2p">
                        <div className="contact-btn">
                            <CircularBtn
                                as="a" href="#cont-2p"
                                text={<>Step 2.<br />현장방문<br />및 상담</>}
                            />
                        </div>
                        <ul>
                            <li>현장미팅 및 상담</li>
                            <li>현장도면 수령</li>
                            <li>예상 견적 전달</li>
                        </ul>
                    </div>
                    <div className="process cont-3p">
                        <div className="contact-btn">
                            <CircularBtn
                                as="a" href="#cont-2p"
                                text={<>Step 3.<br />계약확정</>}
                            />
                        </div>
                        <ul>
                            <li>계약서 서명완료</li>
                            <li>선금 정산</li>
                        </ul>
                    </div>
             </div>
             <div className="cont-img c-1p c-2p c-3p c-4p c-5p c-6p"></div>
        </section>
    );
}

export default Contact;