import FooterSite from "@/component/footer";
import TopImage from "@/component/topImage";
import { Typography } from "@material-tailwind/react";
import MenuFooterPage from "@/component/menuFooterPage";

export default function LegislationUE() {
  return (
    <>
      <TopImage
        name="Legislación en la Unión Europea"
        imageUrl="cabecera-legislacion-union-europea-inmocor.jpg"
      />

      <section className="mt-10 px-4 mb-20 text-xl text-gray">
        <div className="container mx-auto">
          <div className="item-center content-center text-gray ">
            <Typography variant="h1" className="mb-6 text-red">
              Normativa de Compraventa Inmobiliaria en el Ordenamiento Jurídico
              de la UE
            </Typography>
            <p>
              El ordenamiento jurídico de la Unión Europea, en materia de
              contratos internacionales, se apoya, con carácter general, en dos
              reglamentos, saber,
              <a className="font-black text-red">
                Reglamento (CE) n.º 44/2001 del Consejo, de 22 de diciembre del
                2002, relativo a la competencia judicial, el reconocimiento y la
                ejecución de resoluciones judiciales en materia civil y
                mercantil
              </a>{" "}
              (conocido como Bruselas I) y{" "}
              <a className="font-black text-red">
                Reglamento (CE) n.º 593/2008 del Parlamento Europeo y del
                Consejo de 17 de junio de 2008 sobre la ley aplicable a las
                obligaciones contractuales
              </a>{" "}
              (Roma I). Asimismo, en aras a la creación de una «Comunidad de
              Derecho» con una base jurídica armonizada y estable, tanto desde
              el punto de vista legislativo como terminológico, en cumplimiento
              del Tratado de Lisboa (2007) que modifica el Tratado Constitutivo
              de la Unión, se han aprobado las siguientes directivas:
            </p>
            <p className="m-10">
              <a className="font-black text-red">Directiva 94/47/CE</a> del
              Parlamento Europeo y del Consejo, de 26 de octubre de 1994,
              relativa a la protección de los adquirientes en lo relativo a
              determinados aspectos de los contratos.
            </p>
            <p className="m-10">
              <a className="font-black text-red">Directiva 2011/83/UE</a> del
              Parlamento Europeo y del Consejo de, 25 de octubre de 2011, sobre
              los derechos de los consumidores, por la que se modifican la
              <a className=" text-red"> Directiva 93/13/CEE</a> del Consejo, de
              5 de abril de 1993, sobre las cláusulas abusivas en los contratos
              celebrados con consumidores y
              <a className=" text-red">Directiva 1999/44/CE</a> del Parlamento
              Europeo y del Consejo, de 25 de mayo de 1999, sobre determinados
              aspectos de la venta y las garantías de los bienes de consumo y se
              derogan la <a className=" text-red">Directiva 85/577/CEE</a> del
              Consejo, de 20 de diciembre de 1985, referente a la protección de
              los consumidores en el caso de contratos negociados fuera de los
              establecimientos comerciales y la
              <a className=" text-red">Directiva 97/7/CE</a>
              del Parlamento Europeo y del Consejo de 20 de mayo de 1997,
              relativa a la protección de los consumidores en materia de
              contratos a distancia.
            </p>
            <p className="m-10">
              <a className="font-black text-red ">Directiva 2014/55/UE</a> del
              Parlamento Europeo y del Consejo, de 16 de abril de 2014, relativa
              a la facturación electrónica en la contratación pública.
            </p>
            <p>
              Asimismo, de manera más general, cabe poner de relieve la
              importancia de los <a className="italic">Principios UNIDROIT</a>{" "}
              sobre los contratos comerciales internacionales y los{" "}
              <a className="italic">
                Principios Europeos del Derecho de Contratos
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <MenuFooterPage />
      <FooterSite />
    </>
  );
}
