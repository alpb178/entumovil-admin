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
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Contratos de compraventa de viviendas
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Normativa
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
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
            title="LEGISLACIÓN APLICABLE A LA COMPRAVENTA DE VIVIENDAS"
            description="LEGISLACIÓN APLICABLE A LA COMPRAVENTA DE VIVIENDAS"
          />
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pt-20 pb-10">
        <div className="container mx-auto">
          <div className="item-center flex">
            <div class="w-1/2  p-2 text-center">
              {" "}
              <h5 className={styles.h5}>
                DEMANDA DE REDACCIÓN Y TRADUCCIÓN DE CONTRATOS DE COMPRAVENTA DE
                VIVIENDAS EN ESPAÑA, ARGENTINA, REINO UNIDO Y ESTADOS UNIDOS{" "}
              </h5>
              <p className={styles.p}>
                Según la<em> Organización Mundial del Turismo </em>(OMT),{" "}
                <strong>España</strong> es el segundo destino turístico en el
                2019 (con 82,7 millones de turistas, lo que ha supuesto un
                récord histórico), seguido de <strong>Estados Unidos</strong> y
                con <strong>Reino Unido</strong> en novena posición. Por
                nacionalidades, son los visitantes<strong> británicos</strong>{" "}
                los más frecuentes en nuestro país con los estadounidenses en la
                séptima posición, de acuerdo a los datos aportados por{" "}
                <em>Statista</em> (2019); muchos de los cuales deciden
                establecerse en el país. Así lo refleja el{" "}
                <em>Instituto Nacional de Estadística</em>
                (INE), que cifra en 234, 1 % el aumento, en los últimos diez
                años, de la población extranjera en España. El mencionado
                aumento de población foránea conlleva un crecimiento del mercado
                inmobiliario, tanto para aquellos turistas que desean adquirir
                su propia vivienda durante su periodo vacacional como para los
                que optan por España como país donde establecer su segunda
                residencia. De esta forma, de acuerdo a <em>El País</em>
                (2020), «La compra de vivienda por parte de extranjeros se
                multiplica casi por tres desde la crisis de 2008 […]». En
                concreto, según los datos del Banco de España (2020), el
                comprador <strong>británico</strong> sigue siendo el más activo.
                También es destacable el aumento en de los compradores de{" "}
                <strong>Argentina</strong> (12,7 %) y{" "}
                <strong>Estados Unidos</strong> (11,3 %), según datos del{" "}
                <em>Consejo General del Notariado</em> (2019). Por su parte,
                según <em>Statista</em> (2019), los norteamericanos son los
                turistas más activos en <strong>Reino Unido</strong>, ocupando{" "}
                <strong>España</strong> la quinta posición en este ranking.
                España también ocupa el quinto lugar y{" "}
                <strong>Reino Unido</strong> encabeza la lista en cuanto a
                número de turistas que visitan
                <strong> Estados Unidos</strong> (<em>Hosteltur</em>). En el
                caso español, las favorables condiciones laborales (
                <em>Organización Internacional para las Migraciones</em>, OIM)
                deciden adquirir su propia vivienda e instalarse allí. En este
                sentido, según datos del INE, el número de españoles residentes
                en el exterior sigue creciendo; por países destaca (datos del
                año 2019): <strong>Argentina</strong> con 473 519 residentes
                españoles; <strong>Estados Unidos</strong> con 167 426 y{" "}
                <strong>Reino</strong> <strong>Unido</strong>
                con 152 291. A ello se unen, el desembolso realizado por las
                empresas españolas en el extranjero, especialmente, en los
                sectores de las construcciones y las actividades inmobiliarias
                en Argentina. Por otro lado, según el{" "}
                <em>Instituto Español de Comercio Exterior</em> (ICEX) en 2018,
                el <em>stock</em> de inversión acumulado de{" "}
                <strong>España</strong> en <strong>Argentina</strong> fue de 5
                800 millones de euros, monto solo superado por las inversiones{" "}
                <strong>estadounidenses</strong> en el país. En particular, uno
                de los pilares fundamentales de la economía española en
                Argentina es, según <em>El Mundo</em>, la construcción.
              </p>
            </div>
            <div class="w-1/2  p-2 text-center">
              <img
                alt="Card Image"
                src="/img/trajutec.jpg"
                className="mt-20"
                height={581}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-20 pb-10">
        <div className="container mx-auto">
          <p className={styles.p}>
            Estas tendencias en el sector turístico, junto con el aumento de la
            población extranjera en los países mencionados, evidencian todo un
            negocio de compraventa de viviendas, tanto a nivel{" "}
            <strong>nacional</strong> como <strong>internacional</strong>;
            lo&nbsp;que genera una creciente
            <strong>
              {" "}
              demanda de traducción y redacción de contratos de compraventa de
              viviendas
            </strong>
            en español (variedades peninsular y argentina) e inglés (variedades
            británica y americana). Así, surge el principal objetivo de este
            trabajo, a saber, facilitar los procesos relacionados con la
            traducción de los contratos involucrados en transacciones de
            compraventa de viviendas entre <strong>España</strong>,{" "}
            <strong>Argentina</strong>, <strong>Reino Unido</strong>{" "}
            (concretamente, nos centraremos en{" "}
            <strong>Inglaterra y Gales</strong>) y <strong>Estados</strong>{" "}
            <strong>Unidos</strong> (para el caso concreto del Estado de{" "}
            <strong>Luisiana</strong>).
          </p>
          <p className={styles.p}>
            Este crecimiento del mercado de la compraventa de viviendas hace que
            los profesionales del sector tengan que contar con una formación
            específica en las tres áreas involucradas en las transacciones de
            carácter internacional, a saber, <strong>Traducción</strong> (en los
            pares de lenguas inglés-español), en <strong>Derecho</strong>{" "}
            (conocimiento de las normativas: española argentina, británica y
            estadounidense) y, por supuesto, en <strong>Tecnología</strong>
            (concretamente en TICs, que harán rentabilizar el tiempo de los
            profesionales involucrados). Así surge el objetivo trasversal y
            multidisciplinar del presente trabajo, a saber, desarrollar
            herramientas que semiautomaticen las negociaciones de compraventa de
            viviendas. Esta hipótesis se fundamentó no solo en la cada vez mayor
            demanda de redacción y traducción (inglés-español/español-inglés) de
            este tipo de documentos jurídicos, sino también en la dificultad,
            tiempo, costes e, incluso, intermediarios, que entraña dicha tarea;
            lo que hará aumentar las ganancias y productividad del usuario que
            las utilice.
          </p>
          <p className={styles.p}>
            Con esta idea en mente surge el desarrollo del proyecto{" "}
            <strong>COMPRAVENTACOR,&nbsp;</strong>que hará aumentar las
            ganancias y productividad para el usuario que las utilice. Asimismo
            y, gracias a su gratuidad, podrá ser de aplicación directa para la
            investigación y la enseñanza.
          </p>
          <hr />
          <p className={styles.p}>
            <strong>
              La metodología de investigación expuesta en esta plataforma ha
              recibido el Premio George Campbell del Aula María Zambrano de
              Estudios Transatlánticos de la Universidad de Málaga (2019).
            </strong>
          </p>
        </div>
      </section>

      <FooterSite />
    </>
  );
}

export default HomeContainer;
