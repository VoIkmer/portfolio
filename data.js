/* ═══════════════════════════════════════
   SITE DATA — edit content here.
   Loaded before script.js.
═══════════════════════════════════════ */

/* Site settings.
   goatcounter: your GoatCounter site code (e.g. 'carlos-portfolio' for carlos-portfolio.goatcounter.com).
   Leave it empty ('') to keep analytics completely off. */
const SITE = { goatcounter: 'voikmer' };

/* Project filter categories (shown as chips above the project list) */
const PROJECT_FILTERS = [
  { id: 'all',     label: 'All' },
  { id: 'embedded', label: 'Embedded & Electronics' },
  { id: 'control', label: 'Control & Modeling' },
  { id: 'data',    label: 'Signals & Data' },
];

/* Diagram format (rendered as Input → System → Output):
   diagram.in / sys / out : { title, lines[] }   → large version (modal)
   diagram.card           : { in[], sys[], out[] } → compact version (card)

   Optional per project:
   badge  — highlighted pill (e.g. an award)
   video  — YouTube video id, embedded in the modal
   cardImage — { src, alt } real image shown in the card instead of the diagram
   colorTable — [{ name, hex, value }] table of supported colors shown in the modal
   photos — [{ src, alt, caption, narrow }] gallery shown in the modal (narrow: true for portrait images)
*/
const PROJECTS = [
  {
    id: 'faceguard',
    category: 'embedded',
    title: 'FaceGuard — Smart Lock with Facial Recognition',
    repo: 'https://github.com/VoIkmer/FaceGuard',
    badge: '2nd place · 2026 IEEE SSCS Arduino Contest',
    video: 'lPA_LZTQk2s',
    desc: 'Facial-recognition based smart lock using ESP32-S3 with a web dashboard for monitoring and remote control.',
    tags: ['ESP32-S3', 'C++', 'Embedded', 'Dashboard'],
    metrics: [{ val: '20–24', label: 'FPS (stream)' }, { val: '5–10 s', label: 'Recognition time' }, { val: '6 × 90%+', label: 'Majority-vote checks' }],
    overview: 'Embedded firmware developed for face detection and recognition using the ESP32-S3 microcontroller. The system features a local web dashboard for real-time video streaming and remote smart lock control.',
    problem: 'Designing a secure, locally-processed facial access control system that maintains a low false-positive rate while operating entirely on constrained embedded hardware, eliminating the need for cloud processing.',
    architecture: 'An ESP32-S3 camera server (MJPEG streaming) combined with an on-device facial recognition pipeline (Edge AI). During enrollment several photos of the person are captured and the algorithm stores their face vectors. To unlock, the system runs 6 verifications against the stored vectors and releases the lock only if a majority of them reach a trust factor of 90% or higher. The embedded backend is integrated with a responsive web dashboard (HTML/CSS/JS) for remote unlocking, user enrollment, and access log management.',
    results: 'A fully working prototype with real-time facial recognition, local user enrollment, activity logging and remote unlocking through the local network dashboard. The false-positive rate was initially high; it was reduced by raising the verification to 6 checks and accepting only matches with a trust factor of 90% or more, requiring a majority of passing checks before the lock opens. Tested with about 4 enrolled users (2 appear in the demo video); streaming runs at 20–24 FPS and a full recognition takes roughly 5–10 seconds.',
    cardImage: { src: 'content/projects/faceguard-poster.jpg', alt: 'FaceGuard poster for the 2026 SSCS Arduino Contest at UFBA, with the ESP32-S3 camera board in the background' },
    photos: [
      { src: 'content/projects/faceguard-dashboard.jpg', alt: 'FaceGuard web dashboard with live camera stream, access log and counters', caption: 'Local web dashboard: live stream, enrollment, access log and counters.' },
      { src: 'content/projects/faceguard-prototype.jpg', alt: 'FaceGuard assembled prototype', caption: 'Assembled prototype.', narrow: true }
    ],
    diagram: {
      in:  { title: 'ESP32-S3 Camera', lines: ['MJPEG stream', 'OV2640 sensor', 'Button / LDR'] },
      sys: { title: 'Edge AI & Local Server', lines: ['On-device recognition', 'Enrollment & DB', 'HTTP API / Dashboard'] },
      out: { title: 'Access Control', lines: ['Remote Unlock', 'Access Logs', 'Live Stream'] },
      card: { in: ['ESP32 Camera', 'MJPEG'], sys: ['Edge AI', 'Local server'], out: ['Unlock', 'Logs'] }
    }
  },
  {
    id: 'bms-soc',
    category: 'control',
    title: 'Battery Management System (BMS)',
    repo: 'https://github.com/VoIkmer/BMS-SoC-Estimator',
    desc: 'EKF-based State of Charge (SoC) estimator for Li-Ion cells, enabling predictive monitoring and intelligent battery analytics.',
    tags: ['MATLAB', 'Python', 'BMS', 'Kalman Filter'],
    metrics: [{ val: '~250 s', label: 'EKF convergence' }, { val: 'MSE < 10⁻⁴', label: 'Python vs MATLAB' }, { val: 'Li-Ion', label: 'Simulated cell' }],
    overview: 'A solution for precise State of Charge estimation, critical for electric vehicles and smart grids where measurement error has high cost.',
    problem: 'Direct SoC measurement is not possible in operation; traditional Coulomb counting accumulates drift over time. On top of that, Li-Ion cells have a very flat open-circuit voltage curve between 20% and 80% charge, where a 0.01 V change can mean a 10% difference in SoC, and under load the terminal voltage also drops through the internal resistance R0.',
    architecture: 'State-space equivalent-circuit model implemented in MATLAB and Python. Measurements of voltage and current feed an Extended Kalman Filter (EKF) to correct estimates continuously, which keeps the SoC estimate accurate even inside the flat OCV region and under heavy load.',
    results: 'Starting from a deliberately wrong initial SoC (about 64% against a true 80%), the EKF converges to the true value in roughly 250 s and keeps tracking it. The model was cross-validated with a MATLAB script (validation/ folder): the Python and MATLAB outputs agree with a mean squared error below 10⁻⁴, confirming the discrete-time implementation of the differential equations. Validated on simulated data, ready for integration with monitoring hardware.',
    photos: [
      { src: 'content/projects/bms-soc-ekf.png', alt: 'Real SoC (green) versus EKF estimate (dashed red) over 1000 seconds, starting from a wrong initial value', caption: 'Real SoC vs EKF estimate: the filter converges from a wrong initial value.' }
    ],
    diagram: {
      in:  { title: 'Li-Ion Cell', lines: ['V_terminal(t)', 'I_measured(t)', 'T_ambient'] },
      sys: { title: 'EKF · MATLAB/Python', lines: ['Equiv. circuit model', 'Predict → Measure', 'Covariance update'] },
      out: { title: 'SoC Estimate', lines: ['State of Charge %', 'SoH degradation', 'Remaining range'] },
      card: { in: ['Li-Ion Cell', 'V / I / Temp'], sys: ['EKF Filter', 'MATLAB/Python'], out: ['SoC %', 'SoH / Range'] }
    }
  },
  {
    id: 'dc-motor',
    category: 'control',
    title: 'Non-Linear DC Motor Simulation',
    repo: 'https://github.com/VoIkmer/Non-Linear_DC_Motor_Simulation',
    desc: 'Modeling, linearization and PID control of a DC motor driving a fan with a non-linear aerodynamic load, plus sampling and aliasing analysis.',
    tags: ['Python', 'Control Systems', 'Jupyter', 'Simulation'],
    metrics: [{ val: '27.94 rad/s', label: 'Operating point ω₀' }, { val: '1.473 s', label: 'Rise time' }, { val: '0', label: 'Step steady-state error' }],
    overview: 'A Jupyter-based study of a DC motor with a non-linear aerodynamic (fan) load: from the physical model to a linearized plant, controller design and discrete-time effects.',
    problem: 'The fan load torque grows with the square of the speed, so the motor is not a linear system. Classical control tools only apply after linearizing around a well-defined operating point.',
    architecture: 'The armature and mechanical equations are solved for the steady-state operating point, linearized into a state-space model and converted to a transfer function. PID gains are then obtained by pole placement, and controllers (P, PI, PD, PID) are compared. The notebook closes with zero-order-hold reconstruction and aliasing illustrations. Reusable helpers live in a Python module built on the python-control library.',
    results: 'Step, ramp and parabola responses, a P/PI/PD/PID comparison, ZOH reconstruction and an aliasing illustration, all reproducible from the notebook and saved as figures in the repository. At the operating point ω₀ = 27.94 rad/s the step response has a rise time of 1.473 s and zero steady-state error; the ramp and parabola errors are plotted in the notebook.',
    photos: [
      { src: 'content/projects/dc-motor-controllers.png', alt: 'Step responses of the P, PI, PD and PID controllers compared with the reference of 1.0', caption: 'Step response of the P, PI, PD and PID controllers: PD and PID settle quickly on the reference, while P and PI oscillate.' }
    ],
    diagram: {
      in:  { title: 'DC Motor + Fan', lines: ['Ra, La, Km, J, Bm', 'Load torque k·ω²', 'Armature voltage Va'] },
      sys: { title: 'Linearize & Control', lines: ['Operating point ω0', 'State-space / TF', 'PID pole placement'] },
      out: { title: 'Responses', lines: ['Step / ramp / parab.', 'P, PI, PD, PID compare', 'ZOH & aliasing'] },
      card: { in: ['DC Motor', 'Fan load k·ω²'], sys: ['Linearization', 'PID design'], out: ['Step response', 'ZOH / aliasing'] }
    }
  },
  {
    id: 'signal-analyzer',
    category: 'data',
    title: 'Signal Analyzer',
    repo: 'https://github.com/VoIkmer/Signal-Analyzer',
    desc: 'Digital signal processing system for harmonic reconstruction and spectral analysis with automated error metrics.',
    tags: ['MATLAB', 'DSP', 'Fourier', 'Signals'],
    metrics: [{ val: '7.36×10⁻³⁰', label: 'MSE (example signal)' }, { val: 'Arbitrary', label: 'Input waveforms' }, { val: 'FFT', label: 'Reconstruction' }],
    overview: 'Processing and reconstructing complex waveforms from harmonic components to support telecom and power-control analysis.',
    problem: 'Visualize and quantify how truncating the harmonic series affects distortion in the reconstructed signal.',
    architecture: 'MATLAB code decomposing waveforms, computing Fourier coefficients and plotting interactive series and spectrum visualizations.',
    results: 'Accurate visualization of Gibbs phenomenon and automated mean-square error calculations for validation. Tested with many different waveforms: standard square and sawtooth waves as well as completely arbitrary signals. On the example signal the FFT reconstruction overlaps the original and reaches an MSE of 7.36×10⁻³⁰, effectively zero numerical error.',
    photos: [
      { src: 'content/projects/signal-reconstruction.png', alt: 'Original signal (blue) and FFT approximation (red dashed) overlapping over a 10 ms window', caption: 'Original signal (blue) vs FFT approximation (red): the curves overlap across the whole window.' },
      { src: 'content/projects/signal-mse.png', alt: 'Squared error over time, with magnitude around 1e-28 and an MSE of 7.3581e-30', caption: 'Squared error over time. MSE = 7.36 × 10⁻³⁰, numerically zero.' }
    ],
    diagram: {
      in:  { title: 'Raw Waveform', lines: ['Square / sawtooth', 'Sampling rate fs', 'N harmonics'] },
      sys: { title: 'Fourier · MATLAB', lines: ['Coeff. computation', 'Series truncation', 'Spectral analysis'] },
      out: { title: 'Reconstruction', lines: ['f(t) approx. plot', 'MSE error metric', 'Gibbs phenomenon'] },
      card: { in: ['Waveform', 'N harmonics'], sys: ['Fourier DSP', 'Coefficients'], out: ['f(t) plot', 'MSE metric'] }
    }
  },
  {
    id: 'rc-circuit',
    category: 'control',
    title: 'RC Circuit Simulation',
    repo: 'https://github.com/VoIkmer/RC-Circuit-Simulation',
    desc: 'Simulator for dynamic analysis of RC circuits with automated time-constant calculations and temporal validation.',
    tags: ['MATLAB', 'Python', 'RC Circuits', 'Simscape'],
    metrics: [{ val: '100 ms', label: 'Time constant τ' }, { val: '1 kΩ · 100 µF', label: 'R and C' }, { val: '< 0.01%', label: 'Sim. vs theory error' }],
    overview: 'A computational tool to predict dynamic behavior of circuits under step inputs, useful for stability analysis and filter design.',
    problem: 'Manual analysis of first-order circuits is error-prone and hard to visualize quickly.',
    architecture: 'A series RC circuit built in MathWorks Simscape (R = 1 kΩ, C = 100 µF, V₀ = 5 V, τ = 100 ms). The simulation data is exported and analyzed in Python, which compares the simulated curve with the analytical solution V(t) = V₀(1 − e^(−t/τ)) and generates an automated PDF report.',
    results: 'The simulated charging curve matches the theoretical one: the mean error between simulation and theory is below 0.01% (0.0007% in the reported run), and the capacitor reaches 63.2% of V₀ at t = τ = 100 ms as expected.',
    photos: [
      { src: 'content/projects/rc-charging.png', alt: 'Capacitor charging curve from Simscape reaching 5 V, with the point t = tau = 100 ms at 63.2% of V0 marked', caption: 'Simscape simulation vs theoretical charging curve (R = 1 kΩ, C = 100 µF, τ = 100 ms). Mean error: 0.0007%.' }
    ],
    diagram: {
      in:  { title: 'RC Circuit', lines: ['Step V₀ = 5 V', 'R = 1 kΩ', 'C = 100 µF'] },
      sys: { title: 'Simscape + Python', lines: ['Simulation export', 'Analytical V(t)', 'τ = R·C check'] },
      out: { title: 'Validation', lines: ['V_C(t) curve', 'Error < 0.01%', 'Automated PDF report'] },
      card: { in: ['RC Circuit', 'R / C / V₀'], sys: ['Simscape', 'Python analysis'], out: ['V_C(t) curve', 'Error < 0.01%'] }
    }
  },
  {
    id: 'resistor-reader',
    category: 'embedded',
    title: 'Resistor Color Reader',
    repo: 'https://github.com/VoIkmer/Resistor-Color-Reader',
    desc: 'MATLAB-based tool to calculate electrical resistance from color bands. Supports 4 and 5-band resistors with graphical visualization.',
    tags: ['MATLAB', 'Electronics', 'Calculator'],
    metrics: [{ val: '4 & 5', label: 'Bands' }, { val: '12', label: 'Colors supported' }, { val: 'IEC 60062', label: 'Standard' }],
    overview: 'A computational tool designed to quickly and accurately decode standard resistor color bands into resistance values and tolerances.',
    problem: 'Reading multi-band resistors manually in laboratory settings is often slow and prone to misinterpretation.',
    architecture: 'MATLAB script (R2020a or later) mapping color names (black, brown, red, orange, yellow, green, blue, violet, gray, white, gold, silver) to numerical values, computing multipliers and tolerance, and plotting a representative 2D graphical resistor.',
    results: 'Open-source utility available for engineering students to validate their physical components instantly. For example, yellow-violet-red-gold returns a 4700 Ω resistor with ±5% tolerance, drawn band by band with each numeric value below it.',
    colorTable: [
      { name: 'black', hex: '#000000', value: '0' }, { name: 'brown', hex: '#7b3f00', value: '1' },
      { name: 'red', hex: '#e02020', value: '2' }, { name: 'orange', hex: '#ff8c00', value: '3' },
      { name: 'yellow', hex: '#ffe000', value: '4' }, { name: 'green', hex: '#1faa3c', value: '5' },
      { name: 'blue', hex: '#2060e0', value: '6' }, { name: 'violet', hex: '#8a2be2', value: '7' },
      { name: 'gray', hex: '#9a9a9a', value: '8' }, { name: 'white', hex: '#f5f5f5', value: '9' },
      { name: 'gold', hex: '#d4af37', value: '-1 (multiplier/tolerance)' }, { name: 'silver', hex: '#c0c0c0', value: '-2 (multiplier/tolerance)' }
    ],
    photos: [
      { src: 'content/projects/resistor-visualization.png', alt: 'Four colored bands (yellow, violet, red, gold) with the result: resistor of 4700 ohms, plus or minus 5%', caption: 'Output example: each color band with its value, and the final resistance and tolerance on top.' }
    ],
    diagram: {
      in:  { title: 'Color Bands', lines: ['4 or 5 band std.', 'Color sequence', 'Tolerance band'] },
      sys: { title: 'MATLAB Script', lines: ['Array matching', 'Multiplier calc.', 'GUI visualization'] },
      out: { title: 'Resistance', lines: ['Ohmic value (Ω)', 'Tolerance range', 'Validation alert'] },
      card: { in: ['Color Bands', 'Sequence input'], sys: ['MATLAB', 'Logic Matching'], out: ['Resistance Ω', 'Tolerance %'] }
    }
  },
  {
    id: 'light-alert',
    category: 'embedded',
    title: 'Light Alert System',
    repo: 'https://github.com/VoIkmer/Light-Alert-System',
    desc: 'Light intensity monitoring system using an LDR sensor, I2C LCD display, and buzzer alarm.',
    tags: ['C++', 'Arduino', 'Embedded', 'Sensors'],
    metrics: [{ val: '< 1.00 V', label: 'Alarm threshold' }, { val: '1000 Hz', label: 'Buzzer tone' }, { val: '10-bit', label: 'ADC resolution' }],
    overview: 'Project developed as a practical activity for the probationary period at the Onda Elétrica student entity.',
    problem: 'Need for a local, real-time alert mechanism triggered by specific environmental lighting conditions.',
    architecture: 'C++ firmware reads the voltage across the LDR through the Arduino 10-bit ADC (0–1023) and scales it to V_LDR = 10 × ADC / 1023. At every cycle it classifies the environment into three states: Dark (V_LDR < 1.00 V, buzzer on at 1000 Hz), Medium light (1.00 V ≤ V_LDR < 2.30 V, alarm off) and Light (V_LDR ≥ 2.30 V, alarm off), and shows the reading on an I2C LCD.',
    results: 'Functional hardware prototype validating embedded programming logic and physical hardware integration.',
    diagram: {
      in:  { title: 'LDR Sensor', lines: ['Analog voltage', 'Ambient light', 'Calibration ref.'] },
      sys: { title: 'Arduino C++', lines: ['ADC conversion', 'Threshold logic', 'I2C management'] },
      out: { title: 'Actuators', lines: ['LCD 16x2 Display', 'Piezo Buzzer PWM', 'Real-time alert'] },
      card: { in: ['LDR Sensor', 'Analog Light'], sys: ['Arduino C++', 'Threshold Logic'], out: ['I2C LCD', 'Buzzer PWM'] }
    }
  },
  {
    id: 'gridsense',
    category: 'data',
    title: 'GridSense (WIP)',
    repo: 'https://github.com/VoIkmer/GridSense',
    desc: 'Work in progress: Data-driven sensing and analysis tool built with Python for smart grid applications.',
    tags: ['Python', 'Smart Grids', 'Data Engineering'],
    metrics: [{ val: 'WIP', label: 'Status' }, { val: 'Data', label: 'Pipeline' }, { val: 'Grid', label: 'Domain' }],
    overview: 'An ongoing initiative to process and extract insights from electrical grid data streams using Python analytics.',
    problem: 'Modern smart grids generate vast amounts of telemetry that require automated pipelines to identify trends and anomalies.',
    architecture: 'Python-based ingestion pipeline utilizing Pandas for data cleaning and preliminary statistical modeling.',
    results: 'Under active development. Core data structures and initial EDA (Exploratory Data Analysis) modules are being established.',
    diagram: {
      in:  { title: 'Grid Data', lines: ['Sensor telemetry', 'Time-series data', 'Power flow status'] },
      sys: { title: 'Python Pipeline', lines: ['Pandas ingestion', 'Statistical model', 'Anomaly detect.'] },
      out: { title: 'Analytics', lines: ['Predictive insight', 'Data vis. plots', 'Grid optimization'] },
      card: { in: ['Grid Telemetry', 'Time-series'], sys: ['Python EDA', 'Data Pipeline'], out: ['Insights', 'Visualizations'] }
    }
  }
];

