import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaSpotify, FaYoutube, FaApple, FaHeadphones } from 'react-icons/fa';

const Music = () => {
  const musicTracks = [
    {
      id: 1,
      title: "Siingizii",
      spotifyLink: 'https://open.spotify.com/track/placeholder1',
      youtubeMusicLink: 'https://music.youtube.com/watch?v=placeholder1',
      appleMusicLink: 'https://music.apple.com/track/placeholder1',
    },
    {
      id: 2,
      title: "aura reloaded",
      spotifyLink: 'https://open.spotify.com/track/placeholder2',
      youtubeMusicLink: 'https://music.youtube.com/watch?v=placeholder2',
      appleMusicLink: 'https://music.apple.com/track/placeholder2',
    },
    {
      id: 3,
      title: "Steeze",
      spotifyLink: 'https://open.spotify.com/track/placeholder3',
      youtubeMusicLink: 'https://music.youtube.com/watch?v=placeholder3',
      appleMusicLink: 'https://music.apple.com/track/placeholder3',
    },
    {
      id: 4,
      title: "MASHALLAH",
      spotifyLink: 'https://open.spotify.com/track/placeholder4',
      youtubeMusicLink: 'https://music.youtube.com/watch?v=placeholder4',
      appleMusicLink: 'https://music.apple.com/track/placeholder4',
    },
    {
      id: 5,
      title: "ugly",
      spotifyLink: 'https://open.spotify.com/track/placeholder5',
      youtubeMusicLink: 'https://music.youtube.com/watch?v=placeholder5',
      appleMusicLink: 'https://music.apple.com/track/placeholder5',
    },
    {
      id: 6,
      title: "lighter",
      spotifyLink: 'https://open.spotify.com/track/placeholder6',
      youtubeMusicLink: 'https://music.youtube.com/watch?v=placeholder6',
      appleMusicLink: 'https://music.apple.com/track/placeholder6',
    },
    {
      id: 7,
      title: "broker",
      spotifyLink: 'https://open.spotify.com/track/placeholder7',
      youtubeMusicLink: 'https://music.youtube.com/watch?v=placeholder7',
      appleMusicLink: 'https://music.apple.com/track/placeholder7',
    },
    {
      id: 8,
      title: "forgetful",
      spotifyLink: 'https://open.spotify.com/track/placeholder8',
      youtubeMusicLink: 'https://music.youtube.com/watch?v=placeholder8',
      appleMusicLink: 'https://music.apple.com/track/placeholder8',
    },
    {
      id: 9,
      title: "check yourself",
      spotifyLink: 'https://open.spotify.com/track/placeholder9',
      youtubeMusicLink: 'https://music.youtube.com/watch?v=placeholder9',
      appleMusicLink: 'https://music.apple.com/track/placeholder9',
    },
    {
      id: 10,
      title: "Track 10",
      spotifyLink: 'https://open.spotify.com/track/placeholder10',
      youtubeMusicLink: 'https://music.youtube.com/watch?v=placeholder10',
      appleMusicLink: 'https://music.apple.com/track/placeholder10',
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

            {/* 🎵 TRACK LIST SECTION */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {musicTracks.map((track) => (
                <div
                  key={track.id}
                  className="bg-gray-900 rounded-lg p-6 border border-yellow-500/20 hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-yellow-400 mb-4 font-montserrat flex items-center gap-2 group">
                    <span className="relative">
                      <FaHeadphones className="text-yellow-400 w-5 h-5 group-hover:animate-ping" />
                    </span>
                    {track.title}
                  </h3>

                  <div className="flex flex-col sm:flex-row flex-wrap gap-4">
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
                    <a
                      href={track.appleMusicLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-4 py-3 rounded-full flex items-center gap-2 hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 hover:scale-105 no-underline"
                    >
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
