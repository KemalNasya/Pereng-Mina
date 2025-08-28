// import{Routes, Route} from 'react-router-dom';

// function App() {
//   return (
//     <>
//     <h1>App</h1>
//     </>
//   );
// }

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Beranda from "./pages/Beranda.jsx";
import TentangKami from "./pages/TentangKami.jsx";
import Infrastruktur from "./pages/Infrastruktur.jsx";
import Dokumentasi from "./pages/Dokumentasi.jsx";
import Activitas from "./pages/Activitas.jsx"; 

// Halaman 404 sederhana
function NotFound() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">404 - Halaman tidak ditemukan</h1>
      <p className="mt-2">Periksa kembali alamat URL kamu.</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      {/* Tambahin padding-top agar konten tidak ketutup navbar */}
      <main className="pt-20 px-6"> 
        <Routes>
          {/* Root & alias */}
          <Route path="/" element={<Beranda />} />
          <Route path="/home" element={<Beranda />} />

          {/* Menu utama */}
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/activitas" element={<Activitas />} /> 
          <Route path="/infrastruktur" element={<Infrastruktur />} />
          <Route path="/dokumentasi" element={<Dokumentasi />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

