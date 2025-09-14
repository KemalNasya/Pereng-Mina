import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Activitas = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Full Layar */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#001D39] via-[#0A4174] to-[#2A5C7A] z-0"></div>

      {/* Konten Artikel */}
      <div className="relative z-10 max-w-6xl mx-auto py-20 px-6 lg:px-12 space-y-32">
        {/* Bagian 1 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="flex justify-center">
            <motion.img
              src="/asset/Infrastruktur1.jpg"
              alt="Panel Surya"
              className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg object-cover aspect-video"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>

          <div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-6 leading-snug">
              Pemasangan Panel Surya di Komunitas Pereng Mina
            </h1>
            <p className="text-base lg:text-lg text-blue-100 leading-relaxed mb-4">
              Universitas AKPRIND Indonesia melaksanakan kegiatan pengabdian
              masyarakat berupa pemasangan Panel Surya di komunitas budidaya
              ikan Pereng Mina. Kegiatan ini bertujuan untuk mendukung kebutuhan
              kelistrikan sekaligus meningkatkan produktivitas masyarakat
              melalui pemanfaatan energi terbarukan.
            </p>
            <p className="text-base lg:text-lg text-blue-100 leading-relaxed">
              Program ini merupakan salah satu bentuk implementasi Tri Dharma
              Perguruan Tinggi. Kehadiran panel surya ini diharapkan dapat
              menjadi solusi energi mandiri, hemat biaya, sekaligus ramah
              lingkungan bagi komunitas Pereng Mina.
            </p>
          </div>
        </motion.div>

        {/* Bagian 2 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="order-2 md:order-1">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-snug">
              Pengembangan Mesin Pengolahan Pakan Ikan
            </h2>
            <p className="text-base lg:text-lg text-blue-100 leading-relaxed mb-4">
              Universitas AKPRIND Indonesia memperkenalkan mesin pengolahan
              pakan ikan untuk mendukung kemandirian komunitas Pereng Mina.
              Mesin ini dirancang untuk mencetak pelet pakan ikan dengan ukuran
              yang dapat disesuaikan, sekaligus menekan biaya operasional
              budidaya.
            </p>
            <p className="text-base lg:text-lg text-blue-100 leading-relaxed">
              Proses produksi memanfaatkan bahan baku lokal yang lebih murah dan
              efisien. Selain menghemat biaya, kualitas pakan juga dapat
              disesuaikan dengan kebutuhan ikan sehingga mendukung pertumbuhan
              lebih optimal.
            </p>
          </div>

          <div className="flex justify-center order-1 md:order-2">
            <motion.img
              src="/asset/Infrastruktur3.jpg"
              alt="Mesin Pengolah Pakan Ikan"
              className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg object-cover aspect-video"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        {/* Bagian 3 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="flex justify-center">
            <motion.img
              src="/asset/Excel.jpg"
              alt="Kolam Budidaya"
              className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg object-cover aspect-video"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>

          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-snug">
              Pelatihan Microsoft Excel untuk Administrasi Komunitas
            </h2>
            <p className="text-base lg:text-lg text-blue-100 leading-relaxed mb-4">
              Selain panel surya dan mesin pakan ikan, tim pengabdian juga
              menyelenggarakan pelatihan Microsoft Excel kepada salah satu
              anggota Pereng Mina. Tujuannya untuk meningkatkan keterampilan
              administrasi dalam pengelolaan data keuangan, pencatatan produksi,
              hingga penyusunan laporan.
            </p>
            <p className="text-base lg:text-lg text-blue-100 leading-relaxed">
              Dengan penguasaan Excel, anggota komunitas diharapkan mampu
              menyusun administrasi yang lebih tertib, akurat, dan profesional,
              mendukung kegiatan budidaya ikan secara berkelanjutan.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Activitas;
