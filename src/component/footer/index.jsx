import { InboxIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function FooterSite() {
  return (
    <footer className="relative  ">
      <section className="bg-gradient-to-r from-gradient-for to-gradient-to px-4 text-xl">
        <div className="container mx-auto">
          <div className="item-center flex">
            <div className="m-10  bg-white">
              <div className="flex">
                <div className="m-5 w-1/2  bg-white p-2">
                  <img
                    alt="Card Image"
                    className="w-80"
                    src="/img/inmocor-compraventa-logo.svg"
                  />
                  <div className="content-left mt-5">
                    <p className="text-black-600 mt-15">
                      Compilación de un macrocorpus para la generación de
                      recursos multilingües en el ámbito inmobiliario
                      (español-inglés/francés/italiano) (Proyecto de excelencia
                      PAIDI 2020, ref. P20-109, Junta de Andalucía).
                    </p>
                  </div>
                </div>
                <div className="m-8 w-1/2 ">
                  <p className="mb-6 text-2xl font-black">Contacto</p>

                  <div className="content-left text-gray-600  mt-5 flex">
                    <MapPinIcon className="mr-2 h-10 w-14 text-red" />
                    <div className="text-gray">
                      Campus de Teatinos. Bulevar Louis Pasteur, 27 Facultad
                      Filosofía y Letras (Departamento de Traducción e
                      Interpretación) 29010 Málaga
                    </div>
                  </div>

                  <div className="text-gray-600 mt-5 flex content-center">
                    <InboxIcon className="mr-2 h-5 w-5 text-red" />
                    <p className="text-red">seghiri@uma.es</p>
                  </div>

                  <div className="text-gray-600 mt-5 flex content-center">
                    <PhoneIcon className="mr-2 h-5 w-5 text-red" />
                    <div className="text-gray">952 137 357</div>
                  </div>
                </div>
              </div>
              <div className="content-left font-normal m-5  text-gray ">
                <p>
                  Editado en Málaga por Miriam Seghiri, Míriam Pérez-Carrasco y
                  Lorena Arce Romeral. Esta base de datos está registrada en la
                  Biblioteca Nacional con el ISSN XXXX-XXXX.
                </p>
                <p>
                  El presente trabajo ha sido realizado en el seno del proyecto
                  INMOCOR (Ref. P20-00109).
                </p>
              </div>

              <div className="flex">
                <div className="m-5 w-1/2  bg-white p-2">
                  <img
                    alt="Card Image"
                    className="h-92 w-231"
                    src="/img/logos/junta-andalucia-logo-inmocor-compraventa-inmuebles.jpg"
                  />
                </div>
                <div className="m-5 w-1/2  bg-white p-2">
                  <img
                    alt="Card Image"
                    className="h-92 w-231"
                    src="/img/logos/universidad-malaga-logo-inmocor-compraventa-inmuebles.jpg"
                  />
                </div>
                <div className="m-5 w-1/2  bg-white p-2">
                  <img
                    alt="Card Image"
                    className="h-92 w-231"
                    src="/img/logos/lexytrad-logo-inmocor-compraventa-inmuebles.jpg"
                  />
                </div>
                <div className="m-5 w-1/2  bg-white p-2">
                  <img
                    alt="Card Image"
                    className="h-92 w-231"
                    src="/img/logos/iuitlm-logo-inmocor-compraventa-inmuebles.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=" bg-gradient-to-r from-gradient-for-footer to-gradient-to p-5 text-white">
        <div className="text-md flex px-8">
          <a className="m-2 w-1/2">
            © {new Date().getFullYear()} <a className="text-red">INMOCOR</a>{" "}
            Compraventa de Inmuebles. Todos los derechos reservados.
          </a>
          <div className=" flex-inline flex w-1/2 items-center ">
            <a className="m-2 hover:text-red" href="#">
              Avisos legales
            </a>

            <a className="m-2 hover:text-red" href="#">
              Política de privacidad
            </a>

            <a className="m-2 hover:text-red" href="#">
              Política de cookies
            </a>

            <a className="m-2 hover:text-red" href="#">
              Condiciones de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
