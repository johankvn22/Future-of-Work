import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustSection } from './components/TrustSection';
import { ProblemSection } from './components/ProblemSection';
import { ProgramSection } from './components/ProgramSection';
import { DeliverablesSection } from './components/DeliverablesSection';
import { SpeakersSection } from './components/SpeakersSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { RegistrationForm } from './components/RegistrationForm';
import { VenueSection } from './components/VenueSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { FloatingWA } from './components/FloatingWA';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { ContentProvider } from './data/ContentContext';

export default function App() {
  const [selectedPkg, setSelectedPkg] = useState<string>('onsite');
  const [selectedPax, setSelectedPax] = useState<number>(1);
  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
  }>({
    isOpen: false,
    url: '',
    title: '',
  });

  // ─── Admin Route Detection ───────────────────────────────────────────────
  const [isAdminRoute, setIsAdminRoute] = useState(() => {
    return (
      window.location.pathname.toLowerCase() === '/admin' ||
      window.location.hash.toLowerCase() === '#admin'
    );
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('fow_admin_auth') === 'true';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const isAdmin =
        window.location.pathname.toLowerCase() === '/admin' ||
        window.location.hash.toLowerCase() === '#admin';
      setIsAdminRoute(isAdmin);
    };
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleOpenRegister = (pkgId?: string, pax?: number) => {
    if (pkgId) setSelectedPkg(pkgId);
    if (pax) setSelectedPax(pax);
    const formElement = document.getElementById('daftar');
    if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenVideo = (videoUrl: string, title: string) => {
    setVideoModal({ isOpen: true, url: videoUrl, title });
  };

  const handleCloseVideo = () => {
    setVideoModal(prev => ({ ...prev, isOpen: false }));
  };

  const handleBackToSite = () => {
    window.location.hash = '';
    if (window.location.pathname.toLowerCase() === '/admin') {
      window.history.pushState({}, '', '/');
    }
    setIsAdminRoute(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('fow_admin_auth');
    setIsAuthenticated(false);
  };

  // ─── Admin Routes ────────────────────────────────────────────────────────
  if (isAdminRoute) {
    if (!isAuthenticated) {
      return (
        <ContentProvider>
          <AdminLogin
            onLoginSuccess={() => setIsAuthenticated(true)}
            onBackToSite={handleBackToSite}
          />
        </ContentProvider>
      );
    }
    return (
      <ContentProvider>
        <AdminDashboard
          onLogout={handleLogout}
          onBackToSite={handleBackToSite}
        />
      </ContentProvider>
    );
  }

  // ─── Main Landing Page ───────────────────────────────────────────────────
  return (
    <ContentProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
        
        <Header onOpenRegister={handleOpenRegister} />

        <main>
          <HeroSection
            onOpenRegister={handleOpenRegister}
            onOpenVideo={handleOpenVideo}
          />
          <TrustSection />
          <ProblemSection />
          <ProgramSection onOpenRegister={handleOpenRegister} />
          <DeliverablesSection />
          <SpeakersSection />
          <TestimonialsSection onOpenVideo={handleOpenVideo} />
          <PricingSection onOpenRegister={handleOpenRegister} />
          <VenueSection />
          <RegistrationForm
            initialPackage={selectedPkg}
            initialPax={selectedPax}
          />
          <FaqSection />
        </main>

        <Footer />
        <FloatingWA />
        <VideoModal
          isOpen={videoModal.isOpen}
          videoUrl={videoModal.url}
          title={videoModal.title}
          onClose={handleCloseVideo}
          onOpenRegister={handleOpenRegister}
        />
      </div>
    </ContentProvider>
  );
}
