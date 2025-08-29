import { Users, Target, Handshake } from "lucide-react";

export default function TentangKami() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300 py-20 flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Gambar */}
        <div className="flex justify-center">
          <img
            src="/assets/pereng-mina.jpg"
            alt="Tentang Pereng Mina"
            className="rounded-2xl shadow-xl border-4 border-white/60"
          />
        </div>

        {/* Konten */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sky-900">
            Tentang Kami
          </h2>
          <p className="text-lg text-sky-800 mb-8 leading-relaxed">
            <b>Kelompok Budidaya Ikan Pereng Mina</b> merupakan kelompok masyarakat 
            yang bergerak dalam bidang perikanan di bawah binaan Universitas AKPRIND Indonesia. 
            Kami fokus pada peningkatan kualitas budidaya ikan dengan memanfaatkan teknologi modern 
            serta dukungan infrastruktur yang memadai.
          </p>

          {/* Visi */}
          <div className="flex items-start gap-4 mb-6">
            <Target className="w-8 h-8 text-sky-700 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-sky-800 mb-2">Visi</h3>
              <p className="text-sky-700">
                Menjadi kelompok budidaya ikan yang berdaya saing tinggi, berkelanjutan, 
                dan mampu meningkatkan kesejahteraan masyarakat sekitar.
              </p>
            </div>
          </div>

          {/* Misi */}
          <div className="flex items-start gap-4 mb-6">
            <Users className="w-8 h-8 text-sky-700 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-sky-800 mb-2">Misi</h3>
              <ul className="list-disc list-inside text-sky-700 space-y-2">
                <li>Mengembangkan budidaya ikan dengan teknologi ramah lingkungan.</li>
                <li>Meningkatkan kapasitas anggota melalui pelatihan berkelanjutan.</li>
                <li>Mengelola infrastruktur modern untuk efisiensi produksi.</li>
                <li>Menjalin kerjasama dengan pemerintah dan lembaga pendidikan.</li>
              </ul>
            </div>
          </div>

          {/* Nilai & Komitmen */}
          <div className="flex items-start gap-4">
            <Handshake className="w-8 h-8 text-sky-700 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-sky-800 mb-2">
                Nilai & Komitmen
              </h3>
              <p className="text-sky-700">
                Kami berkomitmen pada kualitas, transparansi, dan keberlanjutan lingkungan. 
                Dengan semangat kebersamaan, Pereng Mina terus berinovasi untuk menjadi 
                contoh kelompok budidaya ikan yang profesional dan mandiri.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
