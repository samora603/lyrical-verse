import React from 'react';
import { Music2, Headphones, Youtube, Apple } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 border-t border-yellow-500/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © 2025 Odhil3. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <a 
              href="https://music.youtube.com/channel/UCn_0rMWCXt0W4wNPuIT7_ww" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <Music2 size={18} /> YouTube Music
            </a>

            <a 
              href="https://open.spotify.com/album/5b0ppL3cibNd8CNEc5CYl7?si=7SaCH8PjTK6d0wSCydXvaA&nd=1&dlsi=3b1e15cef481475c" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <Headphones size={18} /> Spotify
            </a>

            <a 
              href="https://music.apple.com/your-apple-music-url-here" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <Apple size={18} /> Apple Music
            </a>

            <a 
              href="https://www.youtube.com/results?search_query=odhil3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <Youtube size={18} /> YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
