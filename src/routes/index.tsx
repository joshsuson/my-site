import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { homePageQueryFn } from "../queryFunctions";
import { LeftArrow } from "../icons";

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
    <section className="text-zinc-100">
      <div className="text-center pt-16">
        <h1 className="text-5xl font-bold">{homePage?.headline}</h1>
        <h2 className="text-3xl pt-4">{homePage?.slugline}</h2>
      </div>
      <div className="flex gap-10 justify-center pt-16">
        <Link to={"/blog"} className="group flex items-center text-lg">
          Read My Blog{" "}
          <span className="rotate-180 group-hover:translate-x-1 transiton-all ease-in-out">
            <LeftArrow className="size-6" />
          </span>
        </Link>
        <Link to={"/about"} className="group flex items-center text-lg">
          Read More About Me{" "}
          <span className="rotate-180 group-hover:translate-x-1 transiton-all ease-in-out">
            <LeftArrow className="size-6" />
          </span>
        </Link>
      </div>
    </section>
  );
}
