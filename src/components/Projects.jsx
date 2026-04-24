import { useState } from "react";
import { motion } from "framer-motion";

import luluMusic from "../assets/projects/lulu-music.png";
import taskManager from "../assets/projects/task-manager.png";
import portfolio from "../assets/projects/portfolio.png";
import victorSons from "../assets/projects/victor-sons.png";
import mechanical from "../assets/projects/mechanical.png";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Lulu B Music Platform",
      image: luluMusic,
      description:
        "Developed a full-stack music platform to showcase artist content and deliver an interactive music experience.",
      points: [
        "Built a responsive UI using React and Tailwind CSS",
        "Implemented category-based filtering for music discovery",
        "Integrated audio playback and download functionality",
        "Designed a modern dark-themed user experience",
      ],
      tech: ["React", "Tailwind CSS", "Backend API"],
      live: "https://lulu-b-music-website.vercel.app/",
      github: "https://github.com/Benedict254-Ke/LULU-MUSIC-WEBSITE",
    },
    {
      title: "Task Manager Application",
      image: taskManager,
      description:
        "Developed a task management application for handling user workflows through dynamic state management.",
      points: [
        "Implemented task creation, editing, and deletion",
        "Managed state efficiently using React hooks",
        "Designed a responsive dashboard-style UI",
        "Used local storage to persist user data",
      ],
      tech: ["React", "Tailwind CSS", "Local Storage"],
      live: "https://task-manager-fawn-omega.vercel.app/",
      github: "https://github.com/Benedict254-Ke/TASK-MANAGER",
    },
    {
      title: "Frontend Developer Portfolio",
      image: portfolio,
      description:
        "Built a modern portfolio to showcase projects, technical skills, and professional identity.",
      points: [
        "Designed a clean responsive interface",
        "Implemented project modals and smooth scrolling",
        "Added animations using Framer Motion",
        "Optimized for accessibility and cross-device use",
      ],
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      live: "https://benedict-website-six.vercel.app/",
      github: "https://github.com/Benedict254-Ke/BENEDICT-WEBSITE",
    },
    {
      title: "Victor & Sons Business Website",
      image: victorSons,
      description:
        "Designed and developed a professional business website for a technology solutions company.",
      points: [
        "Built a responsive business website",
        "Structured content for better usability",
        "Added service and contact sections",
        "Applied modern UI practices for credibility",
      ],
      tech: ["React", "Tailwind CSS"],
      live: "https://victor-and-sons.vercel.app/",
      github: "https://github.com/Benedict254-Ke/VICTOR-AND-SONS-TECH",
    },
    {
      title: "Mechanical Engineer Portfolio",
      image: mechanical,
      description:
        "Developed a professional portfolio website tailored for a mechanical engineering profile.",
      points: [
        "Created a clean responsive layout",
        "Presented skills, experience, and services clearly",
        "Focused on readability and structure",
        "Used reusable component-based design",
      ],
      tech: ["React", "Tailwind CSS"],
      live: "https://mechanical-engineer-portifolio.vercel.app/",
      github: "https://github.com/Benedict254-Ke/mechanical-engineer-portifolio",
    },
  ];

  return (
    <section id="projects" className="bg-gray-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-400">
          Featured Projects
        </h2>

        <p className="text-gray-400 mb-12">
          A selection of real-world projects built with React, Tailwind CSS, and modern frontend practices.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(project)}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg cursor-pointer border border-gray-700 hover:border-blue-400 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 text-left">
                <h3 className="text-xl font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 max-w-2xl w-full rounded-xl overflow-hidden relative border border-gray-700"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-gray-800 hover:bg-red-500 w-9 h-9 rounded-full"
            >
              ✕
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold text-blue-400 mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {selectedProject.description}
              </p>

              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                {selectedProject.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((item, i) => (
                  <span
                    key={i}
                    className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg"
                >
                  Live Site
                </a>

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-500 hover:bg-white hover:text-black px-5 py-2 rounded-lg"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}