/* ═══════════════════════════════════════
   DATA
═══════════════════════════════════════ */

const PROJECTS = [
  {
    id: 'p1',
    num: '001',
    title: 'Battery Management System (BMS)',
    repo: 'https://github.com/VoIkmer/BMS-SoC-Estimator',
    desc: 'EKF-based State of Charge (SoC) estimator for Li-Ion cells, enabling predictive monitoring and intelligent battery analytics.',
    tags: ['MATLAB', 'Python', 'BMS', 'Kalman Filter'],
    metrics: [{ val: 'Li-Ion', label: 'Chemistry' }, { val: 'High', label: 'Accuracy' }, { val: 'Predictive', label: 'Analysis' }],
    overview: 'A solution for precise State of Charge estimation, critical for electric vehicles and smart grids where measurement error has high cost.',
    problem: 'Direct SoC measurement is not possible in operation; traditional Coulomb counting accumulates drift over time.',
    architecture: 'State-space equivalent-circuit model implemented in MATLAB and Python. Measurements of voltage and current feed an Extended Kalman Filter (EKF) to correct estimates continuously.',
    results: 'Successful analytical validation with fast convergence to true SoC, ready for integration with monitoring hardware.'
  },
  {
    id: 'p2',
    num: '002',
    title: 'Signal Analyzer',
    repo: 'https://github.com/VoIkmer/Signal-Analyzer',
    desc: 'Digital signal processing system for harmonic reconstruction and spectral analysis with automated error metrics.',
    tags: ['MATLAB', 'DSP', 'Fourier', 'Signals'],
    metrics: [{ val: 'Spectral', label: 'Analysis' }, { val: 'Dynamic', label: 'Error Metrics' }, { val: 'Visual', label: 'Reconstruction' }],
    overview: 'Processing and reconstructing complex waveforms from harmonic components to support telecom and power-control analysis.',
    problem: 'Visualize and quantify how truncating the harmonic series affects distortion in the reconstructed signal.',
    architecture: 'MATLAB code decomposing waveforms, computing Fourier coefficients and plotting interactive series and spectrum visualizations.',
    results: 'Accurate visualization of Gibbs phenomenon and automated mean-square error calculations for validation.'
  },
  {
    id: 'p3',
    num: '003',
    title: 'RC Circuit Simulation',
    repo: 'https://github.com/VoIkmer/RC-Circuit-Simulation',
    desc: 'Simulator for dynamic analysis of RC circuits with automated time-constant calculations and temporal validation.',
    tags: ['MATLAB', 'Python', 'RC Circuits', 'Simscape'],
    metrics: [{ val: 'RC', label: 'Topology' }, { val: 'Temporal', label: 'Response' }, { val: 'Automatic', label: 'Calculation' }],
    overview: 'A computational tool to predict dynamic behavior of circuits under step inputs, useful for stability analysis and filter design.',
    problem: 'Manual analysis of first-order circuits is error-prone and hard to visualize quickly.',
    architecture: 'Algorithm computes initial and final conditions, determines Thevenin equivalent resistance and plots complete charge/discharge curves from analytical solutions.',
    results: 'Instant generation of voltage/current curves with analytical confirmation of time-constant via robust scripts.'
  },
  {
    id: 'p4',
    num: '004',
    title: 'Resistor Color Reader',
    repo: 'https://github.com/VoIkmer/Resistor-Color-Reader',
    desc: 'MATLAB-based tool to calculate electrical resistance from color bands. Supports 4 and 5-band resistors with graphical visualization.',
    tags: ['MATLAB', 'Electronics', 'Calculator'],
    metrics: [{ val: '4 & 5', label: 'Bands' }, { val: 'Visual', label: 'GUI' }, { val: 'EIA-96', label: 'Standard' }],
    overview: 'A computational tool designed to quickly and accurately decode standard resistor color bands into resistance values and tolerances.',
    problem: 'Reading multi-band resistors manually in laboratory settings is often slow and prone to misinterpretation.',
    architecture: 'MATLAB script mapping color strings to numerical values, computing multipliers, and plotting a representative 2D graphical resistor.',
    results: 'Open-source utility available for engineering students to validate their physical components instantly.'
  },
  {
    id: 'p5',
    num: '005',
    title: 'Light Alert System',
    repo: 'https://github.com/VoIkmer/Light-Alert-System',
    desc: 'Light intensity monitoring system using an LDR sensor, I2C LCD display, and buzzer alarm.',
    tags: ['C++', 'Arduino', 'Embedded', 'Sensors'],
    metrics: [{ val: 'LDR', label: 'Sensing' }, { val: 'I2C', label: 'Display' }, { val: 'PWM', label: 'Alert' }],
    overview: 'Project developed as a practical activity for the probationary period at the Onda Elétrica student entity.',
    problem: 'Need for a local, real-time alert mechanism triggered by specific environmental lighting conditions.',
    architecture: 'C++ firmware reading analog ADC values from an LDR, filtering noise, and commanding an I2C LCD and piezo buzzer based on predefined thresholds.',
    results: 'Functional hardware prototype validating embedded programming logic and physical hardware integration.'
  },
  {
    id: 'p6',
    num: '006',
    title: 'GridSense (WIP)',
    repo: 'https://github.com/VoIkmer/GridSense',
    desc: 'Work in progress: Data-driven sensing and analysis tool built with Python for smart grid applications.',
    tags: ['Python', 'Smart Grids', 'Data Engineering'],
    metrics: [{ val: 'WIP', label: 'Status' }, { val: 'Data', label: 'Pipeline' }, { val: 'Grid', label: 'Domain' }],
    overview: 'An ongoing initiative to process and extract insights from electrical grid data streams using Python analytics.',
    problem: 'Modern smart grids generate vast amounts of telemetry that require automated pipelines to identify trends and anomalies.',
    architecture: 'Python-based ingestion pipeline utilizing Pandas for data cleaning and preliminary statistical modeling.',
    results: 'Under active development. Core data structures and initial EDA (Exploratory Data Analysis) modules are being established.'
  }
];

