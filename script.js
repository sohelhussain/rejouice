const locoScroll = () => {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

};
locoScroll();
const loaderEffect = () => {
  let tl = gsap.timeline();
tl.from("#loader h3",{
  x: 100,
  opacity: 0,
  duration:1,
  stagger:.1
})
tl.to("#loader h3",{
  x: -100,
  opacity:0,
  duration:1,
  stagger:.1
});
// tl.to("#loader",{
//   opacity:0
// })
tl.to("#loader",{
  display: "none"
})
tl.from("#upper-container-first h1 span",{
  y:500,
  duration:.5,
  stagger:.1,
})
}
loaderEffect();
const cursorEffect = () => {
let innerPageone = document.querySelector("#upper-container-first");
let cursor = document.querySelector("#cursor");
innerPageone.addEventListener("mousemove",(val) => {
    //we are writing the cursor animation with the pure javaScript but we use in the gsap. then we are commited on this code
    // cursor.style.left = val.x + "px";   
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
const textEffect = () =>{
  let tl2 = gsap.timeline();
  tl2.from(".text_elem h1",{
    y:120,
    stagger:.1,
    duration:1,
    opacity: 0,
    scrollTrigger:({
      trigger:"#container-second",
      scroller:"#main",
      start:"top 50%",
      end:"top 50%",
      markers: true,
      scrub:2
    })
  });

  // this prat are not working properly...

  // tl2.from(".text_elem h1",{
  //   y:120,
  //   stagger:.1,
  //   duration:1,
  //   opacity: 0,
  //   scrollTrigger:({
  //     trigger:"#container-four",
  //     scroller:"#main",
  //     start:"top 50%",
  //     end:"top 50%",
  //     markers: true,
  //     scrub:2
  //   })
  // });
  // tl2.from("#container-five>.text_elem h1",{
  //   y:120,
  //   duration:1,
  //   stagger:.1,
  //   opacity: 0,
  //   scrollTrigger:({
  //     trigger:"#container-five",
  //     scroller:"#main",
  //     scrub:2,
  //     start:"top 50%",
  //     end:"top 50%",
  //     markers: true,
  //   })
  // });
}
textEffect();
const graphicCursorEffect = () =>{
  let videoCursor = document.querySelector("#container-four");
  let blackCursor = document.querySelector("#black-cursor");
  videoCursor.addEventListener("mousemove",(dets) => {
    gsap.to(blackCursor,{
      x: dets.x,
      y: dets.y
  })
  });
  videoCursor.addEventListener("mouseenter",(detes)=>{
    gsap.to(blackCursor,{
      scale:1,
      opacity:1
    })
  });
  videoCursor.addEventListener("mouseleave",(detes)=>{
    gsap.to(blackCursor,{
      opacity:0,
      scale:0
    })
  })
};
graphicCursorEffect();  // this part ar also note woring

const sliderAnimationEffect = () =>{
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    }
  });
};
sliderAnimationEffect();