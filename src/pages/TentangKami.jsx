import { Users, Target, Handshake } from "lucide-react";



export default function TentangKami() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-800 mb-6">Tentang Kami</h1>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Kelompok Budidaya Ikan Pereng Mina - Inovasi dan Teknologi dalam Budidaya Ikan Modern
          </p>
        </div>

        <hr className="border-gray-400 my-10 border-2" />

        {/* Konten Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Gambar */}
          <div className="flex justify-center">
            <img
              src="public/asset/Bener.jpg"
              alt="Tentang Pereng Mina"
              className="rounded-2xl shadow-xl border-4 border-white w-full h-auto object-cover"
            />
          </div>

          {/* Deskripsi */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">Profil Pereng Mina</h2>
            <p className="text-base text-gray-700 mb-8 leading-relaxed">
              <b>Kelompok Budidaya Ikan Pereng Mina</b> merupakan kelompok masyarakat 
              yang bergerak dalam bidang perikanan di bawah binaan Universitas AKPRIND Indonesia. 
              Kami fokus pada peningkatan kualitas budidaya ikan dengan memanfaatkan teknologi modern 
              serta dukungan infrastruktur yang memadai.
            </p>
          </div>
        </div>

        <hr className="border-gray-400 my-10 border-2" />

        {/* Visi, Misi, dan Nilai */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Visi */}
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
            <div className="flex items-center gap-4 mb-4">
              <Target className="w-8 h-8 text-blue-700" />
              <h3 className="text-xl font-semibold text-blue-800">Visi</h3>
            </div>
            <p className="text-gray-700 text-base">
              Menjadi kelompok budidaya ikan yang berdaya saing tinggi, berkelanjutan, 
              dan mampu meningkatkan kesejahteraan masyarakat sekitar.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
            <div className="flex items-center gap-4 mb-4">
              <Users className="w-8 h-8 text-green-700" />
              <h3 className="text-xl font-semibold text-blue-800">Misi</h3>
            </div>
            <ul className="text-gray-700 text-base space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Mengembangkan budidaya ikan dengan teknologi ramah lingkungan.
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Meningkatkan kapasitas anggota melalui pelatihan berkelanjutan.
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Mengelola infrastruktur modern untuk efisiensi produksi.
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Menjalin kerjasama dengan pemerintah dan lembaga pendidikan.
              </li>
            </ul>
          </div>

          {/* Nilai & Komitmen */}
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
            <div className="flex items-center gap-4 mb-4">
              <Handshake className="w-8 h-8 text-purple-700" />
              <h3 className="text-xl font-semibold text-blue-800">Nilai & Komitmen</h3>
            </div>
            <p className="text-gray-700 text-base">
              Kami berkomitmen pada kualitas, transparansi, dan keberlanjutan lingkungan. 
              Dengan semangat kebersamaan, Pereng Mina terus berinovasi untuk menjadi 
              contoh kelompok budidaya ikan yang profesional dan mandiri.
            </p>
          </div>
        </div>

        <hr className="border-gray-400 my-10 border-2" />

        {/* Pencapaian */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-8 text-center">Pencapaian Kami</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-xl border-2 border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2 text-lg">Infrastruktur Modern</h4>
              <p className="text-gray-700 text-base">Pengembangan sistem kelistrikan 5.500 VA untuk mendukung operasional budidaya</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-xl border-2 border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2 text-lg">Kolam Budidaya</h4>
              <p className="text-gray-700 text-base">12 kolam budidaya dengan sistem penerangan cerdas dan kontrol otomatis</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-xl border-2 border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2 text-lg">Produksi Pakan</h4>
              <p className="text-gray-700 text-base">Mesin pengolah pakan mandiri dengan kapasitas produksi yang terus meningkat</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-xl border-2 border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2 text-lg">Dukungan Akademik</h4>
              <p className="text-gray-700 text-base">Binaan langsung dari Universitas AKPRIND Indonesia untuk pengembangan teknologi</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
