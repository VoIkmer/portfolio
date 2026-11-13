/* ═══════════════════════════════════════
   LANGUAGE (EN / PT-BR)
   English is the base language: it lives in index.html and data.js.
   Only the Portuguese version is stored here.

   - PT_UI   : text of elements marked data-i18n / data-i18n-aria in index.html
   - T       : strings built by script.js (buttons, modal headings, ...)
   - PT_DATA : Portuguese version of the content in data.js
               (projects by id, other lists by position)
   Loaded after data.js and before script.js.
═══════════════════════════════════════ */

const PT_UI = {
  "skip_link": "Ir para o conteúdo",
  "nav_about": "Sobre",
  "nav_skills": "Habilidades",
  "nav_projects": "Projetos",
  "nav_journey": "Trajetória",
  "nav_awards": "Prêmios e Certificados",
  "nav_contact": "Contato",
  "nav_cta": "Contato →",
  "hero_eyebrow": "Disponível para oportunidades",
  "hero_h1": "Construindo <em>Sistemas Inteligentes</em><br>e Automação",
  "hero_sub": "Estudante de Engenharia Elétrica na UFBA, com foco em automação industrial, engenharia de dados e sistemas inteligentes.",
  "hero_award": "<strong>2º lugar</strong> · IEEE SSCS Arduino Contest 2026 — FaceGuard",
  "tag_ia": "Automação Industrial",
  "tag_es": "Sistemas Embarcados",
  "tag_tl": "Liderança Técnica",
  "scroll": "Role",
  "about_label": "Quem sou",
  "about_h2": "Engenharia guiada por <strong>dados e fundamentos físicos</strong>",
  "about_p1": "Sou estudante de Engenharia Elétrica com forte interesse em automação industrial, controle e otimização de processos. Atuo na interseção entre eletrônica e software, projetando sistemas que unem precisão analítica e inteligência orientada a dados.",
  "about_p2": "Nos meus projetos uso metodologias robustas para resolver problemas complexos: modelagem matemática em MATLAB e Python, simulação e documentação disciplinada. Acredito que uma boa engenharia nasce de <strong>sistemas escaláveis guiados por dados reais</strong> e de algoritmos preditivos validados antes de serem colocados em uso.",
  "av1_t": "Pensamento Analítico",
  "av1_d": "Decompondo problemas quantitativos a partir de princípios físicos essenciais.",
  "av2_t": "Otimização de Processos",
  "av2_d": "Gestão de projetos e metodologias Lean para ganhos reais de eficiência.",
  "av3_t": "Visão Sistêmica",
  "av3_d": "Integrando hardware embarcado, análise espectral e automação inteligente.",
  "av4_t": "Documentação Técnica",
  "av4_d": "Tornando a engenharia reproduzível com documentação precisa em LaTeX e Markdown.",
  "sk_label": "Competências",
  "sk_h2": "Minhas <strong>habilidades</strong>",
  "sk_sub": "Áreas técnicas em que aplico conhecimento aprofundado e rigor analítico.",
  "cat_prog": "Programação",
  "cat_auto": "Automação e Hardware",
  "cat_sim": "Simulação e Engenharia",
  "cat_data": "Dados e Ferramentas de Negócio",
  "cat_tools": "Ferramentas e Gestão",
  "sk_py": "Python / Análise de Dados",
  "sk_plc": "Lógica de CLP",
  "sk_elec": "Eletrônica Aplicada",
  "sk_instr": "Instrumentação",
  "sk_sp": "Processamento de Sinais",
  "sk_dyn": "Análise de Circuitos Dinâmicos",
  "sk_pyauto": "Automação com Python",
  "sk_lean": "Gestão Lean",
  "sk_git": "Git e Controle de Versão",
  "sk_en": "Inglês",
  "lvl_adv": "Avançado",
  "lvl_prof": "Proficiente",
  "lvl_work": "Em prática",
  "lvl_c2": "C2 · Avançado",
  "pj_label": "Trabalhos",
  "pj_h2": "Projetos em <strong>destaque</strong>",
  "pj_sub": "Modelagem matemática, programação e análise preditiva aplicadas a sistemas reais.",
  "tl_h2": "Formação e <strong>Experiência</strong>",
  "tl_sub": "Formação acadêmica e trajetória profissional, do ensino à liderança técnica.",
  "tl_edu": "Formação",
  "tl_exp": "Experiência",
  "rc_label": "Reconhecimento",
  "rc_h2": "Prêmios e <strong>Certificações</strong>",
  "rc_sub": "Prêmios, participação em concursos e certificações relevantes para automação, sistemas embarcados, simulação e gestão enxuta de projetos.",
  "rc_certs": "Certificados",
  "ct_h2": "Vamos <strong>trabalhar juntos</strong>",
  "ct_p": "Estou aberto a oportunidades, projetos colaborativos e desafios em automação industrial ou análise de dados.",
  "copy": "Copiar",
  "copied": "Copiado",
  "footer_name": "Carlos Eduardo — Engenharia Elétrica",
  "footer_copy": "© 2026. Feito com dedicação.",
  "btn_projects": "Ver projetos",
  "btn_touch": "Fale comigo",
  "btn_cv": "Baixar Currículo",
  "aria_menu": "Abrir ou fechar o menu",
  "aria_filter": "Filtrar projetos por área",
  "aria_nav": "Principal",
  "aria_lang": "Idioma",
  "title": "Carlos Eduardo | Engenharia Elétrica",
  "meta_desc": "Estudante de Engenharia Elétrica com foco em automação industrial, sistemas inteligentes e análise de dados para a Indústria 4.0."
};

