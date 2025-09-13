import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Dokumentasi = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Data gambar dokumentasi
  const images = [
    {
      src: "/asset/bbb.jpg",
      title: "Pemasangan Infrastruktur Listrik",
      desc: "Tim teknik memasang pembangkit listrik untuk kebutuhan budidaya ikan",
    },
    {
      src: "/asset/Infrastruktur3.jpg",
      title: "Mesin Pengolah Pakan Ikan",
      desc: "Mesin pengolah pakan pelet yang didukung energi listrik",
    },
    {
      src: "/asset/Bener.jpg",
      title: "Bener",
      desc: "Gambar Bener kegiatan Pereng Mina",
    },
    {
      src: "/asset/Excel2.jpg",
      title: "Pelatihan Microsoft Excel",
      desc: "Pelatihan administrasi menggunakan Excel",
    },
    {
      src: "/asset/Infrastruktur1.jpg",
      title: "Panel Surya",
      desc: "Pemasangan Panel Surya",
    },
    {
      src: "/asset/ccc.jpg",
      title: "Anggota Pereng Mina",
      desc: "Anggota budidaya ikan Pereng Mina",
    },
  ];

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  const navigateImage = (direction) => {
    const currentIndex = images.findIndex(
      (img) => img.src === selectedImage.src
    );
    let newIndex =
      direction === "next"
        ? (currentIndex + 1) % images.length
        : (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
  };

  // Fungsi untuk membuka Google Maps di lokasi yang tepat
  const openGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/place/Kelompok+Pembudidaya+Ikan+Mina+Mulya/@-7.7700984,110.3183574,13.3z/data=!4m6!3m5!1s0x2e7a58778b29de29:0xfe38d7a4203f6516!8m2!3d-7.767006!4d110.3324!16s%2Fg%2F11b6rz723m?entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "ArrowLeft") navigateImage("prev");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#001D39] via-[#0A4174] to-[#2A5C7A] z-0"></div>

      {/* Efek cahaya subtle */}
      <div
        className="fixed inset-0 z-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at 20% 20%, rgba(123, 189, 232, 0.4) 0%, transparent 70%),
                       radial-gradient(ellipse at 80% 80%, rgba(78, 142, 162, 0.3) 0%, transparent 50%)`,
        }}
      ></div>

      {/* Konten */}
      <div className="relative z-10 max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            Dokumentasi Kegiatan
          </h1>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Dokumentasi lengkap pelaksanaan program pengembangan budidaya ikan
            Pereng Mina.
          </p>
        </div>

        {/* Video Section */}
        <motion.div
          className="mb-16 bg-white/5 rounded-xl shadow-lg p-6 backdrop-blur-sm border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">
            Video Dokumentasi
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-6xl mx-auto">
            <div className="relative pb-[56.25%] h-0">
              <video
                className="absolute top-0 left-0 w-full h-full"
                controls
                poster="/asset/Infrastruktur1.jpg"
              >
                <source src="/asset/KolamVid.mp4" type="video/mp4" />
                Browser Anda tidak mendukung pemutaran video.
              </video>
            </div>
            <div className="bg-[#0A4174] text-white text-center py-3">
              Dokumentasi Kegiatan Budidaya Ikan
            </div>
          </div>
          <div className="mt-4 text-center text-blue-100">
            <p>
              Video dokumentasi kegiatan budidaya ikan dengan dukungan energi
              listrik dan teknologi.
            </p>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">
            Galeri Foto Kegiatan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="bg-white/5 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm border border-white/10"
                onClick={() => openLightbox(image)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-white text-lg mb-2">
                    {image.title}
                  </h3>
                  <p className="text-blue-100 text-base">{image.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative max-w-7xl w-full max-h-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Close */}
                <button
                  className="absolute top-10 right-4 z-[10000] text-white text-3xl bg-red-600 hover:bg-red-700 rounded-full w-12 h-12 flex items-center justify-center"
                  onClick={closeLightbox}
                >
                  &times;
                </button>

                {/* Prev */}
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-[10000] text-white text-3xl bg-[#0A4174] hover:bg-[#1A2F4B] rounded-full w-12 h-12 flex items-center justify-center"
                  onClick={() => navigateImage("prev")}
                >
                  &#10094;
                </button>

                {/* Next */}
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-[10000] text-white text-3xl bg-[#0A4174] hover:bg-[#1A2F4B] rounded-full w-12 h-12 flex items-center justify-center"
                  onClick={() => navigateImage("next")}
                >
                  &#10095;
                </button>

                {/* Image */}
                <div className="bg-white rounded-lg overflow-hidden">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[95vh] object-contain"
                  />
                  <div className="p-6 bg-white">
                    <h3 className="text-2xl font-semibold text-[#0A4174] mb-3">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-700 text-lg">
                      {selectedImage.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        Maps Section dengan Pin yang Dapat Diklik
        <motion.div
          className="mb-16 bg-white/5 rounded-xl shadow-lg p-6 backdrop-blur-sm border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">
            Lokasi Pereng Mina
          </h2>

          <div className="relative rounded-xl overflow-hidden shadow-lg w-full h-[450px] mb-4">
            {/* Google Maps dengan lokasi yang tepat */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.207052118487!2d110.329825!3d-7.767006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58778b29de29%3A0xfe38d7a4203f6516!2sKelompok%20Pembudidaya%20Ikan%20Mina%20Mulya!5e0!3m2!1sid!2sid!4v1693832400000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
            <p className="text-blue-100 text-center sm:text-left">
              Letak geografis komunitas{" "}
              <b>Kelompok Pembudidaya Ikan Mina Mulya</b> di Yogyakarta, sebagai
              lokasi pelaksanaan program pengabdian Universitas AKPRIND.
            </p>

            <button
              onClick={openGoogleMaps}
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:from-blue-700 hover:to-blue-900 transition-all shadow-md"
            >
              <MapPin size={18} />
              Buka di Google Maps
              <ExternalLink size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dokumentasi;
