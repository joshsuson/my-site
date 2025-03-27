import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import GalleryTicker from "../components/GalleryTicker";
import { homePageQueryFn } from "../queryFunctions";
import Header from "../components/Header";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const {
    data: homePage,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["homePage"],
    queryFn: homePageQueryFn,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.log(error);
    return <div>There has been an error</div>;
  }

  return (
    <div className="">
      <h1>{homePage?.headline}</h1>
      <h2>{homePage?.slugline}</h2>
      <GalleryTicker gallery={homePage?.gallery ?? []} />
    </div>
  );
}
