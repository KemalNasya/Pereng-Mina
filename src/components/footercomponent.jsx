import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080B8B] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Kolom 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Pereng Mina</h2>
          <p className="text-sm leading-relaxed">
            Website dokumentasi kegiatan Kelompok Budidaya Ikan Pereng Mina,
            bagian dari program hibah DIKTI Universitas AKPRIND Indonesia.
          </p>
        </div>

        {/* Kolom 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Kontak</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Desa Pereng, Kabupaten Sleman, DIY
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +62 812-3456-7890
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              perengmina@example.com
            </li>
          </ul>
        </div>

        {/* Kolom 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 mt-8 py-4 text-center text-sm">
        © {new Date().getFullYear()} Pereng Mina. All rights reserved.
      </div>
    </footer>
  );
}
