export const projectFilters = [
  { id: "all", label: "All Projects" },
  { id: "platform", label: "Platforms" },
  { id: "automation", label: "Automation" },
  { id: "ai", label: "AI / Data" },
  { id: "mobile", label: "Mobile" },
];

export const portfolioContent = {
  navigation: [
    { id: "hero", label: "Home" },
    { id: "story", label: "Story" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ],
  sectionLabels: {
    hero: "Launch Deck",
    story: "Signal Story",
    projects: "Project Constellation",
    skills: "Capability Atlas",
    experience: "Professional Experience",
    education: "Academic Foundation",
    contact: "Contact Portal",
  } as Record<string, string>,
  guideCopy: {
    hero: "An immersive overview of my journey as an automation engineer, builder, and future-facing systems thinker.",
    story: "My personal operating system: practical learning, simplifying complexity, and bridging the gap between embedded and enterprise systems.",
    projects: "Flagship products and experiments arranged like orbiting modules. Hover or tap cards to see the tech stack in action.",
    skills: "A map of my capability zones across Python, automation, backend systems, AI, and embedded thinking.",
    experience: "A timeline of my professional contributions from Defense and IoT to Global Financial Systems.",
    education: "My academic background in Embedded Systems and Electrical Engineering.",
    contact: "The final portal to connect, explore value propositions, and discuss growth vectors.",
  } as Record<string, string>,
  identity: {
    firstLine: "T Venkata Santosh Kumar",
    secondLine: "Senior Python Automation Engineer | 10+ Years Experience",
    summary:
      "I am a results-driven Senior QA Automation Engineer with over 10 years of experience across Medical, Defense, and IoT domains. I specialize in building robust Python automation frameworks, developer tools, and scalable systems that solve real-world problems.",
    quote: "Automation Specialist | Software Engineer | Tutor | Techie Dad of a Smart Toddler",
    resumeHref: "/resume/santosh-tvk-profile.pdf",
    easterEgg:
      "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
  },
  metrics: [
    { label: "Experience", value: "10+ Years", detail: "Expertise in Medical, Defense (Aerospace), and IoT sectors." },
    { label: "Project Mode", value: "Automation-First", detail: "10+ end-to-end projects automated using Python and Robot Framework." },
    { label: "Current Vector", value: "AI + Data", detail: "Integrating Agentic AI and data analytics into automation workflows." },
  ],
  about: {
    narrative:
      "I bridge the gap between complex engineering and practical automation. My journey began in the high-stakes world of Defense (DRDO), where I developed real-time avionics simulators. Over the last decade, I've evolved into a builder who crafts frameworks for clinical trials at Signant Health and financial ratings at S&P Global. I believe in 'building what should exist'—tools that make development faster, testing more reliable, and systems more secure.",
    pillars: [
      "Precision-driven automation for enterprise systems",
      "Simplifying complexity through education and mentoring",
      "Designing for reliability, scale, and long-term maintenance",
      "Continuous evolution into AI-assisted testing and security",
    ],
    fragments: [
      {
        title: "The Builder DNA",
        copy:
          "From custom browser recording engines to Flask-based developer tools, I thrive on shipping functional utilities that solve specific pain points for teams.",
      },
      {
        title: "Systems Thinker",
        copy:
          "My background in Embedded Systems (Bits Pilani) gives me a unique 'close to the metal' perspective, ensuring I understand software from the hardware up.",
      },
    ],
  },
  projects: [
    {
      index: "01",
      nodeId: "signal-core",
      title: "Pynfinity",
      eyebrow: "Founder & Architect",
      summary:
        "A flagship platform reflecting my ecosystem of Python references, developer utilities, and learning resources designed for the modern builder.",
      highlights: [
        "Architected a comprehensive developer resource hub using Python and modern web stacks",
        "Integrated interactive learning tools and automated documentation modules",
        "Evolving into an AI-ready suite for automated code analysis and mentoring",
      ],
      tags: ["platform", "ai", "mobile"],
      href: "https://pynfinity.com",
    },
    {
      index: "02",
      nodeId: "automation-engine",
      title: "Custom Interaction Engine",
      eyebrow: "Automation Innovation",
      summary:
        "A sophisticated browser interaction recorder and replay engine that captures complex user flows for repeatable validation and debugging.",
      highlights: [
        "Significantly reduced bug reproduction time across agile teams",
        "Built with a focus on autonomous testing and high-fidelity replay",
        "Showcases advanced interaction handling beyond off-the-shelf tools",
      ],
      tags: ["automation", "platform"],
    },
    {
      index: "03",
      nodeId: "regex-lab",
      title: "Regex Lab & Evaluation Portal",
      eyebrow: "Full-Stack Utility",
      summary:
        "A dual-purpose system for debugging regular expressions and conducting technical evaluations with real-time scoring and feedback.",
      highlights: [
        "Real-time regex visualization and match highlighting for non-experts",
        "JSON-driven question banks for dynamic coding and MCQ assessments",
        "Used internally to streamline technical screening and skill mapping",
      ],
      tags: ["platform", "automation"],
    },
    {
      index: "04",
      nodeId: "api-compiler",
      title: "REST Architecture Showcase",
      eyebrow: "Backend Engineering",
      summary:
        "A production-grade Python/Flask sandbox demonstrating robust API design, request handling, and online code execution patterns.",
      highlights: [
        "Implements secure multi-method handling and input sanitization",
        "Features an integrated online compiler for rapid Python experimentation",
        "Serves as a blueprint for scalable backend utility development",
      ],
      tags: ["platform", "automation"],
    },
  ],
  skills: [
    {
      title: "Automation Architecture",
      nodeId: "automation-engine",
      color: "linear-gradient(135deg, #83f8d4, #27c3ff)",
      summary: "End-to-end framework design across UI, API, and DB layers in mission-critical environments.",
      items: [
        { name: "Python Automation", level: 95 },
        { name: "Robot Framework", level: 90 },
        { name: "Pytest & SQL", level: 85 },
        { name: "CI/CD (Jenkins/Azure)", level: 80 }
      ],
    },
    {
      title: "Backend and Tooling",
      nodeId: "signal-core",
      color: "linear-gradient(135deg, #ffd479, #ff7a59)",
      summary: "Building developer-centric software and robust internal tools with practical architectures.",
      items: [
        { name: "Flask & REST APIs", level: 85 },
        { name: "Postman & GraphQL", level: 80 },
        { name: "Docker & Linux", level: 75 },
        { name: "Product Design", level: 70 }
      ],
    },
    {
      title: "Data & AI Insights",
      nodeId: "ai-lab",
      color: "linear-gradient(135deg, #f6a6ff, #8a7dff)",
      summary: "Leveraging data analysis and AI to drive smarter automation and business decisions.",
      items: [
        { name: "Pandas & NumPy", level: 80 },
        { name: "Data Visualization", level: 75 },
        { name: "ML Models (SciKit)", level: 70 },
        { name: "Agentic AI / NLP", level: 65 }
      ],
    },
    {
      title: "Embedded & Systems",
      nodeId: "embedded-hub",
      color: "linear-gradient(135deg, #8df9c8, #b9ff66)",
      summary: "A foundation built on hardware-software co-design and real-time system integrity.",
      items: [
        { name: "Embedded C/C++", level: 80 },
        { name: "RTOS Concepts", level: 75 },
        { name: "FPGA & Simulators", level: 70 },
        { name: "Security (Bounty)", level: 60 }
      ],
    },
  ],
  experience: [
    {
      company: "S&P Global",
      role: "Senior QA Automation Engineer",
      period: "2024 - Present",
      summary:
        "I lead the automation strategy for Internal Ratings applications, handling dynamic data environments and complex financial logic.",
      highlights: [
        "Modernized automation frameworks using Python, SQL, Azure Key Vaults, and Databricks",
        "Automated 2+ critical end-to-end financial projects involving document processing and Oracle validation",
        "Developed custom UI utilities that streamlined report validation for global teams",
      ],
    },
    {
      company: "Signant Health",
      role: "Senior Test Automation Engineer",
      period: "2021 - 2023",
      summary:
        "I architected 6+ clinical trial automation frameworks, ensuring total reliability for patient-facing healthcare software.",
      highlights: [
        "Built full-stack automation using Robot Framework, Python, and Azure Cosmos DB",
        "Integrated complex REST/GraphQL APIs and Postman scripting into CI/CD pipelines",
        "Enabled seamless team collaboration through automated Jira, Teams, and Email reporting",
      ],
    },
    {
      company: "Qualcomm (via Votarytech)",
      role: "Software Engineer",
      period: "2019 - 2021",
      summary:
        "I focused on multimedia validation and device performance for Linux-enabled and Android IoT targets.",
      highlights: [
        "Implemented high-precision scripts for validating audio playback, recording, and voice latency",
        "Automated Android-based target devices using Python and Android-JDK integrations",
        "Collaborated on sound quality analysis and speech data disturbances for next-gen IoT",
      ],
    },
    {
      company: "DRDL (Aerospace/Defense)",
      role: "Embedded Software Engineer",
      period: "2016 - 2019",
      summary:
        "I contributed to high-stakes defense projects, developing real-time Flight Simulation units for avionics.",
      highlights: [
        "Involved in the 6-DOF Simulation Unit development using Python, Embedded C, and Qt",
        "Utilized FPGA scripting (Xilinx) and system analysis tools for aerospace system design",
        "Built robust desktop utilities for telemetry data visualization and flight-path analysis",
      ],
    },
  ],
  education: [
    {
      institution: "Bits Pilani (WILP)",
      degree: "Master's in Embedded Systems",
      period: "2018 - 2020",
      description: "Thesis: Acoustic Noise and Echo Cancellation for Smart Assistance devices using LMS Algorithm in Simulink.",
    },
    {
      institution: "GMRIT (JNTUK)",
      degree: "Bachelor's in Electrical and Electronics Engineering",
      period: "2010 - 2014",
      description: "Project: Horizontal Axis Wind Turbine with Monopole Structure Common Shaft Multi-Generator System.",
    },
  ],
  learningFocus: [
    "Practical Application of Agentic AI",
    "Security-first Automation & Bug Bounties",
    "Advanced Data Engineering with Databricks",
    "Scaling Builder Platforms (Pynfinity)",
  ],
  contact: {
    copy:
      "I'm always open to discussing Python, high-scale automation, or developer tools. If you're building systems that require precision and impact, let's connect.",
    emailHref: "mailto:santoshtvk16@gmail.com",
    linkedinHref: "https://in.linkedin.com/in/santoshtvk",
    githubHref: "https://github.com/santoshtvk-new",
    opportunityFit: [
      "Senior Python / Automation Strategy",
      "Lead QA or Software Development Engineer in Test",
      "Architecting Developer Tooling & Platforms",
      "AI-integrated Quality Systems",
    ],
  },
};
