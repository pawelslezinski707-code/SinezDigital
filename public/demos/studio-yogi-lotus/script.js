(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ===== Hamburger / mobile nav ===== */
  var hamburger = document.getElementById("hamburger");
  var mobileNav = document.getElementById("mobile-nav");

  function closeMobileNav() {
    mobileNav.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Otwórz menu");
  }

  function toggleMobileNav() {
    var isOpen = mobileNav.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    hamburger.setAttribute("aria-label", isOpen ? "Zamknij menu" : "Otwórz menu");
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", toggleMobileNav);

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMobileNav);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileNav.classList.contains("open")) {
        closeMobileNav();
        hamburger.focus();
      }
    });
  }

  /* ===== Smooth scroll for in-page anchors ===== */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var targetId = link.getAttribute("href");
      if (targetId.length <= 1) return;
      var target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start"
      });
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });
  });

  /* ===== Reveal on scroll (IntersectionObserver) ===== */
  var revealTargets = document.querySelectorAll(".reveal");
  var breathLines = document.querySelectorAll(".breath-line");

  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach(function (el) { revealObserver.observe(el); });

    var lineObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("drawn");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    breathLines.forEach(function (el) { lineObserver.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("in-view"); });
    breathLines.forEach(function (el) { el.classList.add("drawn"); });
  }

  /* ===== Contact form (static, front-end only) ===== */
  var contactForm = document.getElementById("contact-form");
  var formStatus = document.getElementById("form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var imie = document.getElementById("imie");
      var email = document.getElementById("email");

      if (!imie.value.trim() || !email.value.trim() || !email.checkValidity()) {
        formStatus.textContent = "Uzupełnij imię i poprawny adres e-mail.";
        formStatus.style.color = "#b3543f";
        return;
      }

      formStatus.style.color = "";
      formStatus.textContent = "Dziękujemy! Odezwiemy się najszybciej, jak to możliwe.";
      contactForm.reset();
    });
  }

  /* ===== Header shadow on scroll ===== */
  var header = document.querySelector(".site-header");
  if (header) {
    var lastScrolled = false;
    window.addEventListener("scroll", function () {
      var scrolled = window.scrollY > 8;
      if (scrolled !== lastScrolled) {
        header.style.boxShadow = scrolled ? "0 8px 24px -16px rgba(43,51,39,0.25)" : "none";
        lastScrolled = scrolled;
      }
    });
  }
})();
