import React from "react";
import {
  Card,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  CardBody,
} from "@material-tailwind/react";

import { FeatureCard, TeamCard } from "@/widgets/cards";
import FooterSite from "@/component/footer";
import NavbarMenuPages from "@/component/navbars/NavbarMenuPages";
import MenuFooterPage from "@/component/menuFooterPage";

export function Inmogen() {
  return (
    <>
      <div className="relative flex h-96 content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/bg/cabecera-contratos-inmocor.jpg')] bg-cover bg-center" />

        <div className="max-w-8xl container relative mx-auto">
          <div className="items-right flex flex-wrap text-right">
            <NavbarMenuPages />
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-black"
              >
                INMOGEN
              </Typography>
              <Typography variant="h6" color="white" className="font-black">
                Redacción de Contratos de Compraventa
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-gray-50 mt-20 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="w-full text-gray">
            <Typography variant="h2" className="mb-6 font-black text-red">
            INMOGEN: Contratos de Compraventa Inmobiliaria
            </Typography>
            <a className="font-black">INMOGEN</a> es una herramienta para la
            redacción de contratos de compraventa de vivienda en español
            (variedades de Argentina y España), inglés (de Irlanda, EE.UU. y
            Reino Unido), alemán, francés, italiano y catalán. En aquellos casos
            con los que la Ley permite una redacción flexible, el usuario podrá
            elegir entre diferentes opciones. En otros, en los que la Ley exige
            una estructura fija (como es el caso de EE.UU, para el Estado de
            Luisiana, se ha elaborado una plantilla de redacción).
          </div>
        </div>
      </section>

      <MenuFooterPage />
      <FooterSite />
    </>
  );
}

export default Inmogen;
