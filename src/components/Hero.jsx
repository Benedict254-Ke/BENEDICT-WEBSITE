import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6"
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m <span className="text-blue-400">BENEDICT WAMBUA</span>
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Frontend Developer | React • Tailwind • Modern UI
      </motion.h2>

      <motion.p
        className="max-w-2xl text-gray-400 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Building fast, responsive React applications that solve real user problems.
      </motion.p>

      {/* CTA BUTTONS */}
      <motion.div
        className="flex gap-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-gray-400 hover:bg-white hover:text-black px-6 py-3 rounded-lg"
        >
          Contact Me
        </a>
      </motion.div>

      {/* SOCIAL ICONS */}
      <motion.div
        className="flex gap-6 text-2xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        {/* GitHub */}
        <a
          href="https://github.com/Benedict254-Ke"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/benedict-musyoka-0a8904339"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
      </motion.div>

      <p className="text-gray-500 mt-6 text-sm">
        Open to frontend roles & freelance opportunities
      </p>
    </section>
  );
}