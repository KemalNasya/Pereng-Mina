import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { User, Factory, Cog, Camera } from "lucide-react";

const highlights = [
  {
    icon: User,
    title: "Tentang Program",
    desc: "Pengelola, latar belakang, dan kegiatan utama budidaya ikan",
    link: "/tentang-kami",
    color: "from-sky-500 to-teal-400",
  },
  {
    icon: Factory,
    title: "Infrastruktur",
    desc: "Pemasangan listrik & mesin pengolah pakan modern",
    link: "/infrastruktur",
    color: "from-rose-500 to-pink-400",
  },
  {
    icon: Cog,
    title: "Kegiatan",
    desc: "Efisiensi budidaya ikan dengan dukungan teknologi",
    link: "/aktivitas",
    color: "from-indigo-500 to-purple-400",
  },
  {
    icon: Camera,
    title: "Dokumentasi",
    desc: "Dokumentasi proses budidaya dan hasil produksi",
    link: "/dokumentasi",
    color: "from-emerald-500 to-lime-400",
  },
];

export default function Beranda() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Highlights Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
          {highlights.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className={`w-full max-w-sm rounded-3xl p-8 text-white shadow-2xl transform transition hover:-translate-y-2 hover:shadow-3xl bg-gradient-to-br ${item.color}`}
            >
              <div className="flex flex-col items-center text-center">
                <item.icon className="w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-100 text-sm">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
