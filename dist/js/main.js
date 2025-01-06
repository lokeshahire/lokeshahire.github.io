const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// script.js

AOS.init({
  duration: 1200, // Animation duration in ms
  once: false, // Animation only happens once
});

$(
  ".netmed-background, .clock-background, .jcrew-background, .apna-background"
).ripples({
  resolution: 256,
  perturbance: 0.01,
});

// script.js

const nameElement = document.getElementById("desi");
const nameText = "Full Stack Web Developer";
let index = 0;
let isErasing = false;

function typeEffect() {
  if (!isErasing) {
    if (index < nameText.length) {
      nameElement.textContent += nameText.charAt(index);
      index++;
      setTimeout(typeEffect, 150);
    } else {
      isErasing = true;
      setTimeout(typeEffect, 1000);
    }
  } else {
    if (index > 0) {
      nameElement.textContent = nameText.substring(0, index - 1);
      index--;
      setTimeout(typeEffect, 100);
    } else {
      isErasing = false;
      setTimeout(typeEffect, 500);
    }
  }
}

typeEffect();

document.addEventListener("DOMContentLoaded", function () {
  const timelineWrapper = document.querySelector(".timelinewrapper");
  if (!timelineWrapper) return;

  const timeline = document.querySelector(".timeline");
  const targetItem = document.querySelector("#lastchild");
  const flags = document.querySelectorAll(".flag");

  function updateTimelineHeight() {
    const scrollPosition = window.scrollY + window.innerHeight / 6;
    const targetPosition =
      targetItem.getBoundingClientRect().top + window.scrollY + 400;
    const newHeight = Math.min(scrollPosition, targetPosition);
    if (window.innerWidth >= 2560) {
      timeline.style.setProperty("--timeline-height", `${newHeight - 3530}px`);
    } else if (window.innerWidth >= 1920) {
      timeline.style.setProperty("--timeline-height", `${newHeight - 2590}px`);
    } else if (window.innerWidth >= 1792) {
      timeline.style.setProperty("--timeline-height", `${newHeight - 2680}px`);
    } else if (window.innerWidth >= 1600) {
      timeline.style.setProperty("--timeline-height", `${newHeight - 2590}px`);
    } else if (window.innerWidth >= 1536) {
      timeline.style.setProperty("--timeline-height", `${newHeight - 2190}px`);
    } else if (window.innerWidth >= 1512) {
      timeline.style.setProperty("--timeline-height", `${newHeight - 2630}px`);
    } else if (window.innerWidth >= 1440) {
      timeline.style.setProperty("--timeline-height", `${newHeight - 2700}px`);
    } else if (window.innerWidth >= 1280) {
      timeline.style.setProperty("--timeline-height", `${newHeight - 2020}px`);
    } else if (window.innerWidth >= 1199) {
      timeline.style.setProperty("--timeline-height", `${newHeight - 570}px`);
    } else if (window.innerWidth >= 991) {
      timeline.style.setProperty("--timeline-height", `${newHeight - 2670}px`);
    } else if (window.innerWidth >= 820) {
      timeline.style.setProperty("--timeline-height", `${newHeight - 2920}px`);
    }
    // else if (window.innerWidth == 768) {
    //   timeline.style.setProperty("--timeline-height", `${newHeight - 380}px`);
    // }
    else if (window.innerWidth < 767) {
      timeline.style.setProperty("--timeline-height", `${newHeight - 3400}px`);
    }
    flags.forEach((flag) => {
      var newHeight1 = newHeight + 350;
      const flagPosition = flag.getBoundingClientRect().top + window.scrollY;
      if (newHeight1 >= flagPosition) {
        flag.style.setProperty(
          "--flag-background",
          "linear-gradient(90deg, #004c9b -2.36%, #80b927 104.4%)"
        );
      } else {
        flag.style.setProperty(
          "--flag-background",
          "rgb(212, 210, 210)" // Gray background
        );
      }
    });
  }

  window.addEventListener("scroll", updateTimelineHeight);
  window.addEventListener("resize", updateTimelineHeight);
  updateTimelineHeight();
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);

    // Send form data using Fetch API
    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          showMessage("Your message has been sent successfully!", "success");
          form.reset(); // Clear the form fields
        } else {
          showMessage("Oops! Something went wrong. Please try again.", "error");
        }
      })
      .catch(() => {
        showMessage(
          "An error occurred. Please check your connection and try again.",
          "error"
        );
      });
  });

// Function to display response messages
function showMessage(message, type) {
  const responseMessage = document.getElementById("responseMessage");
  responseMessage.textContent = message;
  responseMessage.className = `response-message ${type}`;
}

// Toggle mobile menu on hamburger click
document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
  this.classList.toggle("active"); // Add animation to hamburger
});

let lastScrollY = window.scrollY; // Tracks the last scroll position

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    // Scrolling down
    navbar.style.transform = "translateY(-100%)"; // Hide navbar
  } else {
    // Scrolling up
    navbar.style.transform = "translateY(0)"; // Show navbar
  }

  lastScrollY = currentScrollY; // Update last scroll position
});

// Select all background elements
const backgrounds = document.querySelectorAll(
  ".netmed-background, .clock-background, .jcrew-background, .apna-background"
);

backgrounds.forEach((image) => {
  const initialTransform = window.getComputedStyle(image).transform;

  image.addEventListener("mousemove", (event) => {
    const { top, bottom, left, right } = image.getBoundingClientRect();

    const middleX = (right - left) / 2;
    const middleY = (bottom - top) / 2;

    const clientX = event.clientX - left; // Mouse X relative to the element
    const clientY = event.clientY - top; // Mouse Y relative to the element

    const offsetX = (clientX - middleX) / middleX;
    const offsetY = (middleY - clientY) / middleY;

    image.style.transform = `perspective(1000px) rotateY(${
      offsetX * 5
    }deg) rotateX(${offsetY * 5}deg) scale3d(1, 1, 1)`;
  });

  // Reset the transform on mouse leave
  image.addEventListener("mouseleave", () => {
    image.style.transform = initialTransform || "none";
  });
});

function openAndDownload(event) {
  event.preventDefault();

  const url = "dist/documents/LokeshFinalResume.pdf";

  // Open in a new tab
  window.open(url, "_blank");

  // Trigger the download
  const link = document.createElement("a");
  link.href = url;
  link.download = "LokeshAhire.pdf";
  link.click();
}
