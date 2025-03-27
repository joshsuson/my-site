import type { GalleryImage as GalleryImageType } from "../queryFunctions";

type GalleryImageProps = {
  photo: GalleryImageType;
};

const GalleryImage: React.FC<GalleryImageProps> = ({ photo }) => {
  return (
    <div className="h-[200px] mx-1 max-w-fit min-w-[200px] overflow-hidden rounded-lg border-3 border-zinc-950 odd:rotate-2 even:-rotate-1">
      <img src={photo.url} alt={photo.altText} className="" />
    </div>
  );
};

export default GalleryImage;
