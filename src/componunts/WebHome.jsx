import React from "react";
import "./css/reset.css";
import "./css/main.css";
import "./css/font.css";
import Header from "./Header";
import MainVisual from "./MainVisual";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import News from "./News";
import Product from "./Product";
import Footer from "./Footer";
import Side from "./Side";



function WebHome() {
    return(
        <>
            <Side/>
            <Header/>
            <MainVisual/>
            <About/>
            <Project/>
            <Contact/>
            <News/>
            <Footer/>
        </>
    );
}

export default WebHome;