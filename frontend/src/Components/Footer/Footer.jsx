import './footer.css';

const Footer = () => {
    return (

        // <!-- FOOTER -->
    <footer>
        
        {/* <!-- CONTACT SECTION --> */}

        <div id="contact-section" class="footer-container">
            <div class="footer-wrapper">
                <div class="foot-left">
                    <h1 class="foot-title">Cal Auto Tech</h1>
                    <span class="exit-statement">
                        Experience the difference with Cal Auto Tech – your mobile rim repair experts since 1989. <br/><span class="last-words-footer">Thank you for visiting!</span>
                    </span>
                    <span class="exit-statement-mobile">
                        Contact Us Now For A Consultation!
                    </span>
                    <div class="bottom-footer-wrapper-mobile" >
                        <div class="year-container">
                            <span class="cal-year">Cal Auto Tech © 2023</span>
                        </div>
                        <div class="bottom-footer-container">
                            <div class="my-row">
                                <span class="item">Web-Designer</span>
                                <span class="item">Nick Gentry</span>
                            </div>
                            <div class="my-row">
                                <span class="item">Javascript</span>
                                <span class="item">HTML</span>
                                <span class="item">CSS</span>
                            </div>
                            <div class="my-row">
                                <span class="host">
                                    Hosted on Github
                                </span>
                            </div>
                            <div class="connect-with-me-wrapper">
                                <h1 class='c-w-m-header'>Connect With Me!</h1>
                                <div>
                                    <a target="_blank" rel="noreferrer" class='git-link' href="https://github.com/NickGentryBJJ"><img class="git" src={require("../../Assets/Images/icons/github_2111425.png")} alt="Github"/></a>
                                    <a target="_blank" rel="noreferrer" class='linked-in-link' href="https://www.linkedin.com/in/nicholas-gentry-2721451b2/"><img class="linked-in" src={require("../../Assets/Images/icons/linkedin_1384088.png")} alt="LinkedIn"/></a>
                                </div>
                            </div>
                        </div>

                    </div>        
                </div>
                <div class="contact-foot">
                    <div class="email-foot">
                        <h1 class="want-email">
                            Want to Email Us?
                        </h1>
                        <a target="_blank" rel="noopener noreferrer" href="mailto:calautotech.com">
                            <button class="email-button">
                                <img class="kokachin" src={require("../../Assets/Images/icons/Email.png")} alt="Email"/>
                            </button>
                        </a>

                    </div>
                    <div class="phone-foot">
                        <h1 class="want-phone">
                            Want to Call Us?
                        </h1>
                        <a href="tel:+16502223931">
                            <button class="phone-button">
                                <img class="kokachin" src={require("../../Assets/Images/icons/telephone_126523.png")} alt="Call"/>
                            </button>
                        </a>
                    </div>
                </div> 
            </div>

            {/* <!-- BOTTOM FOOTER TRADEMARKS --> */}

            <div class="bottom-footer-wrapper">
                <div class="year-container">
                    <span class="cal-year">Cal Auto Tech © 2023</span>
                </div>
                <div class="bottom-footer-container">
                    <div class="my-row">
                        <span class="item">Web-Designer</span>
                        <span class="item">Nick Gentry</span>
                    </div>
                    <div class="my-row">
                        <span class="item">Javascript</span>
                        <span class="item">HTML</span>
                        <span class="item">CSS</span>
                    </div>
                    <div class="my-row">
                        <span class="host">
                            Hosted on Github
                        </span>
                    </div>
                    <div class="connect-with-me-wrapper">
                        <h1 class='c-w-m-header'>Connect With Me!</h1>
                        <div>
                            <a rel="noreferrer" target="_blank" class='git-link' href="https://github.com/NickGentryBJJ"><img class="git" src={require("../../Assets/Images/icons/github_2111425.png")} alt="Github"/></a>
                            <a rel="noreferrer" target="_blank" class='linked-in-link' href="https://www.linkedin.com/in/nicholas-gentry-2721451b2/"><img class="linked-in" src={require("../../Assets/Images/icons/linkedin_1384088.png")} alt="LinkedIn"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>     
)};
export default Footer;