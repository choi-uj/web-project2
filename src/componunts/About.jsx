// About.jsx
import React, { useEffect, useRef, useState } from "react";
import "./About.scss";
import CircularBtn from "./CircularBtn";

function About() {
  const aboutRef = useRef(null);
  const innerRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current) return;

      const scrollY = window.scrollY;
      const sectionTop = aboutRef.current.offsetTop;
      const sectionHeight = aboutRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate the scroll range for the horizontal animation
      const startScroll = sectionTop + windowHeight;
      const endScroll = startScroll + windowHeight; // Animate over one window height

      if (scrollY >= startScroll && scrollY <= endScroll) {
        setIsFixed(true);
        // Calculate progress within the fixed scroll range
        const progress = (scrollY - startScroll) / windowHeight;
        setScrollProgress(progress);
      } else if (scrollY > endScroll) {
        setIsFixed(false);
        setScrollProgress(1); // Ensure it's at the end state
      } else {
        setIsFixed(false);
        setScrollProgress(0); // Reset to initial state
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Manage body and section classes for fixing
    if (isFixed) {
      document.body.classList.add('fixed-scroll');
      aboutRef.current.classList.add('fixed');
    } else {
      document.body.classList.remove('fixed-scroll');
      aboutRef.current.classList.remove('fixed');
    }
  }, [isFixed]);

    return (
        <section id="about-wrapper" ref={aboutRef}>
            <div id="about">
                <div className="about-inner" ref={innerRef}>
                    {/* Page 1 */}
                    <div className="about-page about-page-1">
                    <div className="about-menu">
                        <div className="about-h">
                        <h2>Green<br />Developer</h2>
                        <p>도시 라이프스타일로서의 정원을 개발합니다</p>
                        </div>
                        <div className="about-link">
                        <CircularBtn as="a" href="#product" text={<>맞춤형<br />디자이너<br />설계</>} />
                        <CircularBtn as="a" href="#product" text={<>그린<br />스페이스 &<br />콘텐츠 통합<br />솔루션</>} />
                        </div>
                    </div>
                
                    <div className="about-a" ref={aboutARef}>
                        <div className="about-round">Green<br />Space<span>도시환경에 적합한<br />정원설계 및 시공</span></div>
                        <div className="a-center">
                        <div className="about-round">Green<br />Lifestyle<span>정원에 기반한<br />경험-콘텐츠 개발</span></div>
                        <h3>SEOUL<br />GARDENING<br />CLUB</h3>
                        </div>
                        <div className="about-round">Green<br />Research<span>정원을 통한<br />공간 솔루션 연구</span></div>
                    </div>
                    </div>
                
                    {/* Page 2 */}
                    <div className="about-page about-page-2">
                    <div className="about-b">
                        <div className="about-round">Labor!<span>자연과 연결되는<br />참된 노동</span></div>
                        <div className="b-center">
                        <h3>Labor!<br />Work!<br />Action!</h3>
                        <div className="about-round">Work!<span>자신의 정체성을<br />도시와 공간에<br />표현하는 작업</span></div>
                        </div>
                        <div className="about-round">Action!<span>도시의 환경과<br />공동체에 미치는<br />선한 영향력</span></div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
