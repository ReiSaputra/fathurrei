import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import IconBar from './components/IconBar/IconBar';
import Navbar from './components/Navbar/Navbar';
import HomeSection from './components/sections/HomeSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ProjectDetailPage from './components/sections/ProjectDetailPage';
import CertificationSection from './components/sections/CertificationSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="md:grid md:grid-cols-[auto_1fr] min-h-screen">

      {/* Icon Bar — sidebar on desktop, floating bottom tab on mobile */}
      <IconBar isDark={isDark} />

      {/* Main Content */}
      <main className={`
        flex flex-col min-h-screen overflow-y-auto
        pb-24 md:pb-0
        transition-colors duration-200
        ${isDark ? 'bg-[#121f14] text-[#d4d4d4]' : 'bg-[#f5f9f5] text-[#1e3a1e]'}
      `}>
        <Navbar isDark={isDark} onToggle={() => setIsDark(!isDark)} />

        <Routes>
          <Route path="/"              element={<HomeSection isDark={isDark} />} />
          <Route path="/projects"      element={<ProjectsSection isDark={isDark} />} />
          <Route path="/projects/:id"  element={<ProjectDetailPage isDark={isDark} />} />
          <Route path="/certification" element={<CertificationSection isDark={isDark} />} />
          <Route path="/contact"       element={<ContactSection isDark={isDark} />} />
          <Route path="*"              element={<Navigate to="/" replace />} />
        </Routes>
      </main>

    </div>
  );
}
