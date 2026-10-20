// Small enhancements only — the site works without JavaScript.
(function () {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav');

  // Mobile menu
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });
  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }
  });

  // Header border once the page scrolls
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Highlight the nav link for the section in view (home page only)
  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const sections = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if (sections.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => a.classList.toggle('is-current', a.getAttribute('href') === '#' + entry.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => io.observe(s));
  }

  // Project filters
  const chips = document.querySelectorAll('.chip');
  const projects = document.querySelectorAll('.project');
  const empty = document.querySelector('.empty-note');
  chips.forEach((chip) => chip.addEventListener('click', () => {
    const f = chip.dataset.filter;
    chips.forEach((c) => c.classList.toggle('is-active', c === chip));
    let shown = 0;
    projects.forEach((p) => {
      const match = f === 'all' || p.dataset.tags.split(' ').includes(f);
      p.hidden = !match;
      if (match) shown++;
    });
    if (empty) empty.hidden = shown > 0;
  }));

  // Copy-to-clipboard buttons
  document.querySelectorAll('.copy').forEach((btn) => btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      btn.textContent = 'Copied';
      btn.classList.add('is-done');
      setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('is-done'); }, 1600);
    } catch (_) { /* clipboard unavailable; the link still works */ }
  }));

  // Map lightbox (project pages)
  const box = document.querySelector('.lightbox');
  if (box && typeof box.showModal === 'function') {
    const boxImg = box.querySelector('img');
    document.querySelectorAll('.zoom').forEach((btn) => btn.addEventListener('click', () => {
      const img = btn.querySelector('img');
      boxImg.src = btn.dataset.full || img.src;
      boxImg.alt = img.alt;
      box.showModal();
    }));
    box.querySelector('.lightbox-close').addEventListener('click', () => box.close());
    box.addEventListener('click', (e) => { if (e.target === box) box.close(); });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
