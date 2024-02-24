import { useEffect } from 'react';
import './PhoneAnimation.css'
const PhoneAnimation = () => {
    useEffect(() => {
        const spans = document.querySelectorAll('.phone-number .nums');
        spans.forEach((span, index) => {
            const delay = index * 200;
            span.style.animation = `slideInFromRight 1s ease forwards ${delay}ms`;
            span.addEventListener('animationend', () => {
                span.style.opacity = '1';
            });
        });
    }, []);
    return (
        <div className="phone-number">
            <span className="nums">Call Now!</span>
            <span className="nums">650-222-3931</span>
        </div>
    );
};
export default PhoneAnimation;