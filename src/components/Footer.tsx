
import React from 'react';

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
          <div className="flex space-x-6">
            <a 
              href="https://music.youtube.com/channel/UCn_0rMWCXt0W4wNPuIT7_ww" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              Youtube Music
            </a>
            <a 
              href="https://open.spotify.com/album/5b0ppL3cibNd8CNEc5CYl7?si=7SaCH8PjTK6d0wSCydXvaA%0A&nd=1&dlsi=3b1e15cef481475c&flow_ctx=035771b0-dd4e-49db-955f-b096fc68a35e%3A1744643798#login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              Spotify
            </a>
            <a 
              href="https://www.youtube.com/results?search_query=odhil3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
