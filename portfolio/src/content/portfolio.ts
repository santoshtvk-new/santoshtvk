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
    { id: "experience", label: "Timeline" },
    { id: "contact", label: "Contact" },
  ],
  sectionLabels: {
    hero: "Launch Deck",
    story: "Signal Story",
    projects: "Project Constellation",
    skills: "Capability Atlas",
    experience: "Career Timeline",
    contact: "Contact Portal",
  } as Record<string, string>,
  guideCopy: {
    hero: "An immersive overview of Tharigoppala Venkata Santosh Kumar: automation engineer, builder, educator, and future-facing systems thinker.",
    story: "The personal operating system: practical learning, teaching by simplifying, and building what should already exist.",
    projects: "Flagship products and experiments arranged like orbiting modules. Hover or tap cards to illuminate matching 3D nodes.",
    skills: "A map of capability zones across Python, automation, backend systems, data, AI, security, and embedded thinking.",
    experience: "A timeline that moves from embedded and aerospace systems through enterprise automation and founder-led tools.",
    contact: "The final portal is designed as a recruiter-friendly close: value proposition, links, and current growth vectors.",
  } as Record<string, string>,
  identity: {
    firstLine: "T Venkata Santosh Kumar",
    secondLine: "Python, Automation, AI, and Systems in Orbit",
    summary:
      "Senior QA Automation Engineer and founder-builder crafting practical software systems, developer tools, and modern AI-ready workflows with a strong testing, backend, and embedded mindset.",
    quote: "Automation Specialist | Software Engineer | Tutor | Techie Dad of Smart Toddler",
    resumeHref: "/resume/santosh-tvk-profile.pdf",
    easterEgg:
      "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
  },
  metrics: [
    { label: "Experience", value: "10+ Years", detail: "Across automation, embedded systems, QA, and software engineering." },
    { label: "Project Mode", value: "Builder-First", detail: "Developer tools, platforms, utilities, and experimental systems." },
    { label: "Current Vector", value: "AI + Security", detail: "Expanding from robust automation into intelligent and secure systems." },
  ],
  about: {
    narrative:
      "Santosh brings together enterprise software rigor and independent builder energy. His work spans financial automation, clinical platforms, multimedia validation, aerospace-adjacent embedded systems, and founder-led product creation through Pynfinity. The unifying trait is practical usefulness: build systems that solve real pain, teach clearly, and stay robust under change.",
    pillars: [
      "Practical learning over theoretical clutter",
      "Systems designed for reliability and clarity",
      "Teaching through decomposition and examples",
      "A curiosity engine for AI, IoT, and security",
    ],
    fragments: [
      {
        title: "Builder DNA",
        copy:
          "From Flask tools and browser utilities to Android experimentation and automation frameworks, the portfolio reflects someone who learns by shipping.",
      },
      {
        title: "Mentor Mindset",
        copy:
          "A strong educator instinct shows up in how problems are broken down, how tools are designed, and how complex systems are made approachable for others.",
      },
    ],
  },
  projects: [
    {
      index: "01",
      nodeId: "signal-core",
      title: "Pynfinity",
      eyebrow: "Founder Platform",
      summary:
        "A flagship ecosystem for developers that blends references, tools, learning resources, and expanding utilities into one personal product universe.",
      highlights: [
        "Developer-first platform vision built around Python and practical tooling",
        "Combines references, utilities, portfolio storytelling, and future AI integrations",
        "Extended from web presence toward Android reach",
      ],
      tags: ["platform", "ai", "mobile"],
      href: "https://pynfinity.com",
    },
    {
      index: "02",
      nodeId: "automation-engine",
      title: "Browser Record & Replay Engine",
      eyebrow: "Automation Utility",
      summary:
        "A custom browser interaction recorder designed to capture user activity and replay it for testing, debugging, and repeatable validation.",
      highlights: [
        "Reduces friction in reproducing UI behaviors and exploratory bugs",
        "Supports a more autonomous testing workflow",
        "Shows product thinking beyond standard off-the-shelf tooling",
      ],
      tags: ["automation", "platform"],
    },
    {
      index: "03",
      nodeId: "regex-lab",
      title: "Regex Visualizer and Interview Platform",
      eyebrow: "Flask Tooling",
      summary:
        "A dual-purpose Flask system for regex debugging and coding evaluation with JSON-driven flows, scoring logic, and dynamic feedback.",
      highlights: [
        "Dynamic regex match highlighting and tool-assisted learning",
        "Question-driven evaluation flows for coding and MCQ scenarios",
        "Built to solve both developer and interviewer pain points",
      ],
      tags: ["platform", "automation"],
    },
    {
      index: "04",
      nodeId: "api-compiler",
      title: "Flask REST API and Python Online Compiler",
      eyebrow: "Backend Engineering",
      summary:
        "A set of proof points demonstrating backend design, HTTP method handling, and practical Python web tooling for execution-oriented workflows.",
      highlights: [
        "Multi-method API design and request handling",
        "Hands-on backend product execution using Flask",
        "Strong fit for explaining architecture and deployment thinking",
      ],
      tags: ["platform", "automation"],
    },
    {
      index: "05",
      nodeId: "mobile-orbit",
      title: "Android Integrations and Mobile Experiments",
      eyebrow: "Cross-Platform Curiosity",
      summary:
        "A smaller but important orbit of mobile work, from Android app exercises to platform extensions that expand access to builder-created tools.",
      highlights: [
        "Shows willingness to move ideas across form factors",
        "Reinforces product curiosity beyond web-only delivery",
        "Connects experimentation with broader user reach",
      ],
      tags: ["mobile"],
    },
  ],
  skills: [
    {
      title: "Automation Architecture",
      nodeId: "automation-engine",
      color: "linear-gradient(135deg, #83f8d4, #27c3ff)",
      summary: "Framework thinking across UI, API, and database validation, with practical delivery in enterprise contexts.",
      items: ["Python automation", "Pytest and Robot Framework", "UI, API, DB validation", "CI/CD-aware workflows"],
    },
    {
      title: "Backend and Tooling",
      nodeId: "signal-core",
      color: "linear-gradient(135deg, #ffd479, #ff7a59)",
      summary: "Developer-facing software built with practical architectures and clear utility as the primary benchmark.",
      items: ["Flask applications", "REST APIs", "JSON-driven systems", "Reusable utilities and productized tools"],
    },
    {
      title: "Data, AI, and Insight",
      nodeId: "ai-lab",
      color: "linear-gradient(135deg, #f6a6ff, #8a7dff)",
      summary: "An actively expanding layer focused on data analysis, machine learning, and AI-assisted system design.",
      items: ["Pandas and NumPy", "Data visualization", "ML/NLP curiosity", "Agentic AI concepts"],
    },
    {
      title: "Security and Embedded Thinking",
      nodeId: "embedded-hub",
      color: "linear-gradient(135deg, #8df9c8, #b9ff66)",
      summary: "A mindset shaped by embedded environments, bug bounty interests, and systems that must work close to the metal.",
      items: ["Embedded Python and C/C++ exposure", "Linux environments", "IoT curiosity", "Security-oriented learning"],
    },
  ],
  experience: [
    {
      company: "S&P Global",
      role: "Senior Quality Assurance Automation Engineer",
      period: "2024 - Present",
      summary:
        "Driving automation for dynamic financial systems with Python, SQL, Databricks, and in-house frameworks in multi-environment setups.",
      highlights: [
        "Automated end-to-end financial projects across documents, APIs, and Oracle validation",
        "Built Python utilities to improve testing and report validation",
        "Shared reusable coding patterns and analytics thinking across the team",
      ],
    },
    {
      company: "Signant Health",
      role: "Software Automation Engineer",
      period: "2021 - 2023",
      summary:
        "Built large-scale clinical trial automation frameworks using Python, Robot Framework, Jenkins, SQL, REST, GraphQL, and reporting integrations.",
      highlights: [
        "Delivered 6+ dynamic end-to-end clinical automation frameworks",
        "Integrated API services, Cosmos DB, and CI/CD pipelines",
        "Connected automation output with Teams, Jira, and email workflows",
      ],
    },
    {
      company: "Qualcomm",
      role: "Software Engineer",
      period: "2019 - 2021",
      summary:
        "Worked on multimedia and voice validation for Linux-enabled and Android-based IoT targets with Python-driven analysis and device automation.",
      highlights: [
        "Implemented Python modules for playback, recording, and voice operations",
        "Analyzed speech data, noise levels, and audio disturbances",
        "Created Android applications for automating Android devices",
      ],
    },
    {
      company: "DRDL / DRDO",
      role: "Embedded Engineer / Project Engineer",
      period: "2016 - 2019",
      summary:
        "Contributed to aerospace simulator units and embedded Linux environments, working across Python, Qt, C/C++, FPGA interfaces, and system communication layers.",
      highlights: [
        "Developed simulator units with serial, USB/PCI, and FPGA-linked flows",
        "Built Python and Qt widget-based applications",
        "Worked with Linux utilities, Wireshark, and technical documentation",
      ],
    },
  ],
  learningFocus: [
    "Machine learning and practical NLP",
    "Agentic AI patterns and intelligent software systems",
    "Bug bounty workflows and secure system thinking",
    "Data analysis and visualization that support product decisions",
  ],
  contact: {
    copy:
      "Open to Python, automation, backend, quality engineering, developer tooling, and future-facing AI system opportunities where practical impact matters more than buzzwords.",
    emailHref: "mailto:santoshtvk@gmail.com",
    linkedinHref: "https://in.linkedin.com/in/santoshtvk",
    githubHref: "https://github.com/santoshtvk-new",
    opportunityFit: [
      "Senior Python or automation engineering roles",
      "Backend and developer platform product teams",
      "AI-ready testing and quality systems",
      "Builder-friendly teams that value initiative",
    ],
  },
};
