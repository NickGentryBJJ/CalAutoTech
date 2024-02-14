import './NavBar.css'


const NavBar = () => {
    function keniBurk() {    
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    function scrollToReviews() {
        var reviewsSection = document.getElementById('reviews-section');
        reviewsSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    function scrollToServices() {
        var reviewsSection = document.getElementById('services-section');
        reviewsSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    function scrollToAbout() {
        var reviewsSection = document.getElementById('about-section');
        reviewsSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    function scrollToContact() {
        var reviewsSection = document.getElementById('contact-section');
        reviewsSection.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div id="stickyHeader" className="header-links-wrapper">
            <div>
                <img onClick={keniBurk} className="nav-logo" src={require("../../Assets/Images/Cal_Logo.png")} alt=""/>
            </div>
            <div className="links">
                <p onClick={scrollToServices} className="header-links">SERVICES</p>
                <p onClick={scrollToReviews} className="header-links" id="reviewsss">REVIEWS</p>
                <p onClick={scrollToAbout} className="header-links">ABOUT</p>
                <p onClick={scrollToContact} className="header-links">CONTACT</p>
            </div>
        </div>
    );
}

export default NavBar;
