// Project
import React from "react";
import "./Project.scss"

function Project() {
    return(
        <section className="project">
            <h2>Portfolio</h2>
            <ul className="pf-list">
                <li><a href="/">통합공간기획</a></li>
                <li><a href="/">주택조경</a></li>
                <li><a href="/">상업조경</a></li>
                <li><a href="/">공공프로젝트</a></li>
                <li><a href="/">전시/팝업/콘텐츠</a></li>
                <li><a href="/">공유정원</a></li>
            </ul>
        </section>
    );
}

export default Project;