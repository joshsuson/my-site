import type { SchemaTypeDefinition } from "sanity";
import { homePageType } from "./homePage";
import { galleryPhotoType } from "./galleryPhotos";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePageType, galleryPhotoType],
};
