gsap.to(".bg_img", {
  scrollTrigger: {
    trigger: ".bg_img .img",
    scroller: "body",
    markers: true,
    start: "top -0%",
    scrub: 2,
    pin: true,
  },
  backgroundImage: "linear-gradient( white , #86cde3)",
//   scale: 1.2,
});
