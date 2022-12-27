import { Home} from "@/pages";

import {
  INMOCOR_GLOSARY_PAGE,
  INMOCOR_LEGISLATION_AR,
  INMOCOR_LEGISLATION_ES,
  INMOCOR_LEGISLATION_EU,
  INMOCOR_LEGISLATION_RU,
  INMOCOR_LEGISLATION_UE,
  INMOCOR_TEMPLATE_III_PAGE,
  INMOCOR_TEMPLATE_II_PAGE,
  INMOCOR_TEMPLATE_IV_PAGE,
  INMOCOR_TEMPLATE_I_PAGE,
} from "./lib/constants";
import GlosaryPage from "./pages/glosary";
import LegislationArPage from "./pages/LegislationAr";
import LegislationEsPage from "./pages/legislationEs";
import LegislationEuPage from "./pages/legislationEu";
import LegislationRuPage from "./pages/legislationRu";
import LegislationUEPage from "./pages/legislationUe";
import TemplateIPage from "./pages/templateI";
import TemplateIIPage from "./pages/templateII";
import TemplateIIIPage from "./pages/templateIII";
import TemplateIVPage from "./pages/templateIV";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Plantilla-1",
    path: INMOCOR_TEMPLATE_I_PAGE,
    element: <TemplateIPage />,
  },
  {
    name: "Plantilla-2",
    path: INMOCOR_TEMPLATE_II_PAGE,
    element: <TemplateIIPage />,
  },
  {
    name: "Plantilla-3",
    path: INMOCOR_TEMPLATE_III_PAGE,
    element: <TemplateIIIPage />,
  },
  {
    name: "Plantilla-4",
    path: INMOCOR_TEMPLATE_IV_PAGE,
    element: <TemplateIVPage />,
  },
  {
    name: "Plantilla-4",
    path: INMOCOR_TEMPLATE_IV_PAGE,
    element: <TemplateIVPage />,
  },
  {
    name: "legislacion-Union-Europea",
    path: INMOCOR_LEGISLATION_UE,
    element: <LegislationUEPage />,
  },
  {
    name: "Legislacion-España",
    path: INMOCOR_LEGISLATION_ES,
    element: <LegislationEsPage />,
  },
  {
    name: "Legislacion-Argentina",
    path: INMOCOR_LEGISLATION_AR,
    element: <LegislationArPage />,
  },
  {
    name: "Legislacion-Reino-Unido",
    path: INMOCOR_LEGISLATION_RU,
    element: <LegislationRuPage />,
  },
  {
    name: "Legislacion-Estados-Unidos",
    path: INMOCOR_LEGISLATION_EU,
    element: <LegislationEuPage />,
  },
  {
    name: "Glosario",
    path: INMOCOR_GLOSARY_PAGE,
    element: <GlosaryPage />,
  },
];

export default routes;
