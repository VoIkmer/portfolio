/* Content lives in data.js (loaded first). */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Escape text before interpolating into HTML */
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/* ═══════════════════════════════════════
   HERO CANVAS — Particle Circuit
   Pauses off-screen / hidden tab, handles retina,
   debounced resize, static frame on reduced motion.
═══════════════════════════════════════ */
(function () {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const hero = document.getElementById('hero');
  const ACCENT = 'rgba(232,140,48,';
  const DIM = 'rgba(255,255,255,';
  const CONNECTION_DIST = 160;

  let W = 0, H = 0, nodes = [], rafId = null, inView = true;

  function nodeCount() { return window.innerWidth < 768 ? 28 : 55; }

  function size() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = hero.clientWidth;
    H = hero.clientHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function init() {
    nodes = Array.from({ length: nodeCount() }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      pulse: Math.random() * Math.PI * 2,
      accent: Math.random() < 0.12
    }));
  }

  function step() {
    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
      n.pulse += 0.02;
    });
  }

  function render() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_DIST) {
          const opacity = (1 - dist / CONNECTION_DIST) * 0.18;
          const isAccent = a.accent || b.accent;
          ctx.beginPath();
          ctx.strokeStyle = (isAccent ? ACCENT : DIM) + opacity + ')';
          ctx.lineWidth = isAccent ? 0.8 : 0.5;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    nodes.forEach(n => {
      const pulse = Math.sin(n.pulse) * 0.3 + 0.7;
      const opacity = n.accent ? 0.7 * pulse : 0.25 * pulse;
      ctx.beginPath();
      ctx.fillStyle = (n.accent ? ACCENT : DIM) + opacity + ')';
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function loop() {
    step();
    render();
    rafId = requestAnimationFrame(loop);
  }

  function start() { if (!rafId && !reduceMotion && inView && !document.hidden) loop(); }
  function stop() { if (rafId) { cancelAnimationFrame(rafId); rafId = null; } }

  size(); init(); render();
  start();

  let lastW = window.innerWidth, t;
  window.addEventListener('resize', () => {
    clearTimeout(t);
    t = setTimeout(() => {
      // ignore height-only changes (mobile address bar show/hide)
      if (window.innerWidth === lastW) return;
      lastW = window.innerWidth;
      stop(); size(); init(); render(); start();
    }, 200);
  });

  new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting;
    inView ? start() : stop();
  }, { threshold: 0 }).observe(hero);

  document.addEventListener('visibilitychange', () => { document.hidden ? stop() : start(); });
})();

/* ═══════════════════════════════════════
   NAV — scroll state, mobile menu, scrollspy
═══════════════════════════════════════ */
(function () {
  const nav = document.getElementById('navbar');
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  function setMenu(open) {
    nav.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }
  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('menu-open')));
  links.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  // Scrollspy
  const map = new Map();
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(a => {
    const sec = document.querySelector(a.getAttribute('href'));
    if (sec) map.set(sec, a);
  });
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        map.forEach(a => a.classList.remove('active'));
        map.get(e.target).classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  map.forEach((_, sec) => spy.observe(sec));
})();

/* ═══════════════════════════════════════
   REVEAL ON SCROLL
═══════════════════════════════════════ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      if (e.target.classList.contains('reveal')) revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .timeline-item').forEach(el => revealObserver.observe(el));

/* ═══════════════════════════════════════
   PROJECT DIAGRAMS — Input → System → Output
   Built from project.diagram (see data.js)
═══════════════════════════════════════ */
function arrowDefs(id) {
  return `<defs>
    <marker id="arr-${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M2 2L8 5L2 8" fill="none" stroke="rgba(232,140,48,0.85)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    </marker>
  </defs>`;
}

