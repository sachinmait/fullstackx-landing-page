/* FullStackX – Interactive Behaviours */

(function () {
  'use strict';

  /* ── Navbar scroll shadow ────────────────────────────── */
  const navbar = document.getElementById('navbar');

  function onScroll() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveLink();
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Mobile nav toggle ───────────────────────────────── */
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  toggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    navLinks.setAttribute('aria-hidden', String(!isOpen));
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      navLinks.setAttribute('aria-hidden', 'true');
    });
  });

  /* ── Active nav link on scroll ───────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = navLinks.querySelectorAll('a[href^="#"]');

  function updateActiveLink() {
    const scrollY = window.scrollY + 100;

    let current = '';
    sections.forEach(function (section) {
      if (section.offsetTop <= scrollY) {
        current = section.getAttribute('id');
      }
    });

    navAnchors.forEach(function (a) {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) {
        a.classList.add('active');
      }
    });
  }

  /* ── Smooth scroll for anchor links ──────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = navbar.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - offset - 8;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ── Intersection Observer: fade-in sections ─────────── */
  if ('IntersectionObserver' in window) {
    const fadeEls = document.querySelectorAll(
      '.audience-card, .step-card, .outcome-item, .week-content, ' +
      '.outcome-final-card, .contact-card, .overview-card'
    );

    fadeEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    fadeEls.forEach(function (el) { observer.observe(el); });
  }

  /* ── Current year in footer ───────────────────────────── */
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
