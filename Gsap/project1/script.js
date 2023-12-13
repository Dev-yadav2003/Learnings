var tl = gsap.timeline();
gsap.set(".a",{opacity:0,y:10})
gsap.set("#right img",{opacity:0,y:10,scale:1.2})

tl.from("#left",{
    width :0,
    ease:Expo.easeInOut ,
    duration:1.3
})
tl.from("#right",{
    width :0,
    ease:Expo.easeInOut ,
    duration:1.5,
})
tl.to(".a",{
    y:0,
    opacity:1,
    ease:Expo.easeInOut ,
    duration:1.7,
    stagger:.15,
    delay:-2
})
tl.to("#right img",{
    y:0,
    opacity:1,
    stagger:.1,
    ease:Expo.easeInOut ,
    duration:1.5,
    delay:-1.5,
    scale:0.9
})