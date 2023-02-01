import { Home} from "@/pages";

import {
  INMOCOR_CONTACT_PAGE,
  INMOCOR_GLOSARY_PAGE,
  INMOCOR_LEGISLATION,
  INMOCOR_LEGISLATION_AL,
  INMOCOR_LEGISLATION_AR,
  INMOCOR_LEGISLATION_CA,
  INMOCOR_LEGISLATION_ES,
  INMOCOR_LEGISLATION_EU,
  INMOCOR_LEGISLATION_FR,
  INMOCOR_LEGISLATION_IR,
  INMOCOR_LEGISLATION_IT,
  INMOCOR_LEGISLATION_RU,
  INMOCOR_LEGISLATION_UE,
  INMOCOR_MANAGMENT_INMOCOR_PAGE,
  INMOCOR_MANAGMENT_INMOGEN_PAGE,
  INMOCOR_TEMPLATE_III_PAGE,
  INMOCOR_TEMPLATE_II_PAGE,
  INMOCOR_TEMPLATE_IV_PAGE,
  INMOCOR_TEMPLATE_I_PAGE,
} from "./lib/constants";
import ContactsPage from "./pages/contacts";
import GlosaryPage from "./pages/glosary";
import InmogenPage from "./pages/inmogen";
import LegislationALPage from "./pages/legislation/legislationAL";
import LegislationArPage from "./pages/legislation/LegislationAr";
import LegislationCtPage from "./pages/legislation/legislationCt";
import LegislationEsPage from "./pages/legislation/legislationEs";
import LegislationEuPage from "./pages/legislation/legislationEu";
import LegislationFRPage from "./pages/legislation/legislationFr";
import LegislationIntroductionPage from "./pages/legislation/legislationIntroduction";
import LegislationIRPage from "./pages/legislation/legislationIr";
import LegislationITPage from "./pages/legislation/legislationIt";
import LegislationRuPage from "./pages/legislation/legislationRu";
import LegislationUEPage from "./pages/legislation/legislationUe";
import ManagmentInmocorPage from "./pages/managmentInmocor";
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
    name: "Legislacion-Francia",
    path: INMOCOR_LEGISLATION_FR,
    element: <LegislationFRPage />,
  },
  {
    name: "Glosario",
    path: INMOCOR_GLOSARY_PAGE,
    element: <GlosaryPage />,
  },
  {
    name: "Contacto",
    path: INMOCOR_CONTACT_PAGE,
    element: <ContactsPage />,
  },
  {
    name: "Gestor-Inmocor",
    path: INMOCOR_MANAGMENT_INMOCOR_PAGE,
    element: <ManagmentInmocorPage />,
  },

  {
    name: "Inmogen",
    path: INMOCOR_MANAGMENT_INMOGEN_PAGE,
    element: <InmogenPage />,
  },

  {
    name: "legislacion-Alemania",
    path: INMOCOR_LEGISLATION_AL,
    element: <LegislationALPage />,
  },
  {
    name: "Legislacion-Irlanda",
    path: INMOCOR_LEGISLATION_IR,
    element: <LegislationIRPage />,
  },
  {
    name: "Legislacion-Italia",
    path: INMOCOR_LEGISLATION_IT,
    element: <LegislationITPage />,
  },
  {
    name: "Legislacion-Cataluña",
    path: INMOCOR_LEGISLATION_CA,
    element: <LegislationCtPage />,
  },
  {
    name: "Legislacion",
    path: INMOCOR_LEGISLATION,
    element: <LegislationIntroductionPage />,
  },
];

export default routes;
