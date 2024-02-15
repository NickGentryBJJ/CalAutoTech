import './Services.css';

const Services = () => {
    document.addEventListener('DOMContentLoaded', function () {
        const leftImages = document.querySelectorAll('.b-a-pic-left');
        const rightImages = document.querySelectorAll('.b-a-pic-right');
        const servicesText = document.querySelectorAll('.services-text-section');
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 }); 
        const observerText = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-inn');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.02 }); 
        
        leftImages.forEach(image => {
            observer.observe(image);
        });
        rightImages.forEach(image => {
            observer.observe(image);
        });
        servicesText.forEach(image => {
            observerText.observe(image);
        });
    });
    return (
        // <!-- SERVICES SECTION -->
        <div id="services-section" className="services-sec">
            <h1 className="services-title">Cal Auto Tech's Services</h1>
            <div className="services">
                <div className="services-text-section">
                    <img 
                        className="lil-rim" 
                        src={require("../../Assets/Images/icons/android-chrome-512x512.png")}  
                        alt="Lil Rim"/> 
                    <p className="services-text">Open 7 days a week</p>
                </div>
                <div className="services-text-section">
                    <img 
                        className="lil-rim" 
                        src={require("../../Assets/Images/icons/android-chrome-512x512.png")} 
                        alt="Lil Rim"/> 
                    <p className="services-text">Free quotes within minutes</p> 
                </div>
                <div className="services-text-section">
                    <img 
                        className="lil-rim" 
                        src={require("../../Assets/Images/icons/android-chrome-512x512.png")} 
                        alt="Lil Rim"/> 
                    <p className="services-text">Competitive pricing & prompt service.</p>
                </div>
                <div className="services-text-section">
                    <img 
                        className="lil-rim" 
                        src={require("../../Assets/Images/icons/android-chrome-512x512.png")} 
                        alt="Lil Rim"/> 
                    <p className="services-text">We serve fleet accounts, private owners, and lease returns.</p>
                </div>
                <div className="services-text-section">
                    <img 
                        className="lil-rim" 
                        src={require("../../Assets/Images/icons/android-chrome-512x512.png")} 
                        alt="Lil Rim"/> 
                    <p className="services-text">Discounts for multiple wheels, as well as special rates for military and seniors.</p>
                </div>
            </div>
            {/* GALLERY SECTION */}
            <div className="before-after-pics">
                <div className="left-b-a">
                    <div className="picture-pair">
                        <img 
                            className="b-a-pic-left" 
                            data-aos="slide-in" 
                            src={require("../../Assets/Images/Rims/2ndtop.JPEG")} 
                            alt="Before" />
                        <img 
                            className="b-a-pic-right"
                            data-aos="slide-in" 
                            src={require("../../Assets/Images/Rims/2ndbottom.JPEG")} 
                            alt="After" />
                    </div>
                    <div className="picture-pair">
                        <img 
                            className="b-a-pic-left" 
                            data-aos="slide-in" 
                            src={require("../../Assets/Images/Rims/3rdtop.JPEG")} 
                            alt="Before" />
                        <img 
                            className="b-a-pic-right" 
                            data-aos="slide-in" 
                            src={require("../../Assets/Images/Rims/3rdbottom.JPEG")} 
                            alt="After" />
                    </div>
                    <div className="picture-pair">
                        <img 
                            className="b-a-pic-left" 
                            data-aos="slide-in" 
                            src={require("../../Assets/Images/Rims/4thtop.JPEG")} 
                            alt="Before" />
                        <img 
                            className="b-a-pic-right" 
                            data-aos="slide-in" 
                            src={require("../../Assets/Images/Rims/4thbottom.JPEG")} 
                            alt="After" />
                    </div>
                    <div className="picture-pair">
                        <img 
                            className="b-a-pic-left" 
                            data-aos="slide-in" 
                            src={require("../../Assets/Images/Rims/5thtop.JPEG")} 
                            alt="Before" />
                        <img 
                            className="b-a-pic-right" 
                            data-aos="slide-in" 
                            src={require("../../Assets/Images/Rims/5thbottom.PNG")} 
                            alt="After" />
                    </div>
                    <div className="picture-pair">
                        <img 
                            className="b-a-pic-left"   
                            data-aos="slide-in" 
                            src={require("../../Assets/Images/Rims/lasttop.JPEG")} 
                            alt="Before" />
                        <img 
                            className="b-a-pic-right" 
                            data-aos="slide-in" 
                            src={require("../../Assets/Images/Rims/lastbottom.JPEG")} 
                            alt="After" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Services;