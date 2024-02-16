import './NavBar.css'

const NavBar = () => {
    function scrollTo(element, duration) {
        const targetPosition = element.offsetTop;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const startTime = performance.now();
    
        function scrollAnimation(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const ease = easeOut(progress);
            window.scrollTo(0, startPosition + distance * ease);

            if (elapsedTime < duration) {
                requestAnimationFrame(scrollAnimation);
            }
        }
        requestAnimationFrame(scrollAnimation);
    }
    function easeOut(t) {
        return 1 - (--t) * t * t * t;
    }
    // Risin' to the top!
    function keniBurke() {    
        const body = document.body;
        const duration = 5000; 
        scrollTo(body, duration);
    }
    function scrollToReviews() {
        var reviewsSection = document.getElementById('reviews-section');
        scrollTo(reviewsSection, 3000); 
    }
    function scrollToServices() {
        var servicesSection = document.getElementById('services-section');
        scrollTo(servicesSection, 3000); 
    }
    function scrollToAbout() {
        var aboutSection = document.getElementById('about-section');
        scrollTo(aboutSection, 3000); 
    }
    function scrollToContact() {
        var contactSection = document.getElementById('contact-section');
        scrollTo(contactSection, 3000); 
    }
    return (
        <div id="stickyHeader" className="header-links-wrapper">
            <div>
                <img 
                    onClick={keniBurke} 
                    className="nav-logo" 
                    src={require("../../Assets/Images/Cal_Logo.png")} 
                    alt="Cal Auto Tech"/>
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