/* Education timeline — newest / ongoing first */
const EDUCATION = [
  {
    year: '2022 – Present',
    title: 'Bachelor of Electrical Engineering',
    desc: 'Federal University of Bahia (UFBA). Deepened calculus, physics, programming fundamentals, circuit theory, signal processing, and control systems.',
    accent: true
  },
  {
    year: '2025.2 – 2026.1',
    title: 'English — CCAA Master Level',
    desc: 'Completed the Master level of the CCAA English program over two semesters, consolidating advanced fluency for academic and professional settings.',
    accent: false
  }
];

/* Work timeline — newest / ongoing first */
const WORK = [
  {
    year: '2026 – Present',
    title: 'Intern — Network Methodology (Neoenergia)',
    desc: 'Hands-on work with data and operations in the network area: advanced Excel for data manipulation, SQL to query and treat databases, Power BI dashboards that deliver dynamic, interactive reports for the processes, and SAP MM. I also write Python scripts to automate process steps, while learning the technical side of electrical machines and the area\'s operating procedures.',
    tags: ['Advanced Excel', 'SQL', 'Power BI', 'SAP MM', 'Python automation'],
    accent: true
  },
  {
    year: 'Nov 2024 – Aug 2026',
    title: 'Student Representative — CAEEL, UFBA',
    desc: 'Full Student Representative at the Academic Center of Electrical Engineering (CAEEL-UFBA), serving as the bridge between the student body and the course coordination.',
    accent: false
  },
  {
    year: 'Mar 2024 – Aug 2026',
    title: 'Onda Elétrica — Member, General Manager, Projects Manager',
    desc: 'Extension project focused on science outreach and electrical engineering education. Member (Mar 2024 – Feb 2025): developed electronics, automation and interactive-experiment projects, helping to solder, assemble and plan them. General Manager (Mar – Sep 2025): internal management, mediation between boards, drafting the bylaws, running meetings and setting internal guidelines. Projects Manager (Sep 2025 – Aug 2026, 2 terms): coordinated about 20 members to build new projects, repair old ones and revive stalled ones. Helped bring 1,500+ students to UFBA in one of our events.',
    tags: ['Team of ~20', '2 terms as Projects Manager', '1,500+ students reached'],
    accent: false
  },
  {
    year: '2021 – 2024',
    title: 'Teaching & Problem Solving',
    desc: 'Instructor at Cursos Discipulus and MSL — taught mathematics and physics problem-solving to strengthen analytical foundations.',
    accent: false
  }
];

