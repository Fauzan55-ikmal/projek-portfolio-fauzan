/* ==========================================
   PERSONAL PORTFOLIO - MAIN JAVASCRIPT
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Console Greeting untuk Recruiter / Developer yang inspect element
  console.log("%c👋 Hello, Recruiter/Developer! Welcome to Fauzan's Portfolio.", "color: #38bdf8; font-size: 14px; font-weight: bold; background: #0f172a; padding: 4px 8px; border-radius: 4px;");
  console.log("Interested in the source code? Check out the repo: https://github.com/Fauzan55-ikmal/projek-portfolio-fauzan");

  // 2. Navbar Scroll Effect (Menambahkan efek interaktif saat halaman digulir)
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navbar.style.boxShadow = "0 10px 30px -10px rgba(2, 6, 23, 0.7)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });
});