const T = {
  en: {
    view_details: 'View details', on_github: 'on GitHub', new_tab: 'opens in a new tab',
    show_more: n => `Show ${n} more projects`, show_fewer: 'Show fewer projects',
    m_summary: 'Summary', m_problem: 'The Problem', m_arch: 'Solution Architecture', m_results: 'Results',
    m_colors: 'Supported colors', th_color: 'Color', th_value: 'Value', mult_tol: 'multiplier/tolerance',
    m_video: 'Demo video', m_video_title: 'demo video', view_gh: 'View on GitHub', close: 'Close dialog',
    d_input: 'INPUT', d_system: 'SYSTEM', d_output: 'OUTPUT', d_diagram: 'Diagram',
    award: 'Award', see_project: 'See the project →', winners: 'Official winners page ↗',
    see_linkedin: ' · See on LinkedIn ↗', verify: ' · Verify credential ↗',
    copied_msg: 'E-mail copied to clipboard', copy_fail: 'Could not copy — please select the address manually'
  },
  pt: {
    view_details: 'Ver detalhes', on_github: 'no GitHub', new_tab: 'abre em nova aba',
    show_more: n => `Mostrar mais ${n} projetos`, show_fewer: 'Mostrar menos projetos',
    m_summary: 'Resumo', m_problem: 'O problema', m_arch: 'Arquitetura da solução', m_results: 'Resultados',
    m_colors: 'Cores suportadas', th_color: 'Cor', th_value: 'Valor', mult_tol: 'multiplicador/tolerância',
    m_video: 'Vídeo de demonstração', m_video_title: 'vídeo de demonstração', view_gh: 'Ver no GitHub', close: 'Fechar',
    d_input: 'ENTRADA', d_system: 'SISTEMA', d_output: 'SAÍDA', d_diagram: 'Diagrama',
    award: 'Prêmio', see_project: 'Ver o projeto →', winners: 'Página oficial dos vencedores ↗',
    see_linkedin: ' · Ver no LinkedIn ↗', verify: ' · Verificar credencial ↗',
    copied_msg: 'E-mail copiado para a área de transferência', copy_fail: 'Não foi possível copiar — selecione o endereço manualmente'
  }
};

