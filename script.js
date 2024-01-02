const cursorEffect = () => {
    let innerPageone = document.querySelector("#upper-container-first");
let cursor = document.querySelector("#cursor");
innerPageone.addEventListener("mousemove",(val) => {
    // cursor.style.left = val.x + "px";   we are writing the cursor animation with the pure javaScript but we use in the gsap. then we are commited on this code
    // cursor.style.top = val.y + "px";
    gsap.to(cursor,{
        x: val.x,
        y: val.y
    })
})
innerPageone.addEventListener("mouseenter",(value) => {
    gsap.to(cursor,{
        scale: 1,
        opacity: 1
    });
})
innerPageone.addEventListener("mouseleave",(value) => {
    gsap.to(cursor,{
        scale: 0,
        opacity: 0
    });
})
};
cursorEffect();