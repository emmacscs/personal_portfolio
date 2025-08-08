<script>
  gsap.registerPlugin(ScrollTrigger);

  // Zoom out Section 1
  gsap.to(".wrapper", {
    scale: 0.8,
    opacity: 0,
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  // Zoom in Section 2
  gsap.from(".section-2", {
    scale: 1.2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".section-2",
      start: "top bottom",
      end: "top top",
      scrub: true
    }
  });
</script>
