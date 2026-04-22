export default function About() {
  return (
    <section id="about" className="bg-gray-800 text-white py-20 px-6">
      
      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-6 text-blue-400">
          About Me
        </h2>

        {/* Content */}
        <p className="text-gray-300 leading-relaxed text-lg">
          I am a frontend developer passionate about building modern, responsive, and user-friendly web applications using React and Tailwind CSS.
        </p>

        <p className="text-gray-400 mt-4 leading-relaxed">
          I recently completed training with PLP Africa and I am currently progressing through the OctoPrep program, where I am improving my real-world development skills, career readiness, and problem-solving ability.
        </p>

        <p className="text-gray-400 mt-4 leading-relaxed">
          My goal is to specialize in frontend development and build impactful digital experiences that are fast, clean, and accessible.
        </p>

      </div>

    </section>
  );
}