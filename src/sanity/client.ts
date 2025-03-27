import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "3p9bato5",
  dataset: "production",
  apiVersion: "2025-02-19",
  useCdn: false,
});