function panel(x, y, w, h, label, lines, variant, big) {
  const colors = {
    input:  { bg: 'rgba(255,255,255,0.035)', stroke: 'rgba(255,255,255,0.14)', tag: 'rgba(255,255,255,0.55)', tagBg: 'rgba(255,255,255,0.06)' },
    system: { bg: 'rgba(232,140,48,0.07)',   stroke: 'rgba(232,140,48,0.4)',   tag: 'rgba(232,140,48,0.95)',  tagBg: 'rgba(232,140,48,0.12)' },
    output: { bg: 'rgba(255,255,255,0.025)', stroke: 'rgba(255,255,255,0.12)', tag: 'rgba(255,255,255,0.55)', tagBg: 'rgba(255,255,255,0.06)' }
  };
  const c = colors[variant];
  const cx = x + w / 2;
  const firstLineY = y + 16 + 26;
  const spacing = big ? 17 : 16;
  const tagW = label.length * 7 + 18;
  const tagX = cx - tagW / 2;
  const f1 = big ? 11.5 : 10.5, f2 = big ? 10.5 : 9.5;

  const rows = lines.map((line, i) =>
    `<text x="${cx}" y="${firstLineY + i * spacing}" text-anchor="middle" font-family="monospace"
      font-size="${i === 0 ? f1 : f2}" fill="${i === 0 ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.6)'}">${esc(line)}</text>`
  ).join('');

  return `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7" fill="${c.bg}" stroke="${c.stroke}" stroke-width="0.8"/>
    <rect x="${tagX}" y="${y - 9}" width="${tagW}" height="18" rx="4" fill="${c.tagBg}" stroke="${c.stroke}" stroke-width="0.6"/>
    <text x="${cx}" y="${y + 4}" text-anchor="middle" font-family="monospace" font-size="8.5" font-weight="bold" fill="${c.tag}">${esc(label)}</text>
    ${rows}`;
}

function arrow(x1, y, x2, id) {
  return `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="rgba(232,140,48,0.75)" stroke-width="1.2" marker-end="url(#arr-${id})" fill="none"/>`;
}

function renderDiagram(p, context) {
  const d = p.diagram;
  if (!d) return '';
  const id = `${p.id}-${context}`;
  const label = `${t('d_diagram')}: ${d.in.title} → ${d.sys.title} → ${d.out.title}`;
  const IN = t('d_input'), SYS = t('d_system'), OUT = t('d_output');

  if (context === 'modal') {
    const body = k => [d[k].title, '─────────────', ...d[k].lines];
    return `<svg viewBox="0 0 560 200" role="img" aria-label="${esc(label)}" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
      ${arrowDefs(id)}
      ${panel(12, 28, 148, 144, IN, body('in'), 'input', true)}
      ${panel(196, 28, 168, 144, SYS, body('sys'), 'system', true)}
      ${panel(400, 28, 148, 144, OUT, body('out'), 'output', true)}
      ${arrow(160, 100, 193, id + 'a')} ${arrow(364, 100, 397, id + 'b')}
    </svg>`;
  }
  const c = d.card;
  return `<svg viewBox="0 0 300 160" role="img" aria-label="${esc(label)}" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
    ${arrowDefs(id)}
    ${panel(4, 30, 82, 108, IN, c.in, 'input')}
    ${panel(109, 30, 82, 108, SYS, c.sys, 'system')}
    ${panel(214, 30, 82, 108, OUT, c.out, 'output')}
    ${arrow(86, 84, 106, id + 'a')} ${arrow(191, 84, 211, id + 'b')}
  </svg>`;
}

/* ═══════════════════════════════════════
   PROJECTS — render, filter, show more
   build() can be called again (e.g. when the language changes).
═══════════════════════════════════════ */
const INITIAL_VISIBLE = 4;
const AWARD_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="9" r="5"/><path d="M8.5 13.2L7 21l5-3 5 3-1.5-7.8"/></svg>';

let currentProject = null;

