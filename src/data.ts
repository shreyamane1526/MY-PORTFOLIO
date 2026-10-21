export interface Project {
  id: string
  title: string
  subtitle: string
  timeline: string
  category: "Agentic AI" | "Backend Engineering" | "Applied AI & CV" | "Verification Systems"
  focusAreas: string[]
  description: string
  bullets: string[]
  technologies: string[]
  metrics: { label: string; value: string }[]
  architecture: {
    title: string
    description: string
    steps: { step: string; detail: string }[]
  }
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

export interface TechnicalInterest {
  title: string
  description: string
  skills: string[]
  iconName: string
}

export interface Achievement {
  id: string
  year: string
  title: string
  subtitle: string
  badge: string
  highlight?: string
  description: string
  stat?: string
  hasPhoto?: boolean
}

export interface EducationItem {
  period: string
  institution: string
  location: string
  degree: string
  specialization?: string
  grade: string
  rankOrPercentile?: string
  badge?: string
}

export interface SkillCategory {
  title: string
  skills: string[]
  iconName: string
}

export const personalInfo = {
  name: "Shreya Mane",
  headline: "Backend Engineering | Agentic AI | Generative AI",
  shortIntro:
    "Computer Engineering student at VJTI Mumbai, interested in building backend applications, multi-agent AI systems, and LLM-powered solutions.",
  college: "Veermata Jijabai Technological Institute (VJTI), Mumbai",
  branch: "B.Tech in Computer Engineering",
  minor: "Minor in Cybersecurity",
  phone: "+91 7410797096",
  email: "shreyamane1526@gmail.com",
  github: "https://github.com/shreyamane1526",
  linkedin: "https://www.linkedin.com/in/shreya-mane-434498332/",
  location: "Mumbai, Maharashtra, India",
  status: "Looking for Internships",
  aboutIntro: [
    "I’m Shreya Mane, a Computer Engineering student at VJTI Mumbai pursuing a minor in Cybersecurity. My primary interests are backend engineering, Agentic AI, and Generative AI.",
    "I enjoy developing backend services, working with databases and APIs, and exploring how large language models and multi-agent systems can be used to build intelligent applications. Through hands-on projects, hackathons, and collaborative development, I’ve worked across backend systems, machine learning, and computer vision.",
    "I’m particularly interested in the engineering behind AI applications—from backend architecture and data retrieval to agent orchestration and system integration. I enjoy tackling technical challenges, learning new technologies, and turning ideas into working software.",
  ],
  contactStatement:
    "I’m interested in backend engineering, Agentic AI, and Generative AI, and I enjoy exploring challenging technical problems through hands-on development. If you’d like to discuss my projects, exchange ideas about AI engineering, or connect over technology, feel free to reach out.",
}

export const technicalInterests: TechnicalInterest[] = [
  {
    title: "Backend Engineering",
    description:
      "Developing APIs, server-side applications, authentication systems, and database-driven services using modern backend technologies.",
    skills: ["Node.js", "Express.js", "FastAPI", "PostgreSQL", "RESTful APIs", "JWT & OAuth"],
    iconName: "Server",
  },
  {
    title: "Agentic AI",
    description:
      "Exploring multi-agent workflows, orchestration, evidence retrieval, and observability for AI-powered applications.",
    skills: ["LangGraph", "LangSmith", "Multi-Agent Coordination", "Stateful Graphs", "Decision Tracing"],
    iconName: "Bot",
  },
  {
    title: "Generative AI",
    description:
      "Building LLM-powered applications using embeddings, semantic search, vector databases, and retrieval-based approaches.",
    skills: ["Sentence Transformers", "ChromaDB", "pgvector", "RAG Systems", "Prompt Pipelines"],
    iconName: "Sparkles",
  },
  {
    title: "Applied AI & Computer Vision",
    description:
      "Working with machine learning and computer vision techniques to solve practical, real-world problems.",
    skills: ["MediaPipe", "OpenCV", "scikit-learn", "Prophet", "Isolation Forest", "NumPy & pandas"],
    iconName: "Eye",
  },
]

export const photos = [
  {
    src: "/images/shreya-sih-banner.jpg",
    title: "Smart India Hackathon 2025 Grand Finale",
    caption: "Shreya Mane (Team Lead, Team TechTitans VJTI) with Winner Plaque & National Trophy for Ministry of Jal Shakti",
    tag: "National 1st Place Champion",
  },
  {
    src: "/images/shreya-sih-trophy.png",
    title: "Official SIH 2025 Award Ceremony",
    caption: "First place nationwide for Ministry of Jal Shakti problem statement at the Grand Finale ceremony",
    tag: "Grand Finale Winner",
  },
]

export const keyStats = [
  { number: "1st", label: "Smart India Hackathon '25", detail: "Team Lead, Ministry of Jal Shakti" },
  { number: "Top 0.48%", label: "LinkedIn CoachIn Mentee", detail: "Top 100 of 21,000+ applicants" },
  { number: "600+", label: "DSA Problems Solved", detail: "LeetCode, Codeforces & platforms" },
  { number: "99.68", label: "MHT-CET Percentile", detail: "State Rank 798 in Maharashtra" },
]

export const featuredProject: Project = {
  id: "shortlist-ai",
  title: "ShortList AI",
  subtitle: "Multi-Agent AI Hiring Pipeline",
  timeline: "Mar 2026 – May 2026",
  category: "Agentic AI",
  featured: true,
  focusAreas: ["Agentic AI", "Generative AI", "Semantic Retrieval", "Backend Development"],
  description:
    "Developed a multi-agent candidate evaluation pipeline that analyzes resumes, GitHub profiles, coding profiles, and portfolios. The system combines semantic skill matching with evidence retrieval using Sentence Transformer embeddings and ChromaDB. It uses five specialized agents and LangSmith for workflow observability.",
  bullets: [
    "Built a multi-agent AI hiring pipeline that evaluates candidates using evidence from resumes, GitHub projects, coding profiles, and portfolios, going beyond keyword-based resume–job description matching.",
    "Implemented semantic skill matching and evidence retrieval using Sentence Transformer embeddings and ChromaDB to connect job requirements with candidate-specific technical evidence.",
    "Orchestrated five specialized agents for resume analysis, job analysis, skill matching, evidence evaluation, and candidate assessment; used LangSmith for execution tracing and observability.",
  ],
  technologies: [
    "Python",
    "FastAPI",
    "LangGraph",
    "LangSmith",
    "PostgreSQL",
    "LLMs",
    "ChromaDB",
    "Sentence Transformers",
  ],
  metrics: [
    { label: "Orchestration", value: "5 Autonomous Agents" },
    { label: "Semantic Index", value: "ChromaDB + Embeddings" },
    { label: "Observability", value: "LangSmith Traces" },
  ],
  architecture: {
    title: "Five-Agent Graph Orchestration",
    description: "Stateful cyclic graph evaluating candidate technical evidence against deconstructed job specifications.",
    steps: [
      { step: "Node 1: Resume & Profile Deconstruction", detail: "Parses candidate experience, GitHub commits, and projects into structured schema." },
      { step: "Node 2: Job Requirement Extractor", detail: "Breaks job description into discrete core competencies and evidence criteria." },
      { step: "Node 3: Semantic Skill Matcher", detail: "Calculates cosine similarity in high-dimensional vector space using Sentence Transformers." },
      { step: "Node 4: Technical Evidence Evaluator", detail: "Validates resume claims against actual code repositories and problem-solving activity." },
      { step: "Node 5: Assessment & Trace Logger", detail: "Generates comprehensive, unbiased scorecard with execution graph traced via LangSmith." },
    ],
  },
  githubUrl: "https://github.com/shreyamane1526/ShortList-AI",
}

export const otherProjects: Project[] = [
  {
    id: "gov-productivity",
    title: "Government Productivity Monitoring System",
    subtitle: "Productivity Tracking & Predictive Analytics",
    timeline: "Oct 2025 – Dec 2025",
    category: "Backend Engineering",
    featured: false,
    focusAreas: ["Backend Engineering", "Full-Stack Development", "Predictive Analytics", "Team Leadership"],
    description:
      "Led a six-member team in developing a productivity and goal-tracking system for a Ministry of Jal Shakti problem statement. The system includes role-based dashboards, multilevel KPIs, Prophet-based workload forecasting, and Isolation Forest anomaly detection.",
    bullets: [
      "Led a six-member team to develop a full-stack productivity monitoring and goal tracking platform for the Ministry of Jal Shakti with role-based dashboards, goal tracking, and multilevel KPI monitoring across organizational, team, and individual levels.",
      "Designed role-specific KPI frameworks for Headquarters and Field Units, tracking metrics such as responsiveness, file disposal, drafting quality, survey accuracy, and budget utilization.",
      "Developed workforce analytics modules using Prophet and Isolation Forest to forecast workload trends, detect anomalous productivity patterns, and support data-driven staffing and performance evaluation.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "FastAPI",
      "Python",
      "scikit-learn",
      "Prophet",
      "Isolation Forest",
    ],
    metrics: [
      { label: "Standing", value: "1st Place Winner" },
      { label: "Team Scale", value: "6 Engineers Led" },
      { label: "Analytics", value: "Prophet + Anomaly ML" },
    ],
    architecture: {
      title: "Multilevel KPI Aggregator & Telemetry",
      description: "Secure role-based telemetry capturing operational metrics across Headquarters and Field Units.",
      steps: [
        { step: "Hierarchical Telemetry Ingestion", detail: "Collects file disposal rates, survey accuracy, and budget metrics from field units." },
        { step: "Multilevel KPI Calculation", detail: "PostgreSQL analytical views aggregate weighted productivity metrics across organizational tiers." },
        { step: "Prophet Workload Trend Forecasting", detail: "FastAPI ML worker generates predictive forecasts of upcoming departmental caseloads." },
        { step: "Isolation Forest Anomaly Detection", detail: "Flags irregular processing spikes or abnormal lags for executive review." },
      ],
    },
    githubUrl: "https://github.com/shreyamane1526/government-productivity-system",
  },
  {
    id: "signspeak",
    title: "SignSpeak",
    subtitle: "Sign Language Learning Platform",
    timeline: "Nov 2025 – Feb 2026",
    category: "Applied AI & CV",
    featured: false,
    focusAreas: ["Backend Development", "Computer Vision", "Authentication", "Applied AI"],
    description:
      "Developed a sign-language learning platform supporting more than 24 ASL alphabet signs. The recognition engine extracts 21 three-dimensional hand landmarks per frame and uses 11 spatial features to provide geometry-based recognition and explainable corrective feedback. The platform also includes backend APIs, authentication, role-based access, and course tracking.",
    bullets: [
      "Engineered a real-time sign language learning system supporting 24+ ASL alphabets by extracting 21 3D hand landmarks per frame using MediaPipe for live gesture tracking.",
      "Developed a geometry-based gesture evaluation engine using 11 spatial features, including joint angles and inter-finger distances, to detect feature-level deviations and provide explainable corrective feedback.",
      "Built backend services and RESTful APIs with MongoDB, JWT and Google OAuth authentication, role-based access control, hierarchical course tracking, and Cloudinary/Multer media management.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Google OAuth",
      "Cloudinary",
      "Multer",
      "OpenCV",
      "MediaPipe",
    ],
    metrics: [
      { label: "ASL Alphabets", value: "24+ Supported Signs" },
      { label: "Spatial Landmarks", value: "21 3D Coordinates" },
      { label: "Geometry Engine", value: "11 Spatial Features" },
    ],
    architecture: {
      title: "Real-Time 3D Landmark & Spatial Geometry Pipeline",
      description: "Sub-second live video inference with geometric feature deviation and actionable UI cues.",
      steps: [
        { step: "MediaPipe Hand Tracking", detail: "Extracts 21 3D hand landmarks per camera frame with sub-millisecond latency." },
        { step: "11 Spatial Metric Extraction", detail: "Computes joint angles, relative finger lengths, and palm tilt angles." },
        { step: "Centroid Matcher & Error Delta", detail: "Calculates difference vectors against calibrated baseline ASL alphabet signatures." },
        { step: "Corrective Feedback Engine", detail: "Generates natural language correction cues (e.g., 'Raise pinky finger 20°') in real time." },
      ],
    },
    githubUrl: "https://github.com/shreyamane1526/SignSpeak-AI-Powered-Sign-Language-Learning-Platform",
  },
  {
    id: "antiproxy",
    title: "AntiProxy",
    subtitle: "Multi-Factor Attendance Verification System",
    timeline: "July 2026 – Aug 2026",
    category: "Verification Systems",
    featured: false,
    focusAreas: ["Backend Engineering", "Security-Conscious Development", "Database Integration", "Verification Systems"],
    description:
      "Developed attendance APIs and verification workflows using dynamic QR codes, HMAC-SHA256, and time-based validation. The system includes a face-verification pipeline using 128-dimensional embeddings, vector similarity, and liveness detection.",
    bullets: [
      "Developed backend APIs for attendance management and dynamic QR-based verification.",
      "Implemented QR token generation and verification using HMAC-SHA256 and time-based validation.",
      "Built a face-verification pipeline using 128-dimensional embeddings, vector similarity matching, and liveness detection.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "pgvector",
      "React",
      "HMAC-SHA256",
      "Vector Embeddings",
    ],
    metrics: [
      { label: "Embeddings", value: "128-D Face Vectors" },
      { label: "Cryptography", value: "HMAC-SHA256 Timed" },
      { label: "Vector Search", value: "pgvector Cosine Sim" },
    ],
    architecture: {
      title: "Two-Tier Cryptographic & Biometric Consensus",
      description: "Synchronized dual-factor check defeating static photo proxies and session replay attacks.",
      steps: [
        { step: "Dynamic QR Generation", detail: "Generates ephemeral cryptographically-salted tokens with 15-second expiration windows." },
        { step: "Client-Side Liveness Check", detail: "Detects spontaneous facial micro-movements to reject printed or video replays." },
        { step: "128-D Vector Extraction", detail: "Generates deep facial embedding and performs cosine distance query via pgvector." },
        { step: "Commit & Audit Logging", detail: "Commits attendance record upon cryptographic and biometric threshold consensus." },
      ],
    },
    githubUrl: "https://github.com/shreyamane1526/AntiProxy",
  },
]

export const allProjects: Project[] = [featuredProject, ...otherProjects]

export const achievements: Achievement[] = [
  {
    id: "sih-2025",
    year: "2025",
    title: "National Winner — Smart India Hackathon 2025",
    subtitle: "First place nationwide for Ministry of Jal Shakti · Team TechTitans VJTI",
    badge: "1st Place Champion",
    highlight: "First Place Nationwide",
    description:
      "First place nationwide as team lead for a Ministry of Jal Shakti problem statement, representing Team TechTitans VJTI. Engineered a full-stack telemetry and workload forecasting system, securing 1st place across India.",
    stat: "1st Place",
    hasPhoto: true,
  },
  {
    id: "coachin-2026",
    year: "2026",
    title: "LinkedIn CoachIn Mentee 2026",
    subtitle: "Selected among the top 100 applicants from 21,000+ applicants",
    badge: "Top 0.48% Nationwide",
    highlight: "Top 100 of 21,000+",
    description:
      "Selected among the top 100 applicants nationwide from more than 21,000 applicants (Top 0.48%) for LinkedIn's premier mentorship program.",
    stat: "Top 0.48%",
  },
  {
    id: "amazon-afe-2025",
    year: "2025",
    title: "Amazon Future Engineer Scholar 2025",
    subtitle: "Selected among the top 500 students nationwide",
    badge: "Top 500 Nationwide",
    highlight: "Merit Scholar",
    description:
      "Selected among the top 500 students nationwide in recognition of academic excellence, coding merit, and engineering leadership.",
    stat: "Top 500",
  },
  {
    id: "flipkart-gridlock",
    year: "2025",
    title: "Flipkart Gridlock Hackathon 2.0",
    subtitle: "Advanced to Round 2 after the machine-learning challenge",
    badge: "Round 2 Finalist",
    highlight: "Machine Learning Challenge",
    description:
      "Advanced to Round 2 after qualifying the intense Machine Learning challenge competing against thousands of engineering teams across India.",
    stat: "Round 2",
  },
  {
    id: "cp-club-vjti",
    year: "2024",
    title: "Competitive Programming Club, VJTI",
    subtitle: "Selected among the top 14 students",
    badge: "Top 14 Selection",
    highlight: "Elite VJTI Cohort",
    description:
      "Selected among the top 14 students in the premier VJTI Competitive Programming Club following rigorous algorithmic contests.",
    stat: "Top 14",
  },
  {
    id: "problem-solving",
    year: "2024 – Present",
    title: "Problem Solving (600+ DSA)",
    subtitle: "LeetCode, Codeforces, and other platforms",
    badge: "600+ Solved",
    highlight: "Algorithmic Mastery",
    description:
      "Solved 600+ DSA problems across LeetCode, Codeforces, and other coding platforms spanning graphs, trees, DP, and complex system logic.",
    stat: "600+ DSA",
  },
]

export const education: EducationItem[] = [
  {
    period: "August 2024 – May 2028",
    institution: "Veermata Jijabai Technological Institute (VJTI), Mumbai",
    location: "Mumbai, Maharashtra",
    degree: "B.Tech in Computer Engineering",
    specialization: "Minor in Cybersecurity",
    grade: "CGPA: 8.00 / 10",
    badge: "Premier Engineering Institute",
  },
  {
    period: "June 2022 – April 2024",
    institution: "Ligade Patil Junior College of Science",
    location: "Satara, Maharashtra",
    degree: "Higher Secondary Certificate (HSC)",
    grade: "HSC: 88.33%",
    rankOrPercentile: "MHT-CET: 99.68 percentile · State Rank: 798",
    badge: "State Rank 798",
  },
  {
    period: "2022",
    institution: "English Medium School, Nade Navarasta",
    location: "Satara, Maharashtra",
    degree: "Secondary School Certificate (SSC)",
    grade: "97.40%",
    badge: "Academic Distinction",
  },
]

export const technicalSkillsGroups: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "HTML", "CSS"],
    iconName: "Code",
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "FastAPI", "RESTful APIs", "OAuth", "JWT"],
    iconName: "Server",
  },
  {
    title: "Agentic AI & Generative AI",
    skills: [
      "LangGraph",
      "LangSmith",
      "LLM application development",
      "Sentence Transformer embeddings",
      "Semantic retrieval",
    ],
    iconName: "Bot",
  },
  {
    title: "AI, Machine Learning & Computer Vision",
    skills: ["NumPy", "pandas", "scikit-learn", "OpenCV", "MediaPipe", "Prophet", "Isolation Forest"],
    iconName: "Eye",
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "ChromaDB", "pgvector"],
    iconName: "Database",
  },
  {
    title: "Core Computer Science",
    skills: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming in Java",
      "Database Management Systems",
      "Operating Systems",
    ],
    iconName: "Cpu",
  },
  {
    title: "Tools & Environments",
    skills: ["Git", "GitHub", "VS Code", "Google Colab", "GitHub Copilot", "Antigravity", "Windows", "Linux"],
    iconName: "Wrench",
  },
]
