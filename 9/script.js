function breakText(){
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent
    var h1Splitted = h1Text.split('')

    var clutter = ""
    var half = Math.floor(h1Splitted.length/2)
    h1Splitted.forEach(function(elem, idx){
        if(idx < half)
            clutter += `<span class="a">${elem}</span>`
        else
            clutter += `<span class="b">${elem}</span>`
    })

    h1.innerHTML = clutter
}
breakText()

gsap.from(".a", {
    y:70,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:0.1
})
gsap.from(".b", {
    y:70,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:-0.1
})