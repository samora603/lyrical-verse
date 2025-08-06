import React from 'react';

const AlbumCard = ({ albumName, albumCover, preSaveLink }) => {
  return (
    <div className="mt-4 flex flex-col items-center text-white">
      <img
        src={albumCover}
        alt={`${albumName} Cover`}
        className="w-64 h-64 object-cover rounded-xl shadow-lg border-2 border-yellow-400"
      />
      <h2 className="mt-3 text-xl font-bold">{albumName}</h2>
      <a
        href={preSaveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300"
      >
        Pre-Save Now
      </a>
    </div>
  );
};

export default AlbumCard;
