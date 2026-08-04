/* ==========================================
   PERSONAL PORTFOLIO - MAIN JAVASCRIPT
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Console Greeting untuk Recruiter / Developer
  console.log("%c👋 Hello, Recruiter/Developer! Welcome to Fauzan's Portfolio.", "color: #38bdf8; font-size: 14px; font-weight: bold; background: #0f172a; padding: 4px 8px; border-radius: 4px;");
  console.log("Interested in the source code? Check out the repo: https://github.com/Fauzan55-ikmal/projek-portfolio-fauzan");

  // 2. Navbar Scroll Effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navbar.style.boxShadow = "0 10px 30px -10px rgba(2, 6, 23, 0.7)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });

  /* ==========================================
     3. HERO SECTION ANIMATION
     ========================================== */
  // Mengambil elemen-elemen di Hero Section untuk dianimasikan
  const heroElements = document.querySelectorAll("#hero h1, #hero p, #hero .btn, #hero img, .hero-section h1, .hero-section p, .hero-section .btn, .hero-section img");

  const animateHero = () => {
    heroElements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "all 0.5s ease-out";

      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, index * 100);
    });
  };

  // Jalankan animasi Hero pertama kali saat halaman dimuat
  animateHero();

  // Trigger animasi Hero saat nama "Fauzan" atau link ke #hero diklik
  const heroNavLinks = document.querySelectorAll('a[href*="#hero"], a[href="#"], .navbar-brand');
  heroNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(() => {
        animateHero();
      }, 300);
    });
  });

  /* ==========================================
     4. ABOUT SECTION ANIMATION
     ========================================== */
  const cards = document.querySelectorAll(".bio-card, .education-card, .tech-stack-container, .soft-skills-card");

  // Fungsi untuk memicu/menjalankan animasi card About Me
  const animateCards = () => {
    cards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "all 0.5s ease-out";

      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 120);
    });
  };

  // Jalankan animasi pakai Intersection Observer saat scroll biasa
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

  // Trigger lagi ketika menu navbar "About" diklik
  const aboutNavLinks = document.querySelectorAll('a[href*="#about"]');
  aboutNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(() => {
        animateCards();
      }, 300);
    });
  });
});