// New project added: FaceGuard
PROJECTS.push({
  id: 'p7',
  num: '007',
  title: 'FaceGuard — Smart Lock with Facial Recognition',
  repo: 'https://github.com/VoIkmer/FaceGuard',
  desc: 'Facial-recognition based smart lock using ESP32-S3 with a web dashboard for monitoring and remote control.',
  tags: ['ESP32-S3', 'C++', 'Embedded', 'Dashboard'],
  metrics: [{ val: 'ESP32-S3', label: 'Platform' }, { val: 'Complete', label: 'System' }, { val: 'Open', label: 'Source' }],
  overview: 'Embedded firmware developed for face detection and recognition using the ESP32-S3 microcontroller. The system features a local web dashboard for real-time video streaming and remote smart lock control.',
  problem: 'Designing a secure, locally-processed facial access control system that maintains a low false-positive rate while operating entirely on constrained embedded hardware, eliminating the need for cloud processing.',
  architecture: 'An ESP32-S3 camera server (MJPEG streaming) combined with an on-device facial recognition pipeline (Edge AI). This embedded backend is integrated with a responsive web dashboard (HTML/CSS/JS) for remote unlocking, user enrollment, and access log management.',
  archShort: 'Edge AI & Local Server',
  results: 'Successfully delivered a fully working prototype capable of real-time facial recognition, local user enrollment, activity logging, and seamless remote unlocking via the integrated local network dashboard.'
});

const TIMELINE = [
  {
    year: '2021 – 2024',
    title: 'Teaching & Problem Solving',
    desc: 'Instructor at Cursos Discipulus and MSL — taught mathematics and physics problem-solving to strengthen analytical foundations.',
    accent: false
  },
  {
    year: '2024 - 2026',
    title: 'Student Representation & Project Lead',
    desc: 'Elected Student Representative at the College of Electrical Engineering; represented student interests and coordinated institutional initiatives. Appointed project lead at Onda Elétrica, organizing technical teams and roadmaps.',
    accent: false
  },
  {
    year: '2026 - Present',
    title: 'Intern — Network Methodology (Neoenergia)',
    desc: 'Internship at Neoenergia focused on network methodology, data collection and analysis for grid projects.',
    accent: true
  },
  {
    year: '2022 - Present',
    title: 'Bachelor of Electrical Engineering',
    desc: 'Admitted to Federal University of Bahia (UFBA). Deepened calculus, physics, programming fundamentals, circuit theory, signal processing, and control systems.',
    accent: true
  },
];

