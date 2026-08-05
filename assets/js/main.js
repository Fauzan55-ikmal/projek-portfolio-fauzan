/* ==========================================
   PERSONAL PORTFOLIO - MAIN JAVASCRIPT
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================
     1. CONSOLE GREETING
     ========================================== */
  console.log("%c👋 Hello, Recruiter/Developer! Welcome to Fauzan's Portfolio.", "color: #38bdf8; font-size: 14px; font-weight: bold; background: #0f172a; padding: 4px 8px; border-radius: 4px;");
  console.log("Interested in the source code? Check out the repo: https://github.com/Fauzan55-ikmal/projek-portfolio-fauzan");

  /* ==========================================
     2. NAVBAR SCROLL SHADOW EFFECT
     ========================================== */
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        navbar.style.boxShadow = "0 10px 30px -10px rgba(2, 6, 23, 0.7)";
      } else {
        navbar.style.boxShadow = "none";
      }
    });
  }

  /* ==========================================
     3. HERO SECTION ANIMATION
     ========================================== */
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

  animateHero();

  const heroNavLinks = document.querySelectorAll('a[href*="#hero"], a[href="#"], .navbar-brand');
  heroNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(animateHero, 300);
    });
  });

  /* ==========================================
     4. ABOUT SECTION ANIMATION
     ========================================== */
  const aboutCards = document.querySelectorAll(".bio-card, .education-card, .tech-stack-container, .soft-skills-card");

  const animateAboutCards = () => {
    aboutCards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "all 0.5s ease-out";

      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 120);
    });
  };

  const aboutSection = document.querySelector("#about") || document.querySelector(".about-section");
  if (aboutSection) {
    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateAboutCards();
            aboutObserver.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );
    aboutObserver.observe(aboutSection);
  }

  const aboutNavLinks = document.querySelectorAll('a[href*="#about"]');
  aboutNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(animateAboutCards, 300);
    });
  });

  /* ==========================================
     5. PROJECTS SECTION ANIMATION
     ========================================== */
  const projectElements = document.querySelectorAll("#projects .projects-title, #projects .projects-subtitle, #projects .projects-swiper");

  const animateProjects = () => {
    projectElements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "all 0.5s ease-out";

      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, index * 120);
    });
  };

  const projectsSection = document.querySelector("#projects") || document.querySelector(".projects-section");
  if (projectsSection) {
    const projectsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateProjects();
            projectsObserver.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );
    projectsObserver.observe(projectsSection);
  }

  const projectsNavLinks = document.querySelectorAll('a[href*="#projects"]');
  projectsNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(animateProjects, 300);
    });
  });

  /* ==========================================
     6. CONTACT SECTION ANIMATION
     ========================================== */
  const contactElements = document.querySelectorAll(".contact-title, .contact-subtitle, .contact-card");

  const animateContact = () => {
    contactElements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "all 0.5s ease-out";

      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, index * 100);
    });
  };

  const contactSection = document.querySelector("#contact") || document.querySelector(".contact-section");
  if (contactSection) {
    const contactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateContact();
            contactObserver.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );
    contactObserver.observe(contactSection);
  }

  const contactNavLinks = document.querySelectorAll('a[href*="#contact"]');
  contactNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(animateContact, 300);
    });
  });

  /* ==========================================
     7. SWIPER CAROUSEL INITIALIZATION
     ========================================== */
  if (document.querySelector(".projects-swiper")) {
    new Swiper(".projects-swiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  /* ==========================================
     8. CLICK TO COPY FUNCTIONALITY
     ========================================== */
  const copyableItems = document.querySelectorAll(".contact-card[data-copy], .contact-item[data-copy]");
  copyableItems.forEach((item) => {
    item.addEventListener("click", () => {
      const copyText = item.getAttribute("data-copy");
      if (copyText) {
        navigator.clipboard.writeText(copyText);

        const targetElement = item.querySelector(".card-value") || item.querySelector("a, span");
        if (targetElement) {
          const originalText = targetElement.innerText;
          targetElement.innerText = "Tersalin ke Clipboard!";

          setTimeout(() => {
            targetElement.innerText = originalText;
          }, 1500);
        }
      }
    });
  });
});
