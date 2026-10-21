import bannerImg from '../public/images/shreya-sih-banner.jpg';
import trophyImg from '../public/images/shreya-sih-trophy.png';
import { useState, useEffect } from "react"
import {
  Sun,
  Moon,
  ArrowUpRight,
  Mail,
  MapPin,
  Trophy,
  Terminal,
  Database,
  Cpu,
  Check,
  Copy,
  Eye,
  X,
  FileText,
  Printer,
  Code2,
  Server,
  Bot,
  Wrench,
  Search,
  ExternalLink,
  ChevronRight,
  Shield,
  Layers,
  Award,
  Sparkles,
  Zap,
} from "lucide-react"

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 1.8a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.3 3.5 6.5 6.8 7A4.8 4.8 0 0 0 8 18v4" />
      <path d="M8 19c-3 .9-3-1.5-4-2" />
    </svg>
  )
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

import {
  personalInfo,
  technicalInterests,
  photos,
  featuredProject,
  otherProjects,
  allProjects,
  achievements,
  education,
  technicalSkillsGroups,
  type Project,
} from "./data"

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("shreya-bento-theme")
      if (saved) return saved === "dark"
    }
    return false // Clean modern light mode by default
  })

  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activePhoto, setActivePhoto] = useState<(typeof photos)[0] | null>(null)
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false)
  const [skillSearchQuery, setSkillSearchQuery] = useState("")
  const [copiedEmail, setCopiedEmail] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add("dark")
      localStorage.setItem("shreya-bento-theme", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("shreya-bento-theme", "light")
    }
  }, [isDark])

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setToastMessage(`${label} copied to clipboard!`)
    if (label.toLowerCase().includes("email")) {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2400)
    }
    setTimeout(() => {
      setToastMessage(null)
    }, 2800)
  }

  const getInterestIcon = (iconName: string) => {
    switch (iconName) {
      case "Server":
        return <Server className="w-5 h-5 text-[#FF5722] dark:text-[#FF6B35]" />
      case "Bot":
        return <Bot className="w-5 h-5 text-[#FF5722] dark:text-[#FF6B35]" />
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#FF5722] dark:text-[#FF6B35]" />
      case "Eye":
        return <Eye className="w-5 h-5 text-[#FF5722] dark:text-[#FF6B35]" />
      default:
        return <Terminal className="w-5 h-5 text-[#FF5722] dark:text-[#FF6B35]" />
    }
  }

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code2 className="w-4 h-4 text-[#FF5722] dark:text-[#FF6B35]" />
      case "Cpu":
        return <Cpu className="w-4 h-4 text-[#FF5722] dark:text-[#FF6B35]" />
      case "Server":
        return <Server className="w-4 h-4 text-[#FF5722] dark:text-[#FF6B35]" />
      case "Bot":
        return <Bot className="w-4 h-4 text-[#FF5722] dark:text-[#FF6B35]" />
      case "Eye":
        return <Eye className="w-4 h-4 text-[#FF5722] dark:text-[#FF6B35]" />
      case "Database":
        return <Database className="w-4 h-4 text-[#FF5722] dark:text-[#FF6B35]" />
      case "Wrench":
        return <Wrench className="w-4 h-4 text-[#FF5722] dark:text-[#FF6B35]" />
      default:
        return <Terminal className="w-4 h-4 text-[#FF5722] dark:text-[#FF6B35]" />
    }
  }

  // 3 Exact Highlight Stats requested by user (omitting MHT-CET from hero highlights)
  const heroHighlightStats = [
    {
      category: "Smart India Hackathon '25",
      value: "1st",
      detail: "Team Lead, Ministry of Jal Shakti",
    },
    {
      category: "LinkedIn CoachIn Mentee",
      value: "Top 0.48%",
      detail: "Top 100 of 21,000+ applicants",
    },
    {
      category: "DSA Problems Solved",
      value: "600+",
      detail: "LeetCode, Codeforces & platforms",
    },
  ]

  const runnerText =
    "⚡ ACTIVELY SEEKING SUMMER 2026 INTERNSHIPS IN BACKEND ENGINEERING, AGENTIC AI & GENAI SYSTEMS · SHREYA MANE (VJTI MUMBAI) · NATIONAL 1ST PLACE WINNER SMART INDIA HACKATHON 2025 · TOP 0.48% LINKEDIN COACHIN MENTEE · 600+ DSA PROBLEMS SOLVED · "

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] bento-grid-bg transition-colors duration-200 relative selection:bg-[#FF5722] selection:text-white">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-none bento-card text-xs font-mono font-bold bg-[var(--bg-surface)]">
          <span className="w-2.5 h-2.5 bg-[#FF5722] animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Controls Strip: Simple clean status banner */}
      <div className="w-full border-b-2 border-[var(--border)] bg-[var(--bg-surface)] py-2.5 px-4 sm:px-8 flex items-center justify-between text-xs font-mono uppercase tracking-wider">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold text-[var(--text-primary)]">
            LOOKING FOR INTERNSHIPS IN BACKEND ENGINEERING, AGENTIC AI &amp; GENAI
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className="btn-neo px-3 py-1 bg-[var(--bg-surface)] font-mono text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            title={isDark ? "Switch to Day Mode" : "Switch to Night Mode"}
          >
            {isDark ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>LIGHT</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-[#FF5722]" />
                <span>DARK</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
        {/* Navigation Bar */}
        <header className="bento-card-static p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 self-start md:self-center">
            <div className="w-12 h-12 border-2 border-[var(--border)] bg-[#FF5722] text-white flex items-center justify-center font-heading text-xl font-black shadow-[3px_3px_0px_var(--border)]">
              SM
            </div>
            <div>
              <span className="font-heading text-2xl font-black tracking-tight block">
                SHREYA MANE
              </span>
              <span className="font-mono text-[11px] uppercase font-black tracking-wider text-[#FF5722] dark:text-[#FF6B35] block">
                BACKEND DEVELOPER · GENAI &amp; AGENTIC AI ENGINEER
              </span>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono font-bold uppercase">
            <a href="#about" className="px-2.5 py-1.5 hover:bg-[var(--border)] hover:text-[var(--bg-surface)] transition-colors">
              // 01. Profile
            </a>
            <a href="#projects" className="px-2.5 py-1.5 hover:bg-[var(--border)] hover:text-[var(--bg-surface)] transition-colors">
              // 02. Systems
            </a>
            <a href="#honors" className="px-2.5 py-1.5 hover:bg-[var(--border)] hover:text-[var(--bg-surface)] transition-colors">
              // 03. Wins
            </a>
            <a href="#skills" className="px-2.5 py-1.5 hover:bg-[var(--border)] hover:text-[var(--bg-surface)] transition-colors">
              // 04. Stack
            </a>
            <a href="#education" className="px-2.5 py-1.5 hover:bg-[var(--border)] hover:text-[var(--bg-surface)] transition-colors">
              // 05. Pedigree
            </a>
          </nav>

          <div className="flex items-center gap-2.5 self-end md:self-center">
            <button
              onClick={() => setShowResumeModal(true)}
              className="btn-neo px-4 py-2 bg-[var(--bg-surface)] font-mono text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RÉSUMÉ</span>
            </button>
            <a
              href="#contact"
              className="btn-neo px-4 py-2 bg-[#FF5722] text-white font-mono text-xs font-bold tracking-wider"
            >
              CONNECT ➔
            </a>
          </div>
        </header>

        {/* HERO BENTO GRID (Bold Name + Highlighted Engineering Roles + Hover-to-Reveal Photo) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Statement Tile (8 Cols) */}
          <div className="lg:col-span-8 bento-card p-6 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 border-2 border-[var(--border)] bg-[var(--bg-surface-elevated)] font-mono text-xs font-bold uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5 text-[#FF5722] dark:text-[#FF6B35]" />
                <span>VJTI Mumbai · Computer Engineering (Cybersecurity Minor)</span>
              </div>

              {/* Massive Name display */}
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase font-bold tracking-widest text-[var(--text-muted)] block">
                  SOFTWARE ENGINEER &amp; ARCHITECT
                </span>
                <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.92] text-[var(--text-primary)]">
                  SHREYA MANE
                </h1>
              </div>

              {/* Bold Role Badges prominently highlighted */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                <span className="px-3.5 py-1.5 border-2 border-[var(--border)] bg-[#18181B] text-white dark:bg-[#FAFAFA] dark:text-[#09090B] font-mono text-xs sm:text-sm font-black uppercase tracking-wider shadow-[3px_3px_0px_var(--border)] flex items-center gap-2">
                  <Server className="w-4 h-4 text-[#FF5722]" />
                  <span>BACKEND DEVELOPER</span>
                </span>

                <span className="px-3.5 py-1.5 border-2 border-[var(--border)] bg-[#FF5722] text-white font-mono text-xs sm:text-sm font-black uppercase tracking-wider shadow-[3px_3px_0px_var(--border)] flex items-center gap-2">
                  <Bot className="w-4 h-4" />
                  <span>AGENTIC AI ENGINEER</span>
                </span>

                <span className="px-3.5 py-1.5 border-2 border-[var(--border)] bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] font-mono text-xs sm:text-sm font-black uppercase tracking-wider shadow-[3px_3px_0px_var(--border)] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FF5722]" />
                  <span>GENAI SYSTEMS ENGINEER</span>
                </span>
              </div>

              <p className="font-sans text-base sm:text-xl text-[var(--text-secondary)] max-w-2xl font-medium leading-relaxed pt-2">
                Engineering deterministic backend architectures, autonomous multi-agent evaluation pipelines with LangGraph &amp; ChromaDB, and real-time computer vision systems. National 1st Place Winner at <strong className="text-[var(--text-primary)] font-bold">Smart India Hackathon 2025</strong> for the Ministry of Jal Shakti.
              </p>
            </div>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-5 border-t-2 border-[var(--border)] font-mono text-xs font-bold">
              <a
                href="#projects"
                className="btn-neo px-6 py-3.5 bg-[#FF5722] text-white uppercase flex items-center gap-2 font-black tracking-wider"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-neo px-5 py-3.5 bg-[var(--bg-surface)] uppercase flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL SHREYA</span>
              </a>

              <button
                onClick={() => copyToClipboard(personalInfo.email, "Email")}
                className="btn-neo p-3.5 bg-[var(--bg-surface)] hover:text-[#FF5722] cursor-pointer"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Photo Tile: Crystal-Clear SIH 2025 Winning Photo */}
          <div className="lg:col-span-4 bento-card p-6 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-[var(--border)] font-mono text-[11px] font-bold uppercase">
                <span className="text-[#FF5722] dark:text-[#FF6B35]">SIH &apos;25 NATIONAL WINNER</span>
                <span>GRAND FINALE</span>
              </div>

              {/* Photo Box: Clear, crisp image without blue tint or blur */}
              <div className="border-2 border-[var(--border)] overflow-hidden bg-black aspect-[4/5] relative group shadow-[3px_3px_0px_var(--border)]">
                <img
                  src={bannerImg}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute bottom-0 inset-x-0 bg-[var(--bg-surface)] border-t-2 border-[var(--border)] p-3">
                  <div className="font-heading font-black text-sm uppercase">
                    Shreya Vijay Mane
                  </div>
                  <div className="font-mono text-[10px] text-[#FF5722] dark:text-[#FF6B35] font-black uppercase">
                    Team Lead · TechTitans VJTI
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[var(--bg-surface-elevated)] border-2 border-[var(--border)] font-mono text-[11px] font-bold flex items-center justify-between">
              <span className="text-[var(--text-muted)]">AVAILABILITY:</span>
              <span className="text-emerald-500 flex items-center gap-1.5 font-black">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                SUMMER 2026 INTERNSHIPS
              </span>
            </div>
          </div>
        </div>

        {/* 3 HIGHLIGHT METRICS (Requested verbatim: SIH '25 1st, LinkedIn CoachIn Top 0.48%, DSA 600+) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {heroHighlightStats.map((stat, i) => (
            <div key={i} className="bento-card p-6 space-y-2 bg-[var(--bg-surface)]">
              <div className="font-mono text-[11px] uppercase font-bold tracking-widest text-[#FF5722] dark:text-[#FF6B35]">
                // {stat.category}
              </div>
              <div className="font-heading text-4xl sm:text-5xl font-black text-[var(--text-primary)]">
                {stat.value}
              </div>
              <div className="font-mono text-xs font-bold text-[var(--text-secondary)]">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* SECTION 1: ABOUT & PHILOSOPHY */}
        <section id="about" className="bento-card p-6 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[var(--border)] pb-4 gap-2">
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 bg-[#FF5722]" />
              <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase">
                01 // BACKGROUND &amp; ENGINEERING CORE
              </h2>
            </div>
            <span className="font-mono text-xs font-bold text-[var(--text-muted)]">
              MUMBAI, MAHARASHTRA
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4 font-sans text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              <p className="font-bold text-[var(--text-primary)]">
                I’m Shreya Mane, a Computer Engineering student at VJTI Mumbai pursuing a minor in Cybersecurity. My primary technical interests focus on backend engineering, Agentic AI, and Generative AI.
              </p>
              <p>
                I enjoy developing backend services, working with databases and APIs, and exploring how large language models and multi-agent systems can be used to build intelligent applications. Through hands-on projects, hackathons, and collaborative development, I’ve worked across backend systems, machine learning, and computer vision.
              </p>
              <p>
                I’m particularly interested in the engineering behind AI applications—from backend architecture and data retrieval to agent orchestration and system integration. I enjoy tackling technical challenges, learning new technologies, and turning ideas into working software.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div className="bento-card-static p-4 space-y-2 bg-[var(--bg-surface-elevated)]">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  Primary Specializations
                </span>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs font-bold">
                  <span className="px-2 py-1 bg-[var(--bg-surface)] border border-[var(--border)]">Distributed Systems</span>
                  <span className="px-2 py-1 bg-[var(--bg-surface)] border border-[var(--border)]">Agentic Workflows</span>
                  <span className="px-2 py-1 bg-[var(--bg-surface)] border border-[var(--border)]">Vector RAG</span>
                  <span className="px-2 py-1 bg-[var(--bg-surface)] border border-[var(--border)]">Network Security</span>
                </div>
              </div>

              <div className="bento-card-static p-4 space-y-2 bg-[var(--bg-surface-elevated)]">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  Verifiable Standing
                </span>
                <p className="font-mono text-xs font-bold text-[var(--text-primary)]">
                  • 1st Place National Winner (SIH 2025)<br />
                  • Top 0.48% LinkedIn CoachIn Cohort<br />
                  • Amazon Future Engineer Scholar
                </p>
              </div>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t-2 border-[var(--border)]">
            {technicalInterests.map((interest, idx) => (
              <div key={idx} className="bento-card-static p-5 flex flex-col justify-between space-y-4 bg-[var(--bg-surface)]">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 border-2 border-[var(--border)] bg-[#FF5722] text-white">
                      {getInterestIcon(interest.iconName)}
                    </div>
                    <span className="font-mono text-xs font-black">0{idx + 1}</span>
                  </div>
                  <h3 className="font-heading text-lg font-black uppercase">
                    {interest.title}
                  </h3>
                  <p className="font-sans text-xs text-[var(--text-secondary)] font-medium leading-relaxed">
                    {interest.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap gap-1">
                  {interest.skills.map((s, sIdx) => (
                    <span key={sIdx} className="px-1.5 py-0.5 bg-[var(--bg-surface-elevated)] font-mono text-[10px] font-bold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: CURATED PROJECTS & ARCHITECTURE */}
        <section id="projects" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[var(--border)] pb-3 gap-2">
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 bg-[#FF5722]" />
              <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase">
                02 // SELECTED ENGINEERING SYSTEMS
              </h2>
            </div>
            <span className="font-mono text-xs font-bold text-[var(--text-muted)]">
              4 VERIFIED CASE STUDIES
            </span>
          </div>

          {/* Featured Hero Project: ShortList AI */}
          <div className="bento-card-lg p-6 sm:p-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-[#FF5722] text-white font-mono text-xs font-black uppercase">
                  FLAGSHIP SYSTEM
                </span>
                <span className="font-mono text-xs font-bold text-[var(--text-muted)]">
                  {featuredProject.category} · {featuredProject.timeline}
                </span>
              </div>
              <span className="font-mono text-xs font-bold bg-[var(--bg-surface-elevated)] px-2.5 py-1 border border-[var(--border)]">
                5-AGENT ORCHESTRATION
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase tracking-tight">
                  {featuredProject.title}
                </h3>
                <p className="font-mono text-sm font-bold text-[#FF5722] dark:text-[#FF6B35]">
                  // {featuredProject.subtitle}
                </p>
                <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] font-medium leading-relaxed">
                  {featuredProject.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                  {featuredProject.metrics.map((m, i) => (
                    <div key={i} className="p-3 bg-[var(--bg-surface-elevated)] border-2 border-[var(--border)] font-mono">
                      <div className="text-[10px] text-[var(--text-muted)] uppercase font-bold">{m.label}</div>
                      <div className="text-xs font-black text-[var(--text-primary)]">{m.value}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={() => setSelectedProject(featuredProject)}
                    className="btn-neo px-5 py-2.5 bg-[#FF5722] text-white font-mono text-xs font-black uppercase flex items-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>INSPECT ARCHITECTURE</span>
                  </button>
                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-neo px-4 py-2.5 bg-[var(--bg-surface)] font-mono text-xs font-bold flex items-center gap-2"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>CODE REPO</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="lg:col-span-5 bento-card-static p-5 bg-[var(--bg-surface-elevated)] space-y-3 font-mono text-xs">
                <div className="font-bold uppercase text-[var(--text-muted)] pb-2 border-b border-[var(--border)] flex justify-between">
                  <span>SYSTEM HIGHLIGHTS</span>
                  <span>VERIFIED</span>
                </div>
                <ul className="space-y-2.5 text-[var(--text-secondary)] font-bold">
                  {featuredProject.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Other 3 Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((project, idx) => (
              <div key={idx} className="bento-card p-6 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-xs font-bold">
                    <span className="px-2 py-0.5 bg-[var(--bg-surface-elevated)] border border-[var(--border)]">
                      {project.category}
                    </span>
                    <span className="text-[var(--text-muted)]">0{idx + 2} //</span>
                  </div>

                  <h3 className="font-heading text-xl font-black uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs font-bold text-[#FF5722] dark:text-[#FF6B35]">
                    {project.subtitle}
                  </p>

                  <p className="font-sans text-xs text-[var(--text-secondary)] font-medium leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t-2 border-[var(--border)]">
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px] font-bold">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="self-center text-[var(--text-muted)]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between font-mono text-xs font-bold pt-1">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-[#FF5722] dark:text-[#FF6B35] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>BLUEPRINT</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#FF5722] transition-colors flex items-center gap-1"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>CODE</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: HONORS & SIH GALLERY */}
        <section id="honors" className="bento-card p-6 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[var(--border)] pb-4 gap-2">
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 bg-[#FF5722]" />
              <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase">
                03 // HONORS &amp; SIH VICTORY DOCUMENTATION
              </h2>
            </div>
            <span className="font-mono text-xs font-bold text-[var(--text-muted)]">
              VERIFIED AWARDS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Honors list */}
            <div className="lg:col-span-6 space-y-3">
              {achievements.map((ach, idx) => (
                <div key={idx} className="bento-card-static p-4 flex items-start gap-3 bg-[var(--bg-surface-elevated)]">
                  <div className="p-2 bg-[#FF5722] text-white border-2 border-[var(--border)] shrink-0 mt-0.5">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5 flex-1 font-mono">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-heading font-black text-sm uppercase text-[var(--text-primary)]">
                        {ach.title}
                      </span>
                      <span className="text-[10px] text-[#FF5722] dark:text-[#FF6B35] font-bold">
                        {ach.year}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-[var(--text-secondary)] font-medium">
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Photos side-by-side */}
            <div className="lg:col-span-6 space-y-4">
              <div className="font-mono text-xs font-bold uppercase text-[var(--text-muted)] pb-1 border-b border-[var(--border)]">
                // CLICK PHOTO TO INSPECT HIGH RESOLUTION
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {photos.map((photo, pIdx) => (
                  <div
                    key={pIdx}
                    onClick={() => setActivePhoto(photo)}
                    className="bento-card overflow-hidden cursor-pointer group"
                  >
                    <div className="aspect-[16/11] bg-black overflow-hidden relative">
                      <img
                        src={pIdx === 0 ? bannerImg : trophyImg}
                        alt={photo.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 p-1.5 bg-[var(--bg-surface)] border border-[var(--border)]">
                        <Eye className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="p-3 bg-[var(--bg-surface)] font-mono text-[11px] font-bold">
                      <div className="truncate text-[var(--text-primary)]">{photo.title}</div>
                      <div className="text-[10px] text-[var(--text-muted)] truncate">{photo.tag}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: TECHNICAL ARSENAL */}
        <section id="skills" className="bento-card p-6 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[var(--border)] pb-4 gap-4">
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 bg-[#FF5722]" />
              <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase">
                04 // TECHNICAL ARSENAL &amp; CAPABILITIES
              </h2>
            </div>

            {/* Live Search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="text"
                placeholder="FILTER SKILLS..."
                value={skillSearchQuery}
                onChange={(e) => setSkillSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border-2 border-[var(--border)] bg-[var(--bg-surface)] font-mono text-xs font-bold uppercase focus:outline-none focus:border-[#FF5722]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {technicalSkillsGroups.map((group, idx) => {
              const filteredSkills = group.skills.filter((s) =>
                s.toLowerCase().includes(skillSearchQuery.toLowerCase())
              )
              if (skillSearchQuery && filteredSkills.length === 0) return null

              return (
                <div key={idx} className="bento-card-static p-5 bg-[var(--bg-surface-elevated)] space-y-3 font-mono">
                  <div className="flex items-center gap-2 pb-2 border-b border-[var(--border)]">
                    <div className="p-1.5 bg-[#FF5722] text-white">
                      {getSkillIcon(group.iconName)}
                    </div>
                    <h3 className="font-heading font-black text-xs uppercase">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {filteredSkills.map((skillName, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-1 bg-[var(--bg-surface)] border border-[var(--border)] text-xs font-bold"
                      >
                        {skillName}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* SECTION 5: ACADEMIC PEDIGREE */}
        <section id="education" className="bento-card p-6 sm:p-10 space-y-8">
          <div className="flex items-center gap-3 border-b-2 border-[var(--border)] pb-4">
            <span className="w-4 h-4 bg-[#FF5722]" />
            <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase">
              05 // ACADEMIC PEDIGREE
            </h2>
          </div>

          <div className="space-y-4 font-mono">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bento-card-static p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[var(--bg-surface)]"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FF5722] dark:text-[#FF6B35]">
                    <span>// {edu.period}</span>
                    <span>·</span>
                    <span>{edu.location}</span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-black uppercase text-[var(--text-primary)]">
                    {edu.institution}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] font-medium">
                    {edu.degree} {edu.specialization && `· ${edu.specialization}`}
                  </p>
                  {edu.rankOrPercentile && (
                    <p className="text-xs font-bold text-[var(--text-muted)] pt-1">
                      {edu.rankOrPercentile}
                    </p>
                  )}
                </div>

                <div className="sm:text-right shrink-0">
                  <span className="inline-block px-3 py-1.5 border-2 border-[var(--border)] bg-[#FF5722] text-white text-xs font-black shadow-[2px_2px_0px_var(--border)]">
                    {edu.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: DIRECT CONTACT & INQUIRIES */}
        <section id="contact" className="bento-card-lg p-6 sm:p-12 space-y-8 bg-[var(--bg-surface)]">
          <div className="flex items-center gap-3 border-b-2 border-[var(--border)] pb-4">
            <span className="w-4 h-4 bg-[#FF5722]" />
            <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase">
              06 // CONNECT WITH SHREYA
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight">
                LET&apos;S BUILD NEXT-GEN <br />
                <span className="text-[#FF5722] dark:text-[#FF6B35]">INTELLIGENT SYSTEMS</span>.
              </h3>
              <p className="font-sans text-base text-[var(--text-secondary)] font-medium max-w-xl leading-relaxed">
                I am actively considering Summer 2026 Software Engineering, Backend, and AI Systems internships. Reach out directly for collaboration, hackathons, or high-impact engineering roles.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-4 font-mono text-xs font-bold">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn-neo px-6 py-3.5 bg-[#FF5722] text-white uppercase flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>EMAIL SHREYA DIRECTLY</span>
                </a>

                <button
                  onClick={() => copyToClipboard(personalInfo.email, "Email address")}
                  className="btn-neo px-5 py-3.5 bg-[var(--bg-surface-elevated)] flex items-center gap-2 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  <span>{personalInfo.email}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bento-card-static p-6 bg-[var(--bg-surface-elevated)] space-y-4 font-mono text-xs font-bold">
              <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider border-b border-[var(--border)] pb-2">
                VERIFIED PROFILES
              </div>
              <div className="space-y-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 bg-[var(--bg-surface)] border border-[var(--border)] hover:bg-[#FF5722] hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4" />
                    <span>GITHUB</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 bg-[var(--bg-surface)] border border-[var(--border)] hover:bg-[#FF5722] hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LINKEDIN</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t-2 border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs font-bold text-[var(--text-muted)]">
            <span>© {new Date().getFullYear()} SHREYA MANE · VJTI MUMBAI</span>
            <span>BUILT WITH REACT 19 &amp; TAILWIND CSS</span>
          </div>
        </section>
      </div>

      {/* MODAL 1: PROJECT ARCHITECTURE BLUEPRINT */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bento-card p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)] relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 btn-neo p-2 bg-[var(--bg-surface)] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2">
              <div className="font-mono text-xs font-bold text-[#FF5722] dark:text-[#FF6B35]">
                // ARCHITECTURE BLUEPRINT · {selectedProject.timeline}
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase">
                {selectedProject.title}
              </h3>
              <p className="font-mono text-xs font-bold text-[var(--text-muted)]">
                {selectedProject.subtitle}
              </p>
            </div>

            <p className="font-sans text-sm text-[var(--text-secondary)] font-medium leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="bento-card-static p-4 bg-[var(--bg-surface-elevated)] space-y-2 font-mono text-xs">
              <span className="font-bold uppercase text-[var(--text-muted)] block">
                Engineering Highlights:
              </span>
              <ul className="space-y-2 font-bold text-[var(--text-secondary)]">
                {selectedProject.bullets.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#FF5722] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <span className="font-bold uppercase text-[var(--text-muted)] block">
                Stack Components:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 border border-[var(--border)] bg-[var(--bg-surface-elevated)] font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {selectedProject.githubUrl && (
              <div className="pt-2">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-neo inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF5722] text-white font-mono text-xs font-bold uppercase"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>OPEN GITHUB REPOSITORY</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL 2: FULL-RES PHOTO LIGHTBOX */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl bento-card overflow-hidden bg-[var(--bg-surface)] relative"
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 btn-neo p-2 bg-[var(--bg-surface)] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activePhoto.title.includes("Banner") || activePhoto.title.includes("Grand Finale") ? bannerImg : trophyImg}
              alt={activePhoto.caption}
              className="w-full max-h-[75vh] object-contain bg-black"
            />
            <div className="p-4 bg-[var(--bg-surface)] font-mono text-xs font-bold flex items-center justify-between">
              <div>
                <div className="font-heading font-black text-sm uppercase">{activePhoto.title}</div>
                <div className="text-[var(--text-muted)] text-[11px]">{activePhoto.caption}</div>
              </div>
              <span className="px-2 py-1 bg-[#FF5722] text-white text-[10px]">
                SIH 2025 GRAND FINALE
              </span>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: OFFICIAL PRINTABLE RÉSUMÉ VIEWER */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-3xl max-h-[92vh] overflow-y-auto bento-card p-6 sm:p-10 space-y-6 bg-[var(--bg-surface)] relative">
            <div className="flex items-center justify-between pb-4 border-b-2 border-[var(--border)]">
              <div>
                <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#FF5722] dark:text-[#FF6B35] block">
                  OFFICIAL ACADEMIC CURRICULUM VITAE
                </span>
                <h3 className="font-heading text-2xl font-black uppercase">{personalInfo.name}</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="btn-neo p-2 bg-[var(--bg-surface)] cursor-pointer"
                  title="Print Resume"
                >
                  <Printer className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="btn-neo p-2 bg-[var(--bg-surface)] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-6 text-xs font-mono font-bold">
              <div>
                <span className="text-[#FF5722] dark:text-[#FF6B35] uppercase tracking-wider block mb-2">
                  EDUCATION
                </span>
                <div className="space-y-3">
                  {education.map((edu, i) => (
                    <div key={i} className="flex justify-between items-start border-b border-[var(--border-subtle)] pb-2">
                      <div>
                        <div className="font-black text-[var(--text-primary)]">{edu.institution}</div>
                        <div className="text-[var(--text-secondary)] font-medium">{edu.degree}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[#FF5722] dark:text-[#FF6B35] font-black">{edu.grade}</div>
                        <div className="text-[var(--text-muted)] text-[10px]">{edu.period}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[#FF5722] dark:text-[#FF6B35] uppercase tracking-wider block mb-2">
                  KEY HONORS &amp; HACKATHON WINS
                </span>
                <ul className="space-y-1.5 text-[var(--text-secondary)] font-medium">
                  {achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#FF5722]">•</span>
                      <span>
                        <strong className="text-[var(--text-primary)] font-bold">{a.title}</strong> — {a.description} ({a.year})
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[#FF5722] dark:text-[#FF6B35] uppercase tracking-wider block mb-2">
                  CORE PRODUCTION PROJECTS
                </span>
                <div className="space-y-3">
                  {allProjects.map((p, i) => (
                    <div key={i} className="border-b border-[var(--border-subtle)] pb-2">
                      <div className="font-black text-[var(--text-primary)]">{p.title} — {p.subtitle}</div>
                      <div className="text-[var(--text-muted)] text-[11px] mb-1">Stack: {p.technologies.join(", ")}</div>
                      <p className="text-[var(--text-secondary)] font-medium">{p.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
