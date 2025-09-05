// MainVisual
import React, { useRef, useState } from "react";
import './MainVisual.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function MainVisual() {
    const [isPlaying, setIsPlaying] = useState(true);
    const swiperRef = useRef(null);
    const images = [
        './img/v06.jpg','./img/v02.jpg','./img/v03.jpg',
        './img/v04.jpg','./img/v05.jpg'
    ];
    const toggleAutoplay = () => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    if (isPlaying) {
        swiper.autoplay.stop();
        } else {
        swiper.autoplay.start();
        }
        setIsPlaying(!isPlaying);
    };

    return(
        <section className="main-visual">
            <div className="controls">
                <button onClick={toggleAutoplay} className="toggle-btn">
                    <i className={isPlaying ? 'ri-pause-line' : 'ri-play-fill'}></i>
                </button>
                <div className="pagination"></div>
            </div>

            <Swiper
                ref={swiperRef}
                direction={'vertical'}
                loop={true}
                effect={'fade'}
                speed={1000} 
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: '.pagination',
                    clickable: true
                }}
                modules={[Autoplay, Pagination, EffectFade]}
                className="mySwiper"
            >
                {images.map((src, index) => (
                <SwiperSlide key={index}>
                    <img src={src} alt={`Slide ${index + 1}`} />
                </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default MainVisual;