import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  // Configure social media links here - update these with actual URLs
  const socialLinks = {
    youtubeMusic: 'https://music.youtube.com/channel/UCn_0rMWCXt0W4wNPuIT7_ww',
    spotify: 'https://open.spotify.com/album/5b0ppL3cibNd8CNEc5CYl7?si=7SaCH8PjTK6d0wSCydXvaA%0A&nd=1&dlsi=3b1e15cef481475c&flow_ctx=035771b0-dd4e-49db-955f-b096fc68a35e%3A1744643798#login', // Note: Correct to Spotify URL if different
    youtube: 'https://www.youtube.com/results?search_query=odhil3',
  };

  return (
    <section 
      id="home"
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative p-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
      }}
    >
      <div className="text-center z-10 max-w-4xl mx-auto">
        <h1 className="text-white font-bold text-5xl md:text-7xl mb-6 font-montserrat bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
          Odhil3
        </h1>
        <p className="text-white text-xl md:text-2xl mb-8 font-montserrat" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
          Raw Lyrics, Real Stories from the City
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            to="/music" 
            className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 hover:scale-105"
          >
            Listen Now
          </Link>
          <Link 
            to="/videos" 
            className="bg-transparent border-2 border-yellow-400 hover:bg-yellow-400 text-yellow-400 hover:text-black px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 hover:scale-105"
          >
            Watch Videos
          </Link>
        </div>
        
        <div className="flex justify-center space-x-8 text-white">
          <a 
            href={socialLinks.youtubeMusic} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg hover:text-yellow-400 transition-all duration-300 hover:scale-110"
          >
            Youtube Music
          </a>
          <a 
            href={socialLinks.spotify} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg hover:text-yellow-400 transition-all duration-300 hover:scale-110"
          >
            Spotify
          </a>
          <a 
            href={socialLinks.youtube} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg hover:text-yellow-400 transition-all duration-300 hover:scale-110"
          >
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;