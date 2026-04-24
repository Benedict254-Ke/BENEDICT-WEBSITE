import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-900 text-white py-20 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-12 text-blue-400">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* FRONTEND */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-800 p-6 rounded-xl border border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-400">
              Frontend
            </h3>

            <div className="space-y-4 text-left">

              <div className="flex items-center gap-3">
                <FaHtml5 className="text-orange-500 text-xl" />
                <span>HTML5</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCss3Alt className="text-blue-500 text-xl" />
                <span>CSS3 / Tailwind CSS</span>
              </div>

              <div className="flex items-center gap-3">
                <FaJs className="text-yellow-400 text-xl" />
                <span>JavaScript (ES6+)</span>
              </div>

              <div className="flex items-center gap-3">
                <FaReact className="text-cyan-400 text-xl" />
                <span>React.js</span>
              </div>

            </div>
          </motion.div>

          {/* TOOLS */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-800 p-6 rounded-xl border border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-400">
              Tools & Workflow
            </h3>

            <div className="space-y-4 text-left">

              <div className="flex items-center gap-3">
                <FaGitAlt className="text-orange-500 text-xl" />
                <span>Git & GitHub</span>
              </div>

              <div className="flex items-center gap-3">
                <SiTailwindcss className="text-cyan-400 text-xl" />
                <span>Tailwind CSS</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-blue-400 text-xl">🌐</span>
                <span>REST APIs</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">⚡</span>
                <span>Responsive Design</span>
              </div>

            </div>
          </motion.div>

          {/* OTHER */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-800 p-6 rounded-xl border border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-400">
              Other Skills
            </h3>

            <div className="space-y-4 text-left">

              <div className="flex items-center gap-3">
                <span className="text-purple-400 text-xl">🧠</span>
                <span>Problem Solving</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-yellow-400 text-xl">🎯</span>
                <span>UI/UX Thinking</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-pink-400 text-xl">🚀</span>
                <span>Project Development</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">💼</span>
                <span>IT Support Experience</span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}