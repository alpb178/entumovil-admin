import React from "react";
import {
  Card,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";

import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import styles from "./home.module.scss";
import FooterSite from "@/component/footer";
import NavbarMenu from "@/component/navbars/NavbarMenu";

export function HomeContainer() {
  return (
    <>
      <NavbarMenu />
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/slider1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full  bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="items-right flex flex-wrap text-right">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-black"
              >
                Contratos de compraventa de viviendas
              </Typography>
              <Typography variant="h2" color="black" className="font-black">
                Normativa
              </Typography>
              <Typography variant="h2" color="black" className="mt-5">
                España, Argentina, Estados Unidos, Reino Unido
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <FeatureCard
            key="LEGISLACIÓN APLICABLE A LA COMPRAVENTA DE VIVIENDAS"
            title="INMOCOR"
            description="LEGISLACIÓN APLICABLE A LA COMPRAVENTA DE VIVIENDAS"
          />
        </div>
      </section>

      <FooterSite />
    </>
  );
}

export default HomeContainer;
