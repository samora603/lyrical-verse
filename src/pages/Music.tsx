import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaSpotify, FaYoutube } from 'react-icons/fa';

const Music = () => {
  const musicTracks = [
    {
      id: 1,
      title: "Odhil3 - Latest Rap Track",
      spotifyLink: 'https://open.spotify.com/track/Clon1jNqY60',
      youtubeMusicLink: 'https://music.youtube.com/watch?v=Clon1jNqY60',
    },
    {
      id: 2,
      title: "MASHALLAH (feat. Gizmo)",
      spotifyLink: 'https://open.spotify.com/track/4T2RDCpQNQs',
      youtubeMusicLink: 'https://music.youtube.com/watch?v=4T2RDCpQNQs',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20 pb-16">
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 font-montserrat bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Music
            </h1>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {musicTracks.map((track) => (
                <div
                  key={track.id}
                  className="bg-gray-900 rounded-lg p-6 border border-yellow-500/20 hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-yellow-400 mb-4 font-montserrat">
                    {track.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={track.spotifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-4 py-3 rounded-full flex items-center gap-2 hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 hover:scale-105 no-underline"
                    >
                      <FaSpotify className="w-5 h-5" />
                      Spotify
                    </a>
                    <a
                      href={track.youtubeMusicLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-4 py-3 rounded-full flex items-center gap-2 hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 hover:scale-105 no-underline"
                    >
                      <FaYoutube className="w-5 h-5" />
                      YouTube Music
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-yellow-400 mb-8 font-montserrat">Stream On</h2>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="https://open.spotify.com/artist/odhil3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 hover:scale-105 no-underline"
                >
                  <FaSpotify className="w-5 h-5" />
                  Spotify
                </a>
                <a
                  href="https://music.youtube.com/channel/odhil3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 hover:scale-105 no-underline"
                >
                  <FaYoutube className="w-5 h-5" />
                  YouTube Music
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Music;
