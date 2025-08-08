import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaSpotify, FaYoutube, FaApple, FaHeadphones } from 'react-icons/fa';

const Music = () => {
const singleTrackNames = [
  "Siingizii",
  "Broker",
  "Mambo ya Dunia (feat. Gizmo & Odhil3) ",
  "Forgetful",
  "Steeze",
  "MASHALLAH(feat. Gizmo)",
  "ugly",
  "aura reloaded",
  "lighter",
  "check yourself"
];

const singles = singleTrackNames.map((title, i) => ({
  id: i + 1,
  title,
  spotifyLink: `https://open.spotify.com/album/5b0ppL3cibNd8CNEc5CYl7?si=UPyqdcFtR9ifsNJk7fw1sw${i + 1}`,
  youtubeMusicLink: `https://music.youtube.com/channel/UCn_0rMWCXt0W4wNPuIT7_ww?si=pezsS_o5aEYzR9F2${i + 1}`,
  appleMusicLink: `https://music.apple.com/ke/artist/odhil3/1807177168${i + 1}`,
}));


  const albums = [
    {
      id: 1,
      title: "Re-Glock",
      cover: "/lovable-uploads/album cover.png",
      spotifyLink: 'https://open.spotify.com/album/5Z4fUoXBSPoyroiJ394722?si=36RzrU7tSriGZLnF4NSEIA',
      youtubeMusicLink: 'https://music.youtube.com/playlist?list=OLAK5uy_lm0Fp8oIoNuI3bn6rObYusJCn_s-DJ2QE&si=pl9CsCcemJ-T2BS0',
      appleMusicLink: 'https://music.apple.com/ke/album/re-glock/1831228827',
    },
    {
      id: 2,
      title: "PEDI-cure",
      cover: "/lovable-uploads/Pedi-cure.png",
      spotifyLink: 'https://open.spotify.com/album/5b0ppL3cibNd8CNEc5CYl7?si=zqx_3QK-S56ftbL50wklWQ',
      youtubeMusicLink: 'https://music.youtube.com/channel/UCn_0rMWCXt0W4wNPuIT7_ww?si=8tJ6VhwIanUudeux',
      appleMusicLink: 'https://music.apple.com/ke/artist/odhil3/1807177168',
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
            <div className="overflow-hidden rounded-lg mb-4 flex justify-center items-center bg-black">
              <img
                src={album.cover}
                alt={album.title}
                className="w-full max-h-80 object-contain rounded-lg transform transition-transform duration-500 group-hover:scale-105"
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


