gsap.from(".page1 .box", {
  scale: 0,
  backgroundColor: "green",
  duration: 3,
  borderRadius: 0,
  scrollTrigger: ".page1 .box",
});
gsap.from(".page2 .box", {
  scale: 0,
  backgroundColor: "yellow",
  duration: 3,
  borderRadius: 0,
  scrollTrigger: {
    trigger: ".page2 .box",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 10%",
    scrub: 2,
    pin: true,
  },
  rotate: 180,
});
gsap.from(".page3 .box", {
  scale: 0,
  backgroundColor: "red",
  duration: 3,
  borderRadius: 0,
  scrollTrigger: ".page3 .box",
  filter: "blur(20px)",
});
