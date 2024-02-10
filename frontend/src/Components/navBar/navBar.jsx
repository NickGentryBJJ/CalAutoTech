import { keniBurk, scrollToAbout, scrollToContact, scrollToReviews, scrollToServices } from "../../Assets/Funcs/functions";
import './navBar.css'


const NavBar = () => {
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