const projectsUI = (function () {
  const container = document.getElementById('projects-list');
  const filterBar = document.getElementById('project-filters');
  const moreBtn = document.getElementById('show-more-projects');
  const moreWrap = document.getElementById('projects-action');

  let activeFilter = 'all';
  let expanded = false;
  let cards = [];

  function build(instant) {
    container.innerHTML = '';
    filterBar.innerHTML = '';
    cards = [];

    PROJECTS.forEach((p, i) => {
      p.num = String(i + 1).padStart(3, '0');
      const L = localizeProject(p);
      const card = document.createElement('article');
      card.className = 'project-card reveal' + (i > 0 ? ' reveal-delay-' + (i % 3) : '') + (instant ? ' visible' : '');
      card.dataset.category = p.category;
      card.innerHTML = `
        <div class="project-card-inner">
          <div class="project-info">
            <div class="project-num">${p.num} — ${esc(p.tags[0])}</div>
            <h3 class="project-title">${esc(L.title)}</h3>
            ${L.badge ? `<div class="project-badge">${AWARD_ICON}<span>${esc(L.badge)}</span></div>` : ''}
            <p class="project-desc">${esc(L.desc)}</p>
            <div class="project-tags">${p.tags.map(tg => `<span class="project-tag">${esc(tg)}</span>`).join('')}</div>
            <div class="project-metrics">
              ${L.metrics.map(m => `<div class="metric"><div class="metric-val${m.val.length > 9 ? ' long' : ''}">${esc(m.val)}</div><div class="metric-label">${esc(m.label)}</div></div>`).join('')}
            </div>
            <div class="project-actions">
              <button type="button" class="project-open" aria-haspopup="dialog" aria-label="${esc(t('view_details'))}: ${esc(L.title)}">${esc(t('view_details'))} <span aria-hidden="true">→</span></button>
              ${p.repo ? `<a class="project-repo" href="${esc(p.repo)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(L.title)} ${esc(t('on_github'))} (${esc(t('new_tab'))})">GitHub <span aria-hidden="true">↗</span></a>` : ''}
            </div>
          </div>
          ${L.cardImage ? `<div class="project-visual has-photo"><img class="project-photo" src="${esc(L.cardImage.src)}" alt="${esc(L.cardImage.alt)}" loading="lazy"></div>` : ''}
        </div>`;

      card.addEventListener('click', e => {
        if (e.target.closest('a')) return; // let links work normally
        openModal(p, card.querySelector('.project-open'));
      });
      p._card = card;
      container.appendChild(card);
      cards.push({ p, card });
    });

    PROJECT_FILTERS.forEach(f => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'filter-chip';
      b.textContent = localizeFilter(f);
      b.dataset.filter = f.id;
      b.setAttribute('aria-pressed', String(f.id === activeFilter));
      b.addEventListener('click', () => { activeFilter = f.id; apply(true); });
      filterBar.appendChild(b);
    });

    apply(false);
    if (!instant) cards.forEach(({ card }) => { if (!card.hidden) revealObserver.observe(card); });
  }

  function show(card, animate) {
    card.hidden = false;
    if (animate) requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('visible')));
  }

  function apply(animate) {
    filterBar.querySelectorAll('.filter-chip').forEach(b =>
      b.setAttribute('aria-pressed', String(b.dataset.filter === activeFilter)));

    const filtered = activeFilter === 'all';
    let shownIdx = 0;
    cards.forEach(({ p, card }) => {
      const match = filtered || p.category === activeFilter;
      const within = !filtered || expanded || shownIdx < INITIAL_VISIBLE;
      if (match) shownIdx++;
      if (match && within) show(card, animate); else { card.hidden = true; }
    });

    // "Show more" only applies to the unfiltered view
    const hiddenCount = PROJECTS.length - INITIAL_VISIBLE;
    moreWrap.hidden = !filtered || hiddenCount <= 0;
    moreBtn.setAttribute('aria-expanded', String(expanded));
    moreBtn.querySelector('.label').textContent = expanded ? t('show_fewer') : t('show_more', hiddenCount);
    moreBtn.querySelector('svg').style.transform = expanded ? 'rotate(180deg)' : '';
  }

  moreBtn.addEventListener('click', () => {
    expanded = !expanded;
    apply(true);
    if (!expanded) document.getElementById('projects').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  /* Make a project card visible (used when opening a project from the URL) */
  function reveal(p) {
    expanded = true; activeFilter = 'all'; apply(false);
    p._card.classList.add('visible');
  }

  build(false);
  return { build, reveal };
})();

