 
import ProjectCard from "./components/ProjectCard";
 

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-10">

      {/* HEADER */}
      <section className="mb-16">
        <h1 className="text-6xl font-bold mb-4">
          Your Name
        </h1>
        <p className="text-xl text-gray-600">
          iOS Developer | Swift | SwiftUI
        </p>
      </section>

      {/* PROJECTS */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">
          Projects
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          <ProjectCard
            title="iOS Weather App"
            description="A SwiftUI weather app using REST APIs."
            image="/images/project1.jpg"
          />

          <ProjectCard
            title="Finance Tracker"
            description="Track daily expenses with charts."
            image="/images/project1.jpg"
          />

          <ProjectCard
            title="Portfolio Website"
            description="My personal portfolio built with React."
            image="/images/project1.jpg"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section>
        <h2 className="text-3xl font-bold mb-4">
          Contact Me
        </h2>

        <p className="text-gray-600 mb-2">
          Email: your@email.com
        </p>
        <p className="text-gray-600">
          GitHub: github.com/yourname
        </p>
      </section>

    </main>
  );
}
