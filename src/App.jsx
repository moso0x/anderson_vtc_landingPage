import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Students from './pages/Students';
import Programmes from './pages/Programmes';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 600); // Slight delay to show the spinner
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <Navbar />

      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="loader" />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/students" element={<Students />} />
        <Route path="/programmes" element={<Programmes />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
