import { defineQuery } from "groq";

export const homePageQuery = defineQuery(`*[_type == 'homePage']{
      ...,
      gallery[] -> {
        photo,
        altText
      }
    }`);
