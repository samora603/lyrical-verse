import React from 'react';

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      title: "Odhil3 - Latest Rap Track",
      youtubeId: "https://www.youtube.com/watch?v=Clon1jNqY60&list=RDClon1jNqY60&start_radio=1",
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
    }
  ];

  // Extract video ID from full URL
  const getVideoId = (url) => {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get('v');
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
          Featured Video
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Watch my latest visual storytelling
        </p>
        
        <div className="mb-12 bg-black rounded-lg p-6 border border-yellow-500/20 hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300">
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
    </section>
  );
};

export default VideoSection;