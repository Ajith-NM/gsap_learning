var initial_path = `M 0 150 Q 400 150 800 150`;
var current_path = `M 0 150 Q 400 150 800 150`;

const string = document.getElementById("string");
console.log(string.offsetTop,string.offsetLeft);

string.addEventListener("mousemove", function (pin) {
  current_path = `M 0 150 Q ${pin.x - string.offsetLeft} ${
    pin.y- string.offsetTop
  } 800 150`;
    // console.log(pin);
  gsap.to("svg path", {
    attr: {
      d: current_path,
    },
    duration: 0.2,
    ease: "power3.out",
  });
});
string.addEventListener("mouseleave", function (pin) {
  gsap.to("svg path", {
    attr: {
      d: initial_path,
    },
      ease: "elastic.out(1,0.2)",
    duration:2
  });
});
