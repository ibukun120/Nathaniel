"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // install: npm install lucide-react

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Albums", path: "/albums" },
    { name: "Videos", path: "/videos" },
    { name: "Blug", path: "/blog" },
    { name: "Best", path: "/best" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white text-gray-900 shadow-sm">
      <div className="flex justify-between items-center px-6 lg:px-32 py-4">
        {/* Logo */}
        <div className="text-3xl font-bold">Bayo Adegbite</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`uppercase font-semibold transition ${
                  pathname === link.path
                    ? "text-pink-600"
                    : "hover:text-pink-600"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`uppercase font-semibold block ${
                    pathname === link.path
                      ? "text-pink-600"
                      : "text-gray-800 hover:text-pink-600"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
