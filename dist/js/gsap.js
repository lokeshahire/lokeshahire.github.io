// basic gsap

// **** GSAP to and from ****

// gsap.to("#box1", {
//   x: 900,
//   delay: 1,
//   duration: 3,
//   rotate: 360,
//   backgroundColor: "blue",
//   scale: 0.5,
//   borderRadius: "50%",
//   y: 20,
//   repeat: -1, // -1 for Infinity
//   yoyo: true,
//   opacity: 0.2,
// });

// gsap.from("#box2", {
//   x: 900,
//   delay: 1,
//   duration: 3,
//   repeat: -1,
// });

// stagger : one by one h1 tag
// ex: stagger: 1

// svg string animation

const svg = document.getElementById("stringsvg");
const path = document.querySelector("#stringsvg path");

// Adjust the path to fit the screen width dynamically
function updatePathDimensions() {
  const svgWidth = svg.getBoundingClientRect().width;
  path.setAttribute("d", `M 0 100 Q ${svgWidth / 2} 100 ${svgWidth} 100`);
}

// Initialize the path to match the screen width
updatePathDimensions();
window.addEventListener("resize", updatePathDimensions);

let initialPath = path.getAttribute("d");
const finalPath = path.getAttribute("d");

document
  .querySelector("#string")
  .addEventListener("mousemove", function (event) {
    const svgWidth = svg.getBoundingClientRect().width;
    initialPath = `M 0 100 Q ${event.clientX} ${
      event.clientY - 400
    } ${svgWidth} 100`;
    gsap.to(path, {
      attr: { d: initialPath },
      duration: 0.2,
      ease: "power3.out",
    });
  });

document.querySelector("#string").addEventListener("mouseleave", function () {
  gsap.to(path, {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1, 0.2)",
  });
});

// -----------------

var bulb = document.querySelector("#bulbsvg");
bulb.addEventListener("mouseenter", function () {
  gsap.to("#bulbsvg #bulbpath", {
    attr: { fill: "blue" },
  });
});
var bulb = document.querySelector("#bulbsvg");
bulb.addEventListener("mouseleave", function () {
  gsap.to("#bulbsvg #bulbpath", {
    attr: { fill: "red" },
  });
});

// **** GSAP TimeLine ****

gsap.to("#page3 h1", {
  transform: "translateX(-1000%)",
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    scrub: 3,
    // markers: true,
    start: "top 0%",
    end: "top -100%",
    pin: true,
  },
});

// var tl = gsap.timeline();

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top 20%",
    end: "bottom 50%",
    scrub: 3,
    pin: true,
  },
});

tl.to("#box1", {
  x: 520,
  rotate: 360,
  delay: 1,
  duratin: 2,
  opacity: 1,
});

tl.to("#box2", {
  x: 520,
  rotate: 360,
  duration: 2,
  borderRadius: "50%",
  scale: "1.5",
  y: -100,
  opacity: 1,
});

tl.to("#box3", {
  x: 450,
  rotate: 360,
  duration: 2,
  borderRadius: "50%",
  scale: "0.3",
  y: -340,
  opacity: 1,
});

tl.to("#box4", {
  x: 460,
  rotate: 360,
  duration: 2,
  borderRadius: "50%",
  scale: "1.2",
  y: -263,
  backgroundColor: "rgb(3, 74, 99)",
  opacity: 1,
});

tl.to("#box5", {
  x: 355,
  rotate: 360,
  duration: 2,
  y: -245,
  backgroundColor: "rgb(3, 74, 99)",
  opacity: 1,
});

tl.to("#box6", {
  x: 290,
  rotate: 360,
  duration: 2,
  y: -120,
  backgroundColor: "rgb(3, 74, 99)",
  scale: 0.8,
  opacity: 1,
});

// *** Scroll Trigger ***

const svgTeam = document.querySelector(".svgTeam");

const svgPath = document.querySelector("#svg-team");

gsap
  .timeline({
    scrollTrigger: {
      trigger: svgTeam,
      scrub: 1,
      start: "top center",
      end: "bottom 80%",
    },
  })
  .fromTo(svgPath, { drawSVG: 0 }, { drawSVG: "100%" });
