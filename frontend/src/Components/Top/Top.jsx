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
            {/* <h1 className="title">
                Cal Auto Tech
            </h1> */}
            <img className="top-logo title" src={require("../../Assets/Images/Cal_Logo.png")} alt="Cal Auto Tech" />
            <span className="intro-statement">
                <span className="top-state">
                    Specializing in
                </span><br/>
                <span className="bottom-state">
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
        {/* <!-- will replace these before and after pics when correct video is available. -->
        <!-- <iframe width="100%" height="315" src="UNCLE T VID" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> --> */}
    </div>
)}
export default Top;