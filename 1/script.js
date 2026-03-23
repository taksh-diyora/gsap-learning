gsap.to("#box1",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    scale:0.5,
})
gsap.from("#box2",{
    x:1000,
    duration:2,
    delay:1,
})
gsap.from("h1",{
    opacity:0,
    duration:1,
    y:20,
    delay:1,
    stagger:0.3
})
gsap.to("#box3",{
    x:1200,
    duration:2,
    delay:1,
    rotate:360,
    repeat:2,
    yoyo:true
})
// gsap.to("#box4",{
//     x:1200,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })
// gsap.to("#box5",{
//     x:1200,
//     backgroundColor:"yellow",
//     duration:1.5,
//     delay:2.5
// })
// gsap.to("#box6",{
//     x:1200,
//     scale:0.5,
//     borderRadius:"50%",
//     duration:1.5,
//     delay:4
// })
var tl = gsap.timeline()

tl.to("#box4", {
    x:1200,
    duration:1.5,
    delay:1
})

tl.to("#box5",{
    x:1200,
    backgroundColor:"yellow",
    duration:1.5,
})

tl.to("#box6",{
    x:1200,
    scale:0.5,
    borderRadius:"50%",
    duration:1.5
})