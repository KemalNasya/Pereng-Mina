import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Fish, Home, User, Cog, Camera } from "lucide-react";

const navItems = [
  { label: "Beranda", to: "/", icon: Home },
  { label: "Tentang Program", to: "/tentang-kami", icon: User },
  { label: "Infrastruktur", to: "/infrastruktur", icon: Cog },
  { label: "Aktivitas", to: "/activitas", icon: Fish },
  { label: "Dokumentasi", to: "/dokumentasi", icon: Camera },
];

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 bg-white ${
        active ? "shadow-md" : ""
      }`}
    >
      <div className="w-full px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center text-white font-bold">
              PM
            </div>
            <h1 className="hidden md:block text-2xl font-semibold text-neutral-900 whitespace-nowrap">
              Pereng Mina
            </h1>
          </div>

          <h1 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:hidden text-lg font-semibold whitespace-nowrap">
            Pereng Mina
          </h1>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center justify-center space-x-6 flex-grow">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-lg flex items-center gap-1 whitespace-nowrap transition-colors ${
                    isActive
                      ? "text-sky-600 font-semibold"
                      : "text-gray-700 hover:text-sky-600"
                  }`
                }
              >
                {item.icon ? <item.icon className="w-5 h-5" /> : null}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen((s) => !s)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-gray-700 hover:text-sky-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-4 bg-white">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg text-base transition-colors ${
                      isActive
                        ? "bg-sky-50 text-sky-600 font-semibold"
                        : "text-gray-700 hover:bg-sky-50 hover:text-sky-600"
                    }`
                  }
                >
                  {item.icon ? <item.icon className="w-5 h-5" /> : null}
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