const PT_DATA = {
  filters: { all: 'Todos', embedded: 'Embarcados e Eletrônica', control: 'Controle e Modelagem', data: 'Sinais e Dados' },

  /* Diagram labels (the short technical terms inside the diagrams) stay in English. */
  projects: {
    'faceguard': {
      title: 'FaceGuard — Fechadura Inteligente com Reconhecimento Facial',
      badge: '2º lugar · IEEE SSCS Arduino Contest 2026',
      desc: 'Fechadura inteligente com reconhecimento facial usando ESP32-S3 e um painel web para monitoramento e controle remoto.',
      metrics: [{ label: 'FPS (transmissão)' }, { label: 'Tempo de reconhecimento' }, { label: 'Checagens por maioria' }],
      overview: 'Firmware embarcado desenvolvido para detecção e reconhecimento facial no microcontrolador ESP32-S3. O sistema conta com um painel web local para transmissão de vídeo em tempo real e controle remoto da fechadura.',
      problem: 'Projetar um sistema de controle de acesso facial seguro e processado localmente, que mantenha baixa taxa de falsos positivos rodando inteiramente em hardware embarcado limitado, sem depender de processamento na nuvem.',
      architecture: 'Um servidor de câmera no ESP32-S3 (streaming MJPEG) combinado a um pipeline de reconhecimento facial embarcado (Edge AI). No cadastro, várias fotos da pessoa são capturadas e o algoritmo armazena os vetores do rosto. Para destravar, o sistema faz 6 verificações contra os vetores salvos e só libera a fechadura se a maioria atingir um fator de confiança de 90% ou mais. O backend embarcado é integrado a um painel web responsivo (HTML/CSS/JS) para destravar remotamente, cadastrar usuários e gerenciar o registro de acessos.',
      results: 'Protótipo totalmente funcional, com reconhecimento facial em tempo real, cadastro local de usuários, registro de atividades e destravamento remoto pelo painel na rede local. A taxa de falsos positivos era alta no início; ela foi reduzida aumentando a verificação para 6 checagens e aceitando apenas correspondências com fator de confiança de 90% ou mais, exigindo maioria de checagens aprovadas para abrir a fechadura. Testado com cerca de 4 usuários cadastrados (2 aparecem no vídeo de demonstração); a transmissão roda a 20–24 FPS e um reconhecimento completo leva cerca de 5 a 10 segundos.',
      cardAlt: 'Pôster do FaceGuard no SSCS Arduino Contest 2026 da UFBA, com a placa ESP32-S3 com câmera ao fundo',
      photos: [
        { alt: 'Painel web do FaceGuard com transmissão ao vivo da câmera, registro de acessos e contadores', caption: 'Painel web local: transmissão ao vivo, cadastro, registro de acessos e contadores.' },
        { alt: 'Protótipo montado do FaceGuard', caption: 'Protótipo montado.' }
      ]
    },
    'bms-soc': {
      title: 'Sistema de Gerenciamento de Bateria (BMS)',
      desc: 'Estimador de Estado de Carga (SoC) baseado em EKF para células de íon-lítio, permitindo monitoramento preditivo e análises inteligentes de baterias.',
      metrics: [{ label: 'Convergência do EKF' }, { val: 'EQM < 10⁻⁴', label: 'Python vs MATLAB' }, { label: 'Célula simulada' }],
      overview: 'Uma solução para estimar com precisão o Estado de Carga, essencial para veículos elétricos e redes inteligentes, onde o erro de medição tem alto custo.',
      problem: 'Não é possível medir o SoC diretamente em operação, e a contagem de Coulomb tradicional acumula deriva ao longo do tempo. Além disso, células de íon-lítio têm uma curva de tensão de circuito aberto (OCV) muito plana entre 20% e 80% de carga, em que uma variação de 0,01 V pode significar 10% de diferença no SoC, e sob carga a tensão nos terminais também cai pela resistência interna R0.',
      architecture: 'Modelo de circuito equivalente em espaço de estados implementado em MATLAB e Python. Medições de tensão e corrente alimentam um Filtro de Kalman Estendido (EKF) que corrige as estimativas continuamente, mantendo a estimativa de SoC precisa mesmo na região plana da OCV e sob carga pesada.',
      results: 'Partindo de um SoC inicial propositalmente errado (cerca de 64% contra 80% reais), o EKF converge para o valor real em cerca de 250 s e continua acompanhando-o. O modelo foi validado de forma cruzada com um script MATLAB (pasta validation/): as saídas em Python e MATLAB concordam com erro quadrático médio abaixo de 10⁻⁴, confirmando a implementação em tempo discreto das equações diferenciais. Validado com dados simulados, pronto para integração com hardware de monitoramento.',
      photos: [{ alt: 'SoC real (verde) contra a estimativa do EKF (vermelho tracejado) ao longo de 1000 segundos, partindo de um valor inicial errado', caption: 'SoC real vs estimativa do EKF: o filtro converge a partir de um valor inicial errado.' }]
    },
    'dc-motor': {
      title: 'Simulação de Motor CC Não Linear',
      desc: 'Modelagem, linearização e controle PID de um motor CC acionando um ventilador com carga aerodinâmica não linear, além de análise de amostragem e aliasing.',
      metrics: [{ label: 'Ponto de operação ω₀' }, { label: 'Tempo de subida' }, { label: 'Erro em regime (degrau)' }],
      overview: 'Um estudo em Jupyter de um motor CC com carga aerodinâmica (ventilador) não linear: do modelo físico à planta linearizada, projeto de controladores e efeitos em tempo discreto.',
      problem: 'O torque da carga do ventilador cresce com o quadrado da velocidade, então o motor não é um sistema linear. As ferramentas clássicas de controle só se aplicam depois de linearizar em torno de um ponto de operação bem definido.',
      architecture: 'As equações elétrica e mecânica são resolvidas para o ponto de operação em regime permanente, linearizadas em um modelo de espaço de estados e convertidas em função de transferência. Os ganhos PID são obtidos por alocação de polos, e os controladores (P, PI, PD, PID) são comparados. O notebook fecha com reconstrução por retentor de ordem zero (ZOH) e ilustrações de aliasing. Funções reutilizáveis ficam em um módulo Python baseado na biblioteca python-control.',
      results: 'Respostas ao degrau, à rampa e à parábola, comparação P/PI/PD/PID, reconstrução ZOH e ilustração de aliasing, todas reproduzíveis a partir do notebook e salvas como figuras no repositório. No ponto de operação ω₀ = 27,94 rad/s, a resposta ao degrau tem tempo de subida de 1,473 s e erro em regime nulo; os erros de rampa e parábola são plotados no notebook.',
      photos: [{ alt: 'Respostas ao degrau dos controladores P, PI, PD e PID comparadas com a referência 1,0', caption: 'Resposta ao degrau dos controladores P, PI, PD e PID: PD e PID assentam rápido na referência, enquanto P e PI oscilam.' }]
    },
    'signal-analyzer': {
      title: 'Analisador de Sinais',
      desc: 'Sistema de processamento digital de sinais para reconstrução de harmônicos e análise espectral com métricas de erro automáticas.',
      metrics: [{ label: 'EQM (sinal de exemplo)' }, { val: 'Arbitrárias', label: 'Formas de onda de entrada' }, { label: 'Reconstrução' }],
      overview: 'Processamento e reconstrução de formas de onda complexas a partir de componentes harmônicos, apoiando análises em telecomunicações e controle de potência.',
      problem: 'Visualizar e quantificar como o truncamento da série harmônica afeta a distorção do sinal reconstruído.',
      architecture: 'Código MATLAB que decompõe formas de onda, calcula coeficientes de Fourier e plota visualizações interativas da série e do espectro.',
      results: 'Visualização precisa do fenômeno de Gibbs e cálculo automático do erro quadrático médio para validação. Testado com várias formas de onda diferentes: ondas quadradas e dente de serra padrão, além de sinais totalmente arbitrários. No sinal de exemplo, a reconstrução por FFT se sobrepõe ao original e atinge EQM de 7,36×10⁻³⁰, erro numérico praticamente nulo.',
      photos: [
        { alt: 'Sinal original (azul) e aproximação por FFT (vermelho tracejado) sobrepostos em uma janela de 10 ms', caption: 'Sinal original (azul) vs aproximação por FFT (vermelho): as curvas se sobrepõem em toda a janela.' },
        { alt: 'Erro quadrático ao longo do tempo, com magnitude em torno de 1e-28 e EQM de 7,3581e-30', caption: 'Erro quadrático ao longo do tempo. EQM = 7,36 × 10⁻³⁰, numericamente nulo.' }
      ]
    },
    'rc-circuit': {
      title: 'Simulação de Circuito RC',
      desc: 'Simulador para análise dinâmica de circuitos RC com cálculo automático da constante de tempo e validação temporal.',
      metrics: [{ label: 'Constante de tempo τ' }, { label: 'R e C' }, { label: 'Erro simulação vs teoria' }],
      overview: 'Uma ferramenta computacional para prever o comportamento dinâmico de circuitos sob entrada degrau, útil em análise de estabilidade e projeto de filtros.',
      problem: 'A análise manual de circuitos de primeira ordem é sujeita a erros e difícil de visualizar rapidamente.',
      architecture: 'Um circuito RC série construído no MathWorks Simscape (R = 1 kΩ, C = 100 µF, V₀ = 5 V, τ = 100 ms). Os dados da simulação são exportados e analisados em Python, que compara a curva simulada com a solução analítica V(t) = V₀(1 − e^(−t/τ)) e gera um relatório em PDF automaticamente.',
      results: 'A curva de carga simulada coincide com a teórica: o erro médio entre simulação e teoria é inferior a 0,01% (0,0007% na execução relatada), e o capacitor atinge 63,2% de V₀ em t = τ = 100 ms, como esperado.',
      photos: [{ alt: 'Curva de carga do capacitor no Simscape chegando a 5 V, com o ponto t = tau = 100 ms em 63,2% de V0 marcado', caption: 'Simulação no Simscape vs curva de carga teórica (R = 1 kΩ, C = 100 µF, τ = 100 ms). Erro médio: 0,0007%.' }]
    },
    'resistor-reader': {
      title: 'Leitor de Cores de Resistores',
      desc: 'Ferramenta em MATLAB para calcular a resistência elétrica a partir das faixas de cor. Suporta resistores de 4 e 5 faixas com visualização gráfica.',
      metrics: [{ label: 'Faixas' }, { label: 'Cores suportadas' }, { label: 'Norma' }],
      overview: 'Uma ferramenta computacional para decodificar de forma rápida e precisa as faixas de cor padrão de resistores em valores de resistência e tolerância.',
      problem: 'Ler resistores de várias faixas manualmente em laboratório costuma ser lento e sujeito a erros de interpretação.',
      architecture: 'Script MATLAB (R2020a ou superior) que mapeia nomes de cores (em inglês: black, brown, red, orange, yellow, green, blue, violet, gray, white, gold, silver) para valores numéricos, calcula multiplicadores e tolerância e desenha um resistor 2D representativo.',
      results: 'Utilitário de código aberto para estudantes de engenharia validarem seus componentes físicos na hora. Por exemplo, yellow-violet-red-gold resulta em um resistor de 4700 Ω com tolerância de ±5%, desenhado faixa a faixa com o valor numérico de cada uma abaixo.',
      cardAlt: 'Saída do Leitor de Cores de Resistores: faixas amarela, violeta, vermelha e dourada resultando em 4700 ohms com 5% de tolerância',
      photos: [{ alt: 'Quatro faixas coloridas (amarelo, violeta, vermelho, dourado) com o resultado: resistor de 4700 ohms, mais ou menos 5%', caption: 'Exemplo de saída: cada faixa de cor com seu valor, e a resistência e tolerância finais no topo.' }]
    },
    'light-alert': {
      title: 'Sistema de Alerta de Luz',
      desc: 'Sistema de monitoramento de intensidade luminosa com sensor LDR, display LCD I2C e alarme sonoro (buzzer).',
      metrics: [{ label: 'Limiar do alarme' }, { label: 'Tom do buzzer' }, { label: 'Resolução do ADC' }],
      overview: 'Projeto desenvolvido como atividade prática do período probatório na entidade estudantil Onda Elétrica.',
      problem: 'Necessidade de um mecanismo de alerta local e em tempo real, acionado por condições específicas de iluminação ambiente.',
      architecture: 'Firmware em C++ lê a tensão sobre o LDR pelo ADC de 10 bits do Arduino (0–1023) e a escala para V_LDR = 10 × ADC / 1023. A cada ciclo, classifica o ambiente em três estados: Escuro (V_LDR < 1,00 V, buzzer ligado a 1000 Hz), Luz média (1,00 V ≤ V_LDR < 2,30 V, alarme desligado) e Claro (V_LDR ≥ 2,30 V, alarme desligado), e mostra a leitura em um LCD I2C.',
      results: 'Protótipo de hardware funcional que valida a lógica de programação embarcada e a integração física do hardware.'
    },
    'gridsense': {
      title: 'GridSense (em desenvolvimento)',
      desc: 'Em desenvolvimento: ferramenta de sensoriamento e análise orientada a dados, feita em Python, para aplicações em redes elétricas inteligentes.',
      metrics: [{ val: 'Em dev.', label: 'Status' }, { val: 'Dados', label: 'Pipeline' }, { val: 'Rede', label: 'Domínio' }],
      overview: 'Uma iniciativa em andamento para processar e extrair insights de fluxos de dados da rede elétrica usando análises em Python.',
      problem: 'As redes inteligentes modernas geram grandes volumes de telemetria que exigem pipelines automatizados para identificar tendências e anomalias.',
      architecture: 'Pipeline de ingestão em Python que usa Pandas para limpeza de dados e modelagem estatística preliminar.',
      results: 'Em desenvolvimento ativo. As estruturas de dados centrais e os módulos iniciais de AED (Análise Exploratória de Dados) estão sendo estabelecidos.'
    }
  },

  education: [
    { year: '2022 – Atual', title: 'Bacharelado em Engenharia Elétrica',
      desc: 'Universidade Federal da Bahia (UFBA). Aprofundamento em cálculo, física, fundamentos de programação, teoria de circuitos, processamento de sinais e sistemas de controle.' },
    { year: '2025.2 – 2026.1', title: 'Inglês — CCAA, nível Master',
      desc: 'Concluí o nível Master do curso de inglês do CCAA ao longo de dois semestres, consolidando fluência avançada para contextos acadêmicos e profissionais.' }
  ],

  work: [
    { year: '2026 – Atual', title: 'Estagiário — Metodologia de Redes (Neoenergia)',
      desc: 'Atuação prática com dados e operações na área de redes: Excel avançado para manipulação de dados, SQL para consultar e tratar bases de dados, dashboards em Power BI que entregam relatórios dinâmicos e interativos para os processos, e SAP MM. Também escrevo scripts em Python para automatizar etapas dos processos, enquanto aprendo o lado técnico das máquinas elétricas e os procedimentos operacionais da área.',
      tags: ['Excel avançado', 'SQL', 'Power BI', 'SAP MM', 'Automação com Python'] },
    { year: 'nov 2024 – ago 2026', title: 'Representante Estudantil — CAEEL, UFBA',
      desc: 'Representante Estudantil Pleno no Centro Acadêmico de Engenharia Elétrica (CAEEL-UFBA), atuando como ponte entre o corpo discente e a coordenação do curso.' },
    { year: 'mar 2024 – ago 2026', title: 'Onda Elétrica — Membro, Gestor Geral, Gestor de Projetos',
      desc: 'Projeto de extensão voltado à divulgação científica e ao ensino de engenharia elétrica. Membro (mar 2024 – fev 2025): desenvolvi projetos de eletrônica, automação e experimentos interativos, ajudando a soldar, montar e planejar. Gestor Geral (mar – set 2025): gestão interna, intermediação entre as gestões, redação do estatuto, condução de reuniões e definição de diretrizes internas. Gestor de Projetos (set 2025 – ago 2026, 2 mandatos): coordenei cerca de 20 membros para montar projetos novos, consertar os antigos e retomar os que estavam parados. Ajudamos a levar mais de 1.500 alunos à UFBA em um dos nossos eventos.',
      tags: ['Equipe de ~20', '2 mandatos como Gestor de Projetos', '1.500+ alunos alcançados'] },
    { year: '2021 – 2024', title: 'Ensino e Resolução de Problemas',
      desc: 'Instrutor nos Cursos Discipulus e MSL — ensinei resolução de problemas de matemática e física para fortalecer a base analítica.' }
  ],

  awards: [
    { title: 'IEEE SSCS Arduino Contest 2026', date: 'nov 2026', result: '2º lugar',
      notes: 'Segundo lugar no concurso promovido pela IEEE Solid-State Circuits Society, com o FaceGuard — uma fechadura inteligente com reconhecimento facial embarcado no ESP32-S3.' }
  ],

  certs: [
    { title: 'Participação no IEEE SSCS Arduino Contest 2026', date: 'Ago 2026',
      notes: 'Certificado de participação no concurso promovido pela IEEE Solid-State Circuits Society. Prática em programação de microcontroladores (Arduino, ESP32).' },
    { title: 'Lean Six Sigma White Belt', date: 'Mai 2026', notes: 'Aplicação de práticas lean em projetos estudantis e industriais.' },
    { title: 'MATLAB & Simulink Onramp', date: 'Abr 2026', notes: 'Fundamentos de MATLAB e Simulink para simulação e modelagem.' },
    { title: 'Python e Análise de Dados', date: 'Abr 2026', notes: 'Aplicação de Python em análise de dados e de SQL no gerenciamento de bancos de dados.' }
  ]
};

