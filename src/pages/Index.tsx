
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ImageGallery from '../components/ImageGallery';
import MusicSection from '../components/MusicSection';
import VideoSection from '../components/VideoSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <ImageGallery />
      <MusicSection />
      <VideoSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
