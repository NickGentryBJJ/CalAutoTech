import { keniBurk, scrollToAbout, scrollToContact, scrollToReviews, scrollToServices } from "../../Assets/Funcs/functions";
import './NavBar.css'


const NavBar = () => {
    function keniBurk() {
        var body = document.body;
        var html = document.documentElement;
        
        var topOffset = Math.max(body.scrollTop, html.scrollTop);
    
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
                <a onClick={scrollToServices} className="header-links">SERVICES</a>
                <a onClick={scrollToReviews} className="header-links" id="reviewsss">REVIEWS</a>
                <a onClick={scrollToAbout} className="header-links">ABOUT</a>
                <a onClick={scrollToContact} className="header-links">CONTACT</a>
            </div>
        </div>
    );
}

export default NavBar;
