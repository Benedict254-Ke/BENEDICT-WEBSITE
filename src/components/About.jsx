import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="bg-gray-800 text-white py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 className="text-4xl font-bold mb-6 text-blue-400">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            I’m <span className="text-white font-semibold">Benedict Wambua</span>, a frontend developer focused on building clean, responsive, and user-friendly web applications using React and Tailwind CSS.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            I am a graduate of Power Learn Project Africa and currently part of the OctoPrep Employment Readiness Program, where I am sharpening my technical, career, and interview-readiness skills for real-world developer opportunities.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I enjoy turning ideas into functional digital products, with strong attention to UI structure, responsiveness, usability, and clean code.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">
            What I Bring
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>✅ React + Tailwind frontend development</li>
            <li>✅ Responsive and mobile-first UI design</li>
            <li>✅ API integration and interactive interfaces</li>
            <li>✅ Real deployed projects with GitHub code</li>
            <li>✅ Problem-solving experience from IT support</li>
          </ul>
        </div>

      </div>
    </motion.section>
  );
}