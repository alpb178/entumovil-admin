import FooterSite from "@/component/footer";

import TopImage from "@/component/topImage";

export default function Contacts() {
  return (
    <>
      <TopImage
        name="Equipo y Contacto"
        imageUrl="cabecera-equipo-contacto-inmocor.jpg"
      />
      <section className="mt-10 mb-20 px-4 text-xl  text-gray">
        <div className="container mx-auto">
          <div className="item-center content-center  ">
            <p className="text-4xl font-black text-black">Contacto</p>
            <p className="mt-5">
              Para cualquier consulta diríjanse a la investigadora principal de
              proyecto: <a className="font-black">Miriam Seghiri</a> (
              <a className="text-red">seghiri@uma.es</a>).
            </p>

            <div>
              <p className="mt-10 text-3xl font-black text-black">
                Equipo de investigación (universidades andaluzas)
              </p>
              <div className="mt-5 flex">
                <div className="w-1/2">
                  <p className="mt-10 text-2xl font-black text-black">
                    Universidad de Málaga
                  </p>
                  <ul className="ml-10 mt-2 list-disc">
                    <li className="m-2"> Miriam Seghiri (I.P)</li>
                    <li className="m-2"> M.ª Encarnación Gómez Rojo</li>
                    <li className="m-2"> Manuel Juan Peláez Albendea (I.P)</li>
                    <li className="m-2"> Míriam Pérez Carrasco</li>
                    <li className="m-2"> Gabriel Luque Polo</li>
                  </ul>
                </div>
                <div className="w-1/2">
                  <p className="mt-10 text-2xl font-black text-black">
                    Universidad de Córdoba
                  </p>
                  <ul className="ml-10 mt-2 list-disc">
                    <li className="m-2"> Soledad Díaz Alarcón</li>
                    <li className="m-2"> Isabel Durán Muñoz</li>
                    <li className="m-2"> Aurora Ruiz Mezcua</li>
                    <li className="m-2"> M.ª Azahara Veroz González</li>
                    <li className="m-2"> Pilar Castillo Bernal</li>
                    <li className="m-2"> Beatriz Martínez Ojeda</li>
                  </ul>
                </div>
                <div className="w-1/2">
                  <p className="mt-10 text-4xl font-black text-black">
                    Universidad Pablo de Olavide
                  </p>
                  <ul className="ml-10 mt-2 list-disc">
                    <li className="m-2"> M.ª Pilar Rodríguez Reina</li>
                    <li className="m-2">Francisco Javier Vigier Moreno</li>
                  </ul>
                </div>
              </div>
              <div className="mt-2 flex">
                <div className="w-1/2">
                  <p className="mt-10 text-2xl font-black text-black">
                    Universidad de Cádiz
                  </p>
                  <ul className="ml-10 mt-2 list-disc">
                    <li className="m-2"> María Araceli Losey León</li>
                  </ul>
                </div>
                <div className="w-1/2">
                  <p className="mt-10 text-2xl font-black text-black">
                    Universidad de Granada
                  </p>
                  <ul className="ml-10 mt-2 list-disc">
                    <li className="m-2"> Luis Pablo Núñez</li>
                    <li className="m-2"> Míriam Buendía Castro</li>
                  </ul>
                </div>
                <div className="w-1/2" />
              </div>
            </div>

            <div className="mt-32">
              <p className="text-3xl font-black text-black">Colaboradores</p>
              <div>
                <p className="mt-2 text-2xl text-black">
                  Universidades españolas
                </p>
                <div className="mt-2 flex">
                  <div className="w-1/2">
                    <p className="mt-2 text-2xl font-black text-black">
                      Universitat Autònoma de Barcelona
                    </p>
                    <ul className="ml-10 mt-2 list-disc">
                      <li className="m-2"> Carmen Bestué Salinas</li>
                      <li className="m-2"> Patricia Rodríguez Inés</li>
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <p className="mt-2 text-2xl font-black text-black">
                      Universidad de Alcalá
                    </p>
                    <ul className="ml-10 mt-2 list-disc">
                      <li className="m-2"> Raquel Lázaro Gutiérez</li>
                      <li className="m-2"> Antonio Pareja Lora</li>
                      <li className="m-2"> M.ª del Mar Sánchez Ramosa</li>
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <p className="mt-10 text-2xl font-black text-black">
                      Universidad de Alicante
                    </p>
                    <ul className="ml-10 mt-2 list-disc">
                      <li className="m-2">Daniel Gallego Hernández</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-2 flex">
                  <div className="w-1/2">
                    <p className="mt-2 text-2xl font-black text-black">
                      Universidad de Córdoba
                    </p>
                    <ul className="ml-10 mt-2 list-disc">
                      <li className="m-2"> Valeria Hernández García</li>
                      <li className="m-2"> M.ª Encarnación Gómez Rojo</li>
                      <li className="m-2"> Alicia Izquierdo Izquierdo</li>
                      <li className="m-2"> Eva Lucía Jiménez Navarro</li>
                      <li className="m-2">M.ª Luisa Rodríguez Muñoz</li>
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <p className="mt-2 text-2xl font-black text-black">
                      Universitat Málaga
                    </p>
                    <ul className="ml-2 mt-2 list-disc">
                      <li className="m-2"> José Jesús Benito Picazo</li>
                      <li className="m-2"> Carlos Manuel Hidalgo Ternero</li>
                      <li className="m-2"> Ángela Luque Peñalver</li>
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <p className="mt-2 text-2xl font-black text-black">
                      Universidad de Valladolid
                    </p>
                    <ul className="ml-10 mt-2 list-disc">
                      <li className="m-2"> Lorena Arce Romeral</li>
                      <li className="m-2">Purificación Fernández Nistal</li>
                      <li className="m-2">M.ª Teresa Ortego Antón</li>
                      <li className="m-2">Isabel Peñuelas Gil</li>
                      <li className="m-2">Jaime Sánchez Peñicer</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-2 flex">
                  <div className="w-1/2">
                    <p className="mt-2 text-2xl font-black text-black">
                      Universidad Internacional de Valencia
                    </p>
                    <ul className="ml-10 mt-2 list-disc">
                      <li className="m-2"> M.ª Carmen Cedillo Corrochano</li>
                    </ul>
                  </div>
                  <div className="w-1/2" />

                  <div className="w-1/2" />
                </div>
              </div>

              <div>
                <p className="mt-2 text-2xl text-black">
                  Universidades extranjeras
                </p>
                <div className="mt-2 flex">
                  <div className="w-1/2">
                    <p className="mt-2 text-2xl font-black text-black">
                      Universitè d'Artois (Francia)
                    </p>
                    <ul className="ml-10 mt-2 list-disc">
                      <li className="m-2"> Luis Meneses</li>
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <p className="mt-2 text-2xl font-black text-black">
                      Universidad de Buenos Aires (Argentina)
                    </p>
                    <ul className="ml-10 mt-2 list-disc">
                      <li className="m-2"> Beatriz Rodríguez</li>
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <p className="mt-10 text-2xl font-black text-black">
                      Universidad Nacional de Mar de Plata (Argentina)
                    </p>
                    <ul className="ml-10 mt-2 list-disc">
                      <li className="m-2">Pedro Luchini</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-2 flex">
                  <div className="w-1/2">
                    <p className="mt-2 text-2xl font-black text-black">
                      Università di Verona (Italia)
                    </p>
                    <ul className="ml-10 mt-2 list-disc">
                      <li className="m-2"> Matteo De Beni</li>
                      <li className="m-2"> Dunia Hourani Martín</li>
                      <li className="m-2"> Elisa Sartor</li>
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <p className="mt-2 text-2xl font-black text-black">
                      University of Wolverhampton (Reino Unido)
                    </p>
                    <ul className="ml-2 mt-2 list-disc">
                      <li className="m-2"> Ruslan Mitkov</li>
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <p className="mt-2 text-2xl font-black text-black">
                      University of Cape Town (Sudáfrica)
                    </p>
                    <ul className="ml-10 mt-2 list-disc">
                      <li className="m-2"> María Recuenco Peñalver</li>
                    </ul>
                  </div>
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
