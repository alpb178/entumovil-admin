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

export function ManagmentInmocor() {
  return (
    <>
      <div className="relative flex h-96 content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/bg/cabecera-legislacion-generalidades-inmocor.jpg')] bg-cover bg-center" />
        <div className="absolute  top-0 h-full w-full backdrop-brightness-50" />

        <div className="max-w-8xl container relative mx-auto">
          <div className="items-right flex flex-wrap text-right">
            <NavbarMenuPages />
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-black"
              >
                Macrocorpus INMOCOR
              </Typography>
              <Typography variant="h6" color="white" className="font-black">
                Legislación y Contratos
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-gray-50 -mt-20 text-xl px-4 pb-20 pt-4">
        <div className="container mx-auto ">
          <Card className=" shadow-gray-500/10 shadow-lg">
            <CardBody className="px-8 text-left row border-bottom">
              <div className="flex">
                <div className="w-1/3">
                  <Typography variant="h2" className="mb-6 font-black text-red">
                    Macrocorpus INMOCOR
                  </Typography>
                </div>
                <div className="w-full text-gray">
                  La presente herramienta pone a disposición el macrocorpus
                  INMOCOR, que contiene, por un lado, un corpus de legislación
                  aplicable a la compraventa inmobiliaria (INMOLAW) y, por otro,
                  un corpus de contratos de compraventa de viviendas (INMOCOR).
                  Con esta herramienta se pueden llevar a cabo búsquedas
                  terminológicas a partir de un gestor de consulta que permite
                  categorizar por lengua y variedad diatópica, a saber, español
                  (variedades de Argentina y España), inglés (de Irlanda, EE.UU.
                  y Reino Unido), alemán, francés, italiano y catalán.
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      <MenuFooterPage />
      <FooterSite />
    </>
  );
}

export default ManagmentInmocor;
