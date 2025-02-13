var bg1 = document.getElementById("bg1");
var bg2 = document.getElementById("bg2");
var cloud_l = document.getElementById("cloud_left");
var cloud_r = document.getElementById("cloud_right");
var mountain = document.getElementById("mountain");
var sun = document.getElementById("sun");
var tree_l = document.getElementById("tree_left");
var tree_r = document.getElementById("tree_right");

gsap.from("#tree_left", {
  transform: "translateX(-100%)",
  duration: 1.2,
});
gsap.from("#tree_right", {
  transform: "translateX(100%)",
  duration: 1.2,
});

gsap.from("#cloud_left", {
  transform: "translateX(-100%)",
  duration: 1.2,
});
gsap.from("#cloud_right", {
  transform: "translateX(100%)",
  duration: 1.2,
});
gsap.from("#bg2", {
  opacity:0,
  duration: 3.4,
});
gsap.from("#sun", {
  transform: "translateY(100%)",
  duration: 2.4,
});
