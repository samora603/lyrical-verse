import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const MusicSection = () => {
  // Configure YouTube Music links here - update with actual track URLs
  const musicLinks = {
    track1: 'https://music.youtube.com/watch?v=Clon1jNqY60',
    track2: 'https://music.youtube.com/watch?v=4T2RDCpQNQs',
    track3: 'https://music.youtube.com/watch?v=_WOFBLoT4q0',
    track4: 'https://music.youtube.com/watch?v=TP-rt6H1SLY',
  };

  const tracks = [
    { id: 1, title: "SiingiziiP", platform: 'track1' },
    { id: 2, title: "MASHALLAH (feat. Gizmo)", platform: 'track2' },
    { id: 3, title: "aura reloaded", platform: 'track3' },
    { id: 4, title: "broker", platform: 'track4' },
  ];

  // Extract video ID from YouTube Music URL
  const getVideoId = (url) => {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get('v');
  };

  return (
    <section 
      id="music"
      className="py-16 px-4 bg-black"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-montserrat bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
          Music
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {tracks.map((track) => (
            <a
              key={track.id}
              href={musicLinks[track.platform]}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 rounded-lg overflow-hidden border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 group"
            >
              <div className="aspect-video bg-gray-800 relative cursor-pointer">
                <img 
                  src={`https://img.youtube.com/vi/${getVideoId(musicLinks[track.platform])}/hqdefault.jpg`} 
                  alt={track.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-black ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-2 font-montserrat">{track.title}</h3>
                <p className="text-gray-300">YouTube Music</p>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/music" 
            className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 hover:scale-105"
          >
            Explore More Tracks
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;