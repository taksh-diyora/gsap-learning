gsap.from("#page1 #box",{
    scale:0,
    duration:2,
    delay:1,
    rotate:360
})

gsap.from("#page2 #box",{
    scale:0,
    duration:2,
    opacity:0,
    rotate:720,
    scrollTrigger:{
        trigger : "#page2 #box",
        scroller: "body",
        markers: true,
        start:"top 60%",
        end:"top 30%",
        scrub:2,
    }
})

gsap.from("#page3 #box",{
    scale:0,
    duration:2,
    delay:1,
    rotate:360
})