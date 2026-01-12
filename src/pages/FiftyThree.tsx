import CollabHero from "../components/CollabHero";
import CollabAlbums from "../components/CollabAlbums";
import CollabGallery from "../components/CollabGallery";
import CollabShorts from "../components/CollabShorts";

const FiftyThree: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <CollabHero />
      <CollabAlbums />
      <CollabGallery />
      <CollabShorts />
    </div>
  );
};

export default FiftyThree;
