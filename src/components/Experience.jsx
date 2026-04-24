import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer Focus",
      company: "Personal Projects",
      period: "2025 - Present",
      description:
        "Building responsive web applications using React, Tailwind CSS, Framer Motion, and modern frontend development practices.",
    },
    {
      title: "Software Development Graduate",
      company: "Power Learn Project Africa",
      period: "2025",
      description:
        "Completed software development training and built real-world projects while strengthening frontend and full-stack development skills.",
    },
    {
      title: "Employment Readiness Trainee",
      company: "OctoPrep by PLP Africa",
      period: "2026",
      description:
        "Improving career readiness, interview preparation, personal branding, and job-market positioning for developer roles.",
    },
    {
      title: "IT Support & Web Development",
      company: "Victor & Sons Computers and Tech Solutions Kenya",
      period: "Current",
      description:
        "Supporting technical operations, troubleshooting systems, and contributing to digital solutions including business web presence.",
    },
  ];

  return (
    <section id="experience" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-400 mb-4">
            Experience & Growth
          </h2>
          <p className="text-gray-400">
            My learning journey, practical experience, and career readiness path.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg hover:border-blue-400 transition"
            >
              <p className="text-sm text-blue-400 mb-2">{item.period}</p>

              <h3 className="text-xl font-bold mb-1">{item.title}</h3>

              <p className="text-gray-300 font-medium mb-3">
                {item.company}
              </p>

              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}