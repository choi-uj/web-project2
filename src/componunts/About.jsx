// About
import React from "react";
import "./About.scss";

function About() {
    return(
        <section id="about">
            <div className="container">
                <div className="about-menu">
                    <div className="about-h">
                        <h2>Green<br />Developer</h2>
                        <p>도시 라이프스타일로서의 정원을 개발합니다</p>
                    </div>
                    <div className="about-link">
                        <a href="/" className="round-btn">
                            맞춤형<br />디자이너<br />설계
                        </a>
                        <a href="/" className="round-btn">
                            그린<br />스페이스 &<br />콘텐츠 통합<br />솔루션
                        </a>
                    </div>
                </div>
                {/* <div className="about-a">
                    <div className="about-round">Green<br />Space</div>
                    <div className="a-center">
                        <div className="about-round">Green<br />Lifestyle</div>
                        <h3>SEOUL<br />GARDENING<br />CLUB</h3>
                    </div>
                    <div className="about-round">Green<br />Research</div>
                </div> */}
                <div className="about-b">
                    <div className="about-round">
                        Labor!<br />
                        <span>자연과 연결되는<br />참된 노동</span>
                    </div>
                    <div className="b-center">
                        <h3>Labor!<br />Work!<br />Action!</h3>
                        <div className="about-round">
                            Work!<br />
                            <span>자신의 정체성을<br />도시와 공간에<br />표현하는 작업</span>
                        </div>
                    </div>
                    <div className="about-round">
                        Action!<br />
                        <span>도시의 환경과<br />공동체에 미치는<br />선한 영향력</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;