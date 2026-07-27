import React, { useState } from 'react';
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

  const handleOpenRegister = (pkgId?: string, pax?: number) => {
    if (pkgId) setSelectedPkg(pkgId);
    if (pax) setSelectedPax(pax);
    
    const formElement = document.getElementById('daftar');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenVideo = (videoUrl: string, title: string) => {
    setVideoModal({
      isOpen: true,
      url: videoUrl,
      title,
    });
  };

  const handleCloseVideo = () => {
    setVideoModal(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Header & Sticky Bar */}
      <Header onOpenRegister={handleOpenRegister} />

      {/* Main Content Layout */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onOpenRegister={handleOpenRegister}
          onOpenVideo={handleOpenVideo}
        />

        {/* Client Logos & Trust Badges */}
        <TrustSection />

        {/* Problem & Pain Points ("Realita di Lapangan") */}
        <ProblemSection />

        {/* Program & 2 Dimensions of Transformation */}
        <ProgramSection onOpenRegister={handleOpenRegister} />

        {/* Deliverables Interactive Showcase */}
        <DeliverablesSection />

        {/* Speakers / Pemateri */}
        <SpeakersSection />

        {/* Testimonials & Video Stories */}
        <TestimonialsSection onOpenVideo={handleOpenVideo} />

        {/* Pricing Packages & Seat Calculator */}
        <PricingSection onOpenRegister={handleOpenRegister} />

        {/* Venue, Map & Event Details */}
        <VenueSection />

        {/* Registration Form with WhatsApp Builder */}
        <RegistrationForm
          initialPackage={selectedPkg}
          initialPax={selectedPax}
        />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button & Video Modal */}
      <FloatingWA />
      <VideoModal
        isOpen={videoModal.isOpen}
        videoUrl={videoModal.url}
        title={videoModal.title}
        onClose={handleCloseVideo}
        onOpenRegister={handleOpenRegister}
      />

    </div>
  );
}
