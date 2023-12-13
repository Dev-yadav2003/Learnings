gsap.from("#page1 #box",{
    scale:2,
    opacity:0,
    duration:1,
    delay:1,
    scrollTrigger: {
        trigger: "#page1 #box",
        scroller: "body",
        markers: true,
        scrub:3,
    }
})
gsap.from("#page2 #box", {
    scale: 2,
    opacity: 0,
    rotate: 360,
    duration: .5,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        scrub:3,
        start:"top 60%"
    }
});
