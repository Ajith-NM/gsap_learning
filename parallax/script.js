
var cloud_l = document.getElementById("cloud_left");
var cloud_r = document.getElementById("cloud_right");
var sun = document.getElementById("sun");
var tree_l = document.getElementById("tree_left");
var tree_r = document.getElementById("tree_right");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  tree_l.style.left = value * -1.5 + "px";
  tree_r.style.left = value * 1.5 + "px";
  cloud_l.style.left = value * -1.5 + "px";
  cloud_r.style.left = value * 1.5 + "px";
  sun.style.top = value * -0.5 + "px";
});
