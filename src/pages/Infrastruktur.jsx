import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu, Lightbulb, Building, Fish, Clock, CheckCircle } from 'lucide-react';

// Variants animasi
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const slideInVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7 }
  }
};

const Infrastruktur = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Full Layar */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#001D39] via-[#0A4174] to-[#2A5C7A] z-0"></div>
      
      {/* Konten */}
      <div className="relative z-10 max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-5xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Infrastruktur & Teknologi
          </motion.h1>
          <motion.div 
            className="w-24 h-2 bg-gradient-to-r from-[#4E8EA2] to-[#6EA2B3] mx-auto mb-6 rounded-full"
            variants={itemVariants}
          />
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Pengembangan infrastruktur kelistrikan modern menggunakan Panel Surya untuk mendukung operasional 
            mesin pengolah pakan dan sistem penerangan lingkungan budidaya ikan
          </motion.p>
        </motion.div>

        {/* Pemasangan Sistem Kelistrikan */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#e8f715] to-[#ff0101] rounded-2xl mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-semibold text-white">Pemasangan Sistem Kelistrikan</h2>
            <p className="text-lg text-blue-200 mt-2">Infrastruktur listrik profesional untuk budidaya modern</p>
          </motion.div>

          {/* Spesifikasi Teknis */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
          >
            {/* Panel Surya */}
            <motion.div 
              className="bg-gradient-to-br from-[#0A4174] to-[#2A5C7A] p-8 rounded-2xl shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Panel Surya</h3>
                  <p className="text-blue-100 text-lg">Sumber Kelistrikan </p>
                </div>
              </div>
              <p className="text-blue-100/90 mb-4">
                Instalasi Panel Surya sebagai sumber listrik yang memadai untuk mendukung seluruh operasional 
                produksi pakan dan penerangan budidaya dengan kapasitas optimal.
              </p>
              <motion.div 
                className="rounded-xl overflow-hidden border-2 border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/asset/Infrastruktur1.jpg" 
                  alt="Dokumentasi Panel Surya" 
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Mesin Pengolah Pakan */}
            <motion.div 
              className="bg-gradient-to-br from-[#0A4174] to-[#2A5C7A] p-8 rounded-2xl shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Mesin Pengolah Pakan</h3>
                  <p className="text-blue-100 text-lg">Pengolah Pakan (on proses)</p>
                </div>
              </div>
              <p className="text-blue-100/90 mb-4">
                Teknologi yang digunakan untuk mengolah pakan ikan / pelet (on proses) untuk menghemat biaya dan memastikan kualitas pakan.
              </p>
              <motion.div 
                className="rounded-xl overflow-hidden border-2 border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/asset/Infrastruktur3.jpg" 
                  alt="Dokumentasi Mesin Pengolah Pakan" 
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Area Cakupan */}
          <motion.div 
            className="text-center mb-10"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-2">Area Cakupan Infrastruktur</h3>
            <p className="text-blue-200">Distribusi sistem kelistrikan ke seluruh area budidaya</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white/10 p-6 rounded-2xl shadow-lg border-l-4 border-[#4E8EA2]"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Building className="w-10 h-10 text-white mb-4" />
              <h4 className="font-semibold text-white mb-2 text-lg">Ruang Produksi Pakan</h4>
              <p className="text-blue-100">Instalasi khusus untuk mesin pengolah pakan otomatis</p>
            </motion.div>

            <motion.div 
              className="bg-white/10 p-6 rounded-2xl shadow-lg border-l-4 border-[#4E8EA2]"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Fish className="w-10 h-10 text-white mb-4" />
              <h4 className="font-semibold text-white mb-2 text-lg">Area Kolam Budidaya</h4>
              <p className="text-blue-100">Sistem penerangan untuk 12 kolam dengan kontrol cerdas</p>
            </motion.div>

            <motion.div 
              className="bg-white/10 p-6 rounded-2xl shadow-lg border-l-4 border-[#4E8EA2]"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Clock className="w-10 h-10 text-white mb-4" />
              <h4 className="font-semibold text-white mb-2 text-lg">Kantor Administrasi</h4>
              <p className="text-blue-100">Instalasi untuk peralatan administrasi dan monitoring</p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Video Section */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInVariants}
        >
          <div className="bg-gradient-to-r from-[#0A4174] to-[#2A5C7A] rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-semibold text-white mb-4">Sistem Penerangan Kolam Cerdas</h3>
                <p className="text-blue-100 mb-6">
                  Teknologi penerangan otomatis dengan timer dan sensor cahaya yang 
                  mengoptimalkan kondisi budidaya ikan 24 jam dengan efisiensi energi maksimal.
                </p>
                <div className="space-y-3">
                  {['Penerangan LED Hemat Energi', 'Timer Otomatis', 'Sensor Cahaya', 'Kontrol Terpusat'].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-white mr-3" />
                      <span className="text-blue-100">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <motion.div 
                  className="rounded-xl overflow-hidden border-2 border-white/20"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <video 
                    controls 
                    className="w-full h-auto"
                    poster="/asset/Infrastruktur1.jpg"
                  >
                    <source src="/asset/KolamVid.mp4" type="video/mp4" />
                    Browser Anda tidak mendukung pemutaran video.
                  </video>
                </motion.div>
                <p className="text-blue-100/90 mt-3 text-center text-sm">
                  Video dokumentasi sistem penerangan kolam budidaya
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Manfaat Section */}
        <motion.section 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-semibold text-white mb-4">Manfaat Infrastruktur</h2>
            <p className="text-lg text-blue-200">Dampak positif pengembangan infrastruktur modern</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {[
              { icon: Zap, title: "Efisiensi Energi", desc: "Penggunaan listrik optimal untuk operasional mesin" },
              { icon: Clock, title: "Kontinuitas", desc: "Produksi pakan tidak terganggu dengan sistem stabil" },
              { icon: Lightbulb, title: "Penerangan Optimal", desc: "Sistem penerangan terbaik untuk budidaya 24 jam" },
              { icon: Cpu, title: "Inovasi Teknologi", desc: "Penggunaan mesin modern untuk efisiensi produksi" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-gradient-to-br from-[#0A4174] to-[#2A5C7A] p-6 rounded-2xl shadow-lg text-white"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <item.icon className="w-10 h-10 mb-4" />
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Infrastruktur;
