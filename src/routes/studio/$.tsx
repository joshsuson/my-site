import { createFileRoute } from "@tanstack/react-router";
import { Studio } from "sanity";
import config from "../../../sanity.config";

export const Route = createFileRoute("/studio/$")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Studio config={config} />;
}
