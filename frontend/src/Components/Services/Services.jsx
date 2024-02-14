import './Services.css';

const Services = () => {
    
    
        document.addEventListener('DOMContentLoaded', function () {
                const leftImages = document.querySelectorAll('.b-a-pic-left');
                const rightImages = document.querySelectorAll('.b-a-pic-right');
                const servicesText = document.querySelectorAll('.services-text');
                
                const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('slide-in');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.2 }); // Adjust the threshold as needed
                const observert = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('slide-inn');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.002 }); // Adjust the threshold as needed
            
                leftImages.forEach(image => {
                    observer.observe(image);
                });
                rightImages.forEach(image => {
                    observer.observe(image);
                });
                servicesText.forEach(image => {
                    observert.observe(image);
                });
            });

    return (
        // <!-- SERVICES SECTION -->
        <div id="services-section" className="services-sec">
            <h1 className="services-title">Cal Auto Tech's Services</h1>
            <div className="services">
                <p className="services-text">
                    Open 7 days a week
                </p>
                <p className="services-text">
                    Free quotes within minutes 
                </p>
                <p className="services-text">
                    Competitive pricing & prompt service.
                </p>
                <p className="services-text">
                    We serve fleet accounts, private owners, and lease returns.
                </p>
                <p className="services-text">
                    Discounts for multiple wheels, as well as special rates for military and seniors.
                </p>
            </div>

            <div className="before-after-pics">
                <div className="left-b-a">
                    <div className="picture-pair">
                        <img className="b-a-pic-left" data-aos="slide-in" src={require("../../Assets/Images/Rims/2ndtop.JPEG")} alt=""/>
                        <img className="b-a-pic-right" data-aos="slide-in" src={require("../../Assets/Images/Rims/2ndbottom.JPEG")} alt=""/>
                    </div>
                    <div className="picture-pair">
                        <img className="b-a-pic-left" data-aos="slide-in" src={require("../../Assets/Images/Rims/3rdtop.JPEG")} alt="" />
                        <img className="b-a-pic-right" data-aos="slide-in" src={require("../../Assets/Images/Rims/3rdbottom.JPEG")} alt="" />
                    </div>
                    <div className="picture-pair">
                        <img className="b-a-pic-left" data-aos="slide-in" src={require("../../Assets/Images/Rims/4thtop.JPEG")} alt="" />
                        <img className="b-a-pic-right" data-aos="slide-in" src={require("../../Assets/Images/Rims/4thbottom.JPEG")} alt="" />
                    </div>
                    <div className="picture-pair">
                        <img className="b-a-pic-left" data-aos="slide-in" src={require("../../Assets/Images/Rims/5thtop.JPEG")} alt="" />
                        <img className="b-a-pic-right" data-aos="slide-in" src={require("../../Assets/Images/Rims/5thbottom.PNG")} alt="" />
                    </div>
                    <div className="picture-pair">
                        <img className="b-a-pic-left" data-aos="slide-in" src={require("../../Assets/Images/Rims/lasttop.JPEG")} alt="" />
                        <img className="b-a-pic-right" data-aos="slide-in" src={require("../../Assets/Images/Rims/lastbottom.JPEG")} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Services;