import { gsap } from "gsap";
import SplitType from "split-type";

let progress = 0;
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const loader = document.getElementById("loader");
const content = document.getElementById("content");

// 1 second delay before loading starts
setTimeout(() => {
  const interval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(interval);

      // Wait 1 more second before hiding loader
      setTimeout(() => {
        loader.style.display = "none";
        content.style.display = "block";
      }, 1000);

    } else {
      progress += 1;
      progressBar.style.width = progress + "%";
      progressText.textContent = progress + "%";
    }
  }, 15); // Speed of progress
}, 1000); // Initial delay before loading starts


/*text*/



const titles = document.querySelectorAll(".text-wrapper p");
const timeline = gsap.timeline();

titles.forEach((title, index) => {
  const split = new SplitType(title, { types: "chars" });

  timeline.from(split.chars, {
    opacity: 0,
    y: 80,
    rotateX: -90,
    stagger: 0.02,
    duration: 1,
  }, index === 0 ? "<" : ">0.5");

  timeline.to(split.chars, {
    opacity: 0,
    y: -80,
    rotateX: 90,
    stagger: 0.02,
    duration: 1,
  }, ">0.5");
});
