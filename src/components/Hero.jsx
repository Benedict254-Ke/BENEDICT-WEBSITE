export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center items-center text-center bg-gray-900 text-white px-6">
      
      {/* Main Name */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hi, I’m <span className="text-blue-400">BENEDICT WAMBUA</span>
      </h1>

      {/* Role */}
      <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
        Frontend Developer
      </h2>

      {/* Bio */}
      <p className="max-w-2xl text-gray-400 mb-8 leading-relaxed">
        I’m a passionate frontend developer focused on building clean, responsive, and user-friendly web applications.
        Currently growing through PLP Africa and OctoPrep, improving my skills in real-world frontend development and modern UI design.
      </p>

{/* Buttons */}
<div className="flex gap-4">

  {/* View Projects */}
  <a
    href="#projects"
    className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition"
  >
    View Projects
  </a>

  {/* Contact Me */}
  <a
    href="#contact"
    className="border border-gray-400 hover:bg-white hover:text-black px-6 py-3 rounded-lg transition"
  >
    Contact Me
  </a>

</div>

<p className="text-gray-500 mt-6 text-sm">
  Open to frontend roles & freelance opportunities
</p>

    </section>
  );
}