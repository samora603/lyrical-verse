import React from 'react';

const AlbumCard = ({ albumName, albumCover, preSaveLink }) => {
  return (
    <div className="max-w-xs mx-auto bg-black bg-opacity-70 rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105">
      <img 
        src={albumCover} 
        alt={`${albumName} album cover`} 
        className="w-full h-36 object-cover"
      />
      <div className="p-3 text-center">
        <h2 className="text-white text-base sm:text-lg font-montserrat font-bold mb-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
          {albumName} - Coming Soon
        </h2>
        <a
          href={preSaveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25"
        >
          Pre-Save on Spotify
        </a>
      </div>
    </div>
  );
};

export default AlbumCard;