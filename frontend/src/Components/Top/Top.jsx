import React, { useEffect } from 'react';
import './Top.css';

const Top = () => {
    useEffect(() => {
        const mainPicPair = document.getElementById('main-pic-pair');
        const mainPicLeft = mainPicPair.querySelector('.main-pic-left');
        const mainPicRight = mainPicPair.querySelector('.main-pic-right');

        setTimeout(() => {
            mainPicLeft.classList.add('slide-in');
            mainPicRight.classList.add('slide-in');
        }, 800);
    }, []);

return (
    <div className="body" >
        <div className="top-left">
            <img className="top-logo title" src={require("../../Assets/Images/Cal_Logo.png")} alt="Cal Auto Tech" />
            <span className="intro-statement">
                <span className="top-state">
                    Specializing in
                </span><br/>
                <span id="mobile-wheel-repair" className="bottom-state">
                    Mobile Wheel Repair
                </span>
            </span>
        </div>
        <div className="main-picture-pair" id="main-pic-pair">
            <img 
                className="main-pic-left" 
                data-aos="slide-in" 
                src={require("../../Assets/Images/Rims/top.JPEG")} 
                alt="Before"/>
            <img 
                className="main-pic-right" 
                data-aos="slide-in" 
                src={require("../../Assets/Images/Rims/top2.JPEG")} 
                alt="After"/>
        </div>
        <a className="top-phone-link" href="tel:+16502223931">
            <div className="top-mobile-phone">
                <h1 className="call-now-top">
                    Call Now!
                </h1>
                    650-222-3931
            </div>
        </a>
    </div>
)}
export default Top;