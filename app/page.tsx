import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="w-full px-5 sm:px-6 md:px-[50px] text-white">
      <HeroSection />

      {/* Platforms & Capabilities */}
      <section id="about" className="w-full py-20 sm:py-24">
        <div className="flex flex-col gap-4 mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Building AI-native experiences across platforms
          </h2>
          <p className="text-white/60 max-w-2xl">
            From mobile-first product strategy to AI-powered features, I help
            teams ship fast without losing polish or performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "iOS & Apple Ecosystem",
              body: "Swift, SwiftUI, UIKit, Combine, MusicKit, HealthKit, StoreKit, and performance tuning for high-scale apps.",
            },
            {
              title: "Android & Cross-Platform",
              body: "Kotlin, Java, React Native, Flutter, and shared design systems for rapid MVPs.",
            },
            {
              title: "AI Product Integration",
              body: "On-device intelligence, prompt-driven workflows, and intelligent UI patterns that feel seamless to users.",
            },
            {
              title: "Web Experiences",
              body: "Next.js, Tailwind, scalable APIs, analytics, and SEO optimization for fast, elegant web products.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="glass-surface rounded-3xl px-6 py-7 hover:border-white/30 transition"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-white/65 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <ProjectsSection />

      {/* Workflow */}
      <section className="w-full py-20 sm:py-24">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
              Workflow
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Product strategy meets AI-powered delivery
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              I partner with teams from discovery to launch, using rapid
              prototyping, AI-assisted UX flows, and performance-first
              engineering to accelerate delivery without sacrificing quality.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "AI UX Prototyping",
                "Performance Audits",
                "Design Systems",
                "Analytics & Growth",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-surface rounded-3xl p-6 space-y-5">
            {[
              {
                label: "01",
                title: "Signal-driven research",
                body: "User feedback, analytics, and business KPIs guide the product roadmap.",
              },
              {
                label: "02",
                title: "AI-powered workflows",
                body: "Automations, copilots, and smart surfaces that feel invisible to users.",
              },
              {
                label: "03",
                title: "Launch & scale",
                body: "Instrumentation, crash stability, and iteration loops built in from day one.",
              },
            ].map((step) => (
              <div key={step.label} className="flex gap-4">
                <span className="text-sm font-semibold text-white/60">
                  {step.label}
                </span>
                <div>
                  <p className="text-white font-medium">{step.title}</p>
                  <p className="text-sm text-white/60">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Freelance CTA */}
      <section className="w-full py-20 sm:py-24">
        <div className="glass-surface rounded-[32px] px-8 py-10 md:px-12 md:py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">
              Available for contract work
            </h2>
            <p className="text-white/65 max-w-2xl">
              From MVPs to enterprise apps, I help teams build reliable,
              scalable, and AI-ready products with premium UX.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium transition hover:scale-[1.02]"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto py-20 sm:py-24">
        <div className="w-full max-w-2xl glass-surface rounded-3xl px-8 py-10">
          <h2 className="text-3xl font-semibold mb-6 text-white">
            Let’s build something powerful
          </h2>

          <p className="text-white/65 mb-6">
            I’m available for contract work, advisory, and collaborations.
          </p>

          <p className="text-white font-medium">
            sumitbhargav2994@gmail.com
          </p>
        </div>
      </section>
    </main>
  );
}
