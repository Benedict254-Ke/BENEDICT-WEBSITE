import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24"
    >
      <motion.p
        className="text-blue-400 font-semibold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Frontend Developer | React • Tailwind • Modern UI
      </motion.p>

      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-5 leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m <span className="text-blue-400">Benedict Wambua</span>
      </motion.h1>

      <motion.p
        className="max-w-2xl text-gray-300 text-lg leading-relaxed mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        I build fast, responsive, and user-friendly React applications that solve real user problems and create clean digital experiences.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <a href="#projects" className="bg-blue-500 hover:bg-blue-600 px-7 py-3 rounded-lg font-semibold">
          View Projects
        </a>

        <a href="#contact" className="border border-gray-400 hover:bg-white hover:text-black px-7 py-3 rounded-lg font-semibold">
          Contact Me
        </a>

        <a href="/CV.pdf" download className="bg-gray-800 hover:bg-gray-700 border border-gray-600 px-7 py-3 rounded-lg font-semibold">
          Download CV
        </a>
      </motion.div>

      <motion.div
        className="flex gap-6 text-2xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a href="https://github.com/Benedict254-Ke" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/benedict-musyoka-0a8904339" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
          <FaLinkedin />
        </a>
      </motion.div>

      <p className="text-gray-500 mt-6 text-sm">
        Open to frontend roles, internships, freelance work, and collaborations.
      </p>
    </section>
  );
}