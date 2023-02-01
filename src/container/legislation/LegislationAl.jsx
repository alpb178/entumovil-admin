import FooterSite from "@/component/footer";
import MenuFooterPage from "@/component/menuFooterPage";
import TopImage from "@/component/topImage";
import { Typography } from "@material-tailwind/react";
export default function LegislationAL() {
  return (
    <>
      <TopImage
        name="Legislación en Alemania"
        imageUrl="cabecera-legislacion-alemania-inmocor.jpg"
      />
      <section className="mt-10 mb-20 px-4">
        <div className="container mx-auto">
          <div className="item-center content-center text-gray ">
            <Typography variant="h1" className="mb-6 text-red">
              Normativa de Compraventa Inmobiliaria en el Ordenamiento Jurídico
              de Alemania
            </Typography>
            <p>
              La norma fundamental que regula los contratos de compraventa
              inmobiliaria en Alemania es el Código Civil (Bürgerliches
              Gesetzbuch, BGB), concretamente el § 311b Verträge über
              Grundstücke, das Vermögen und den Nachlass (contratos relativos a
              bienes inmuebles, patrimonio y herencia). Los artículos § 116–157
              BGB contienen disposiciones de carácter general sobre la
              conclusión de contratos, nulidad, impugnación, vicios de
              consentimiento, error, engaño doloso y condiciones. En los
              artículos 305–359 BGB se exponen disposiciones específicas sobre
              obligaciones contractuales, especialmente en los contratos
              recíprocos.
            </p>
            <p className="mt-5">
              Otros artículos del BGB son aplicables, así como las disposiciones
              específicas para contratos de derecho mercantil en el Código
              Mercantil (Handelsgesetzbuch, HGB).
            </p>
          </div>
        </div>
      </section>
      <MenuFooterPage />
      <FooterSite />
    </>
  );
}
