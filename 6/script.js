gsap.to("h1", {
    transform:"translateX(-50%)",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        start:"top 0%",
        end:"top -110%",
        scrub:4,
        pin:true,
        // markers:true
    }
})
gsap.to("#box", {
    transform:"translate(1100px, 530px)",
    duration:0.1,
    rotate:390,
    scrollTrigger:{
        trigger:"#box",
        scroller:"body",
        scrub:4,
        markers:true,
        start:"top 0%",
        end:"top -110%",
    }
})