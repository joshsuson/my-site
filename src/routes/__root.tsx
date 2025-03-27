import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "../components/Layout";

const Pages = {
  home: "/",
};

type Pages = (typeof Pages)[keyof typeof Pages];

export const Route = createRootRoute({
  component: () => {
    const location = useLocation();
    const pathname: Pages = location.pathname;
    let title: string;
    switch (pathname) {
      case Pages.home:
        title = "🏠 Home | Suson.Codes";
        break;
      default:
        title = "Suson.Codes";
    }
    return (
      <>
        <Layout title={title}>
          <Outlet />
        </Layout>
        <ReactQueryDevtools buttonPosition="bottom-right" />
        <TanStackRouterDevtools />
      </>
    );
  },
});
