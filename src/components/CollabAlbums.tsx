import React from "react";

interface Video {
  id: number;
  title: string;
  youtubeUrl: string;
  embedId: string;
}

interface Album {
  id: number;
  title: string;
  artist: string;
  cover: string;
  year: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: "OWADA-53 ft ​@Mnichwezzz @Spotboimafia (Official 4K Video)",
    youtubeUrl: "https://www.youtube.com/watch?v=opcKTmZrxe0",
    embedId: "opcKTmZrxe0",
  },
  {
    id: 2,
    title: "Jamzey M50, Odhil3 - PLAY (Music Video)",
    youtubeUrl: "https://www.youtube.com/watch?v=SYwwaN1sLsw",
    embedId: "SYwwaN1sLsw",
  },
];

const albums: Album[] = [
  {
    id: 1,
    title: "OWADA 53",
    artist: "Odhil3 & Friends",
    cover: "/lovable-uploads/GRhyme.png", // 👈 put your album image here
    year: "2025",
  },
];

const CollabProjects: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ===== Title ===== */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            53 Collaborations
          </h2>
          <p className="text-gray-400 mt-2">
            Connection. Movement. Creative Exchange.
          </p>
        </div>

        {/* ===== Videos ===== */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-black rounded-xl p-4 border border-yellow-500/20 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300"
            >
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden mb-4">
                <iframe
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              <h3 className="text-lg font-bold text-yellow-400 mb-2">
                {video.title}
              </h3>

              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-yellow-400 transition"
              >
                Watch on YouTube →
              </a>
            </div>
          ))}
        </div>

        {/* ===== Album Section ===== */}
        <div>
          <h3 className="text-xl font-bold text-yellow-500 uppercase tracking-widest mb-6">
            Collaboration Album
          </h3>

          <div className="flex gap-6">
            {albums.map((album) => (
              <div
                key={album.id}
                className="w-[220px] group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl border border-yellow-500/20">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-[220px] object-cover group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
                </div>

                <h4 className="mt-3 font-bold">{album.title}</h4>
                <p className="text-xs text-gray-400">{album.artist}</p>
                <p className="text-xs text-gray-500">{album.year}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CollabProjects;
