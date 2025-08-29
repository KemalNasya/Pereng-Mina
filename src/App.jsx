import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footercomponent.jsx";

import Beranda from "./pages/Beranda.jsx";
import TentangKami from "./pages/TentangKami.jsx";
import Infrastruktur from "./pages/Infrastruktur.jsx";
import Dokumentasi from "./pages/Dokumentasi.jsx";
import Activitas from "./pages/Activitas.jsx";

// Wrapper layout untuk halaman biasa (ada padding-top biar gak ketutup navbar)
function Layout({ children }) {
  return <main className="pt-20 px-6">{children}</main>;
}

// Halaman 404 sederhana
function NotFound() {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold">404 - Halaman tidak ditemukan</h1>
        <p className="mt-2">Periksa kembali alamat URL kamu.</p>
      </div>
    </Layout>
  );
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar selalu di atas */}
      <Navbar />

      {/* Konten utama */}
      <div className="flex-grow">
        <Routes>
          {/* Halaman full background */}
          <Route path="/" element={<Beranda />} />
          <Route path="/home" element={<Beranda />} />

          {/* Halaman  layout */}
          <Route
            path="/tentang-kami"
            element={

                <TentangKami />
 
            }
          />
          <Route
            path="/aktivitas"
            element={
              <Layout>
                <Activitas />
              </Layout>
            }
          />
          <Route
            path="/infrastruktur"
            element={
              <Layout>
                <Infrastruktur />
              </Layout>
            }
          />
          <Route
            path="/dokumentasi"
            element={
              <Layout>
                <Dokumentasi />
              </Layout>
            }
          />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Footer  */}
      <Footer />
    </div>
  );
}
