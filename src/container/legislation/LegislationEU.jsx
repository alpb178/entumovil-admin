import FooterSite from "@/component/footer";
import TopImage from "@/component/topImage";
import styles from "./legislation.module.scss";
import MenuFooterPage from "@/component/menuFooterPage";

export default function LegislationEU() {
  return (
    <>
      <TopImage name={"Legislación Estados Unidos"} imageUrl='cabecera-legislacion-union-europea-inmocor.jpg' />

      <section className="px-4 pt-0 pb-10">
        <div className="container mx-auto">
          <div className="item-center flex">
            <div className="w-1/2  p-2 text-center">
              <img
                alt="Card Image"
                src="/img/louisiana-550x550.jpg"
                height={581}
              />
            </div>
            <div className="ml-10 w-1/2 p-2 text-center">
              <h3 className={styles.h3}>
                Legislación Estados Unidos (Luisiana){" "}
              </h3>
              <p className={styles.p}>
                El derecho de los Estados Unidos se basa en el sistema{" "}
                <em>common law</em>
                (derecho común o anglosajón), que constituye la base para un
                gran número de costumbres y procedentes legales americanos, por
                lo que se caracteriza por la inexistencia de código escritos.
                Sin embargo, el Estado de Luisiana constituye la única
                excepción, pues cuenta con un Código Civil que dimana del
                derecho romano (y más concretamente del derecho francés), del
                que también deriva el ordenamiento jurídico español.
              </p>
              <p className={styles.p}>
                <em>
                  La Constitución de Luisiana{" "}
                  <a
                    href="http://senate.legis.state.la.us/documents/constitution/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (Constitution of Louisiana)
                  </a>
                  regula, de manera general, en el apartado Disposiciones
                  Generales (Part I General Provisions), así como en el artículo
                  23 la adquisición de la propiedad (§23 Acquisition of
                  Property) el contrato de compra y venta como modo de
                  adquisición de la propiedad. Por su parte, el Código Civil de
                  Luisiana{" "}
                  <a
                    href="https://lcco.law.lsu.edu/?uid=1&amp;ver=en#1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (Louisiana Civil Code)
                  </a>
                  contiene regulación general en materia de contratos bajo los
                  siguientes títulos: Title IV Conventional Obligations or
                  Contract (arts. 1903-2291), con referencia a los siguientes
                  capítulos, a saber, Chapter 1 General Capacity and Exceptions
                  (arts. 1918-1926), Chapter 2 Contractual Capacity and
                  Exceptions (arts. 1918-1926), Chapter 3 Consent (arts.
                  1948-1965), Chapter 4 Vices of Consent (art. 1948-1965),
                  Chapter 5 Cause (arts. 1966-1970), Chapter 6 Object and Matter
                  of Contracts (arts. 1971-197), Chapter 7 Third Party
                  Beneficiary (arts. 1971-1977), Chapter 8 Effects of
                  Conventional Obligations (arts. 1983-2012), Chapter 9
                  Dissolution (arts. 2013-2024), Chapter 10 Simulation (arts.
                  2025-2028), Chapter 11 Nullity (arts. 2029-2035) y Chapter 12
                  Revocatory Action and Oblique Action (arts. 2036-2044).
                </em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4  pb-10">
        <div className="container mx-auto">
          <p className={styles.p}>
            Al anterior, se suma Title V Obligations Arising without Agreement
            (arts. 2292-2324.2), así como el Title VII Sale (arts. 2438-2659)
            con los siguientes capítulos de relevancia: Chapter 1 Of the Nature
            and Form of the Contract of Sale (arts. 2438-2446), Chapter 2 Of
            Persons Capable of Buying and Selling (arts. 2447), Chapter 3 Of
            Things Which May be Sold (arts. 2448-2455), Chapter 4 How the
            Contract of Sale is to be Perfected (arts. 2456-2463), Chapter 5 Of
            the Price of the Contract Sale (arts. 2464-2466), Chapter 6 At Whose
            Risk the Thing is, After the Sale is completed (arts. 2467-2473),
            Chapter 7 Of the Obligations of the Seller (arts. 2474-2499),
            Chapter 8 Eviction (arts. 2500-2519), Chapter 9 Eviction (arts.
            2520-2519), Chapter 10 Of the Obligations of the Buyer (arts.
            2549-2566), Chapter 11 Of the Sale with a Right of Redemption (arts.
            2567-2588), Chapter 12 Rescission for Lesion beyond Moiety (arts.
            2589-2641), Chapter 13 Sales of Movables (arts. 2601-2619), Chapter
            14 Agreement Preparatory to the Sale (arts. 2625-2626), Chapter 15
            Assignment of Rights (arts. 2642-2654) y Chapter 16 Of the Giving in
            Payment (arts. 2655-2659).
          </p>
          <p className={styles.p}>
            En materia de contratos de compraventa de vivienda,
            <em> Louisiana State Licensing Board </em>aprobó en al año 2006 el{" "}
            <em>Act 3 141</em>{" "}
            <a
              href="http://www.lslbc.louisiana.gov/wp-content/uploads/New_Home_Warranty_Act.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>New home warranty</em>
            </a>
            . En ese mismo año, por <em>Lousiana Real Estate Commission </em>
            aprobó el <em>Act 333</em> (anexo al{" "}
            <a
              href="https://lrec.gov/wp-content/uploads/Laws/Real-Estate-License-Law-Updated-through-8-2016.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>Louisiana Real Estate License Law</em>
            </a>
            ), en virtud del cual se establece un modelo estandarizado de
            contratos de compraventa de viviendas a fin de agilizar las
            transacciones inmobiliarias.
          </p>
        </div>
      </section>
      <MenuFooterPage />
      <FooterSite />
    </>
  );
}
