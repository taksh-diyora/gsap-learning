var path = `M 20 160 Q 500 160 980 160`

var finalPath = `M 20 160 Q 500 160 980 160`

var string = document.querySelector("#string")

string.addEventListener("mousemove", function(dets){
    // console.log(dets.x)
    path = `M 20 160 Q ${dets.x} ${dets.y} 980 160`
    gsap.to("svg path",{
        attr:{d:path},
        duration:0.3,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave", function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:0.7,
        ease:"elastic.out(2,0.2)"
    })
})