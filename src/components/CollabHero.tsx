
const CollabHero: React.FC = () => {
  return (
    <section
    className="h-[70vh] flex items-center justify-center relative overflow-hidden bg-cover bg-center"
    style={{ backgroundImage: "url('/lovable-uploads/Bg53.png')" }}>

        <div className="absolute inset-0 bg-black/70" />

      <div className="text-center z-10">
        <h1 className="text-7xl md:text-9xl font-extrabold text-yellow-500 tracking-widest">
          53
        </h1>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto uppercase tracking-widest text-sm">
          Connection. Movement. Creative Exchange.
        </p>
        <p className="mt-2 text-gray-500 text-xs">
          Where Odhil3 meets the culture.
        </p>
      </div>

      <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] pointer-events-none" />
    </section>
  );
};

export default CollabHero;
