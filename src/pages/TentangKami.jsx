import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Handshake, Award, Factory, Lightbulb, Heart, Star, BookOpen } from 'lucide-react';

// Variants untuk animasi
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const TentangKami = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background dengan gradient elegan modern */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#001D39] via-[#0A4174] to-[#2A5C7A] z-0"></div>
      
      {/* Efek cahaya subtle */}
      <div className="fixed inset-0 z-0 opacity-20"
           style={{
             background: `radial-gradient(ellipse at 20% 20%, rgba(123, 189, 232, 0.4) 0%, transparent 70%),
                          radial-gradient(ellipse at 80% 80%, rgba(78, 142, 162, 0.3) 0%, transparent 50%)`
           }}>
      </div>

      {/* Konten */}
      <div className="relative z-10 max-w-6xl mx-auto py-25 px-7 sm:px-8 lg:px-10">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-5xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Tentang Kami
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-[#7BBDE8] to-[#4E8EA2] mx-auto mb-6 rounded-full"
            variants={itemVariants}
          />
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            <span className="font-semibold text-white">Kelompok Budidaya Ikan Pereng Mina</span> - Inovasi dan Teknologi 
            dalam Budidaya Ikan Modern di bawah binaan Universitas AKPRIND Indonesia.
          </motion.p>
        </motion.div>

        {/* Profil Section */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Gambar */}
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="/asset/Bener.jpg"
                  alt="Tentang Pereng Mina"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/70 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#7BBDE8] rounded-full opacity-10 z-0"></div>
            </motion.div>

            {/* Deskripsi */}
            <motion.div 
              className="bg-white/5 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-white/10"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7BBDE8] to-[#4E8EA2] rounded-lg flex items-center justify-center mr-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Profil Pereng Mina</h2>
              </div>
              <p className="text-blue-100 leading-relaxed mb-6">
                <span className="font-semibold text-white">Kelompok Budidaya Ikan Pereng Mina</span> merupakan kelompok masyarakat 
                yang bergerak di bidang perikanan. Kami berfokus pada peningkatan kualitas 
                budidaya ikan dengan memanfaatkan teknologi modern, infrastruktur memadai, 
                dan dukungan energi terbarukan berupa panel surya dari Universitas AKPRIND Indonesia.
              </p>
              <div className="flex items-center text-blue-100 pt-4 border-t border-white/10">
                <Heart className="w-5 h-5 mr-2 text-[#7BBDE8]" />
                <span>Berkomitmen pada kualitas dan keberlanjutan lingkungan</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Visi Misi Section */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-semibold text-white mb-4">Visi, Misi & Nilai</h2>
            <p className="text-lg text-blue-200">Panduan yang membentuk setiap langkah kami</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Visi */}
            <motion.div 
              className="bg-gradient-to-br from-[#1A2F4B] to-[#2A4B6F] p-6 rounded-2xl shadow-lg border border-white/10"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#7BBDE8] rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Visi</h3>
              </div>
              <p className="text-blue-100">
                Menjadi kelompok budidaya ikan yang berdaya saing tinggi, berkelanjutan, 
                dan mampu meningkatkan kesejahteraan masyarakat.
              </p>
            </motion.div>

            {/* Misi */}
            <motion.div 
              className="bg-gradient-to-br from-[#1A2F4B] to-[#2A4B6F] p-6 rounded-2xl shadow-lg border border-white/10"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#4E8EA2] rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Misi</h3>
              </div>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-[#7BBDE8] mr-2 mt-1 flex-shrink-0" />
                  <span>Mengembangkan budidaya ramah lingkungan</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-[#7BBDE8] mr-2 mt-1 flex-shrink-0" />
                  <span>Meningkatkan kapasitas anggota melalui pelatihan</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-[#7BBDE8] mr-2 mt-1 flex-shrink-0" />
                  <span>Mengelola infrastruktur modern untuk efisiensi</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-[#7BBDE8] mr-2 mt-1 flex-shrink-0" />
                  <span>Menjalin kerja sama dengan pemerintah & akademisi</span>
                </li>
              </ul>
            </motion.div>

            {/* Nilai */}
            <motion.div 
              className="bg-gradient-to-br from-[#1A2F4B] to-[#2A4B6F] p-6 rounded-2xl shadow-lg border border-white/10"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#0A4174] rounded-lg flex items-center justify-center">
                  <Handshake className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Nilai & Komitmen</h3>
              </div>
              <p className="text-blue-100">
                Kami menjunjung kualitas, transparansi, dan keberlanjutan lingkungan. 
                Dengan semangat kebersamaan, Pereng Mina berkomitmen menjadi kelompok 
                budidaya ikan yang profesional dan mandiri.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Pencapaian Section */}
        <motion.section 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-semibold text-white mb-4">Pencapaian Kami</h2>
            <p className="text-lg text-blue-200">Inovasi dan perkembangan yang telah kami wujudkan</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {[
              { 
                icon: Award, 
                title: "Infrastruktur Modern", 
                desc: "Sistem kelistrikan Menggunakan Panel Surya untuk mendukung operasional budidaya",
                color: "bg-[#0A4174]"
              },
              { 
                icon: Factory, 
                title: "Kolam Budidaya", 
                desc: "12 kolam dengan penerangan cerdas ",
                color: "bg-[#1A2F4B]"
              },
              { 
                icon: Lightbulb, 
                title: "Produksi Pakan", 
                desc: "Mesin pakan mandiri dengan kapasitas produksi yang terus meningkat",
                color: "bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 shadow-[0_0_25px_rgba(250,204,21,0.8)] animate-pulse"
              },
              { 
                icon: Users, 
                title: "Dukungan Akademik", 
                desc: "Pendampingan langsung dari Universitas AKPRIND Indonesia",
                color: "bg-[#4E8EA2]"
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white/5 p-6 rounded-2xl shadow-lg backdrop-blur-sm border border-white/10"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-lg text-white mb-2">{item.title}</h4>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default TentangKami;