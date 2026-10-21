import { useState, useEffect } from "react"
import { ArrowUpRight, Sparkles, Terminal, Cpu, Bot, Server, Shield, Zap } from "lucide-react"

interface SystemIntroProps {
  onComplete: () => void
  isDark: boolean
}

export default function NeuralTerminalOpener({ onComplete, isDark }: SystemIntroProps) {
  const [progress, setProgress] = useState(0)
  const [step, setStep] = useState(0)
  const [isDismissing, setIsDismissing] = useState(false)

  const steps = [
    { label: "INITIALIZING KERNEL", detail: "VJTI Computer Engineering Environment" },
    { label: "COMPILING BACKEND APIS", detail: "FastAPI · Node.js · Distributed Systems" },
    { label: "ORCHESTRATING AGENT GRAPHS", detail: "LangGraph · Autonomous Multi-Agent Workflows" },
    { label: "SYNTHESIZING GENERATIVE AI", detail: "Sentence Transformers · Semantic ChromaDB" },
    { label: "SYSTEM VERIFIED: SHREYA MANE", detail: "SIH '25 National Winner · Ready" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        const next = prev + Math.floor(Math.random() * 8) + 4
        return next > 100 ? 100 : next
      })
    }, 90)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (progress < 25) setStep(0)
    else if (progress < 50) setStep(1)
    else if (progress < 75) setStep(2)
    else if (progress < 95) setStep(3)
    else setStep(4)
  }, [progress])

  const handleEnter = () => {
    setIsDismissing(true)
    setTimeout(() => {
      onComplete()
    }, 600)
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-700 ${
        isDismissing ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
      } ${
        isDark ? "bg-[#09090C] text-[#F3F2F8]" : "bg-[#F7F7F9] text-[#111116]"
      }`}
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] opacity-25 ${
            isDark ? "bg-purple-600" : "bg-purple-400"
          }`}
        />
        <div
          className={`absolute top-1/3 left-1/3 w-[450px] h-[450px] rounded-full blur-[120px] opacity-15 ${
            isDark ? "bg-sky-500" : "bg-sky-400"
          }`}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#888 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Main Opener Container */}
      <div
        className={`relative z-10 w-full max-w-xl rounded-3xl p-7 sm:p-10 border transition-all duration-500 shadow-2xl backdrop-blur-2xl ${
          isDark
            ? "bg-[#121118]/90 border-purple-900/40 shadow-purple-950/40"
            : "bg-white/95 border-purple-200/80 shadow-purple-200/50"
        }`}
      >
        {/* Top Header Tag */}
        <div className="flex items-center justify-between pb-5 border-b border-inherit/60 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-mono text-[11px] uppercase tracking-widest opacity-60">
              System Boot // v2.6.0
            </span>
          </div>
          <span className="font-mono text-xs font-semibold text-purple-600 dark:text-purple-400">
            {progress}%
          </span>
        </div>

        {/* Central Identity Presentation */}
        <div className="space-y-4 mb-7 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-600 dark:text-purple-300 text-[11px] font-mono tracking-widest uppercase">
            <Sparkles className="w-3 h-3 text-purple-500" />
            <span>Identity Initialized</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Shreya Mane
          </h1>

          {/* Core Specialization Pills requested by user: Backend Engineer, Agentic AI, GenAI */}
          <div className="flex flex-wrap gap-2 pt-1 justify-center sm:justify-start">
            <span className="px-3 py-1.5 rounded-xl border border-purple-500/30 bg-purple-500/15 text-purple-600 dark:text-purple-300 font-mono text-xs font-medium flex items-center gap-1.5 shadow-sm">
              <Server className="w-3.5 h-3.5 text-purple-500" />
              <span>Backend Engineer</span>
            </span>

            <span className="px-3 py-1.5 rounded-xl border border-sky-500/30 bg-sky-500/15 text-sky-600 dark:text-sky-300 font-mono text-xs font-medium flex items-center gap-1.5 shadow-sm">
              <Bot className="w-3.5 h-3.5 text-sky-500" />
              <span>Agentic AI Architect</span>
            </span>

            <span className="px-3 py-1.5 rounded-xl border border-fuchsia-500/30 bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-300 font-mono text-xs font-medium flex items-center gap-1.5 shadow-sm">
              <Cpu className="w-3.5 h-3.5 text-fuchsia-500" />
              <span>GenAI Systems</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm opacity-70 font-light leading-relaxed pt-2">
            VJTI Mumbai Computer Engineering · National 1st Place Winner at Smart India Hackathon 2025 · Architecting intelligent backend & autonomous multi-agent pipelines.
          </p>
        </div>

        {/* Progress bar */}
        <div className="space-y-2 mb-7">
          <div className="h-1.5 w-full bg-inherit/40 rounded-full overflow-hidden border border-inherit/40 p-[1px]">
            <div
              className="h-full bg-gradient-to-r from-purple-600 via-sky-500 to-fuchsia-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Dynamic Console Telemetry */}
          <div className="flex items-center justify-between text-[11px] font-mono opacity-80 pt-1">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-purple-500 animate-pulse" />
              <span className="text-purple-600 dark:text-purple-400 font-medium">
                {steps[step].label}
              </span>
            </div>
            <span className="truncate max-w-[200px] text-right opacity-60">
              {steps[step].detail}
            </span>
          </div>
        </div>

        {/* Interactive Enter Call To Action */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-inherit/60">
          <div className="text-[11px] font-mono opacity-60 hidden sm:block">
            {progress < 100 ? "Syncing modules..." : "System ready"}
          </div>

          <button
            onClick={handleEnter}
            className={`w-full sm:w-auto px-7 py-3 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
              progress === 100
                ? "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-500/30 hover:scale-105"
                : "bg-purple-600/80 hover:bg-purple-600 text-white shadow-purple-500/20"
            }`}
          >
            <span>{progress === 100 ? "Explore Portfolio" : "Skip To Workspace"}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
