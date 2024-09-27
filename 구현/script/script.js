gsap.registerPlugin(ScrollTrigger);

const animationWrap = document.querySelector('.animation-wrap');


gsap.to(animationWrap, {
    x: -((animationWrap.scrollWidth - window.innerWidth)  ), // 스크롤 시 이동할 거리
    scrollTrigger: {
        trigger: ".scroll-horizontal",
        start: "top top", // 시작 위치
        end: () => "+=" + animationWrap.scrollWidth, // 끝 위치
        pin: true, // 스크롤 시 고정
        scrub: 1 // 부드러운 스크롤
    }
});

let scroll = new ScrollGiveClass(".scroll", {
    
    baseline:'bottom',
    add:-0.2,
});
let scroll_0 = new ScrollGiveClass(".scroll_0", {
    
    baseline:'bottom',
    add:0,
});
let scroll_1 = new ScrollGiveClass(".scroll_1", {
    
    baseline:'bottom',
    add:-0.1,
});
let scroll_3 = new ScrollGiveClass(".scroll_3", {
    
    baseline:'bottom',
    add:-0.3,
});
let scroll_4 = new ScrollGiveClass(".scroll_4", {
    
    baseline:'bottom',
    add:-0.4,
});
let scroll_5 = new ScrollGiveClass(".scroll_5", {
    
    baseline:'bottom',
    add:-0.5,
});
let scroll_6 = new ScrollGiveClass(".scroll_6", {
    
    baseline:'bottom',
    add:-0.6,
});
let scroll_7 = new ScrollGiveClass(".scroll_7", {
    
    baseline:'bottom',
    add:-0.7,
});
let scroll_8 = new ScrollGiveClass(".scroll_8", {
    
    baseline:'bottom',
    add:-0.8,
});
let scroll_9 = new ScrollGiveClass(".scroll_9", {
    
    baseline:'bottom',
    add:-0.9,
});
let scroll_10 = new ScrollGiveClass(".scroll_10", {
    
    baseline:'bottom',
    add:-1,
});
let scroll_11 = new ScrollGiveClass(".scroll_11", {
    
    baseline:'bottom',
    add:-1.1,
});
let scroll_12 = new ScrollGiveClass(".scroll_12", {
    
    baseline:'bottom',
    add:-1.2,
});
let scroll_13 = new ScrollGiveClass(".scroll_13", {
    
    baseline:'bottom',
    add:-1.3,
});




inz_h3 = document.getElementsByClassName('inz_h3');
window.addEventListener('load',function(){
});