/* Open a project directly from the URL: #project/faceguard */
function openProjectFromHash() {
  const m = location.hash.match(/^#project\/(.+)$/);
  if (!m) return;
  const p = PROJECTS.find(x => x.id === decodeURIComponent(m[1]));
  if (!p) return;
  projectsUI.reveal(p);
  openModal(p, null, true);
}

/* ═══════════════════════════════════════
   MODAL — accessible dialog (focus trap, restore focus, hash URL)
═══════════════════════════════════════ */
const GITHUB_ICON = '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>';

let lastFocus = null;
function setBackgroundInert(on) {
  document.querySelectorAll('#navbar, #main, footer, .skip-link').forEach(el => on ? el.setAttribute('inert', '') : el.removeAttribute('inert'));
}

function renderModalContent(p) {
  const L = localizeProject(p);
  return `
    <div class="modal-header">
      <div class="modal-kicker">${p.num} — ${p.tags.map(esc).join(' · ')}</div>
      <h2 id="modal-title" class="modal-title">${esc(L.title)}</h2>
      ${L.badge ? `<div class="project-badge">${AWARD_ICON}<span>${esc(L.badge)}</span></div>` : ''}
      <button type="button" class="modal-close" aria-label="${esc(t('close'))}">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>
      </button>
    </div>
    <div class="modal-body">
      <div class="modal-metrics">
        ${L.metrics.map(m => `<div class="modal-metric"><div class="modal-metric-val${m.val.length > 9 ? ' long' : ''}">${esc(m.val)}</div><div class="modal-metric-label">${esc(m.label)}</div></div>`).join('')}
      </div>
      ${L.photos ? `<div class="modal-gallery">${L.photos.map(ph => `
        <figure class="modal-photo${ph.narrow ? ' modal-photo--narrow' : ''}">
          <img src="${esc(ph.src)}" alt="${esc(ph.alt)}" loading="lazy">
          ${ph.caption ? `<figcaption>${esc(ph.caption)}</figcaption>` : ''}
        </figure>`).join('')}</div>` : ''}
      <div class="modal-section">
        <div class="modal-section-title">${esc(t('m_summary'))}</div>
        <p class="modal-text">${esc(L.overview)}</p>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">${esc(t('m_problem'))}</div>
        <p class="modal-text">${esc(L.problem)}</p>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">${esc(t('m_arch'))}</div>
        <div class="modal-arch">
          ${renderDiagram(L, 'modal')}
          <p class="modal-text modal-arch-text">${esc(L.architecture)}</p>
        </div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">${esc(t('m_results'))}</div>
        <p class="modal-text">${esc(L.results)}</p>
      </div>
      ${p.colorTable ? `
      <div class="modal-section">
        <div class="modal-section-title">${esc(t('m_colors'))}</div>
        <table class="color-table">
          <thead><tr><th scope="col">${esc(t('th_color'))}</th><th scope="col">${esc(t('th_value'))}</th></tr></thead>
          <tbody>${p.colorTable.map(c => `<tr><td><span class="color-swatch" style="background:${esc(c.hex)}" aria-hidden="true"></span>${esc(c.name)}</td><td>${esc(String(c.value).replace('multiplier/tolerance', t('mult_tol')))}</td></tr>`).join('')}</tbody>
        </table>
      </div>` : ''}
      ${p.video ? `
      <div class="modal-section">
        <div class="modal-section-title">${esc(t('m_video'))}</div>
        <div class="modal-video">
          <iframe src="https://www.youtube-nocookie.com/embed/${esc(p.video)}" title="${esc(L.title)} — ${esc(t('m_video_title'))}"
            loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      </div>` : ''}
      <div class="modal-links">
        <a href="${esc(p.repo || 'https://github.com/VoIkmer')}" target="_blank" class="modal-link" rel="noopener noreferrer">
          ${GITHUB_ICON} ${esc(t('view_gh'))}
        </a>
      </div>
    </div>`;
}

function openModal(p, trigger, fromHash) {
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');
  lastFocus = trigger || document.activeElement;
  currentProject = p;

  content.innerHTML = renderModalContent(p);

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  setBackgroundInert(true);
  overlay.scrollTop = 0;
  if (window.trackEvent) window.trackEvent('project-open: ' + p.id);
  content.querySelector('.modal-close').focus();
  if (!fromHash) { try { history.replaceState(null, '', '#project/' + p.id); } catch (e) { /* file:// */ } }
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (!overlay.classList.contains('open')) return;
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  setBackgroundInert(false);
  currentProject = null;
  document.getElementById('modal-content').innerHTML = ''; // also stops the video
  try { if (location.hash.startsWith('#project/')) history.replaceState(null, '', '#projects'); } catch (e) { /* file:// */ }
  if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
  lastFocus = null;
}

(function () {
  const overlay = document.getElementById('modal-overlay');
  overlay.addEventListener('click', e => {
    if (e.target === overlay || e.target.closest('.modal-close')) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') { closeModal(); return; }
    if (e.key === 'Tab') { // focus trap
      const f = overlay.querySelectorAll('a[href], button, iframe, [tabindex]:not([tabindex="-1"])');
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  window.addEventListener('hashchange', () => {
    if (location.hash.startsWith('#project/')) openProjectFromHash();
    else closeModal();
  });
  openProjectFromHash();
})();

/* ═══════════════════════════════════════
   TIMELINES (education + work)
═══════════════════════════════════════ */
function renderTimelines(instant) {
  function renderTimeline(containerId, listKey, items) {
    const tl = document.getElementById(containerId);
    if (!tl) return;
    tl.innerHTML = '';
    items.forEach((raw, i) => {
      const item = localizeItem(listKey, i, raw);
      const div = document.createElement('div');
      div.className = 'timeline-item' + (instant ? ' visible' : '');
      div.innerHTML = `
        <div class="timeline-dot${item.accent ? ' accent' : ''}"></div>
        <div class="timeline-year">${esc(item.year)}</div>
        <div class="timeline-title">${esc(item.title)}</div>
        <div class="timeline-desc">${esc(item.desc)}</div>
        ${item.tags ? `<div class="timeline-tags">${item.tags.map(tg => `<span class="project-tag">${esc(tg)}</span>`).join('')}</div>` : ''}`;
      tl.appendChild(div);
      if (!instant) revealObserver.observe(div);
    });
  }
  renderTimeline('education-list', 'education', EDUCATION);
  renderTimeline('work-list', 'work', WORK);
}
renderTimelines(false);

/* ═══════════════════════════════════════
   AWARDS & CERTIFICATIONS
═══════════════════════════════════════ */
function renderAwardsCerts() {
  const awardList = document.getElementById('award-list');
  awardList.innerHTML = '';
  AWARDS.forEach((raw, i) => {
    const a = localizeItem('awards', i, raw);
    const card = document.createElement('div');
    card.className = 'award-card visible';
    card.innerHTML = `
      <div class="award-icon" aria-hidden="true">${AWARD_ICON}</div>
      <div class="award-body">
        <div class="award-top">
          <span class="blog-cat">${esc(a.issuer)}</span>
          <span class="award-pill">${esc(t('award'))}</span>
          ${a.result ? `<span class="award-pill award-pill-result">${esc(a.result)}</span>` : ''}
        </div>
        <div class="award-title">${esc(a.title)}</div>
        <div class="blog-excerpt">${esc(a.notes || '')}</div>
        <div class="award-foot">
          <div class="blog-meta">${esc(a.date)}</div>
          ${a.project ? `<a class="award-link" href="#project/${esc(PROJECTS.find(p => p.title.startsWith(a.project))?.id || '')}">${esc(t('see_project'))}</a>` : ''}
          ${a.url ? `<a class="award-link" href="${esc(a.url)}" target="_blank" rel="noopener noreferrer">${esc(t('winners'))}</a>` : ''}
        </div>
      </div>`;
    awardList.appendChild(card);
  });

  const grid = document.getElementById('cert-grid');
  grid.innerHTML = '';
  CERTIFICATIONS.forEach((raw, i) => {
    const cert = localizeItem('certs', i, raw);
    const el = document.createElement(cert.url ? 'a' : 'div');
    el.className = 'blog-card visible';
    if (cert.url) { el.href = cert.url; el.target = '_blank'; el.rel = 'noopener noreferrer'; }
    el.innerHTML = `
      <div class="blog-cat">${esc(cert.issuer)}</div>
      <div class="blog-title">${esc(cert.title)}</div>
      <div class="blog-excerpt">${esc(cert.notes || '')}</div>
      <div class="blog-meta">${esc(cert.date)}${cert.url ? esc(/linkedin\.com/.test(cert.url) ? t('see_linkedin') : t('verify')) : ''}</div>`;
    grid.appendChild(el);
  });
}
renderAwardsCerts();

/* ═══════════════════════════════════════
   CONTACT — copy e-mail
═══════════════════════════════════════ */
(function () {
  const btn = document.getElementById('copy-email');
  if (!btn) return;
  const status = document.getElementById('copy-status');
  btn.addEventListener('click', async () => {
    const email = btn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      status.textContent = t('copied_msg');
    } catch (e) {
      status.textContent = t('copy_fail');
    }
    btn.classList.add('copied');
    setTimeout(() => { btn.classList.remove('copied'); status.textContent = ''; }, 2500);
  });
})();

/* ═══════════════════════════════════════
   LANGUAGE SWITCH (EN / PT)
═══════════════════════════════════════ */
document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => {
  if (b.dataset.lang !== LANG) setLang(b.dataset.lang);
}));

window.addEventListener('langchange', () => {
  projectsUI.build(true);
  renderTimelines(true);
  renderAwardsCerts();
  const overlay = document.getElementById('modal-overlay');
  if (currentProject && overlay.classList.contains('open')) {
    const content = document.getElementById('modal-content');
    const top = overlay.scrollTop;
    content.innerHTML = renderModalContent(currentProject);
    overlay.scrollTop = top;
    content.querySelector('.modal-close').focus();
  }
  if (window.trackEvent) window.trackEvent('lang-' + LANG);
});

setLang(LANG, true); // apply the saved / browser language to the static text

/* ═══════════════════════════════════════
   ANALYTICS — GoatCounter (privacy-friendly, no cookies).
   Off unless SITE.goatcounter is set in data.js.
═══════════════════════════════════════ */
(function () {
  if (!SITE.goatcounter) return;
  const tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://gc.zgo.at/count.js';
  tag.dataset.goatcounter = `https://${SITE.goatcounter}.goatcounter.com/count`;
  document.head.appendChild(tag);

  function track(name) {
    if (window.goatcounter && window.goatcounter.count) {
      window.goatcounter.count({ path: name, title: name, event: true });
    }
  }
  window.trackEvent = track;

  document.addEventListener('click', e => {
    const a = e.target.closest('a, button');
    if (!a) return;
    if (a.matches('a[download]')) track('cv-download');
    else if (a.matches('a[href^="mailto:"]')) track('email-click');
    else if (a.matches('a[href*="linkedin.com"]')) track('linkedin-click');
    else if (a.matches('a[href^="https://github.com/VoIkmer"]') && !a.matches('.project-repo, .modal-link')) track('github-profile-click');
    else if (a.matches('.project-repo, .modal-link')) track('repo-click: ' + (a.getAttribute('aria-label') || a.href));
    else if (a.id === 'copy-email') track('email-copy');
    else if (a.matches('.lang-btn')) track('lang-click: ' + a.dataset.lang);
  });
})();
