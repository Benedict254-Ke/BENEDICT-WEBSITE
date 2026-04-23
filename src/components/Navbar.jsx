import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  const linkClass = (section) =>
    active === section
      ? "text-blue-400 font-bold"
      : "text-gray-300 hover:text-white";

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900 text-white shadow-md">

      {/* NAVBAR TOP */}
      <div className="flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400">
          Lulu B
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8">

          <li><a href="#home" className={linkClass("home")}>Home</a></li>
          <li><a href="#about" className={linkClass("about")}>About</a></li>
          <li><a href="#skills" className={linkClass("skills")}>Skills</a></li>
          <li><a href="#projects" className={linkClass("projects")}>Projects</a></li>
          <li><a href="#contact" className={linkClass("contact")}>Contact</a></li>
          <li>
  <a
    href="/CV.pdf"
    download
    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition"
  >
    Download CV
  </a>
</li>

        </ul>

        {/* HAMBURGER ICON */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-8 py-4 space-y-4">

          <a onClick={closeMenu} href="#home" className="block">Home</a>
          <a onClick={closeMenu} href="#about" className="block">About</a>
          <a onClick={closeMenu} href="#skills" className="block">Skills</a>
          <a onClick={closeMenu} href="#projects" className="block">Projects</a>
          <a onClick={closeMenu} href="#contact" className="block">Contact</a>
          <a
  onClick={closeMenu}
  href="/CV.pdf"
  download
  className="block bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold"
>
  Download CV
</a>

        </div>
      )}

    </nav>
  );
}