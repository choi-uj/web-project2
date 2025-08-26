// Header
import React from "react";

function Header() {
    return(
        <header id="header">
            <h1><a href="/"><span className="blind">서울 가드닝 클럽</span></a></h1>
            <nav id="gnb">
                <ul className="dep1">
                    <li><a href="/">About</a>
                    </li>
                    <li><a href="/">Project</a>
                        <ul className="dep2">
                            <li><a href="/">맞춤형 디자이너 설계</a></li>
                            <li><a href="/">그린 스페이스 &<br /> 콘텐츠 통합 솔루션</a></li>
                        </ul>
                    </li>
                    <li><a href="/">Contact</a>
                        <ul className="dep2">
                            <li><a href="/">통합공간기획</a></li>
                            <li><a href="/">주택조경</a></li>
                            <li><a href="/">상업조경</a></li>
                            <li><a href="/">공공프로젝트</a></li>
                            <li><a href="/">전시 / 팝업 / 컨텐츠</a></li>
                            <li><a href="/">공유정원</a></li>
                        </ul>
                    </li>
                    <li><a href="/">News</a>
                    </li>
                    <li><a href="/">Product</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;