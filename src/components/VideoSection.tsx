import React from 'react';

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      title: "Odhil3 - Latest Rap Track",
      youtubeUrl: "https://www.youtube.com/watch?v=UBg4yTmFOlE",
      embedId: "UBg4yTmFOlE",
      caption: "Official music video release"
    },
    {
      id: 2,
      title: "MASHALLAH (feat. Gizmo)",
      youtubeUrl: "https://www.youtube.com/watch?v=4T2RDCpQNQs",
      embedId: "4T2RDCpQNQs",
      caption: "Studio sessions and production"
    },
    {
      id: 3,
      title: "Aura Reloaded",
      youtubeUrl: "https://www.youtube.com/watch?v=_WOFBLoT4q0",
      embedId: "_WOFBLoT4q0",
      caption: "Live performance energy"
    },
    {
      id: 4,
      title: "Broker",
      youtubeUrl: "https://www.youtube.com/watch?v=TP-rt6H1SLY",
      embedId: "TP-rt6H1SLY",
      caption: "Deep dive into the lyrics"
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
          Featured Videos
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Watch my latest visual storytelling
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-black rounded-lg p-6 border border-yellow-500/20 hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">{video.title}</h3>
              <p className="text-gray-300 mb-4">{video.caption}</p>
              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:underline"
              >
                Watch on YouTube
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
