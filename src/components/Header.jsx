import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full flex flex-wrap items-center justify-between px-4 sm:px-10 py-4 bg-white border-b shadow-md font-sans">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
          alt="Library Logo"
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full border-2 border-[#b8d8ba] shadow-md hover:scale-105 transition-transform duration-300"
        />
        <h1 className="ml-4 text-xl sm:text-2xl md:text-3xl font-extrabold text-[#8b5e83] tracking-wide">
          Online Book Library
        </h1>
      </div>

      {/* Hamburger Button */}
      <button
        className="sm:hidden text-gray-600 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Links */}
      <nav
        className={`w-full sm:w-auto ${
          isOpen ? "block" : "hidden"
        } sm:flex flex-col sm:flex-row gap-3 sm:gap-6 mt-4 sm:mt-0`}
      >
        {[
          {
            to: "/",
            label: "Home",
            bg: "#ffe3e3",
            text: "#8c5e58",
            hover: "#ffcccc",
          },
          {
            to: "/browsebook",
            label: "Browse",
            bg: "#e0f7fa",
            text: "#336b87",
            hover: "#b2ebf2",
          },
          {
            to: "/addbook",
            label: "Add Book",
            bg: "#fdf6f0",
            text: "#a27551",
            hover: "#fcefe6",
          },
        ].map(({ to, label, bg, text, hover }) => (
          <Link
            key={to}
            to={to}
            onClick={() => setIsOpen(false)}
            className="px-5 py-2 rounded-full font-semibold transition-all duration-300 shadow-sm border border-gray-300 hover:shadow-md text-center"
            style={{
              backgroundColor: bg,
              color: text,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = hover;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = bg;
            }}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
