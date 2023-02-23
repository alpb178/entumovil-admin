import React from "react";
import FooterSite from "@/component/footer";

import TopImage from "@/component/topImage";

export default function Publications() {
  return (
    <>
      <TopImage
        name="Publicaciones"
        imageUrl="cabecera-publicaciones-inmocor.jpg"
      />
      <section className="bg-gray-50  bg-legislation-gray px-4 pb-10 pt-2 text-xl text-gray">
        <div className="container mx-auto">
          <div className="w-full text-gray">
            <h4 className="mb-10 mt-16 block text-center font-sans leading-tight tracking-normal">
              A continuación se incluyen algunas de las publicaciones mas
              relevantes derivadas del proyecto:
            </h4>
          </div>
        </div>
      </section>
      <section className="mt-10 mb-20 px-4 text-xl  text-gray ">
        <div className="container mx-auto">
          <div className="item-center content-center">
            <strong>
              <p className="text-4xl font-black text-black">
                Artículos en revistas
              </p>
            </strong>
            <div className="">
              <div className="mt-5 flex sm:block md:block  lg:flex">
                <div className="w-1/2">
                  <p className="mt-10 text-2xl font-black text-black">
                    «Creación de una plantilla de redacción de contratos de
                    compraventa de viviendas: un estudio aplicado a Irlanda»
                  </p>
                  <ul className="ml-10 mt-2 list-disc">
                    <li className="m-2">
                      <strong>Nombre de la revista:</strong> Trasatlantic
                      Studies Network (TNS)
                    </li>
                    <li className="m-2">
                      <strong>Volumen:</strong> 9
                    </li>
                    <li className="m-2">
                      <strong>Página inicial y final del artículo:</strong> 1-12
                    </li>
                    <li className="m-2">
                      <strong>Editorial:</strong> Aula María Zambrano de
                      Estudios Transatlánticos UMA - ATECH y el Grupo de
                      Estudios sobre Comunicación y Sociedad de la Información
                      (E-Com)
                    </li>
                    <li className="m-2">
                      <strong>Año de publicación:</strong> En prensa (aceptado
                      para publicación en vol. 22)
                    </li>
                    <li className="m-2">
                      <strong>ISSN:</strong> 2530-8521 y 2444-9792
                    </li>
                    <li className="m-2">
                      <strong>URL:</strong>
                      <a
                        href="https://transatlanticstudiesnetwork.uma.es/?p=5027"
                        className="text-red"
                      >
                        {" "}
                        https://transatlanticstudiesnetwork.uma.es/?p=5027
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2">
                  <p className="mt-10 text-2xl font-black text-black">
                    «Implementation of a glossary for the translation of housing
                    purchase and sale agreements in Spain, Argentina, the United
                    Kingdom and the United States: a methodology based on
                    corpus»
                  </p>
                  <ul className="ml-10 mt-2 list-disc">
                    <li className="m-2">
                      <strong>Nombre de la revista:</strong> Hermēneus. Revista
                      de Traducción e Interpretación (TNS)
                    </li>
                    <li className="m-2">
                      <strong>Volumen:</strong> 22
                    </li>
                    <li className="m-2">
                      <strong>Editorial:</strong> Universidad de Valladolid{" "}
                    </li>
                    <li className="m-2">
                      <strong>Año de publicación:</strong>2021
                    </li>
                    <li className="m-2">
                      <strong>ISSN:</strong>1139-7489
                    </li>
                    <li className="m-2">
                      <strong>URL:</strong>
                      <a
                        href=" https://revistas.uva.es/index.php/hermeneus/issue/view/317"
                        className="text-red"
                      >
                        {" "}
                        https://revistas.uva.es/index.php/hermeneus/issue/view/317
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-5 flex ">
                <div className="w-1/2">
                  <p className="mt-10 text-2xl font-black text-black">
                    «COMPRAVENTACOR: sitio web para la traducción de contratos
                    de compraventa de viviendas en España, Argentina, Reino
                    Unido y Estados Unidos»
                  </p>
                  <ul className="ml-10 mt-2 list-disc">
                    <li className="m-2">
                      <strong>Nombre de la revista:</strong> HIKMA: Estudios de
                      Traducción
                    </li>
                    <li className="m-2">
                      <strong>Volumen:</strong> 20 (1)
                    </li>
                    <li className="m-2">
                      <strong>Página inicial y final del artículo:</strong> 221
                      - 254
                    </li>
                    <li className="m-2">
                      <strong>Editorial:</strong> Universidad de Córdoba
                    </li>
                    <li className="m-2">
                      <strong>Año de publicación:</strong>2021
                    </li>
                    <li className="m-2">
                      <strong>ISSN:</strong>1139-7489
                    </li>
                    <li className="m-2">
                      <strong>DOI:</strong>
                      <a
                        href="https://doi.org/10.21071/hikma.v20i1.13017"
                        className="text-red"
                      >
                        {" "}
                        https://doi.org/10.21071/hikma.v20i1.13017
                      </a>
                    </li>
                    <li className="m-2">
                      <strong>URL:</strong>
                      <a
                        href="http://www.uco.es/ucopress/ojs/index.php/hikma/article/view/13017/12161"
                        className="text-red"
                      >
                        {" "}
                        http://www.uco.es/ucopress/ojs/index.php/hikma/article/view/13017/12161
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50  mr-24 ml-24 bg-legislation-gray px-4 pb-10 pt-2 text-xl text-gray">
        <div className="container mx-auto">
          <div>
            <div className="item-center content-center">
              <strong>
                <p className="mt-10 text-4xl font-black text-black">Libros</p>
              </strong>
              <div className="">
                <div className="mt-5 flex ">
                  <div>
                    <p className="mt-10 w-full text-2xl font-black text-black">
                      Título del libro: La traducción de contratos de
                      compraventa inmobiliaria: un estudio basado en corpus
                      aplicado a España e Irlanda
                    </p>
                    <p className="mt-2 w-full text-2xl text-black">
                      Clave: Libro
                    </p>
                    <ul className="ml-10 mt-2 list-disc">
                      <li className="m-2">
                        <strong>Colección:</strong> «Studien zur romanischen
                        Sprachwissenschaft und interkulturelleen Kommunikation»
                      </li>
                      <li className="m-2">
                        <strong>Editorial:</strong> Peter Lang
                      </li>
                      <li className="m-2">
                        <strong>País de publicación:</strong> Alemania, Bélgica,
                        EE.UU.
                      </li>
                      <li className="m-2">
                        <strong>Año de publicación:</strong> 2021
                      </li>
                      <li className="m-2">
                        <strong>ISSN:</strong>978-3-631-80131-4
                      </li>
                    </ul>
                    <p className="mt-2 w-full bg-legislation-gray">
                      <strong text-sm>
                        {" "}
                        Esta publicación ha recibido el premio George Campbell
                        de investigación.
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" mb-20 px-4 text-xl  text-gray ">
        <div className="container mx-auto">
          <div className="item-center content-center">
            <strong>
              <p className="mt-10 text-4xl font-black text-black">
                Capítulos de libro
              </p>
            </strong>
            <div className="">
              <div className="mt-5 flex sm:block  md:block  lg:flex">
                <div className="w-1/2">
                  <p className="mt-10 text-2xl  font-black text-black">
                    Título: «Diseño de plantillas de redacción y traducción al
                    inglés (variedades británica y estadounidense) de contratos
                    de compraventa de viviendas basadas en corpus»
                  </p>
                  <h2 className="mt-5  text-gray">
                    Título del libro: La lingüística de corpus aplicada al
                    desarrollo de la competencia tecnológica en los estudios de
                    traducción e interpretación y la enseñanza de segundas
                    lenguas
                  </h2>
                  <h2 className="mt-5 font-black text-black">
                    Clave: Capítulo de libro
                  </h2>
                  <ul className="ml-10 mt-2 list-disc">
                    <li className="m-2">
                      <strong>Editorial:</strong> Peter Lang
                    </li>
                    <li className="m-2">
                      <strong>ISBN:</strong> 978-3-631-74680-6
                    </li>
                    <li className="m-2">
                      <strong>DOI:</strong> 10.3726/b14181
                    </li>
                    <li className="m-2">
                      <strong>Página inicial y página final:</strong> 309-330
                    </li>
                    <li className="m-2">
                      <strong>País de publicación:</strong> Ámsterdam (Holanda)
                    </li>
                    <li className="m-2">
                      <strong>Año de publicación:</strong> 2021
                    </li>
                  </ul>
                </div>
                <div className="w-1/2">
                  <p className="mt-10 text-2xl  font-black text-black">
                    Título: «Creación de plantillas de redacción de contratos de
                    compraventa de viviendas en español: variedades peninsular y
                    argentina»
                  </p>
                  <h2 className="mt-5  text-gray">
                    Título del libro: Formas y variedades tradicionales de la
                    traducción: literaria, jurídico-económica y científica (eds.
                    Juan de Dos Torralbo y Miguel Ángel García Peinado)
                  </h2>
                  <h2 className="mt-5 font-black text-black">
                    Clave: Capítulo de libro
                  </h2>
                  <ul className="border-bottom ml-10 mt-2 list-disc pb-3">
                    <li className="m-2">
                      <strong>Clave:</strong> CL
                    </li>
                    <li className="m-2">
                      <strong>Editorial:</strong> Peter Lang
                    </li>
                    <li className="m-2">
                      <strong>Página inicial y página final:</strong> 99-106
                    </li>
                    <li className="m-2">
                      <strong>País de publicación:</strong> Ámsterdam (Holanda)
                    </li>
                    <li className="m-2">
                      <strong>Año de publicación:</strong> 2022
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-1/2">
                <p className="mt-10 text-2xl  font-black text-black">
                  Título: «LEXCOR: un corpus legislativo de compraventa
                  inmobiliaria como herramienta de traducción»
                </p>
                <h2 className="mt-5  text-gray">
                  Título del libro: Perfiles estratégicos de traductores e
                  intérpretes en la transmisión de la información experta
                  multilingüe en la sociedad del conocimiento del siglo XXI
                  (eds. Susana Álvarez Álvarez y María Teresa Ortego Antón)
                </h2>
                <h2 className="mt-5 font-black text-black">
                  Clave: Capítulo de libro
                </h2>
                <ul className="ml-10 mt-2 list-disc">
                  <li className="m-2">
                    <strong>Clave:</strong> CL
                  </li>
                  <li className="m-2">
                    <strong>Editorial:</strong> Comares
                  </li>
                  <li className="m-2">
                    <strong>ISBN:</strong> 978-84-9045-956-0
                  </li>
                  <li className="m-2">
                    <strong>Página inicial y página final:</strong> 125-142
                  </li>
                  <li className="m-2">
                    <strong>País de publicación:</strong> Granada (España)
                  </li>
                  <li className="m-2">
                    <strong>Año de publicación:</strong> 2021
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50  mr-24 ml-24 bg-legislation-gray px-4 pb-10 pt-2 text-xl text-gray">
        <div className="container mx-auto">
          <div>
            <div className="item-center content-center">
              <strong>
                <p className="mt-10 text-4xl font-black text-black">
                  Tesis doctorales defendidas
                </p>
              </strong>
              <div className="">
                <div className="mt-5 flex ">
                  <div>
                    <ul className="ml-10 mt-2 list-disc">
                      <li className="m-2">
                        <strong>Nombre:</strong> Lorena Arce Romeral
                      </li>
                      <li className="m-2">
                        <strong>Director:</strong> Miriam Seghiri (IP del
                        proyecto)
                      </li>
                      <li className="m-2">
                        <strong>Título:</strong> Análisis, redacción y
                        traducción (inglés-español) de contratos de compraventa
                        de viviendas: un estudio basado en corpus aplicado a
                        España, Argentina, Reino Unido y Estados Unidos
                      </li>
                      <li className="m-2">
                        <strong>Organismo:</strong> Programa de Doctorado en
                        Lingüística, Literatura y Traducción. Departamento de
                        Traducción e Interpretación. Facultad de Filosofía y
                        Letras. Universidad de Málaga
                      </li>
                      <li className="m-2">
                        <strong>Estado:</strong> finalizada
                      </li>
                      <li className="m-2">
                        <strong>Calificación:</strong> Sobresaliente cum laude
                        por unanimidad
                      </li>
                      <li className="m-2">
                        <strong>Mención internacional:</strong> sí
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" mb-20 px-4 text-xl  text-gray ">
        <div className="container mx-auto">
          <div className="item-center content-center">
            <strong>
              <p className="mt-10 text-4xl font-black text-black">Premios</p>
            </strong>
            <div className="">
              <div className="mt-5 flex">
                <div className="w-full">
                  <ul className="ml-10 mt-2 list-disc text-justify">
                    <li className="m-2">
                      <strong>Premio: Premio George Campbell</strong>
                    </li>
                    <li className="m-2">
                      Institución: El Premio George Campbell del Aula María
                      Zambrano de Estudios Transatlánticos de la Universidad de
                      Málaga pretende fomentar la investigación sobre las
                      relaciones bilaterales España-Irlanda. Este premio está
                      destinado a investigadores vinculados a universidades
                      españolas o irlandesas, y los trabajos deberán enfocarse a
                      las relaciones en cualquier ámbito (históricas,
                      culturales, políticas, sociales, económicas, etc.) entre
                      ambos países, en el periodo comprendido desde 1965 hasta
                      la actualidad. La comisión de evaluación del premio está
                      compuesta por Juan Antonio García Galindo, director del
                      AMZET; Magdalena Martín Martínez, subdirectora del AMZET;
                      José Antonio Sierra, asesor de internacional del AMZET y
                      mecenas del Premio; y como representación desde Irlanda,
                      Alfonso Blanco, del University College Dublin; y Katerina
                      García, del Trinity College Dublin.
                    </li>
                    <li className="m-2">Dotación: 1.200 €</li>
                    <li className="m-2">
                      Trabajo premiado: "Generación de plantillas de redacción y
                      traducción (inglés-español) de contratos de compraventa de
                      viviendas: un estudio aplicado a España e Irlanda".
                    </li>
                    <li className="m-2">
                      Premiadas: Lorena Arce y Miriam Seghiri.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSite />
    </>
  );
}
