import React, { useState } from 'react';

const Dokumentasi = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Data gambar dokumentasi
  const images = [
    {
      src: 'public/asset/bbb.jpg',
      title: 'Pemasangan Infrastruktur Listrik',
      desc: 'Tim teknik memasang pembangkit listrik untuk kebutuhan budidaya ikan'
    },
    {
      src: 'public/asset/Infrastruktur3.jpg',
      title: 'Mesin Pengolah Pakan Ikan',
      desc: 'Mesin pengolah pakan pelet yang didukung energi listrik'
    },
    {
      src: 'public/asset/Bener.jpg',
      title: 'Bener',
      desc: 'Gambar Bener kegiatan Pereng Mina'
    },
    {
      src: 'public/asset/Infrastrutur2.jpg',
      title: 'Pelatihan Microsoft Excel',
      desc: 'Pelatihan administrasi dan keuangan menggunakan Excel'
    },
    {
      src: 'public/asset/Infrastrutur2.jpg',
      title: 'Monitoring Kualitas Air',
      desc: 'Kegiatan monitoring kualitas air pada kolam budidaya'
    },
    {
      src: 'public/asset/Infrastrutur2.jpg',
      title: 'Panen Ikan',
      desc: 'Kegiatan panen ikan hasil budidaya'
    },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = images.findIndex(img => img.src === selectedImage.src);
    let newIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    }

    setSelectedImage(images[newIndex]);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') {
          closeLightbox();
        } else if (e.key === 'ArrowRight') {
          navigateImage('next');
        } else if (e.key === 'ArrowLeft') {
          navigateImage('prev');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-800 mb-6">Dokumentasi Kegiatan</h1>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Dokumentasi lengkap pelaksanaan program hibah DIKTI yang dikelola Universitas AKPRIND Indonesia untuk pengembangan budidaya ikan.
          </p>
        </div>

        {/* Video Section - Full */}
        <div className="mb-16 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">Video Dokumentasi</h2>
          <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-6xl mx-auto">
            <div className="relative pb-[56.25%] h-0"> {/* 16:9 Aspect Ratio */}
              <video 
                className="absolute top-0 left-0 w-full h-full"
                controls
                poster="/assert/Infrastruktur1.jpg"
              >
                <source src="public/asset/KolamVid.mp4" type="video/mp4" />
                Browser Anda tidak mendukung pemutaran video.
              </video>
            </div>
            <div className="bg-blue-800 text-white text-center py-3">
              Dokumentasi Kegiatan Budidaya Ikan - Universitas AKPRIND
            </div>
          </div>
          <div className="mt-4 text-center text-gray-600">
            <p>Video dokumentasi kegiatan budidaya ikan dengan dukungan listrik dari program hibah DIKTI</p>
          </div>
        </div>

        {/* Gallery Section - Full */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">Galeri Foto Kegiatan</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <div className="h-80 overflow-hidden"> {/* full size */}
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-blue-800 text-lg mb-2">{image.title}</h3>
                  <p className="text-gray-600 text-base">{image.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal - Full */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-7xl w-full max-h-full">
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 z-10 text-white text-3xl bg-red-600 hover:bg-red-700 rounded-full w-12 h-12 flex items-center justify-center"
                onClick={closeLightbox}
              >
                &times;
              </button>
              
              {/* Navigation Buttons */}
              <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white text-3xl bg-blue-800 hover:bg-blue-900 rounded-full w-12 h-12 flex items-center justify-center"
                onClick={() => navigateImage('prev')}
              >
                &#10094;
              </button>
              
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white text-3xl bg-blue-800 hover:bg-blue-900 rounded-full w-12 h-12 flex items-center justify-center"
                onClick={() => navigateImage('next')}
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
                  <h3 className="text-2xl font-semibold text-blue-800 mb-3">{selectedImage.title}</h3>
                  <p className="text-gray-700 text-lg">{selectedImage.desc}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="bg-blue-800 text-white rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Program Hibah DIKTI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Dukungan Infrastruktur</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Pembangkit tenaga listrik untuk mesin pengolah pakan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Sistem penerangan untuk area kolam budidaya</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Mesin produksi pakan pelet berkualitas</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Peningkatan Kapasitas</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Pelatihan administrasi dengan Microsoft Excel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Pendampingan teknis budidaya ikan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Pengelolaan keuangan dan pemasaran hasil budidaya</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center pt-6 border-t border-blue-700">
            <p className="text-lg font-semibold">Universitas AKPRIND Indonesia</p>
            <p className="text-blue-200">Pengelola Program Hibah DIKTI untuk Pengembangan Budidaya Ikan</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dokumentasi;
