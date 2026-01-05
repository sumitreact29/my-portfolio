import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="w-full px-6 md:px-[50px]">
      <Navbar />
      <Hero />

      {/* Platforms & Capabilities */}
          <section className="w-full">
          
        <h2 className="text-3xl font-bold mb-10">
          Platforms & Capabilities
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              iOS & Apple Ecosystem
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Swift, SwiftUI, UIKit, Combine, Apple MusicKit, HealthKit, CI/CD,
              performance optimization.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Android Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Native Android apps using Java/Kotlin, modular architecture, REST
              APIs, and Firebase.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Cross-Platform Mobile
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              React Native and Flutter for fast MVPs and shared codebases
              without compromising UX.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Web Applications
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Modern web apps using React, Next.js, Tailwind CSS, and SEO best
              practices.
            </p>
          </div>
        </div>
      </section>

      {/* WORK */}
      <ProjectsSection />

      {/* Freelance CTA */}
      {/* <section className="max-w-6xl mx-auto py-24"> */}
                  <section className="w-full">

        <h2 className="text-3xl font-bold mb-4">
          Available for Contract Work
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-3xl">
          I help startups and teams build reliable, scalable mobile and web
          applications — from early MVPs to large-scale production apps. If
          you’re looking for a senior engineer who understands both product and
          performance, let’s talk.
        </p>

        <a
          href="#contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg text-sm hover:opacity-80"
        >
          Get in Touch
        </a>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-6xl mx-auto py-24"
      >
        
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold mb-6">
            Let’s Work Together
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Looking to build or improve a product? I’m available for contract
            work and collaborations.
          </p>

          <p className="font-medium">
            📧 sumitbhargav2994@gmail.com
          </p>
        </div>
      </section>
    </main>
  );
}