const CERTIFICATIONS = [
  {
    issuer: 'FM2S',
    title: 'Lean Six Sigma White Belt',
    date: 'May 2026',
    notes: 'Applied lean practices to student and industrial projects.'
  },
  {
    issuer: 'MathWorks',
    title: 'MATLAB & Simulink Onramp',
    date: 'Apr 2026',
    notes: 'Fundamentals of MATLAB and Simulink for simulation and modeling.'
  },
  {
    issuer: 'Kaggle',
    title: 'Python & Data Analysis',
    date: 'Apr 2026',
    notes: 'Applied Python for data analysis and SQL for database management.'
  },
];

const REPOS = [
  {
    name: 'resistor-color-reader',
    desc: 'MATLAB script decoding resistor color codes (EIA-96 / IEC 60062).',
    lang: 'MATLAB',
    langColor: '#e16737',
    stars: 8
  },
  {
    name: 'bms-kalman-filter',
    desc: 'EKF-based SoC estimation algorithms.',
    lang: 'Python',
    langColor: '#3572A5',
    stars: 12
  },
  {
    name: 'fourier-signal-reconstruction',
    desc: 'Harmonic analysis and DSP for signal reconstruction.',
    lang: 'MATLAB',
    langColor: '#e16737',
    stars: 5
  },
  {
    name: 'lab-integrado-4',
    desc: 'Structured repository with lab practices and reports for Integrated Lab 4.',
    lang: 'LaTeX',
    langColor: '#008080',
    stars: 4
  },
];

/* ═══════════════════════════════════════
   HERO CANVAS — Particle Circuit
═══════════════════════════════════════ */
(function () {
  const canvas = document.getElementById('hero-canvas');
  const ctx    = canvas.getContext('2d');
  let W, H, nodes, animId;

  const NODE_COUNT      = 55;
  const CONNECTION_DIST = 160;
  const ACCENT          = 'rgba(232,140,48,';
  const DIM             = 'rgba(255,255,255,';

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    init();
  }

  function init() {
    nodes = Array.from({ length: NODE_COUNT }, () => ({
      x:      Math.random() * W,
      y:      Math.random() * H,
      vx:     (Math.random() - 0.5) * 0.3,
      vy:     (Math.random() - 0.5) * 0.3,
      r:      Math.random() * 1.5 + 0.5,
      pulse:  Math.random() * Math.PI * 2,
      accent: Math.random() < 0.12,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Move nodes
    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
      n.pulse += 0.02;
    });

    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a  = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DIST) {
          const opacity  = (1 - dist / CONNECTION_DIST) * 0.18;
          const isAccent = a.accent || b.accent;
          ctx.beginPath();
          ctx.strokeStyle = isAccent ? ACCENT + opacity + ')' : DIM + opacity + ')';
          ctx.lineWidth   = isAccent ? 0.8 : 0.5;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    nodes.forEach(n => {
      const pulse   = Math.sin(n.pulse) * 0.3 + 0.7;
      const opacity = n.accent ? 0.7 * pulse : 0.25 * pulse;
      ctx.beginPath();
      ctx.fillStyle = n.accent ? ACCENT + opacity + ')' : DIM + opacity + ')';
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    });

    animId = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { cancelAnimationFrame(animId); resize(); });
  resize();
  draw();
})();

/* ═══════════════════════════════════════
   NAV — scroll behaviour
═══════════════════════════════════════ */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

/* ═══════════════════════════════════════
   REVEAL ON SCROLL
═══════════════════════════════════════ */
(function () {
  const els = document.querySelectorAll('.reveal, .timeline-item');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        if (e.target.classList.contains('reveal')) obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
})();

/* ═══════════════════════════════════════
   SKILL BARS
═══════════════════════════════════════ */
(function () {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-bar').forEach(bar => {
          bar.style.width = (parseFloat(bar.style.getPropertyValue('--w')) * 100) + '%';
          setTimeout(() => bar.classList.add('animated'), 50);
        });
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.skill-category').forEach(c => obs.observe(c));
})();

