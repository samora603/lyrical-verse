interface Clip {
  id: number;
  video: string;
  title: string;
}

const clips: Clip[] = [
  { id: 1, video: "/clips/1.mp4", title: "Studio Night" },
  { id: 2, video: "/clips/2.mp4", title: "Freestyle Session" },
];

const CollabShorts: React.FC = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-2xl font-bold text-yellow-500 mb-6 uppercase tracking-widest">
        Raw Clips
      </h2>

      <div className="flex gap-6 overflow-x-auto">
        {clips.map((c) => (
          <div
            key={c.id}
            className="min-w-[220px] rounded-xl overflow-hidden border border-yellow-500/20"
          >
            <video
              src={c.video}
              className="w-full h-[380px] object-cover"
              muted
              loop
              onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
              onMouseLeave={(e) => (e.currentTarget as HTMLVideoElement).pause()}
            />
            <p className="p-2 text-xs text-gray-400">{c.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollabShorts;
