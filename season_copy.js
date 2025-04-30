document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to the Seasons in Japan page!");
  
    // Optional: Smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  });
  