import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden">
      {/* Background dengan gradien dan pola estetik */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001D39] via-[#0A4174] to-[#49769F] opacity-95 z-0"></div>
      
      {/* Pola dekoratif */}
      <div className="absolute inset-0 z-0 opacity-20"
           style={{
             backgroundImage: `radial-gradient(circle at 25% 25%, #BDD8E9 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, #7BBDE8 2px, transparent 2px)`,
             backgroundSize: '40px 40px'
           }}>
      </div>
      
      {/* Gelombang dekoratif atas */}
      <div className="absolute top-0 left-0 right-0 h-8 z-10 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" 
                className="fill-white opacity-15"></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Kolom 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">Pereng Mina</h2>
          <p className="text-sm leading-relaxed text-blue-100">
            Website dokumentasi kegiatan Kelompok Budidaya Ikan Pereng Mina,
            bagian dari program hibah DIKTI Universitas AKPRIND Indonesia.
          </p>
        </div>

        {/* Kolom 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-300">Kontak</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 text-blue-100">
              <MapPin className="w-4 h-4 text-[#BDD8E9]" />
              Nogotirto, Gamping, Sleman, DIY
            </li>
            <li className="flex items-center gap-2 text-blue-100">
              <Phone className="w-4 h-4 text-[#BDD8E9]" />
              +62 
            </li>
            <li className="flex items-center gap-2 text-blue-100">
              <Mail className="w-4 h-4 text-[#BDD8E9]" />
              perengmina@example.com
            </li>
          </ul>
        </div>

        {/* Kolom 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-300">Ikuti Kami</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#BDD8E9] transition-colors duration-300 p-2 bg-white/10 rounded-full">
              <Facebook className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="hover:text-[#BDD8E9] transition-colors duration-300 p-2 bg-white/10 rounded-full">
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="hover:text-[#BDD8E9] transition-colors duration-300 p-2 bg-white/10 rounded-full">
              <Twitter className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-white/20 mt-8 py-4 text-center text-sm text-blue-100">
        © {new Date().getFullYear()} Pereng Mina. All rights reserved.
      </div>

      {/* Dekorasi sudut */}
      <div className="absolute bottom-4 left-4 w-16 h-16 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M0,0 L100,0 L100,100 Z" fill="#7BBDE8"></path>
        </svg>
      </div>
      <div className="absolute top-4 right-4 w-12 h-12 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="#4E8EA2" stroke="#BDD8E9" strokeWidth="2"></circle>
        </svg>
      </div>
    </footer>
  );
}