/* Awards — highlighted cards shown above the certificates.
   Optional `result` (e.g. placement) is shown as a pill when filled in. */
const AWARDS = [
  {
    issuer: 'IEEE SSCS · WPI',
    title: '2026 IEEE SSCS Arduino Contest',
    date: 'Nov 2026',
    result: '2nd Place',
    project: 'FaceGuard',
    url: 'https://arduino-contest.sscs.ieee.org/winners',
    notes: 'Second place in the contest promoted by the IEEE Solid-State Circuits Society, with FaceGuard — a smart lock with on-device facial recognition built on the ESP32-S3.'
  }
];

/* Certificates — newest first.
   Each card links to the LinkedIn certifications page; replace `url` with a direct credential link if available. */
const CERTIFICATIONS = [
  {
    issuer: 'IEEE SSCS · WPI',
    title: 'Participation in the 2026 IEEE SSCS Arduino Contest',
    date: 'Aug 2026',
    notes: 'Participation certificate in the contest promoted by the IEEE Solid-State Circuits Society. Hands-on work in microcontroller programming (Arduino, ESP32).',
    url: 'https://www.linkedin.com/in/carl0sedu/details/certifications/'
  },
  {
    issuer: 'FM2S',
    title: 'Lean Six Sigma White Belt',
    date: 'May 2026',
    notes: 'Applied lean practices to student and industrial projects.',
    url: 'https://www.linkedin.com/in/carl0sedu/details/certifications/'
  },
  {
    issuer: 'MathWorks',
    title: 'MATLAB & Simulink Onramp',
    date: 'Apr 2026',
    notes: 'Fundamentals of MATLAB and Simulink for simulation and modeling.',
    url: 'https://www.linkedin.com/in/carl0sedu/details/certifications/'
  },
  {
    issuer: 'Kaggle',
    title: 'Python & Data Analysis',
    date: 'Apr 2026',
    notes: 'Applied Python for data analysis and SQL for database management.',
    url: 'https://www.linkedin.com/in/carl0sedu/details/certifications/'
  }
];
