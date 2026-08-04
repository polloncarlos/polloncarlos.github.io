document.addEventListener('DOMContentLoaded', () => {

  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) {}
    });
  }

  // Footer year
  const footerYear = document.getElementById('footerYear');
  if (footerYear) footerYear.textContent = new Date().getFullYear();

  // Back to top
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    });
  }

  // Mobile menu toggle
  const nav = document.querySelector('nav');
  const menuToggle = document.getElementById('menuToggle');
  if (nav && menuToggle) {
    const closeMenu = () => {
      nav.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open-lock');
    };
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('menu-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('menu-open-lock', isOpen);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('menu-open')) closeMenu();
    });
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('menu-open') && !nav.contains(e.target)) closeMenu();
    });
  }

  // Active nav link
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
});

