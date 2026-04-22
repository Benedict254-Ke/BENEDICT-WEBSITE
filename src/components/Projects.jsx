export default function Projects() {
  return (
    <section id="projects" className="bg-gray-800 text-white py-20 px-6">

      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-10 text-blue-400">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Project 1 */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
            <p className="text-gray-400 text-sm mb-4">
              Personal developer portfolio built with React and Tailwind CSS.
            </p>
            <span className="text-blue-400 text-sm">React • Tailwind</span>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Task Manager App</h3>
            <p className="text-gray-400 text-sm mb-4">
              CRUD application for managing daily tasks and productivity.
            </p>
            <span className="text-blue-400 text-sm">React • JavaScript</span>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Weather App</h3>
            <p className="text-gray-400 text-sm mb-4">
              Real-time weather data using external API integration.
            </p>
            <span className="text-blue-400 text-sm">API • React</span>
          </div>

          {/* Project 4 (Your live project) */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Mechanical Engineer Portfolio</h3>
            <p className="text-gray-400 text-sm mb-4">
              Live portfolio website showcasing engineering profile and work.
            </p>
            <a 
              href="https://mechanical-engineer-portifolio.vercel.app/"
              target="_blank"
              className="text-blue-400 text-sm underline"
            >
              View Live Project
            </a>
          </div>

          {/* Project 5 (Victor & Sons) */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Victor & Sons Website</h3>
            <p className="text-gray-400 text-sm mb-4">
              Business website for Victor & Sons Computers & Tech Solutions.
            </p>
            <a 
              href="https://victor-and-sons.vercel.app/"
              target="_blank"
              className="text-blue-400 text-sm underline"
            >
              View Live Project
            </a>
          </div>

          {/* Project 6 (Your personal portfolio) */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Personal Portfolio</h3>
            <p className="text-gray-400 text-sm mb-4">
              First deployed personal portfolio showcasing developer profile.
            </p>
            <a 
              href="https://benedict-personal-portifolio.vercel.app/"
              target="_blank"
              className="text-blue-400 text-sm underline"
            >
              View Live Project
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}