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
}, 1000); // Initial delay before loading starts
