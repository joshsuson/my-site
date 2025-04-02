import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "../components/Layout";

const Pages = {
  home: "/",
  about: "/about",
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
      case Pages.about:
        title = "👤 About | Suson.Codes";
        break;
      default:
        if (pathname.startsWith("/studio")) {
          title = "Studio";
        }
        title = "Suson.Codes";
    }
    return (
      <>
        {!pathname.startsWith("/studio") && (
          <Layout title={title}>
            <Outlet />
          </Layout>
        )}
        {pathname.startsWith("/studio") && <Outlet />}
        <ReactQueryDevtools buttonPosition="bottom-right" />
        <TanStackRouterDevtools />
      </>
    );
  },
});
