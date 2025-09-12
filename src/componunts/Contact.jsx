// Contact
import React from "react";
import "./Contact.scss";
import CircularBtn from "./CircularBtn";

function Contact() {
    const [step, setStep] = useState(1); // 현재 활성화된 단계 (1~6)

    const handleStepChange = (stepNumber) => {
        setStep(stepNumber);
    };

    return(
        <section className="contact">
            <div className="cont-txt">
                <div className="contact-main">
                    <h2>Design-Build<br />Process</h2>
                    <div className="process-btn">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                        <a
                            key={num}
                            href="#!"
                            className={step === num ? "active" : ""}
                            onClick={() => handleStepChange(num)}
                        >
                            Step {num}
                        </a>
                    ))}
                </div>
                </div>
                    {step === 1 && (
                        <div className="process cont-1p">
                            <div className="contact-btn">
                                <CircularBtn
                                    as="a" href="#!"
                                    text={<>Step1.<br /> 사전안내</>}
                                />
                            </div>
                            <ul>
                                <li>사전질문지 작성 및 제출</li>
                                <li>전화상담</li>
                                <li>현장미팅 스케줄 조율</li>
                            </ul>
                        </div>
                    )} {step === 2 && (
                    <div className="process cont-2p">
                        <div className="contact-btn">
                            <CircularBtn
                                as="a" href="#!"
                                text={<>Step 2.<br />현장방문<br />및 상담</>}
                            />
                        </div>
                        <ul>
                            <li>현장미팅 및 상담</li>
                            <li>현장도면 수령</li>
                            <li>예상 견적 전달</li>
                        </ul>
                    </div>
                    )} {step === 3 && (
                    <div className="process cont-3p">
                        <div className="contact-btn">
                            <CircularBtn
                                as="a" href="#!"
                                text={<>Step 3.<br />계약확정</>}
                            />
                        </div>
                        <ul>
                            <li>계약서 서명완료</li>
                            <li>선금 정산</li>
                        </ul>
                    </div>
                    )} {step === 4 && (
                    <div className="process cont-4p">
                        <div className="contact-btn">
                            <CircularBtn
                                as="a" href="#!"
                                text={<>Step 3.<br />계약확정</>}
                            />
                        </div>
                        <ul>
                            <li>계약서 서명완료</li>
                            <li>선금 정산</li>
                        </ul>
                    </div>
                    )} {step === 5 && (
                    <div className="process cont-5p">
                        <div className="contact-btn">
                            <CircularBtn
                                as="a" href="#!"
                                text={<>Step 3.<br />계약확정</>}
                            />
                        </div>
                        <ul>
                            <li>계약서 서명완료</li>
                            <li>선금 정산</li>
                        </ul>
                    </div>
                    )} {step === 6 && (
                    <div className="process cont-6p">
                        <div className="contact-btn">
                            <CircularBtn
                                as="a" href="#!"
                                text={<>Step 3.<br />계약확정</>}
                            />
                        </div>
                        <ul>
                            <li>계약서 서명완료</li>
                            <li>선금 정산</li>
                        </ul>
                    </div>
                    )}
             </div>
             <div className="cont-img">
                <img src={`/images/build${step}.jpg`} alt={`build ${step}`} />
             </div>
        </section>
    );
}

export default Contact;