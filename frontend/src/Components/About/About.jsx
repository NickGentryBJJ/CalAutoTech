import './About.css';

const About = () =>{
    function scrollToContact() {
        var reviewsSection = document.getElementById('contact-section');
        reviewsSection.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div id="about-section" className="about-sec">
            <h1 className="about-title">About Cal Auto Tech!</h1>
            <p className="about-blurb">
                With over 35 years of experience in the automotive industry, I am the owner of Cal Auto Tech, 
                specializing in expert rim repair services. If you have rims with curb rash, scrapes, gouges, or 
                discoloration due to age, give us a <span className="about-span-call" onClick={scrollToContact}>
                                                        call
                                                    </span> for 
                                                    a <span className="free-about">
                                                            free
                                                    </span> consultation! Our technicians are courteous, 
                professional, and reliable. By upholding precision and quality, we've cemented our reputation.<br/>
                    <span className="last-words-about">
                        Experience the difference with us – your go-to for all rim repair needs.
                    </span>
            </p>
        </div>
    );
};

export default About;