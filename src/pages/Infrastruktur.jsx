import React from 'react';

const Infrastruktur = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-800 mb-6">Infrastruktur & Teknologi</h1>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Pengembangan infrastruktur kelistrikan untuk mendukung operasional mesin pengolah pakan dan sistem penerangan lingkungan budidaya
          </p>
        </div>

        <hr className="border-gray-400 my-10 border-2" />

        {/* Pemasangan Sistem Kelistrikan */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold text-blue-700 mb-8 text-center">Pemasangan Sistem Kelistrikan</h2>
          
          {/* Spesifikasi Teknis dengan Gambar Horizontal */}
          <div className="mb-12">
            <h3 className="text-3xl font-medium text-blue-600 mb-6 text-center">Spesifikasi Teknis</h3>
            
            {/* Daya Listrik dengan Gambar */}
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <div className="rounded-xl h-56 overflow-hidden">
                    <img 
                      src="/asset/Infrastruktur1.jpg" 
                      alt="Dokumentasi daya listrik" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="font-semibold text-blue-800 mb-3 text-2xl">Daya Listrik</h4>
                  <p className="text-gray-700 text-xl">Kapasitas 5.500 VA (3 phase)</p>
                  <p className="text-gray-600 mt-2">Instalasi daya listrik yang memadai untuk mendukung seluruh operasional produksi pakan dan budidaya.</p>
                </div>
              </div>
            </div>
            
            {/* Panel Distribusi dengan Gambar */}
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <div className="rounded-xl h-56 overflow-hidden">
                    <img 
                      src="/asset/Infrastruktur3.jpg" 
                      alt="Dokumentasi panel distribusi" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="font-semibold text-blue-800 mb-3 text-2xl">Panel Distribusi</h4>
                  <p className="text-gray-700 text-xl">MCB dan kontaktor untuk kontrol mesin</p>
                  <p className="text-gray-600 mt-2">Panel distribusi yang terorganisir dengan MCB dan kontaktor untuk mengontrol operasi mesin pengolah pakan.</p>
                </div>
              </div>
            </div>
            
            {/* Sistem Grounding dengan Gambar */}
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <div className="rounded-xl h-56 overflow-hidden">
                    <img 
                      src="/asset/Infrastrutur2.jpg" 
                      alt="Dokumentasi sistem grounding" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="font-semibold text-blue-800 mb-3 text-2xl">Sistem Grounding</h4>
                  <p className="text-gray-700 text-xl">Proteksi keamanan sesuai standar SNI</p>
                  <p className="text-gray-600 mt-2">Sistem grounding yang memastikan keamanan instalasi listrik sesuai dengan standar nasional Indonesia.</p>
                </div>
              </div>
            </div>
            
            {/* Penerangan LED dengan Gambar */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <div className="rounded-xl h-56 overflow-hidden">
                    <img 
                      src="/asset/Bener.jpg" 
                      alt="Dokumentasi penerangan LED" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="font-semibold text-blue-800 mb-3 text-2xl">Penerangan LED</h4>
                  <p className="text-gray-700 text-xl">Sistem penerangan hemat energi 200W</p>
                  <p className="text-gray-600 mt-2">Penerangan LED yang efisien energi untuk area budidaya dan produksi.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Area Cakupan */}
          <div className="mt-16">
            <h3 className="text-3xl font-medium text-blue-600 mb-6 text-center">Area Cakupan</h3>
            
            {/* Ruang Produksi Pakan */}
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500 mb-8">
              <h4 className="font-semibold text-blue-800 mb-3 text-2xl">Ruang Produksi Pakan</h4>
              <p className="text-gray-700 text-xl">
                Instalasi khusus untuk mesin pengolah pakan dengan sistem kelistrikan terpisah dan kontrol otomatis
              </p>
            </div>
            
            {/* Area Kolam Budidaya dengan Video Horizontal */}
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500 mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/2">
                  <h4 className="font-semibold text-blue-800 mb-3 text-2xl">Area Kolam Budidaya</h4>
                  <p className="text-gray-700 text-xl mb-4">
                    Sistem penerangan untuk 12 kolam budidaya dengan timer otomatis dan sensor cahaya
                  </p>
                  <ul className="text-gray-600 text-lg list-disc pl-5">
                    <li>Penerangan LED hemat energi</li>
                    <li>Timer otomatis untuk pengaturan waktu nyala/mati</li>
                    <li>Sensor cahaya untuk adaptasi dengan kondisi lingkungan</li>
                    <li>Sistem kontrol terpusat untuk semua kolam</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-xl overflow-hidden bg-black">
                    <video 
                      controls 
                      className="w-full h-auto"
                      poster="/asset/Infrastruktur1.jpg"
                    >
                      <source src="/asset/KolamVid.mp4" type="video/mp4" />
                      Browser Anda tidak mendukung pemutaran video.
                    </video>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm text-center">Video dokumentasi sistem penerangan kolam budidaya</p>
                </div>
              </div>
            </div>
            
            {/* Kantor Administrasi */}
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
              <h4 className="font-semibold text-blue-800 mb-3 text-2xl">Kantor Administrasi</h4>
              <p className="text-gray-700 text-xl">
                Instalasi listrik untuk komputer, printer, dan peralatan administrasi kelompok
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-400 my-10 border-2" />

        {/* Manfaat Infrastruktur - Tabel */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-4xl font-semibold text-blue-700 mb-8 text-center">Manfaat Infrastruktur</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Baris 1 */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3 text-2xl">Efisiensi Energi</h4>
              <p className="text-gray-700 text-xl">Penggunaan listrik yang optimal untuk operasional mesin pengolah pakan</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3 text-2xl">Kontinuitas Operasional</h4>
              <p className="text-gray-700 text-xl">Sistem kelistrikan yang stabil memastikan produksi pakan tidak terganggu</p>
            </div>
            
            {/* Baris 2 */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3 text-2xl">Penerangan Optimal</h4>
              <p className="text-gray-700 text-xl">Sistem penerangan yang baik untuk kegiatan budidaya 24 jam</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3 text-2xl">Standar Keamanan</h4>
              <p className="text-gray-700 text-xl">Instalasi listrik sesuai standar keamanan untuk lingkungan budidaya</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Infrastruktur;