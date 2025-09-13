import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, CalendarCheck, Home, User, Cog, Camera } from "lucide-react";

const navItems = [
  { label: "Beranda", to: "/", icon: Home },
  { label: "Tentang Kami", to: "/tentang-kami", icon: User },
  { label: "Infrastruktur", to: "/infrastruktur", icon: Cog },
  { label: "Kegiatan", to: "/aktivitas", icon: CalendarCheck },
  { label: "Dokumentasi", to: "/dokumentasi", icon: Camera },
];

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        active
          ? "bg-white/10 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-gradient-to-r from-[#001D39] to-[#0A4174]"
      }`}
    >
      <div className="w-full px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-md flex items-center justify-center transition-all ${
                  active ? "bg-white/20" : "bg-white/10"
                }`}
              >
                <img
                  src="/asset/UAI_FIX.png"
                  className="w-8 h-8 object-contain"
                  alt="Logo UAI"
                />
              </div>
              <div
                className={`w-10 h-10 rounded-md flex items-center justify-center transition-all ${
                  active ? "bg-white/20" : "bg-white/10"
                }`}
              >
                <img
                  src="/asset/Dikti.png"
                  className="w-8 h-8 object-contain"
                  alt="Logo Dikti"
                />
              </div>
            </div>

            <div className="h-6 w-px bg-white/30 mx-2 hidden sm:block"></div>

            <h1
              className={`text-lg font-bold whitespace-nowrap transition-colors ${
                active ? "text-yellow-300" : "text-yellow-300"
              }`}
            >
              Pereng Mina
            </h1>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center justify-center space-x-1 flex-grow">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm lg:text-base flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${
                    isActive
                      ? "bg-white/20 text-white font-semibold shadow-md"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                {item.icon ? <item.icon className="w-4 h-4" /> : null}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Hamburger Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen((s) => !s)}
              aria-label="Toggle menu"
              className={`p-2 rounded-md transition-all ${
                active
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div
          className={`px-4 pb-4 transition-colors ${
            active
              ? "bg-white/10 backdrop-blur-md border-t border-white/10"
              : "bg-gradient-to-b from-[#001D39] to-[#0A4174]"
          }`}
        >
          <ul className="flex flex-col gap-1 pt-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-all ${
                      isActive
                        ? "bg-white/20 text-white font-semibold shadow-md"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`
                  }
                >
                  {item.icon ? <item.icon className="w-4 h-4" /> : null}
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
