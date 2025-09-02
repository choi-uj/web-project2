// Product
import React from "react";
import "./Product.scss";

function Product() {
    return(
        <section className="product">
            <div className="container">
                <div className="omg-int">
                    <div className="omg-txt">
                        <h2>Product</h2>
                        <p>
                            전시가 끝나고 버려지는 폐기물이 걱정되셨다면,<br />
                            지속가능한 플랜테리어를 위한 솔루션<br />
                            [OMG 렌탈 서비스]를 이용해 보세요.
                        </p>
                    </div>
                    <div className="omg-btn">
                        <a href="#" className="round-btn">렌탈 상담</a>
                        <a href="#" className="round-btn">사이즈별 금액</a>
                    </div>
                </div>
                <div className="omg-img"></div>
            </div>
        </section>
    );
}

export default Product;