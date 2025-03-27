import { visionTool } from "@sanity/vision";
import { defineConfig, isDev } from "sanity";
import { structureTool } from "sanity/structure";
import { myStructure } from "./src/sanity/deskStructure";
import { schema } from "./src/sanity/schemaTypes";

const devOnlyPlugins = [
  visionTool(),
  structureTool({
    structure: myStructure,
  }),
];

const config = defineConfig({
  projectId: "3p9bato5",
  dataset: "production",
  basePath: "/studio",
  plugins: [
    ...(isDev
      ? devOnlyPlugins
      : [
          structureTool({
            structure: myStructure,
          }),
        ]),
  ],
  schema,
});

export default config;
