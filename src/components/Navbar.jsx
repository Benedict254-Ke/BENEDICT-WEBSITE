import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["home", "about", "skills", "experience", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      navLinks.forEach((link) => {
        const section = document.getElementById(link);

        if (section) {
          const sectionTop = section.offsetTop - 120;

          if (window.scrollY >= sectionTop) {
            current = link;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (section) =>
    active === section
      ? "text-blue-400 font-bold"
      : "text-gray-300 hover:text-white";

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur text-white shadow-md">
      <div className="flex justify-between items-center px-8 py-5">
        <h1 className="text-2xl font-bold text-blue-400">Lulu B</h1>

        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link}`} className={linkClass(link)}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}

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

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-8 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link}
              onClick={closeMenu}
              href={`#${link}`}
              className={`block ${linkClass(link)}`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}

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