/* ═══════════════════════════════════════
   PROJECT DIAGRAMS — Input → System → Output panels
   Used both in project cards (small) and modal (large via class)
═══════════════════════════════════════ */

/* Shared arrow marker snippet — injected once per SVG */
function _arrowDefs(id) {
  return `<defs>
    <marker id="arr-${id}" viewBox="0 0 10 10" refX="8" refY="5"
      markerWidth="6" markerHeight="6" orient="auto">
      <path d="M2 2L8 5L2 8" fill="none" stroke="rgba(232,140,48,0.85)"
        stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    </marker>
  </defs>`;
}

/* ── Reusable panel builder ──────────────────────────────────────
   Each panel: a rounded rect + header label + body lines
   x, y = top-left; w, h = dimensions
   label = small ALL-CAPS tag above
   lines = array of text rows inside
   variant: 'input' | 'system' | 'output'
*/
function _panel(x, y, w, h, label, lines, variant) {
  const colors = {
    input:  { bg: 'rgba(255,255,255,0.035)', stroke: 'rgba(255,255,255,0.14)', tag: 'rgba(255,255,255,0.3)',  tagBg: 'rgba(255,255,255,0.06)' },
    system: { bg: 'rgba(232,140,48,0.07)',   stroke: 'rgba(232,140,48,0.4)',   tag: 'rgba(232,140,48,0.9)',   tagBg: 'rgba(232,140,48,0.12)' },
    output: { bg: 'rgba(255,255,255,0.025)', stroke: 'rgba(255,255,255,0.12)', tag: 'rgba(255,255,255,0.3)',  tagBg: 'rgba(255,255,255,0.06)' },
  };
  const c  = colors[variant] || colors.input;
  const cx = x + w / 2;
  const tagY = y + 16;
  const lineSpacing = 16;
  const firstLineY = tagY + 26;

  const tagW = label.length * 6.5 + 16;
  const tagX = cx - tagW / 2;

  const textRows = lines.map((line, i) => {
    const isFirst = i === 0;
    return `<text x="${cx}" y="${firstLineY + i * lineSpacing}"
      text-anchor="middle" font-family="monospace"
      font-size="${isFirst ? 10 : 9}"
      fill="${isFirst ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.38)'}">${line}</text>`;
  }).join('');

  return `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7"
      fill="${c.bg}" stroke="${c.stroke}" stroke-width="0.8"/>
    <rect x="${tagX}" y="${y - 9}" width="${tagW}" height="18" rx="4"
      fill="${c.tagBg}" stroke="${c.stroke}" stroke-width="0.6"/>
    <text x="${cx}" y="${y + 4}" text-anchor="middle"
      font-family="monospace" font-size="7.5" font-weight="bold"
      fill="${c.tag}">${label}</text>
    ${textRows}`;
}

/* ── Arrow connector ──────────────────────────────────────────── */
function _arrow(x1, y, x2, id) {
  return `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}"
    stroke="rgba(232,140,48,0.75)" stroke-width="1.2"
    marker-end="url(#arr-${id})" fill="none"/>`;
}

