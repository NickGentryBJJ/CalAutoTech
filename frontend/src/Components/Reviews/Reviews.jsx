import React, { useEffect } from 'react';
import './Reviews.css';

const Reviews = () => {
    // useEffect(() => {
    //     // Load Yelp review widgets dynamically
    //     const script = document.createElement('script');
    //     script.src = 'https://www.yelp.com/embed/widgets.js';
    //     script.async = true;
    //     document.body.appendChild(script);

    //     return () => {
    //         // Clean up after component unmounts
    //         document.body.removeChild(script);
    //     };
    // }, []);
    useEffect(() => {
        // Load Yelp review widgets dynamically
        const script = document.createElement('script');
        script.src = 'https://www.yelp.com/embed/widgets.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up after component unmounts
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="reviews-section" className="reviews-section">
            <h1 className="reviews-title">Cal Auto Tech's Satisfied Customers!</h1>
            <div className="reviews">
                <span className="yelp-review" data-review-id="Buolo5ZcTflKBIvTYwBekw" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=CL_NbeRjn8tj1rTmclw64g" rel="nofollow noopener">Jonathan C.</a>'s <a href="https://www.yelp.com/biz/cal-auto-tech-livermore?hrid=Buolo5ZcTflKBIvTYwBekw" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/7i91uDpsVJ8E-Qt4xia2Qw" rel="nofollow noopener">Cal Auto Tech</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>
                <span className="yelp-review" data-review-id="XOTSva0CkJefRm9DEXfzDQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=ONZNUYsjUeXAhtPgVleyvQ" rel="nofollow noopener">Monica F.</a>'s <a href="https://www.yelp.com/biz/cal-auto-tech-livermore?hrid=XOTSva0CkJefRm9DEXfzDQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/7i91uDpsVJ8E-Qt4xia2Qw" rel="nofollow noopener">Cal Auto Tech</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>
                <span className="yelp-review" data-review-id="cxfAQ38jn8hBNin352e9IQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=oMF0AlAbTC6pu3wPajYgxw" rel="nofollow noopener">Leonora S.</a>'s <a href="https://www.yelp.com/biz/cal-auto-tech-livermore?hrid=cxfAQ38jn8hBNin352e9IQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/7i91uDpsVJ8E-Qt4xia2Qw" rel="nofollow noopener">Cal Auto Tech</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>
                <span className="yelp-review" data-review-id="1xk4lDmwcM8MUMVMUIZhhA" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=JJ4HDvD3pgZjlxDEMLLziA" rel="nofollow noopener">Kim D.</a>'s <a href="https://www.yelp.com/biz/cal-auto-tech-livermore?hrid=1xk4lDmwcM8MUMVMUIZhhA" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/7i91uDpsVJ8E-Qt4xia2Qw" rel="nofollow noopener">Cal Auto Tech</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>
                <span className="yelp-review" data-review-id="eBa6kjnzvAEseFNkJcNWvg" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=IO8XyycKXEoFmblbQ5z-Lg" rel="nofollow noopener">Michael S.</a>'s <a href="https://www.yelp.com/biz/cal-auto-tech-livermore?hrid=eBa6kjnzvAEseFNkJcNWvg" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/7i91uDpsVJ8E-Qt4xia2Qw" rel="nofollow noopener">Cal Auto Tech</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>
            </div>
        </div>
    );
}

export default Reviews;
