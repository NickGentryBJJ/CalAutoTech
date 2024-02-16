import { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            setIsMobile(width < 768); 
        };
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);
    const handleMouseEnter = () => {
        setIsHovering(true);
    };
    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    return (
    <footer>
        {/* <!-- CONTACT SECTION --> */}
        <div id="contact-section" className="footer-container">
            <div className="footer-wrapper">
                <div className="foot-left">
                    <h1 className="foot-title">
                        Cal Auto Tech
                    </h1>
                    <span className="exit-statement">
                        Experience the difference with Cal Auto Tech – your mobile rim repair experts since 1989. 
                        <br/>
                        <span className="last-words-footer">
                            Thank you for visiting!
                        </span>
                    </span>
                        {/* BOTTOM FOOTER TRADEMARKS MOBILE */}
                    <div className="bottom-footer-wrapper-mobile" >
                        <div className="year-container">
                            <span className="cal-year">
                                Cal Auto Tech © 2023
                            </span>
                        </div>
                        <div className="bottom-footer-container">
                            <div className="my-row">
                                <span className="host">
                                    Web-Developer
                                </span>
                                <span className="host">
                                    Nick Gentry
                                </span>
                            </div>
                            <div className="my-row">
                                <span className="host">
                                    Javascript
                                </span>
                                <span className="host">
                                    React
                                </span>
                                <span className="host">
                                    CSS
                                </span>
                            </div>
                            <div className="my-row">
                                <span className="host">
                                    Hosted on Github
                                </span>
                            </div>
                            <div className="connect-with-me-wrapper">
                                <h1 className='c-w-m-header'>
                                    Connect With Me!
                                </h1>
                                <div className="git-linked-cont">
                                    <a 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className='git-link' 
                                        href="https://github.com/NickGentryBJJ">
                                            <img 
                                                className="git" 
                                                src={require("../../Assets/Images/icons/github_2111425.png")} 
                                                alt="Github"/>
                                    </a>
                                    <a 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className='linked-in-link' 
                                        href="https://www.linkedin.com/in/nicholas-gentry-2721451b2/">
                                            <img 
                                                className="linked-in" 
                                                src={require("../../Assets/Images/icons/linkedin_1384088.png")} 
                                                alt="LinkedIn"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>        
                </div>
                {/* CONTACT BUTTONS */}
                <div className="contact-foot">
                    <div className="email-foot">
                        <h1 className="want-email">
                            Email Now!
                        </h1>
                        <a target="_blank" rel="noopener noreferrer" href="mailto:calautotech.com">
                            <button className="email-button">
                                <img 
                                    className="kokachin" 
                                    src={require("../../Assets/Images/icons/Email.png")} 
                                    alt="Email"/>
                            </button>
                        </a>
                    </div>
                    <div className="phone-foot">
                        <h1 className="want-phone">
                            Call Now!
                        </h1>
                        <a 
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave} 
                            href="tel:+16502223931">
                            <button className="phone-button">
                                <img 
                                    className="kokachin" 
                                    src={require("../../Assets/Images/icons/telephone_126523.png")} 
                                    alt="Call"/>
                            </button>
                        </a>
                        {!isMobile && isHovering && (
                            <div 
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave} 
                                className="phone-number">
                                <span className="nums">
                                    650-222-3931
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="phone-foot mobile-phone">
                        <h1 className="want-message">
                            Message Now!
                        </h1>
                        <a href="sms:+16502223931">
                            <button className="phone-button">
                                <img 
                                    className="kokachin" 
                                    src={require("../../Assets/Images/icons/message.png")} 
                                    alt="Message"/>
                            </button>
                        </a>
                    </div>
                </div> 
            </div>
            {/* <!-- BOTTOM FOOTER TRADEMARKS (DESKTOP)--> */}
            <div className="bottom-footer-wrapper">
                <div className="year-container">
                    <span className="cal-year">
                        Cal Auto Tech © 2023
                    </span>
                </div>
                <div className="bottom-footer-container">
                    <div className="my-row meh">
                        <span className="host">
                            Web-Designer
                        </span>
                        <span className="host">
                            Nick Gentry
                        </span>
                    </div>
                    <div className="my-row languages">
                        <span className="host jvscrpt">
                            Javascript
                        </span>
                        <span className="host htmltaa">
                            React
                        </span>
                        <span className="host">
                            CSS
                        </span>
                    </div>
                    <div className="my-row">
                        <span className="host">
                            Hosted on Github
                        </span>
                    </div>
                    <div className="connect-with-me-wrapper">
                        <h1 className='c-w-m-header'>
                            Connect With Me!
                        </h1>
                        <div className="git-linked-cont">
                            <a 
                                rel="noreferrer" 
                                target="_blank" 
                                className='git-link' 
                                href="https://github.com/NickGentryBJJ">
                                    <img 
                                        className="git" 
                                        src={require("../../Assets/Images/icons/github_2111425.png")} 
                                        alt="Github"/>
                            </a>
                            <a 
                                rel="noreferrer" 
                                target="_blank" 
                                className='linked-in-link' 
                                href="https://www.linkedin.com/in/nicholas-gentry-2721451b2/">
                                    <img 
                                        className="linked-in" 
                                        src={require("../../Assets/Images/icons/linkedin_1384088.png")} 
                                        alt="LinkedIn"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>     
)};
export default Footer;