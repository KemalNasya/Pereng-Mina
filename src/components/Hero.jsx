import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          Selamat Datang di Website Pereng Mina
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-200">
          Website ini merupakan sistem informasi yang mendokumentasikan kegiatan
          pengelolaan ikan dari <b>Kelompok Pereng Mina</b>. Kami berkomitmen
          untuk meningkatkan kualitas produksi, infrastruktur, dan transparansi
          dokumentasi dalam budidaya ikan.
        </p>

        <Link
          to="/aktivitas"
          className="inline-flex items-center bg-[#008B8B] hover:bg-[#006666] px-6 py-3 rounded-full font-semibold shadow-lg transition"
        >
          Lihat Kegiatan
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
