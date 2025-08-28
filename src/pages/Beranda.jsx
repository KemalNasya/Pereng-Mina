import React from "react";

const Beranda = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/asset/Infrastruktur1.jpg')" }}
    >
      {/* Overlay agar teks tetap jelas */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 bg-white/80 p-8 rounded-2xl shadow-lg max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          Selamat Datang di Website Pereng Mina
        </h1>
        <p className="text-lg text-gray-700">
          Website ini merupakan sistem informasi yang mendokumentasikan kegiatan
          pengelolaan ikan dari Kelompok Pereng Mina. Kami berkomitmen untuk
          meningkatkan kualitas produksi, infrastruktur, dan transparansi
          dokumentasi dalam pengelolaan ikan.
        </p>
      </div>
    </section>
  );
};

export default Beranda;
