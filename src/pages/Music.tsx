import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaSpotify, FaYoutube, FaApple, FaHeadphones } from 'react-icons/fa';

const Music = () => {
  const singles = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Track ${i + 1}`,
    spotifyLink: `https://open.spotify.com/track/placeholder${i + 1}`,
    youtubeMusicLink: `https://music.youtube.com/watch?v=placeholder${i + 1}`,
    appleMusicLink: `https://music.apple.com/track/placeholder${i + 1}`,
  }));

  const albums = [
    {
      id: 1,
      title: "Album One",
      cover: "/lovable-uploads/album cover.png",
      spotifyLink: 'https://open.spotify.com/album/placeholderA',
      youtubeMusicLink: 'https://music.youtube.com/playlist?list=placeholderA',
      appleMusicLink: 'https://music.apple.com/album/placeholderA',
    },
    {
      id: 2,
      title: "Album Two",
      cover: "/lovable-uploads/image 3.png",
      spotifyLink: 'https://open.spotify.com/album/placeholderB',
      youtubeMusicLink: 'https://music.youtube.com/playlist?list=placeholderB',
      appleMusicLink: 'https://music.apple.com/album/placeholderB',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20 pb-16 px-4">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 font-montserrat bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Music
          </h1>

          {/* 🎵 SINGLES SECTION */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-6">Singles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {singles.map((track) => (
                <div
                  key={track.id}
                  className="bg-gray-900 rounded-lg p-6 border border-yellow-500/20 hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-yellow-400 mb-4 font-montserrat flex items-center gap-2 group">
                    <FaHeadphones className="text-yellow-400 w-5 h-5 group-hover:animate-ping" />
                    {track.title}
                  </h3>

                  <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                    <a href={track.spotifyLink} target="_blank" rel="noopener noreferrer" className="platform-btn">
                      <FaSpotify className="w-5 h-5" />
                      Spotify
                    </a>
                    <a href={track.youtubeMusicLink} target="_blank" rel="noopener noreferrer" className="platform-btn">
                      <FaYoutube className="w-5 h-5" />
                      YouTube Music
                    </a>
                    <a href={track.appleMusicLink} target="_blank" rel="noopener noreferrer" className="platform-btn">
                      <FaApple className="w-5 h-5" />
                      Apple Music
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 💿 ALBUMS SECTION */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Albums</h2>
            <div className="flex flex-wrap gap-8 justify-center">
              {albums.map((album) => (
                <div
                  key={album.id}
                  className="w-full sm:w-[340px] bg-gray-900 p-6 rounded-lg border border-yellow-500/20 hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 group"
                >
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={album.cover}
                      alt={album.title}
                      className="w-full h-60 object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{album.title}</h3>
                  <div className="flex flex-col gap-3">
                    <a href={album.spotifyLink} target="_blank" rel="noopener noreferrer" className="platform-btn">
                      <FaSpotify className="w-5 h-5" />
                      Spotify
                    </a>
                    <a href={album.youtubeMusicLink} target="_blank" rel="noopener noreferrer" className="platform-btn">
                      <FaYoutube className="w-5 h-5" />
                      YouTube Music
                    </a>
                    <a href={album.appleMusicLink} target="_blank" rel="noopener noreferrer" className="platform-btn">
                      <FaApple className="w-5 h-5" />
                      Apple Music
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Music;
