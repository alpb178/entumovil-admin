import { Home } from "@/pages";

import {
  INMOCOR_CONTACT_PAGE,
  INMOCOR_CONTRACT_DRATER_ARG_PAGE,
  INMOCOR_CONTRACT_DRATER_DE_PAGE,
  INMOCOR_CONTRACT_DRATER_EEUU_PAGE,
  INMOCOR_CONTRACT_DRATER_ESP_PAGE,
  INMOCOR_CONTRACT_DRATER_FR_PAGE,
  INMOCOR_CONTRACT_DRATER_IR_PAGE,
  INMOCOR_CONTRACT_DRATER_IT_PAGE,
  INMOCOR_CONTRACT_DRATER_UK_PAGE,
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
  INMOCOR_MANAGMENT_PUBLICATIONS_PAGE,
} from "./lib/constants";
import ContactsPage from "./pages/contacts";
import ContractDrafterARGPage from "./pages/contractDrafter/contractDrafterARG";
import ContractDrafterDEPage from "./pages/contractDrafter/contractDrafterDE";
import ContractDrafterEEUUPage from "./pages/contractDrafter/contractDrafterEEUU";
import ContractDrafterEnUkPage from "./pages/contractDrafter/contractDrafterEnUk";
import ContractDrafterESPPage from "./pages/contractDrafter/contractDrafterESP";
import ContractDrafterFRPage from "./pages/contractDrafter/contractDrafterFR";
import ContractDrafterIRPage from "./pages/contractDrafter/contractDrafterIR";
import ContractDrafterITPage from "./pages/contractDrafter/contractDrafterIT";
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
import ManagmentPublicationsPage from "./pages/publications";

export const routes = [
  {
    name: "Inicio",
    path: "/Inicio",
    element: <Home />,
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
    name: "Publicaciones",
    path: INMOCOR_MANAGMENT_PUBLICATIONS_PAGE,
    element: <ManagmentPublicationsPage />,
  },
  {
    name: "Legislacion",
    path: INMOCOR_LEGISLATION,
    element: <LegislationIntroductionPage />,
  },
  {
    name: "Plantilla-Argentina",
    path: INMOCOR_CONTRACT_DRATER_ARG_PAGE,
    element: <ContractDrafterARGPage />,
  },
  {
    name: "Plantilla-Alemania",
    path: INMOCOR_CONTRACT_DRATER_DE_PAGE,
    element: <ContractDrafterDEPage />,
  },
  {
    name: "Plantilla-Uk",
    path: INMOCOR_CONTRACT_DRATER_UK_PAGE,
    element: <ContractDrafterEnUkPage />,
  },
  {
    name: "Plantilla-España",
    path: INMOCOR_CONTRACT_DRATER_ESP_PAGE,
    element: <ContractDrafterESPPage />,
  },
  {
    name: "Plantilla-Francia",
    path: INMOCOR_CONTRACT_DRATER_FR_PAGE,
    element: <ContractDrafterFRPage />,
  },
  {
    name: "Plantilla-Italiano",
    path: INMOCOR_CONTRACT_DRATER_IT_PAGE,
    element: <ContractDrafterITPage />,
  },
  {
    name: "Plantilla-EEUU",
    path: INMOCOR_CONTRACT_DRATER_EEUU_PAGE,
    element: <ContractDrafterEEUUPage />,
  },
  {
    name: "Plantilla-Irlanda",
    path: INMOCOR_CONTRACT_DRATER_IR_PAGE,
    element: <ContractDrafterIRPage />,
  },
];

export default routes;