/* ── Main diagram renderer ──────────────────────────────────────
   context: 'card' = compact (fits 320px column)
            'modal' = full-width, taller, more detail
*/
function renderProjectDiagram(p, context = 'card') {
  const isModal = context === 'modal';

  /* ── BMS / Kalman Filter ─────────────────────────────────── */
  if (p.id === 'p1') {
    if (isModal) {
      return `
        <svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;opacity:1;display:block">
          ${_arrowDefs(p.id)}
          ${_panel(12, 28, 148, 144, 'INPUT', ['Li-Ion Cell', '─────────────', 'V_terminal(t)', 'I_measured(t)', 'T_ambient'], 'input')}
          ${_panel(196, 28, 168, 144, 'SYSTEM', ['EKF · MATLAB/Python', '─────────────', 'Equiv. circuit model', 'Predict → Measure', 'Covariance update'], 'system')}
          ${_panel(400, 28, 148, 144, 'OUTPUT', ['SoC Estimate', '─────────────', 'State of Charge %', 'SoH degradation', 'Remaining range'], 'output')}
          ${_arrow(160, 100, 193, p.id + 'a')} ${_arrow(364, 100, 397, p.id + 'b')}
        </svg>`;
    }
    return `<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;opacity:1;display:block">${_arrowDefs(p.id)}${_panel(4, 30, 82, 108, 'INPUT', ['Li-Ion Cell', 'V / I / Temp'], 'input')}${_panel(109, 30, 82, 108, 'SYSTEM', ['EKF Filter', 'MATLAB/Python'], 'system')}${_panel(214, 30, 82, 108, 'OUTPUT', ['SoC %', 'SoH / Range'], 'output')}${_arrow(86, 84, 106, p.id + 'a')}${_arrow(191, 84, 211, p.id + 'b')}</svg>`;
  }

  /* ── Signal Analyzer ──────────────────────────────────────── */
  if (p.id === 'p2') {
    if (isModal) {
      return `
        <svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;opacity:1;display:block">
          ${_arrowDefs(p.id)}
          ${_panel(12, 28, 148, 144, 'INPUT', ['Raw Waveform', '─────────────', 'Square / sawtooth', 'Sampling rate fs', 'N harmonics'], 'input')}
          ${_panel(196, 28, 168, 144, 'SYSTEM', ['Fourier · MATLAB', '─────────────', 'Coeff. computation', 'Series truncation', 'Spectral analysis'], 'system')}
          ${_panel(400, 28, 148, 144, 'OUTPUT', ['Reconstruction', '─────────────', 'f(t) approx. plot', 'MSE error metric', 'Gibbs phenomenon'], 'output')}
          ${_arrow(160, 100, 193, p.id + 'a')} ${_arrow(364, 100, 397, p.id + 'b')}
        </svg>`;
    }
    return `<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;opacity:1;display:block">${_arrowDefs(p.id)}${_panel(4, 30, 82, 108, 'INPUT', ['Waveform', 'N harmonics'], 'input')}${_panel(109, 30, 82, 108, 'SYSTEM', ['Fourier DSP', 'Coefficients'], 'system')}${_panel(214, 30, 82, 108, 'OUTPUT', ['f(t) plot', 'MSE metric'], 'output')}${_arrow(86, 84, 106, p.id + 'a')}${_arrow(191, 84, 211, p.id + 'b')}</svg>`;
  }

  /* ── RC Circuit Simulation ────────────────────────────────── */
  if (p.id === 'p3') {
    if (isModal) {
      return `
        <svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;opacity:1;display:block">
          ${_arrowDefs(p.id)}
          ${_panel(12, 28, 148, 144, 'INPUT', ['RC Circuit', '─────────────', 'Step voltage V_in', 'R, C values', 'Initial conditions'], 'input')}
          ${_panel(196, 28, 168, 144, 'SYSTEM', ['Transient · MATLAB', '─────────────', 'Thévenin equiv.', 'τ = R·C calc.', 'Analytical solution'], 'system')}
          ${_panel(400, 28, 148, 144, 'OUTPUT', ['Time Response', '─────────────', 'V_C(t) curve', 'I(t) curve', 'Steady-state val.'], 'output')}
          ${_arrow(160, 100, 193, p.id + 'a')} ${_arrow(364, 100, 397, p.id + 'b')}
        </svg>`;
    }
    return `<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;opacity:1;display:block">${_arrowDefs(p.id)}${_panel(4, 30, 82, 108, 'INPUT', ['RC Circuit', 'V_in / R / C'], 'input')}${_panel(109, 30, 82, 108, 'SYSTEM', ['Transient', 'MATLAB τ=RC'], 'system')}${_panel(214, 30, 82, 108, 'OUTPUT', ['V_C(t) curve', 'Steady-state'], 'output')}${_arrow(86, 84, 106, p.id + 'a')}${_arrow(191, 84, 211, p.id + 'b')}</svg>`;
  }

  /* ── Resistor Color Reader ────────────────────────────────── */
  if (p.id === 'p4') {
    if (isModal) {
      return `
        <svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;opacity:1;display:block">
          ${_arrowDefs(p.id)}
          ${_panel(12, 28, 148, 144, 'INPUT', ['Color Bands', '─────────────', '4 or 5 band std.', 'Color sequence', 'Tolerance band'], 'input')}
          ${_panel(196, 28, 168, 144, 'SYSTEM', ['MATLAB Script', '─────────────', 'Array matching', 'Multiplier calc.', 'GUI visualization'], 'system')}
          ${_panel(400, 28, 148, 144, 'OUTPUT', ['Resistance', '─────────────', 'Ohmic value (Ω)', 'Tolerance range', 'Validation alert'], 'output')}
          ${_arrow(160, 100, 193, p.id + 'a')} ${_arrow(364, 100, 397, p.id + 'b')}
        </svg>`;
    }
    return `<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;opacity:1;display:block">${_arrowDefs(p.id)}${_panel(4, 30, 82, 108, 'INPUT', ['Color Bands', 'Sequence input'], 'input')}${_panel(109, 30, 82, 108, 'SYSTEM', ['MATLAB', 'Logic Matching'], 'system')}${_panel(214, 30, 82, 108, 'OUTPUT', ['Resistance Ω', 'Tolerance %'], 'output')}${_arrow(86, 84, 106, p.id + 'a')}${_arrow(191, 84, 211, p.id + 'b')}</svg>`;
  }

  /* ── Light Alert System ───────────────────────────────────── */
  if (p.id === 'p5') {
    if (isModal) {
      return `
        <svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;opacity:1;display:block">
          ${_arrowDefs(p.id)}
          ${_panel(12, 28, 148, 144, 'INPUT', ['LDR Sensor', '─────────────', 'Analog voltage', 'Ambient light', 'Calibration ref.'], 'input')}
          ${_panel(196, 28, 168, 144, 'SYSTEM', ['Arduino C++', '─────────────', 'ADC conversion', 'Threshold logic', 'I2C management'], 'system')}
          ${_panel(400, 28, 148, 144, 'OUTPUT', ['Actuators', '─────────────', 'LCD 16x2 Display', 'Piezo Buzzer PWM', 'Real-time alert'], 'output')}
          ${_arrow(160, 100, 193, p.id + 'a')} ${_arrow(364, 100, 397, p.id + 'b')}
        </svg>`;
    }
    return `<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;opacity:1;display:block">${_arrowDefs(p.id)}${_panel(4, 30, 82, 108, 'INPUT', ['LDR Sensor', 'Analog Light'], 'input')}${_panel(109, 30, 82, 108, 'SYSTEM', ['Arduino C++', 'Threshold Logic'], 'system')}${_panel(214, 30, 82, 108, 'OUTPUT', ['I2C LCD', 'Buzzer PWM'], 'output')}${_arrow(86, 84, 106, p.id + 'a')}${_arrow(191, 84, 211, p.id + 'b')}</svg>`;
  }

  /* ── GridSense (WIP) ──────────────────────────────────────── */
  if (p.id === 'p6') {
    if (isModal) {
      return `
        <svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;opacity:1;display:block">
          ${_arrowDefs(p.id)}
          ${_panel(12, 28, 148, 144, 'INPUT', ['Grid Data', '─────────────', 'Sensor telemetry', 'Time-series data', 'Power flow status'], 'input')}
          ${_panel(196, 28, 168, 144, 'SYSTEM', ['Python Pipeline', '─────────────', 'Pandas ingestion', 'Statistical model', 'Anomaly detect.'], 'system')}
          ${_panel(400, 28, 148, 144, 'OUTPUT', ['Analytics', '─────────────', 'Predictive insight', 'Data vis. plots', 'Grid optimization'], 'output')}
          ${_arrow(160, 100, 193, p.id + 'a')} ${_arrow(364, 100, 397, p.id + 'b')}
        </svg>`;
    }
    return `<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;opacity:1;display:block">${_arrowDefs(p.id)}${_panel(4, 30, 82, 108, 'INPUT', ['Grid Telemetry', 'Time-series'], 'input')}${_panel(109, 30, 82, 108, 'SYSTEM', ['Python EDA', 'Data Pipeline'], 'system')}${_panel(214, 30, 82, 108, 'OUTPUT', ['Insights', 'Visualizations'], 'output')}${_arrow(86, 84, 106, p.id + 'a')}${_arrow(191, 84, 211, p.id + 'b')}</svg>`;
  }

  /* ── FaceGuard (ESP32-S3) ────────────────────────────────── */
  if (p.id === 'p7') {
    if (isModal) {
      return `
        <svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;opacity:1;display:block">
          ${_arrowDefs(p.id)}
          ${_panel(12, 28, 148, 144, 'INPUT', ['ESP32-S3 Camera', '─────────────', 'MJPEG stream', 'OV2640 sensor', 'Button / LDR'], 'input')}
          ${_panel(196, 28, 168, 144, 'SYSTEM', [p.archShort || 'Edge AI', '─────────────', 'On-device recognition', 'Enrollment & DB', 'HTTP API / Dashboard'], 'system')}
          ${_panel(400, 28, 148, 144, 'OUTPUT', ['Access Control', '─────────────', 'Remote Unlock', 'Access Logs', 'Live Stream'], 'output')}
          ${_arrow(160, 100, 193, p.id + 'a')} ${_arrow(364, 100, 397, p.id + 'b')}
        </svg>`;
    }
    return `<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;opacity:1;display:block">${_arrowDefs(p.id)}${_panel(4, 30, 82, 108, 'INPUT', ['ESP32 Camera', 'MJPEG'], 'input')}${_panel(109, 30, 82, 108, 'SYSTEM', [p.archShort || 'Edge AI'], 'system')}${_panel(214, 30, 82, 108, 'OUTPUT', ['Unlock', 'Logs'], 'output')}${_arrow(86, 84, 106, p.id + 'a')}${_arrow(191, 84, 211, p.id + 'b')}</svg>`;
  }

  // Default placeholder to avoid printing 'undefined' when no diagram exists
  return `<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;opacity:0.001;display:block"></svg>`;
}

