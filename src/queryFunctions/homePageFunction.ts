import { sanityClient } from "../sanity/client";
import { urlForImage } from "../sanity/lib/urlForImage";
import { homePageQuery } from "../sanity/sanity.queries";

export type GalleryImage = {
  altText: string;
  url: string;
};

export type HomePageQueryFnResults = {
  headline: string;
  slugline: string;
  gallery: GalleryImage[];
};

export const homePageQueryFn = async (): Promise<HomePageQueryFnResults> => {
  const response = await sanityClient.fetch(homePageQuery);

  let galleryImages: GalleryImage[] = [];
  galleryImages =
    response?.[0]?.gallery?.map((galleryImage) => {
      const { photo } = galleryImage;

      const url =
        photo?.asset &&
        urlForImage(photo.asset)
          .width(200)
          .height(200)
          .crop("focalpoint")
          .focalPoint(photo?.hotspot?.x ?? 0.5, photo?.hotspot?.y ?? 0.5)
          .fit("crop")
          .url();

      return {
        altText: galleryImage.altText ?? "",
        url: url ?? "",
      };
    }) ?? [];

  return {
    headline: response?.[0]?.headline ?? "",
    slugline: response?.[0]?.slugline ?? "",
    gallery: galleryImages,
  };
};
