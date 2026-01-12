const images: string[] = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
];

const CollabGallery: React.FC = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-2xl font-bold text-yellow-500 mb-6 uppercase tracking-widest">
        Moments & Sessions
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div key={i} className="relative overflow-hidden rounded-lg group">
            <img
              src={img}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollabGallery;
