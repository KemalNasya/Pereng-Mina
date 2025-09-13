import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { User, Factory, CalendarCheck, Camera } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: User,
    title: "Tentang Kami",
    desc: "Pengelola, latar belakang, dan kegiatan utama budidaya ikan",
    link: "/tentang-kami",
    color: "from-[#0A4174] to-[#49769F]",
    hoverColor: "hover:from-[#001D39] hover:to-[#0A4174]"
  },
  {
    icon: Factory,
    title: "Infrastruktur",
    desc: "Pemasangan listrik & mesin pengolah pakan modern",
    link: "/infrastruktur",
    color: "from-[#0A4174] to-[#49769F]",
    hoverColor: "hover:from-[#001D39] hover:to-[#0A4174]"
  },
  {
    icon: CalendarCheck,
    title: "Kegiatan",
    desc: "Kegiatan Pengelolaan Budidaya Ikan",
    link: "/aktivitas",
    color: "from-[#0A4174] to-[#49769F]",
    hoverColor: "hover:from-[#001D39] hover:to-[#0A4174]"
  },
  {
    icon: Camera,
    title: "Dokumentasi",
    desc: "Dokumentasi proses budidaya dan hasil produksi",
    link: "/dokumentasi",
    color: "from-[#0A4174] to-[#49769F]",
    hoverColor: "hover:from-[#001D39] hover:to-[#0A4174]"
  },
];

export default function Beranda() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Highlights Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#001D39] mb-4">Eksplorasi Pereng Mina</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan berbagai aspek budidaya ikan modern yang dikembangkan oleh Kelompok Pereng Mina
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="w-full max-w-sm"
            >
              <Link
                to={item.link}
                className={`w-full h-full block rounded-2xl p-8 text-white shadow-xl bg-gradient-to-br ${item.color} ${item.hoverColor} transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-3 bg-white/20 rounded-full">
                    <item.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}