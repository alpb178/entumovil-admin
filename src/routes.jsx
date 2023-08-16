import PublicPage from "./pages/Public";
import ProtectedPage from "./pages/Protected";
import { URL_HOME, URL_POTECTED } from "./lib/constant";

export const routes = [
  {
    name: "inicio",
    path: URL_HOME,
    element: <PublicPage />,
  },

  {
    name: "autenticado",
    path: URL_POTECTED,
    element: <ProtectedPage />,
  },
];

export default routes;
