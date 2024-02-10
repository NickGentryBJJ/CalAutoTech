// nav functions

export function keniBurk() {
    var body = document.body;
    var html = document.documentElement;
    
    var topOffset = Math.max(body.scrollTop, html.scrollTop);

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

export function scrollToReviews() {
    var reviewsSection = document.getElementById('reviews-section');
    reviewsSection.scrollIntoView({ behavior: 'smooth' });
}

export function scrollToServices() {
    var reviewsSection = document.getElementById('services-section');
    reviewsSection.scrollIntoView({ behavior: 'smooth' });
}

export function scrollToAbout() {
    var reviewsSection = document.getElementById('about-section');
    reviewsSection.scrollIntoView({ behavior: 'smooth' });
}

export function scrollToContact() {
    var reviewsSection = document.getElementById('contact-section');
    reviewsSection.scrollIntoView({ behavior: 'smooth' });
}

// slide in before and after photos
// document.addEventListener('DOMContentLoaded', function () {
//     const leftImages = document.querySelectorAll('.b-a-pic-left');
//     const rightImages = document.querySelectorAll('.b-a-pic-right');
//     const mainPicPair = document.getElementById('main-pic-pair');
//     const mainPicLeft = mainPicPair.querySelector('.main-pic-left');
//     const mainPicRight = mainPicPair.querySelector('.main-pic-right');

//     setTimeout(() => {
//         mainPicLeft.classList.add('slide-in');
//         mainPicRight.classList.add('slide-in');
//     }, 800);
    
//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('slide-in');
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, { threshold: 0.2 }); // Adjust the threshold as needed

//     leftImages.forEach(image => {
//         observer.observe(image);
//     });
//     rightImages.forEach(image => {
//         observer.observe(image);
//     });
// });