/* ═══════════════════════════════════════
   RENDER PROJECTS & SHOW MORE LOGIC
═══════════════════════════════════════ */
(function () {
  const container = document.getElementById('projects-list');

  PROJECTS.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal' + (i > 0 ? ' reveal-delay-' + (i % 3) : '');
    
    // Oculta projetos a partir do índice 3 inicialmente
    if (i >= 3) {
      card.style.display = 'none';
      card.classList.add('extra-project');
    }

    card.innerHTML = `
      <div class="project-card-inner">
        <div class="project-info">
          <div class="project-num">${p.num} — ${p.tags[0]}</div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.desc}</p>
          <div class="project-tags">
            ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>
          <div class="project-metrics">
            ${p.metrics.map(m => `
              <div class="metric">
                <div class="metric-val">${m.val}</div>
                <div class="metric-label">${m.label}</div>
              </div>`).join('')}
          </div>
        </div>
        <div class="project-visual">
          ${renderProjectDiagram(p)}
          ${p.repo ? `<a class="project-arrow" href="${p.repo}" target="_blank" rel="noopener">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 13L13 3M6 3h7v7"/>
            </svg>
          </a>` : `<div class="project-arrow">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 13L13 3M6 3h7v7"/>
            </svg>
          </div>`}
        </div>
      </div>`;
    card.addEventListener('click', () => openModal(p));
    container.appendChild(card);
  });

  // Lógica do botão Show More
  const btn = document.getElementById('show-more-projects');
  if (btn) {
    let isExpanded = false;
    btn.addEventListener('click', () => {
      isExpanded = !isExpanded;
      const extraCards = document.querySelectorAll('.extra-project');
      
      extraCards.forEach(card => {
        if (isExpanded) {
          card.style.display = 'block';
          // Pequeno delay para a animação do CSS aplicar corretamente
          setTimeout(() => card.classList.add('visible'), 50);
        } else {
          card.style.display = 'none';
          card.classList.remove('visible');
        }
      });
      
      btn.innerHTML = isExpanded
        ? 'Show less projects <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-left: 0.5rem; width: 14px; height: 14px; vertical-align: middle;"><path d="M12 10L8 6l-4 4"/></svg>'
        : 'Show more projects <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-left: 0.5rem; width: 14px; height: 14px; vertical-align: middle;"><path d="M4 6l4 4 4-4"/></svg>';
    });
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.05 });
  document.querySelectorAll('.project-card:not(.extra-project)').forEach(c => obs.observe(c));
})();

