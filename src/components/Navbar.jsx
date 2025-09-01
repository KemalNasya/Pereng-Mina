import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, CalendarCheck, Home, User, Cog, Camera } from "lucide-react";

const navItems = [
  { label: "Beranda", to: "/", icon: Home },
  { label: "Tentang Program", to: "/tentang-kami", icon: User },
  { label: "Infrastruktur", to: "/infrastruktur", icon: Cog },
  { label: "Kegiatan", to: "/aktivitas", icon: CalendarCheck },
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
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        active
          ? "bg-white shadow-md"
          : "bg-[#008B8B]"
      }`}
    >
      <div className="w-full px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div
              className={`w-10 h-10 rounded-md flex items-center justify-center font-bold transition-all ${
                active
                  ? "bg-[#008B8B] text-white"
                  : "bg-white text-[#008B8B]"
              }`}
            >
              PM
            </div>
            <h1
              className={`hidden md:block text-2xl font-semibold whitespace-nowrap transition-colors ${
                active ? "text-neutral-900" : "text-white"
              }`}
            >
              Pereng Mina
            </h1>
          </div>

          {/* Logo di mobile */}
          <h1
            className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:hidden text-lg font-semibold whitespace-nowrap transition-colors ${
              active ? "text-neutral-900" : "text-white"
            }`}
          >
          </h1>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center justify-center space-x-6 flex-grow">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-lg flex items-center gap-1 whitespace-nowrap transition-colors ${
                    isActive
                      ? active
                        ? "text-[#008B8B] font-semibold"
                        : "text-white font-semibold"
                      : active
                      ? "text-gray-700 hover:text-[#008B8B]"
                      : "text-gray-200 hover:text-white"
                  }`
                }
              >
                {item.icon ? <item.icon className="w-5 h-5" /> : null}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Hamburger Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen((s) => !s)}
              aria-label="Toggle menu"
              className={`p-2 rounded-md transition-colors ${
                active
                  ? "text-gray-700 hover:text-[#008B8B]"
                  : "text-white hover:text-gray-200"
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div
          className={`px-6 pb-4 shadow-md transition-colors ${
            active ? "bg-white text-gray-700" : "bg-black/50 backdrop-blur-md text-white"
          }`}
        >
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg text-base transition-colors ${
                      isActive
                        ? active
                          ? "bg-cyan-50 text-[#008B8B] font-semibold"
                          : "bg-white/20 text-white font-semibold"
                        : active
                        ? "hover:bg-cyan-50 hover:text-[#008B8B]"
                        : "hover:bg-white/20 hover:text-white"
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
