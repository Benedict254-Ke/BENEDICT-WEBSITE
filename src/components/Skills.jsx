export default function Skills() {
  return (
    <section id="skills" className="bg-gray-900 text-white py-20 px-6">
      
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-10 text-blue-400">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          <div className="bg-gray-800 p-6 rounded-lg">HTML</div>
          <div className="bg-gray-800 p-6 rounded-lg">CSS / Tailwind</div>
          <div className="bg-gray-800 p-6 rounded-lg">JavaScript</div>
          <div className="bg-gray-800 p-6 rounded-lg">React</div>
          <div className="bg-gray-800 p-6 rounded-lg">Git & GitHub</div>
          <div className="bg-gray-800 p-6 rounded-lg">REST APIs</div>

        </div>

      </div>

    </section>
  );
}