/* ═══════════════════════════════════════
   MODAL
═══════════════════════════════════════ */
function openModal(p) {
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');

  content.innerHTML = `
    <div class="modal-header">
      <div style="font-family:monospace;font-size:0.68rem;color:var(--text-dim);margin-bottom:0.5rem;letter-spacing:0.06em">
        ${p.num} — ${p.tags.join(' · ')}
      </div>
      <h2 style="font-size:1.6rem;font-weight:400;letter-spacing:-0.025em;line-height:1.2;padding-right:3rem">
        ${p.title}
      </h2>
      <button class="modal-close" onclick="closeModal()" aria-label="Close">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M4 4l8 8M12 4l-8 8"/>
        </svg>
      </button>
    </div>
    <div class="modal-body">
      <div class="modal-metrics">
        ${p.metrics.map(m => `
          <div class="modal-metric">
            <div class="modal-metric-val">${m.val}</div>
            <div class="modal-metric-label">${m.label}</div>
          </div>`).join('')}
      </div>
      <div class="modal-section">
        <div class="modal-section-title">Summary</div>
        <p class="modal-text">${p.overview}</p>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">The Problem</div>
        <p class="modal-text">${p.problem}</p>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">Solution Architecture</div>
        <div class="modal-arch" style="padding:1.5rem 1rem">
          ${renderProjectDiagram(p, 'modal')}
          <p class="modal-text" style="margin-top:1.25rem;font-size:0.82rem">${p.architecture}</p>
        </div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">Results</div>
        <p class="modal-text">${p.results}</p>
      </div>
      <div class="modal-links">
        <a href="${p.repo || 'https://github.com/VoIkmer'}" target="_blank" class="modal-link" rel="noopener" aria-label="View repository on GitHub">
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          View on GitHub
        </a>
        ${p.id === 'p7' ? `
        <a href="https://www.youtube.com/watch?v=lPA_LZTQk2s&pp=ygUJZmFjZWd1YXJk" target="_blank" class="modal-link youtube" rel="noopener" aria-label="Watch project video on YouTube">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1-2.9-.2-7.2-.2-7.2-.2s-4.3 0-7.2.2c-.5.1-1.4.1-2.1 1-.6.7-.8 2.3-.8 2.3S2 7.9 2 9.7v2.6c0 1.8.6 3.5.6 3.5s.2 1.6.8 2.3c.8.9 1.8.9 2.3 1 1.7.1 7.1.2 7.1.2s4.3 0 7.2-.2c.5-.1 1.4-.1 2.1-1 .6-.7.8-2.3.8-2.3s.6-1.7.6-3.5V9.7c0-1.8-.6-3.5-.6-3.5zM9.8 15.3V8.7l6.2 3.3-6.2 3.3z"/>
          </svg>
          Watch Video
        </a>
        ` : ''}
      </div>
    </div>`;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

window.closeModal = function () {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
};

document.getElementById('modal-overlay').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ═══════════════════════════════════════
   RENDER TIMELINE
═══════════════════════════════════════ */
(function () {
  const tl = document.getElementById('timeline-list');

  TIMELINE.forEach(item => {
    const div = document.createElement('div');
    div.className = 'timeline-item';
    div.innerHTML = `
      <div class="timeline-dot${item.accent ? ' accent' : ''}"></div>
      <div class="timeline-year">${item.year}</div>
      <div class="timeline-title">${item.title}</div>
      <div class="timeline-desc">${item.desc}</div>`;
    tl.appendChild(div);
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.timeline-item').forEach(el => obs.observe(el));
})();

/* ═══════════════════════════════════════
   RENDER CERTIFICATIONS
═══════════════════════════════════════ */
(function () {
  const grid = document.getElementById('cert-grid');

  CERTIFICATIONS.forEach((cert, i) => {
    const card = document.createElement('div');
    card.className = 'blog-card' + (i > 1 ? ` reveal-delay-${(i % 2) + 1}` : '');
    card.innerHTML = `
      <div class="blog-cat">${cert.issuer}</div>
      <div class="blog-title">${cert.title}</div>
      <div class="blog-excerpt">${cert.notes || ''}</div>
      <div class="blog-meta">${cert.date}</div>`;
    // Mark visible immediately (dynamic insert happens after observer runs)
    card.classList.add('visible');
    grid.appendChild(card);
  });
})();
