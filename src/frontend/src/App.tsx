import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import AdminDownloadBundlePage from "./pages/AdminDownloadBundlePage";
import HomePage from "./pages/HomePage";

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const adminDownloadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/download-bundle",
  component: AdminDownloadBundlePage,
});

const routeTree = rootRoute.addChildren([indexRoute, adminDownloadRoute]);
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
