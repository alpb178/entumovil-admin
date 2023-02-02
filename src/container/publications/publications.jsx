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

export default function Publications() {
  return (
    <>
      <div className="relative flex h-96 content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/bg/cabecera-publicaciones-inmocor.jpg')] bg-cover bg-center" />
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
                Publicaciones
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-gray-50  bg-legislation-gray px-4 pb-20 pt-2 text-xl text-gray">
        <div className="container mx-auto">
          <div className="w-full text-gray">
            <h4 className="mb-10 mt-16 block font-sans leading-tight tracking-normal text-center">
            A continuación se incluyen algunas de las publicaciones mas relevantes derivadas del proyecto:
            </h4>
          </div>
        </div>
      </section>

      <MenuFooterPage />
      <FooterSite />
    </>
  );
}