/* ─── language state ─── */
function detectLang() {
  try { const s = localStorage.getItem('lang'); if (s === 'pt' || s === 'en') return s; } catch (e) { /* storage blocked */ }
  return (navigator.language || 'en').toLowerCase().startsWith('pt') ? 'pt' : 'en';
}
let LANG = detectLang();

function t(key, ...args) {
  const v = (T[LANG] && T[LANG][key] !== undefined) ? T[LANG][key] : T.en[key];
  return typeof v === 'function' ? v(...args) : v;
}

/* Returns a copy of a project with the current language applied. */
function localizeProject(p) {
  const o = LANG === 'pt' ? PT_DATA.projects[p.id] : null;
  if (!o) return p;
  const L = { ...p };
  ['title', 'badge', 'desc', 'overview', 'problem', 'architecture', 'results'].forEach(f => { if (o[f] !== undefined) L[f] = o[f]; });
  if (o.metrics) L.metrics = p.metrics.map((m, i) => ({ val: (o.metrics[i] && o.metrics[i].val) || m.val, label: (o.metrics[i] && o.metrics[i].label) || m.label }));
  if (p.cardImage && o.cardAlt) L.cardImage = { ...p.cardImage, alt: o.cardAlt };
  if (p.photos && o.photos) L.photos = p.photos.map((ph, i) => ({ ...ph, ...(o.photos[i] || {}) }));
  return L;
}

