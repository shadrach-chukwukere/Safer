import { Link } from "react-router-dom";
import { MoreVertical, X } from "lucide-react";
import { useState } from "react";
import Logo from "./ui/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-black text-white font-Righteous">
      <div className="py-6 mx-10 sm:mx-8 md:mx-10 lg:mx-16 xl:mx-32  flex justify-between items-center">
        <div className="text-white font-bold text-xl z-50 flex justify-center items-center gap-4">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="flex items-center gap-3"
          >
            <Logo />
            Safer
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="gap-10 justify-around md:flex hidden font-Inter">
          <Link to="/contact" className="text-md">
            Contact
          </Link>
          <Link to="/about" className="text-md">
            About
          </Link>
          <Link to="/privacy" className="text-md">
            Privacy Policy
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
        name="toggleBtn"
          className="md:hidden p-2 rounded hover:bg-white/10 z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <MoreVertical size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`fixed inset-0 bg-black flex flex-col items-center justify-center md:hidden transition-transform duration-300 ease-in-out ${
          open
            ? "translate-y-0 pointer-events-auto"
            : "-translate-y-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center space-y-8">
          <Link
            to="/contact"
            className="text-2xl font-semibold hover:text-gray-400 transition-colors"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="text-2xl font-semibold hover:text-gray-400 transition-colors"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            to="/privacy"
            className="text-2xl font-semibold hover:text-gray-400 transition-colors"
            onClick={handleLinkClick}
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </header>
  );
}
