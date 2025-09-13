import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/asset/Infrastruktur1.jpg')" }}
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Konten Hero */}
      <div className="relative z-10 max-w-6xl px-6 text-center text-white">
        {/* Animasi Judul */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
        >
          Selamat Datang di Pereng Mina
        </motion.h1>

        {/* Animasi Deskripsi */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-200"
        >
          Website ini merupakan sistem informasi yang mendokumentasikan kegiatan
          pengelolaan ikan dari <b>Kelompok Pereng Mina</b>. Kami berkomitmen
          untuk meningkatkan kualitas produksi, infrastruktur, dan transparansi
          dokumentasi dalam budidaya ikan.
        </motion.p>

        {/* Animasi Tombol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        >
          <Link
            to="/aktivitas"
            className="inline-flex items-center bg-gradient-to-r from-[#4E8EA2] to-[#6EA2B3] hover:from-[#49769F] hover:to-[#4E8EA2] px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Lihat Kegiatan
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
