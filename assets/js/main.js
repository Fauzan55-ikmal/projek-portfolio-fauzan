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

// about-section
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".bio-card, .education-card, .tech-stack-container, .soft-skills-card");

  // Fungsi untuk memicu/menjalankan animasi card
  const animateCards = () => {
    cards.forEach((card, index) => {
      // Reset dulu biar bisa di-replay saat nav diklik
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "all 0.5s ease-out";

      // Trigger animasi beruntun (staggered effect)
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 120);
    });
  };

  // 1. Jalankan animasi pakai Intersection Observer saat scroll biasa
  const observerOptions = { threshold: 0.1 };
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCards();
        cardObserver.disconnect(); // Matikan observer setelah sekali trigger scroll
      }
    });
  }, observerOptions);

  const aboutSection = document.querySelector("#about") || document.querySelector(".about-section");
  if (aboutSection) cardObserver.observe(aboutSection);

  // 2. TRIGGER LAGI KETIKA MENU NAVBAR "ABOUT" DIKLIK
  const aboutNavLinks = document.querySelectorAll('a[href*="#about"]');
  aboutNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Kasih delay tipis 200ms biar pas layar bergeser ke section, animasinya baru main
      setTimeout(() => {
        animateCards();
      }, 500);
    });
  });
});
