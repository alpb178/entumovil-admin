import React, { useState } from "react";
import { Card, CardBody } from "@material-tailwind/react";

import FooterSite from "@/component/footer";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import TopImage from "@/component/topImage";
import ViewPDf from "@/component/pdf";
import ViewTXT from "@/component/pdf/text";

export function ManagmentInmocor() {
  const [openFind, setOpenFind] = useState(false);
  const [documentTxt, setDocumentTxt] = useState("");
  const [radio, setRadio] = useState("Macrocorpus-INMOCOR");
  const [valueSelect, setValueSelect] = useState([]);
  const [findText, setFindText] = useState("");
  const [disabledSelectInmolaw, setDisabledSelectInmolaw] = useState(true);
  const [disabledSelectCorpus, setDisabledSelectCorpus] = useState(true);

  const handleClickRadio = () => {
    setOpenFind(false);
    setRadio("Macrocorpus-INMOCOR");

    setDisabledSelectCorpus(true);
    setDisabledSelectInmolaw(true);
    setValueSelect([]);
  };

  const handleClickRadioCorpus = () => {
    setOpenFind(false);
    setRadio("corpus");
    setDisabledSelectCorpus(false);
    setDisabledSelectInmolaw(true);
    setValueSelect([]);
  };

  const handleClickRadioInmolaw = () => {
    setOpenFind(false);
    setRadio("legislation");
    setDisabledSelectInmolaw(false);
    setDisabledSelectCorpus(true);
    setValueSelect([]);
  };

  const handleClickFind = () => {
    setOpenFind(true);
    var selected = [];
    var id =
      radio === "corpus"
        ? "CorpusFormControlSelect"
        : "InmolawFormControlSelect";
    for (var option of document.getElementById(id).options) {
      if (option.selected) {
        selected.push(radio + "/" + option.value);
      }
      setValueSelect(selected);
    }
  };

  return (
    <>
      <TopImage
        name="Macrocorpus INMOCOR"
        description="Legislación y Contratos"
        imageUrl="cabecera-legislacion-generalidades-inmocor.jpg"
      />
      <section className="bg-gray-50 -mt-14 px-4 pb-20 pt-4 text-xl">
        {documentTxt === "" ? (
          <div className="container mx-auto ">
            <Card className="shadow-gray-500/10 rounded-none shadow-lg">
              <CardBody className="px-8 text-left">
                <div className="m-5">
                  <div className="flex sm:block md:block  lg:flex">
                    <div className="w-1/3">
                      <p
                        variant="h2"
                        className="m-5 mb-6 text-5xl font-black text-red"
                      >
                        Macrocorpus INMOCOR
                      </p>
                    </div>
                    <div className="m-5 w-full text-gray">
                      La presente herramienta pone a disposición el macrocorpus
                      INMOCOR, que contiene, por un lado, un corpus de
                      legislación aplicable a la compraventa inmobiliaria
                      (INMOLAW) y, por otro, un corpus de contratos de
                      compraventa de viviendas (INMOCOR). Con esta herramienta
                      se pueden llevar a cabo búsquedas terminológicas a partir
                      de un gestor de consulta que permite categorizar por
                      lengua y variedad diatópica, a saber, español (variedades
                      de Argentina y España), inglés (de Irlanda, EE.UU. y Reino
                      Unido), alemán, francés, italiano y catalán.
                    </div>
                  </div>
                  <div className="mt-28 text-ocre-red">
                    Para empezar, defina su búsqueda
                  </div>
                  <div className="from-group mt-5">
                    <div className="text-base">Su búsqueda</div>
                    <div className="mt-2">
                      <input
                        id="searc-term"
                        className="form-control w-full bg-legislation-gray p-4"
                        placeholder="Introduzca los términos de búsqueda..."
                        onChange={(e) => setFindText(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  <div className="mt-10 text-ocre-red">
                    Y a continuación, seleccione el/los corpus/subcorpus de su
                    interés:
                  </div>
                </div>
                <div className="m-5 mb-4 mt-5 flex items-center">
                  <input
                    id="radio-macrocorpus-inmocor"
                    type="radio"
                    defaultChecked
                    onClick={() => handleClickRadio()}
                    name="default-radio"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  ></input>
                  <p
                    variant="h4"
                    className="m-2 mb-6 mt-6 text-2xl font-black text-ocre-red"
                  >
                    Macrocorpus INMOCOR
                  </p>
                </div>
                <p className="m-7">
                  Realiza búsquedas en todos los textos, legislación y
                  contratos, en todas las lenguas.
                </p>
                <div className="mb-10 flex sm:block md:block lg:flex">
                  <div className="m-5 w-1/2 md:w-full">
                    <div className="mb-4 mt-5 flex items-center">
                      <input
                        id="radio-corpus-INMOLAW"
                        type="radio"
                        onClick={() => handleClickRadioInmolaw("legislation")}
                        name="default-radio"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      ></input>
                      <p
                        variant="h4"
                        className="m-2 mb-6 mt-6 text-2xl font-black text-ocre-red"
                      >
                        CORPUS DE LEGISLACIÓN INMOLAW
                      </p>
                    </div>

                    <div className="mb-10 ">
                      Corpus de Legislación aplicable a la Compraventa
                      Inmobiliaria*
                    </div>
                    <div className="overflow-auto shadow-none">
                      <select
                        multiple={true}
                        className="form-control mb-2 bg-legislation-gray px-5 py-4 shadow-none"
                        id="InmolawFormControlSelect"
                        disabled={disabledSelectInmolaw}
                      >
                        <option key="UE" value="UE">
                          Subcorpus INMOLAW comunitario Unión Europea
                        </option>
                        <option key="ES" value="ES">
                          Subcorpus INMOLAW en español (variedad peninsular)
                        </option>
                        <option key="ARG" value="ARG">
                          Subcorpus INMOLAW en español (variedad argentina)
                        </option>
                        <option key="BR" value="BR">
                          Subcorpus INMOLAW en inglés (variedad británica)
                        </option>
                        <option key="EEUU" value="EEUU">
                          Subcorpus INMOLAW en inglés (variedad estadounidense)
                        </option>
                        <option key="IR" value="IR">
                          Subcorpus INMOLAW en inglés (variedad irlandesa)
                        </option>
                        <option key="FR" value="FR">
                          Subcorpus INMOLAW en francés
                        </option>
                        <option key="IT" value="IT">
                          Subcorpus INMOLAW en italiano
                        </option>
                        <option key="DE" value="DE">
                          Subcorpus INMOLAW en alemán
                        </option>
                        <option key="CA" value="CA">
                          Subcorpus INMOLAW en catalán
                        </option>
                      </select>
                      <p className="mt-5 text-justify">
                        Permite buscar, en todos los subcorpus de{" "}
                        <strong>INMOLAW</strong>, legislación en todas las
                        lenguas. Puede seleccionar más de un subcorpus pulsando
                        Crtl (Windows) o Cmd (MacOS).
                      </p>
                    </div>
                  </div>
                  <div className="m-5 w-1/2 md:w-full">
                    <div className="mb-4 mt-5 flex items-center">
                      <input
                        id="radio-corpus-contratacion"
                        type="radio"
                        onClick={() => handleClickRadioCorpus()}
                        name="default-radio"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      ></input>
                      <p
                        variant="h4"
                        className="m-2 mb-6 mt-6 text-2xl font-black text-ocre-red"
                      >
                        CORPUS DE CONTRATACIÓN INMOCOR
                      </p>
                    </div>

                    <div className="mb-10 ">
                      Corpus de Contratos de Compraventa Inmobiliaria*
                    </div>
                    <div className="overflow-auto shadow-none">
                      <select
                        multiple
                        className="form-control mb-2 bg-legislation-gray px-5 py-4 shadow-none"
                        id="CorpusFormControlSelect"
                        disabled={disabledSelectCorpus}
                      >
                        <option key="ES" value="ES">
                          Subcorpus INMOCOR en español (variedad peninsular)
                        </option>
                        <option key="ARG" value="ARG">
                          Subcorpus INMOCOR en español (variedad argentina)
                        </option>
                        <option key="BR" value="BR">
                          Subcorpus INMOCOR en inglés (variedad británica)
                        </option>
                        <option key="EEUU" value="EEUU">
                          Subcorpus INMOCOR en inglés (variedad estadounidense)
                        </option>
                        <option key="IR" value="IR">
                          Subcorpus INMOCOR en inglés (variedad irlandesa)
                        </option>
                        <option key="FR" value="FR">
                          Subcorpus INMOCOR en francés
                        </option>
                        <option key="IT" value="IT">
                          Subcorpus INMOCOR en italiano
                        </option>
                        <option key="DE" value="DE">
                          Subcorpus INMOCOR en alemán
                        </option>
                        <option key="CA" value="CA">
                          Subcorpus INMOCOR en catalán
                        </option>
                      </select>
                      <p className="mt-5 text-justify">
                        Permite buscar, en todos los subcorpus de{" "}
                        <strong>INMOCOR</strong>, contratos en todas las
                        lenguas. Puede seleccionar más de un subcorpus pulsando
                        Crtl (Windows) o Cmd (MacOS).
                      </p>
                    </div>
                  </div>
                </div>
                <p className="m-5 flex w-full">
                  Si lo desea, puede seleccionar dos o más subcorpus de ambos
                  bloques. Por ejemplo, puede que se pueda marcar "Subcorpus
                  INMOCOR en italiano" y "Subcorpus INMOLAW en italiano"
                </p>
                <button
                  className="flex-inline m-5 mt-5 flex rounded bg-gradient-to-r from-gradient-for-footer to-gradient-to py-2 px-4 font-bold text-white"
                  onClick={() => handleClickFind()}
                >
                  Buscar
                  <ArrowRightIcon className="mt flex-inline ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
                </button>
                {openFind && (
                  <div>
                    <ViewPDf
                      radio={radio}
                      valueSelect={valueSelect}
                      findText={findText}
                      setDocumentTxt={setDocumentTxt}
                    />
                  </div>
                )}
              </CardBody>
            </Card>
          </div>
        ) : (
          <div className="container mx-auto ">
            <Card className="shadow-gray-500/10 rounded-none shadow-lg">
              <CardBody className="px-8 text-left">
                <div className="flex">
                  <button
                    onClick={() => setDocumentTxt("")}
                    className="mr-auto hover:text-red"
                  >
                    Ir Atrás ...
                  </button>
                </div>

                <ViewTXT textDoc={documentTxt}  findText={findText}/>
              </CardBody>
            </Card>
          </div>
        )}
      </section>

      <FooterSite />
    </>
  );
}

export default ManagmentInmocor;
