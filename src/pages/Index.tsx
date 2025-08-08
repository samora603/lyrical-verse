import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MerchSection from '../components/MerchSection';
import ImageGallery from '../components/ImageGallery';
import MusicSection from '../components/MusicSection';
import VideoSection from '../components/VideoSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <HeroSection />
      <ImageGallery />
      <MerchSection />
      <MusicSection />
      <VideoSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;