/* Same idea for timeline items, awards and certificates (matched by position). */
function localizeItem(list, i, item) {
  const o = LANG === 'pt' ? PT_DATA[list][i] : null;
  return o ? { ...item, ...o } : item;
}
function localizeFilter(f) { return LANG === 'pt' && PT_DATA.filters[f.id] ? PT_DATA.filters[f.id] : f.label; }

/* Static text: swap the marked elements (English is kept in the element the first time). */
function applyStatic() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (el.dataset.i18nEn === undefined) el.dataset.i18nEn = el.innerHTML;
    const pt = PT_UI[el.dataset.i18n];
    el.innerHTML = (LANG === 'pt' && pt !== undefined) ? pt : el.dataset.i18nEn;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    if (el.dataset.i18nAriaEn === undefined) el.dataset.i18nAriaEn = el.getAttribute('aria-label');
    const pt = PT_UI[el.dataset.i18nAria];
    el.setAttribute('aria-label', (LANG === 'pt' && pt !== undefined) ? pt : el.dataset.i18nAriaEn);
  });
  const meta = document.querySelector('meta[name="description"]');
  if (document.documentElement.dataset.titleEn === undefined) {
    document.documentElement.dataset.titleEn = document.title;
    document.documentElement.dataset.descEn = meta ? meta.content : '';
  }
  document.title = LANG === 'pt' ? PT_UI.title : document.documentElement.dataset.titleEn;
  if (meta) meta.content = LANG === 'pt' ? PT_UI.meta_desc : document.documentElement.dataset.descEn;
}

function setLang(lang, init) {
  LANG = lang === 'pt' ? 'pt' : 'en';
  if (!init) { try { localStorage.setItem('lang', LANG); } catch (e) { /* storage blocked */ } }
  document.documentElement.lang = LANG === 'pt' ? 'pt-BR' : 'en';
  applyStatic();
  document.querySelectorAll('.lang-btn').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === LANG)));
  if (!init) window.dispatchEvent(new Event('langchange'));
}
