import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Music2, Apple, Headphones } from 'lucide-react';
import AlbumCard from './AlbumCard'; // Import the new AlbumCard component

const HeroSection = () => {
  const socialLinks = {
    youtubeMusic: 'https://music.youtube.com/channel/UCn_0rMWCXt0W4wNPuIT7_ww',
    spotify: 'https://open.spotify.com/album/5b0ppL3cibNd8CNEc5CYl7?si=7SaCH8PjTK6d0wSCydXvaA',
    youtube: 'https://www.youtube.com/results?search_query=odhil3',
    appleMusic: 'https://music.apple.com/your-apple-music-url-here', // ← Replace with your real link
  };

  return (
    <section 
      id="home"
      className="h-screen w-screen flex items-center justify-center relative pt-16 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/lovable-uploads/background.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div> 

      <div className="text-center z-10 max-w-3xl mx-auto flex flex-col justify-center space-y-3">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl mb-3 font-montserrat bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
          Odhil3
        </h1>

        <p className="text-white text-base sm:text-lg md:text-xl mb-4 font-montserrat" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
          Raw Lyrics, Real Stories from the City
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <Link 
            to="/music" 
            className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black px-5 py-2 rounded-full text-sm sm:text-base font-bold transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 hover:scale-105"
          >
            Listen Now
          </Link>

          <Link 
            to="/videos" 
            className="bg-transparent border-2 border-yellow-400 hover:bg-yellow-400 text-yellow-400 hover:text-black px-5 py-2 rounded-full text-sm sm:text-base font-bold transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 hover:scale-105"
          >
            Watch Videos
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-white mb-2">
          <a 
            href={socialLinks.youtubeMusic} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm sm:text-base hover:text-yellow-400 transition-all duration-300 hover:scale-110"
          >
            <Music2 size={16} /> YouTube Music
          </a>
          <a 
            href={socialLinks.spotify} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm sm:text-base hover:text-yellow-400 transition-all duration-300 hover:scale-110"
          >
            <Headphones size={16} /> Spotify
          </a>
          <a 
            href={socialLinks.appleMusic} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm sm:text-base hover:text-yellow-400 transition-all duration-300 hover:scale-110"
          >
            <Apple size={16} /> Apple Music
          </a>
          <a 
            href={socialLinks.youtube} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm sm:text-base hover:text-yellow-400 transition-all duration-300 hover:scale-110"
          >
            <Youtube size={16} /> YouTube
          </a>
        </div>

        {/* Add AlbumCard component just below social icons */}
        <AlbumCard 
          albumName="Re-Glock"
          albumCover="/lovable-uploads/album cover.png" // Replace with your actual album cover image path in the public folder
          preSaveLink="https://linkfire.com/presave" // Replace with your actual Spotify pre-save link (e.g., from Linkfire or Feature.fm)
        />
      </div>
    </section>
  );
};

export default HeroSection;