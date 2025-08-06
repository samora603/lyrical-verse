import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "Odhil3 - Latest Rap Track",
      youtubeId: "https://www.youtube.com/watch?v=NrZ6R21n2CE&list=RDNrZ6R21n2CE&start_radio=1",
      caption: "Official music video release"
    },
    {
      id: 2,
      title: "MASHALLAH (feat. Gizmo)",
      youtubeId: "https://www.youtube.com/watch?v=4T2RDCpQNQs&list=RD4T2RDCpQNQs&start_radio=1",
      caption: "Studio sessions and production"
    },
    {
      id: 3,
      title: "aura reloaded",
      youtubeId: "https://www.youtube.com/watch?v=_WOFBLoT4q0&list=RD_WOFBLoT4q0&start_radio=1",
      caption: "Live performance energy"
    },
    {
      id: 4,
      title: "broker",
      youtubeId: "https://www.youtube.com/watch?v=TP-rt6H1SLY&list=RDTP-rt6H1SLY&start_radio=1",
      caption: "Deep dive into the lyrics"
    },
    {
      id: 5,
      title: "Mambo ya Dunia",
      youtubeId: "https://www.youtube.com/watch?v=aN4_0ueavAM&list=RDaN4_0ueavAM&start_radio=1",
      caption: "Deep dive into the lyrics"
    }
  ];

  const getVideoId = (url) => {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get('v');
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-20 pb-16">
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 font-montserrat bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Videos
            </h1>

            {/* Featured Video */}
            <div className="mb-16">
              <div className="bg-gray-900 rounded-lg p-6 border border-yellow-500/20">
                <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center font-montserrat">Featured Video</h2>
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${getVideoId(videos[0].youtubeId)}`}
                    title={videos[0].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Video Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {videos.slice(1).map((video) => (
                <a
                  key={video.id}
                  href={`https://www.youtube.com/watch?v=${getVideoId(video.youtubeId)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 rounded-lg overflow-hidden border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
                >
                  <div className="aspect-video bg-gray-800 relative group cursor-pointer">
                    <img 
                      src={`https://img.youtube.com/vi/${getVideoId(video.youtubeId)}/hqdefault.jpg`} 
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-yellow-400 mb-2 font-montserrat">{video.title}</h3>
                    <p className="text-gray-300">{video.caption}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
