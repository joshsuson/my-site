import { motion } from "motion/react";
import GalleryImage from "./GalleryImage";
import type { GalleryImage as GalleryImageType } from "../queryFunctions";
type GalleryTickerProps = {
  gallery: GalleryImageType[];
};
const GalleryTicker: React.FC<GalleryTickerProps> = ({ gallery }) => {
  return (
    <div className="flex overflow-hidden py-4">
      <motion.div
        className="flex flex-shrink-0"
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {gallery.map((photo) => (
          <GalleryImage
            photo={photo}
            key={`${photo.url}-${photo.altText}-first`}
          />
        ))}
      </motion.div>
      <motion.div
        className="flex flex-shrink-0"
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {gallery.map((photo) => (
          <GalleryImage
            photo={photo}
            key={`${photo.url}-${photo.altText}-second`}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default GalleryTicker;
