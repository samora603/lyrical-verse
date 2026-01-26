interface Clip {
  id: number;
  video: string;
  title: string;
}

const clips: Clip[] = [
  {
    id: 1,
    video: "/lovable-uploads/clips/studio1.mp4",
    title: "Studio Night",
  },
  {
    id: 2,
    video: "/lovable-uploads/clips/freestyle1.mp4",
    title: "Freestyle Session",
  },
  {
    id: 3,
    video: "/lovable-uploads/clips/session1.mp4",
    title: "Recording Session",
  },
  {
    id: 4,
    video: "/lovable-uploads/clips/bts1.mp4",
    title: "Behind The Scenes",
  },
];

const CollabShorts: React.FC = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-2xl font-bold text-yellow-500 mb-6 uppercase tracking-widest">
        Raw Clips
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {clips.map((c) => (
          <div
            key={c.id}
            className="rounded-xl overflow-hidden border border-yellow-500/20 bg-black hover:shadow-lg hover:shadow-yellow-500/20 transition"
          >
            <video
              src={c.video}
              className="w-full h-[300px] object-cover"
              muted
              loop
              playsInline
              preload="metadata"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => e.currentTarget.pause()}
            />

            <p className="p-2 text-xs text-gray-400">{c.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollabShorts;
