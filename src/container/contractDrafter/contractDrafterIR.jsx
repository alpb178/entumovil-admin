import TopImage from "@/component/topImage";
import { stateForm } from "@/lib/drafter";
import { saveTXT, saveWord } from "@/lib/utils";
import { useState } from "react";
export default function ContractDrafterIR() {
  const [json, setJson] = useState(stateForm);
  const handleChangeV2 = (value, field) => {
    const newState = { ...json, [field]: value };
    setJson(newState);
  };
  return (
    <div className="text-xl md:w-full">
      <TopImage
        name="Redactor de Documentos"
        description="Plantilla IRLANDA"
        imageUrl="cabecera-contratos-inmocor.jpg"
      />
      <form
        id="myform"
        className="m-16 mx-auto mt-5 w-full  text-xl  text-gray"
        onSubmit={(e) => {
          event.preventDefault();
          const buttonName = e.nativeEvent.submitter.name;
          if (buttonName === "Word") {
            saveWord("IRLANDA", "content", json),
              document.getElementById("myform").reset();
          }
          if (buttonName === "TXT") {
            saveTXT("IRLANDA", "content", json),
              document.getElementById("myform").reset();
          }
        }}
      >
        <div id="content" className="m-40">
          <div className="text-center">
            WARNING: IT IS RECOMMENDED THAT THE WITHIN SHOULD NOT BE COMPLETED
            WITHOUT PRIOR LEGAL ADVICE
          </div>
          <div className="mt-40 text-center text-2xl underline">
            CONDITIONS OF SALE 2019 EDITION
          </div>
          <div className="mt-40">PARTICULARS and CONDITIONS OF SALE of</div>
          <input
            id="1"
            name="input1"
            type="text"
            onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
            className="border-gray-400 mt-5 ml-1 mr-1 w-full border-b-2 outline-none focus:border-blue-400"
          ></input>
          <div className="mt-20 font-black">*SALE BY PRIVATE TREATY</div>
          <div className="mt-5 font-black">*SALE BY AUCTION</div>
          <div className="flex">
            <p className="mt-10">to be held at:</p>
            <input
              id="2"
              name="input2"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400 mt-5 ml-1 mr-1 w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
          </div>
          <p>
            on the{" "}
            <input
              id="3"
              name="input3"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400 mt-5 ml-1 mr-1 w-20 border-b-2 outline-none focus:border-blue-400"
            ></input>{" "}
            day of{" "}
            <input
              id="4"
              name="input4"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400 mt-5 ml-1 mr-1 w-40 border-b-2 outline-none focus:border-blue-400"
            ></input>{" "}
            , 20{" "}
            <input
              id="5"
              name="input5"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400 mt-5 ml-1 mr-1 w-20 border-b-2 outline-none focus:border-blue-400"
            ></input>{" "}
            at{" "}
            <input
              id="6"
              name="input6"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400 mt-5 ml-1 mr-1 w-20 border-b-2 outline-none focus:border-blue-400"
            ></input>{" "}
            o’clock.
          </p>
          <div className="mt-5 mr-0 flex w-full">
            <p className=" mt-2 font-black">*AUCTIONEER:</p>
            <input
              id="7"
              name="input7"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
          </div>
          <div className="mt-5 mr-0 flex w-full">
            <p className=" mt-2 font-black">*ADDRESS:</p>
            <input
              id="8"
              name="input8"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
          </div>
          <div className="mt-40 mr-0 flex w-full">
            <p className=" mt-2 font-black">VENDOR:</p>
            <input
              id="9"
              name="input9"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
          </div>
          <div className="mt-5 mr-0 flex w-full">
            <p className=" mt-2 font-black">VENDOR’S SOLICITOR:</p>
            <input
              id="10"
              name="input10"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
          </div>
          <div className="mt-5 mr-0 flex w-full">
            <p className=" mt-2 font-black">ADDRESS:</p>
            <input
              id="11"
              name="input11"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
          </div>
          <div className="mt-5 mr-0 flex w-full">
            <p className=" mt-2 font-black">REFERENCE:</p>
            <input
              id="12"
              name="input12"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
          </div>
          <div className="mt-20 font-black">SPOUSAL*/CIVIL PARTNER CONSENT</div>
          <p className="mt-10">
            I,{" "}
            <input
              id="13"
              name="input13"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-40 border-b-2 outline-none focus:border-blue-400"
            ></input>{" "}
            being the spouse of the under-named Vendor hereby, for the purposes
            of Section 3 of the Family Home Protection Act 1976,* / being the
            civil partner of the under-named Vendor hereby, for the purposes of
            Section 28 of the Civil Partnership and Certain Rights and
            Obligations of Cohabitants Act 2010, consent to the proposed sale of
            the Subject Property described in the within Particulars at the
            price mentioned below.
          </p>
          <p className="mt-10">
            Signed by the said spouse*/ civil partner
            ______________________________________________________________________
          </p>
          <p className="mt-10">
            in the presence of:
            ____________________________________________________________________________________________
          </p>
          <p className="mt-10">
            MEMORANDUM OF AGREEMENT made this{" "}
            <input
              id="7"
              name="input7"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400 mt-5 ml-1 mr-1 w-20 border-b-2 outline-none focus:border-blue-400"
            ></input>{" "}
            day of{" "}
            <input
              id="8"
              name="input8"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400 mt-5 ml-1 mr-1 w-20 border-b-2 outline-none focus:border-blue-400"
            ></input>{" "}
            20
            <input
              id="8"
              name="input8"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400 mt-5 ml-1 mr-1 w-20 border-b-2 outline-none focus:border-blue-400"
            ></input>{" "}
            Between{" "}
            <input
              id="9"
              name="input9"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400 mt-5 ml-1 mr-1 w-80 border-b-2 outline-none focus:border-blue-400"
            ></input>{" "}
            of{" "}
            <input
              id="10"
              name="input10"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400 mt-5 ml-1 mr-1 w-80 border-b-2 outline-none focus:border-blue-400"
            ></input>{" "}
          </p>
          <div className="mt-10 flex w-1/2 space-x-80">
            <div>
              <div className="mt-10 flex">
                <p className="w-28">Tax number:</p>
                <input
                  id="14"
                  name="input14"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400  ml-5 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="15"
                  name="input15"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="16"
                  name="input16"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="17"
                  name="input17"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="18"
                  name="input18"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="19"
                  name="input19"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="20"
                  name="input20"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="21"
                  name="input21"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="22"
                  name="input22"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
              </div>
              <div className="mt-2 flex">
                <p className=" mt-2 w-28">Tax type</p>
                <input
                  id="23"
                  name="input23"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
                ></input>
              </div>
            </div>
            <div>
              <div className="mt-10 flex">
                <p className="w-28">Tax number:</p>
                <input
                  id="24"
                  name="input24"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400  ml-5 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="25"
                  name="input25"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="26"
                  name="input26"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="27"
                  name="input27"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="28"
                  name="input28"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="29"
                  name="input29"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="30"
                  name="input30"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="31"
                  name="input31"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="32"
                  name="input32"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
              </div>
              <div className="mt-2 flex">
                <p className=" mt-2 w-28">Tax type</p>
                <input
                  id="33"
                  name="input33"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
                ></input>
              </div>
              <p className="mt-10 ml-80">(“Vendor”)</p>
            </div>
          </div>

          <div className="mt-5 flex">
            <p className="mt-2 flex w-1/2">
              Nominated Email Address of Vendor’s solicitor
            </p>
            <input
              id="34"
              name="input34"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-80  w-1/2 border-b-2 outline-none focus:border-blue-400"
            ></input>
          </div>
          <div className="mt-10 flex">
            <p className="mt-2 flex">And</p>
            <input
              id="35"
              name="input35"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-80  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
          </div>
          <div className="mt-2 flex">
            <p className="mt-2 flex">of</p>
            <input
              id="36"
              name="input36"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-80  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
          </div>
          <div className="mt-10 flex w-1/2 space-x-80">
            <div>
              <div className="mt-10 flex">
                <p className="w-28">Tax number:</p>
                <input
                  id="37"
                  name="input38"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400  ml-5 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="39"
                  name="input39"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="40"
                  name="input40"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="41"
                  name="input41"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="42"
                  name="input42"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="43"
                  name="input43"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="44"
                  name="input44"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="45"
                  name="input45"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="46"
                  name="input46"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
              </div>
              <div className="mt-2 flex">
                <p className=" mt-2 w-28">Tax type</p>
                <input
                  id="47"
                  name="input48"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
                ></input>
              </div>
            </div>
            <div>
              <div className="mt-10 flex">
                <p className="w-28">Tax number:</p>
                <input
                  id="49"
                  name="input49"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400  ml-5 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="50"
                  name="input50"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="51"
                  name="input51"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="52"
                  name="input52"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="53"
                  name="input53"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="54"
                  name="input54"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="55"
                  name="input55"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="56"
                  name="input56"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <input
                  id="57"
                  name="input57"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400   h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
              </div>
              <div className="mt-2 flex">
                <p className=" mt-2 w-28">Tax type</p>
                <input
                  id="58"
                  name="input58"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
                ></input>
              </div>
              <p className="mt-10 ml-80">(“Purchaser”)</p>
            </div>
          </div>
          <div className="mt-5 flex">
            <p className="mt-2 flex">
              Nominated Email Address of Purchaser’s solicitor{" "}
              <input
                id="59"
                name="input59"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                type="text"
                className="border-gray-400  ml-1 mr-80  w-80 border-b-2 outline-none focus:border-blue-400"
              ></input>{" "}
            </p>
          </div>
          <p>
            whereby it is agreed that the Vendor shall sell and the Purchaser
            shall purchase in accordance with the annexed Special and General
            Conditions of Sale the Subject Property described in the within
            Particulars at the Purchase Price mentioned below.
          </p>
          <div className="mt-10 flex w-1/2 space-x-64">
            <div>
              <div className="mt-10 mr-0 flex">
                <p className=" mt-2 w-40 font-black">Purchase Price €</p>
                <input
                  id="60"
                  name="input61"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400  ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
                ></input>
              </div>
              <div className="mt-10 mr-0 flex w-full">
                <p className=" mt-2 w-48 font-black">less deposit €</p>
                <input
                  id="62"
                  name="input62"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
                ></input>
              </div>
              <div className="mt-10 mr-0 flex w-full">
                <p className=" mt-2 w-40 font-black">Balance €</p>
                <input
                  id="63"
                  name="input63"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
                ></input>
              </div>
              <div className="mt-10 mr-0 flex w-48">
                <p className=" mt-2 font-black">
                  SIGNED(Vendor)______________________________________
                </p>
              </div>
              <div className="mt-10 mr-0 flex w-full">
                <p className=" mt-2 font-black ">Witness</p>
                <input
                  id="64"
                  name="input65"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
                ></input>
              </div>
              <div className="mt-10 mr-0 flex w-full">
                <p className=" mt-2 font-black">Occupation</p>
                <input
                  id="66"
                  name="input66"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
                ></input>
              </div>
              <div className="mt-10 mr-0 flex w-full">
                <p className=" mt-2 font-black">Address</p>
                <input
                  id="67"
                  name="input67"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
                ></input>
              </div>
            </div>
            <div>
              <div className="mt-10 mr-0 flex">
                <p className=" mt-2 w-40 font-black">Closing Date:</p>
                <input
                  id="68"
                  name="input68"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400  ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
                ></input>
              </div>
              <div className="mt-10 mr-0 flex w-full">
                <p className=" mt-2 font-black">Interest Rate:</p>
                <input
                  id="69"
                  name="input69"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400  ml-1 mr-1  w-40 border-b-2 outline-none focus:border-blue-400"
                ></input>
                <p className=" mt-2 w-48 font-black">per cent per annum</p>
              </div>
              <div className="mt-32 mr-0 flex">
                <p className=" mt-2 font-black">
                  SIGNED(Purchaser)__________________________________________
                </p>
              </div>
              <div className="mt-10 mr-0 flex w-full">
                <p className=" mt-2 font-black ">Witness</p>
                <input
                  id="71"
                  name="input71"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
                ></input>
              </div>
              <div className="mt-10 mr-0 flex w-full">
                <p className=" mt-2 font-black">Occupation</p>
                <input
                  id="72"
                  name="input72"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
                ></input>
              </div>
              <div className="mt-10 mr-0 flex w-full">
                <p className=" mt-2 font-black">Address</p>
                <input
                  id="73"
                  name="input73"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  type="text"
                  className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
                ></input>
              </div>
            </div>
          </div>
          <p className=" mt-10">
            As stakeholder I/we acknowledge receipt of bank draft/cheque for €
            <input
              id="74"
              name="input74"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-40 border-b-2 outline-none focus:border-blue-400"
            ></input>{" "}
            in respect of deposit.
          </p>
          <div className="mt-5 mr-0 flex w-full">
            <p className=" mt-2">
              SIGNED_____________________________________________________________________
            </p>
          </div>
          <p className=" mt-20 font-black">PARTICULARS AND TENURE</p>

          <div className="mt-2 mr-0 w-full">
            <p className=" mt-10">All That</p>
            <input
              id="75"
              name="input75"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
            <input
              id="76"
              name="input76"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
            <input
              id="77"
              name="input77"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
          </div>
          <div className="mt-2 mr-0 w-full">
            <p className=" mt-10">Held</p>
            <input
              id="78"
              name="input78"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
            <input
              id="79"
              name="input79"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
            <input
              id="80"
              name="input80"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
          </div>
          <div className="mt-10 ml-2 mr-0 flex">
            <p className=" mt-1 w-full">
              Local Property Tax (LPT) property ID number (where applicable)
            </p>
            <input
              id="81"
              name="input81"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
          </div>
          <div className="mt-10 mr-0 w-full">
            <p className=" mt-10">DOCUMENTS SCHEDULE</p>
            <input
              id="82"
              name="input82"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
            <input
              id="83"
              name="input83"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
            <input
              id="84"
              name="input85"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
          </div>
          <p className="mt-20">SEARCHES SCHEDULE</p>
          <p className="mt-5">
            1. Official Search in the Registry of Deeds on the Index of Names
            only for all acts affecting the{" "}
            <input
              id="86"
              name="input86"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-40 border-b-2 outline-none focus:border-blue-400"
            ></input>{" "}
            Subject Property by the Vendor from the day of{" "}
            <input
              id="87"
              name="input87"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
            ></input>{" "}
            .
          </p>
          <div className="mt-10 mr-0 w-full">
            <p className=" mt-10">and</p>
            <input
              id="88"
              name="input88"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
            <input
              id="89"
              name="input89"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
            <input
              id="90"
              name="input90"
              onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
              type="text"
              className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
          </div>
          <div className="text-justify">
            <p className=" mt-20 text-center font-black">SPECIAL CONDITIONS</p>
            <p className=" mt-10">
              1. Save where the context otherwise requires or implies or the
              text hereof expresses to the contrary, the definitions and
              provisions as to interpretation set forth in the within General
              Conditions shall be applied for the purposes of these Special
              Conditions.
            </p>
            <p className=" mt-5">
              2. The said General Conditions shall:
              <p className="ml-5 mt-5">
                (a) apply to the sale in so far as the same are not hereby
                altered or varied, and these Special Conditions shall prevail in
                case of any conflict between them and the General Conditions{" "}
              </p>
              <p className="ml-5 mt-5">
                (b) be read and construed without regard to any amendment
                therein, unless such amendment shall be referred to specifically
                in these Special Conditions.
              </p>
            </p>
            <p className="ital mt-5">
              3. Attach/insert the current recommended format of VAT special
              condition (available on www.lawsociety.ie) amended as appropriate.
            </p>
            <div className="mt-1 mr-0 w-full">
              <input
                id="91"
                name="input91"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                type="text"
                className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
              ></input>
              <input
                id="92"
                name="input92"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                type="text"
                className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
              ></input>
              <input
                id="93"
                name="input93"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                type="text"
                className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
              ></input>
              <input
                id="94"
                name="input94"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                type="text"
                className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
              ></input>
              <input
                id="95"
                name="input95"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                type="text"
                className="border-gray-400  ml-1 mr-1  w-full border-b-2 outline-none focus:border-blue-400"
              ></input>
            </div>
          </div>
          <p className="mt-20 text-justify">
            Note: These General Conditions are not to be altered or deleted
            other than by way of Special Condition. A Special Condition altering
            or deleting a General Condition should give the reason for such
            variation, unless manifestly evident. Special Conditions should be
            utilised in instances where it is required to adopt recommendations
            or advices of the Law Society or of any committee associated with
            it, where such recommendations or advice are at variance with
            provisions expressed in the General Conditions.
          </p>
          <div className="mt-20 text-center font-black">
            GENERAL CONDITIONS OF SALE
          </div>
          <div className="mt-10">DEFINITIONS AND INTERPRETATION</div>
          <div className="mt-5 text-justify">
            1. In the Conditions save where the context otherwise requires or
            implies:
            <div className="mt-5">
              “Accepts” insofar as the context admits means, as regards the
              Purchaser for the purposes of the Conditions, that the Purchaser
              has, and shall be deemed to have, acknowledged and satisfied
              himself as to the matter concerned prior to the Date of Sale and
              thereby has accepted and agreed to be bound by it and “Accepted”
              shall have a corresponding meaning
            </div>
            <div className="mt-5">
              {" "}
              “Apportionment Date” means the Completion Date, unless otherwise
              agreed in writing between the parties or by Special Condition{" "}
            </div>
            <div className="mt-5">
              {" "}
              “Assurance” means the document or documents whereby the Sale is to
              be carried into effect
            </div>
            <div className="mt-5">
              {" "}
              “Closing Date” means the date specified as such in the Memorandum
              or, if no date is specified, such date as is agreed in writing by
              the Vendor and the Purchaser to be the Closing Date for the
              purposes of this definition. If no such date has been specified or
              agreed, the Closing Date shall be the first Working Day after the
              expiration of five weeks from the Date of Sale. If the date
              specified in the Memorandum is before the Date of Sale then the
              Closing Date shall be the first Working Day after the expiration
              of five weeks from the Date of Sale{" "}
            </div>
            <div className="mt-5">
              {" "}
              “Competent Authority” includes the State, any Minister thereof,
              Government Department, State Authority, Local Authority, Planning
              Authority, Sanitary Authority, Water Services Authority, Building
              Control Authority, Fire Authority, Statutory Undertaker or any
              Department, Body or person by statutory provision or order for the
              time being in force authorised directly or indirectly to control,
              regulate, modify or restrict the development, use or servicing of
              land or buildings, or empowered to acquire land by compulsory
              process
            </div>
            <div className="mt-5">
              {" "}
              “Completion” means the completion of the Sale pursuant to this
              contract{" "}
            </div>
            <div className="mt-5">
              {" "}
              “Completion Date” means the date upon which Completion actually
              takes place{" "}
            </div>
            <div className="mt-5">
              {" "}
              “Conditions” means the attached Special Conditions and these
              General Conditions{" "}
            </div>
            <div className="mt-5">
              “Date of Sale” means the date of the auction when the Sale shall
              have been by auction, and otherwise means the date upon which the
              contract for the Sale shall have become binding on the Vendor and
              the Purchaser
            </div>
            <div className="mt-5">
              {" "}
              “Development” has the meaning ascribed to it by the Local
              Government (Planning and Development Act) 1963 or by the Planning
              and Development Acts 2000 to 2018 whichever meaning shall be
              applicable to the circumstances but excludes any works which are
              no longer material by reason of having been replaced by new works
              which were carried out pursuant to Planning Permission or
              constituted exempted development, and also excludes any use which
              is no longer continuing as at the Date of Sale, having been
              replaced with a new use which was authorised under Planning
              Legislation 7{" "}
            </div>
            <div className="mt-5">
              {" "}
              “Documents Schedule” means the attached Documents Schedule{" "}
            </div>
            <div className="mt-5">
              {" "}
              “Lease” includes (a) a fee farm grant and every contract (whether
              or not in writing or howsoever effected, derived or evidenced)
              whereby the relationship of landlord and tenant is or is intended
              to be created and whether for any freehold or leasehold estate or
              interest and (b) licences and agreements relating to the
              occupation and use of land, cognate words being construed
              accordingly{" "}
            </div>
            <div className="mt-5">
              “Memorandum” means the Memorandum of Agreement on Page 1 hereof{" "}
            </div>
            <div className="mt-5">
              {" "}
              “Nominated Email Address” in respect of each of the parties means
              such email address (if any) as is specified in the Memorandum in
              respect of that party{" "}
            </div>
            <div className="mt-5">
              “Particulars” means the Particulars and Tenure on Page 2 hereof
              and any extension of the same{" "}
            </div>
            <div className="mt-5">
              {" "}
              “Planning Legislation” means the Local Government (Planning and
              Development) Acts 1963 to 1999, the Planning and Development Acts
              2000 to 2018, Building Bye Laws, the Building Control Acts 1990 to
              2014, and all regulations made under those Acts
            </div>
            <div className="mt-5">
              {" "}
              “Planning Register” means the planning register maintained by each
              planning authority under Section 7 of the Planning and Development
              Acts 2000 to 2018 and includes the planning register previously
              maintained under Section 8 of the Local Government (Planning and
              Development) Act 1963{" "}
            </div>
            <div className="mt-5">
              {" "}
              “Purchased Chattels” means such chattels, fittings, fixtures and
              other items as are included in the Sale
            </div>
            <div className="mt-5">
              “Purchaser” means the party identified as such in the Memorandum
            </div>
            <div className="mt-5">
              {" "}
              “Purchase Price” means the Purchase Price specified in the
              Memorandum PROVIDED HOWEVER that, if the Sale provides for
              additional moneys to be paid by the Purchaser for goodwill, crops
              or Purchased Chattels, the expression
            </div>
            <div className="mt-5">
              “Purchase Price” shall be extended to include such additional
              moneys
            </div>
            <div className="mt-5">
              {" "}
              “Rejoinders” means replies in writing from the Purchaser’s
              solicitor to the Vendor’s replies to Requisitions{" "}
            </div>
            <div className="mt-5">
              {" "}
              “Relevant Period” means the period commencing on the date when the
              Vendor first acquired an interest in the Subject Property and
              ending on the Date of Sale
            </div>
            <div className="mt-5">
              “Requisitions” means the Purchaser’s written objections and
              requisitions on the title or titles as such of the Subject
              Property and with regard to rents, outgoings, rights, covenants,
              conditions, liabilities (actual or potential), planning and
              kindred matters and taxation issues material to such property{" "}
            </div>
            <div className="mt-5">
              {" "}
              “Sale” means the transaction evidenced by the Memorandum, the
              Particulars and the Conditions{" "}
            </div>
            <div className="mt-5">
              {" "}
              “Searches Schedule” means the attached Searches Schedule{" "}
            </div>
            <div className="mt-5">
              {" "}
              “Special Conditions” means the attached Special Conditions{" "}
            </div>
            <div className="mt-5">
              “Stipulated Interest Rate” means the interest rate specified in
              the Memorandum, or, if no rate is so specified, such rate as shall
              equate to 4 per centum per annum above the court rate obtaining
              pursuant to Section 22 of the Courts Act 1981 and ruling at the
              date from which interest is to run
            </div>
            <div className="mt-5">
              {" "}
              “Subject Property” means the property or interest in property
              which is the subject of the Sale{" "}
            </div>
            <div className="mt-5">
              “Vendor” means the party identified as such in the Memorandum{" "}
            </div>
            <div className="mt-5">
              “Working Day” means any day other than a Saturday or Sunday or any
              Bank or Public Holiday or any of the seven days immediately
              succeeding Christmas Day
            </div>
          </div>
          <div className="mt-5 text-justify">
            <div className="mt-20">
              2. In the Conditions save where the context otherwise requires or
              implies:
            </div>
            <div className="mt-10">
              <div className="mt-5">
                a) Words importing the masculine gender only include the
                feminine, neuter and common genders, and words importing the
                singular number only include the plural number and vice versa
              </div>
              <div className="mt-5">
                (b) The words “Vendor” and “Purchaser” respectively include
                (where appropriate) parties deriving title under them or either
                of them and shall apply to any one or more of several Vendors
                and Purchasers as the case may be and so that the stipulations
                in the Conditions contained shall be capable of being enforced
                on a joint and several basis
              </div>
              <div className="mt-5">
                (c) Any condition (or, as the case may be, any part of any
                condition) herein contained, not going to the root of the
                contract, which shall be or become void, illegal or invalid or
                shall contravene any legislation for the time being in force,
                shall, while the same shall continue to be void, illegal,
                invalid, or so in contravention be deemed to have been severed
                and omitted from the Conditions PROVIDED HOWEVER that neither
                its inclusion in the first instance nor its deemed severance and
                omission as aforesaid shall prejudice the enforceability of the
                Conditions nor affect or curtail the other stipulations and
                provisions herein set forth.{" "}
              </div>
              <div className="mt-10">
                3. (a) In the Conditions, unless the contrary appears, any
                reference hereunder:{" "}
              </div>
              <div className="mt-5 ml-10">
                {" "}
                (i) to a particular Condition shall be to such of these General
                Conditions as is identified by said reference{" "}
              </div>
              <div className="mt-5 ml-10">
                (ii) to a statute or regulation or a combination of statutes or
                regulations shall include any extension, amendment, modification
                or re-enactment thereof, and any rule, regulation, order or
                instrument made thereunder, and for the time being in force{" "}
              </div>
              <div className="mt-5">
                (b) Headings and marginal notes inserted in the Conditions shall
                not affect the construction thereof nor shall the same have any
                contractual significance.
              </div>
            </div>
          </div>
          <div className="mt-5 text-justify">
            <div className="mt-10">AUCTION</div>
            <div className="mt-5"></div>
            4. Where the Sale is by auction, the following provisions shall
            apply:
            <div className="mt-5">
              (a) the Vendor may divide the property set forth in the
              Particulars into lots and sub-divide, consolidate or alter the
              order of sale of any lots
            </div>
            <div className="mt-5">
              (b) there shall be a reserve price for the Subject Property
              whether the same shall comprise the whole or any part of the
              property set forth in the Particulars and the auctioneer may
              refuse to accept any bid. If any dispute shall arise as to any
              bidding, the auctioneer shall (at his option) either determine the
              dispute or again put up the property in question at the last
              undisputed bid. No person shall advance at a bidding a sum less
              than that fixed by the auctioneer, and no accepted bid shall be
              retracted. Subject to the foregoing, the highest accepted bidder
              shall be the Purchaser
            </div>
            <div className="mt-5">
              (c) the Vendor may withdraw the whole of the property set forth in
              the Particulars or, where such property has been divided into
              lots, withdraw any one or more of such lots at any time before the
              same has been sold without disclosing the reserve price
            </div>
            <div className="mt-5">
              (d) the Purchaser shall forthwith pay to the Vendor’s solicitor as
              stakeholder a deposit of ten per centum (10%) of the Purchase
              Price in part payment thereof, and shall execute an agreement in
              the form of the Memorandum to complete the purchase of the Subject
              Property in accordance with the Conditions.
            </div>
          </div>
          <div className="mt-5 text-justify">
            <div className="mt-5 font-black">PRIVATE TREATY SALE</div>
            5. Where the Sale is by private treaty, the following provisions
            shall apply:
            <div className="mt-5">
              (a) the Purchaser shall, on or before the Date of Sale, pay to the
              Vendor’s solicitor a deposit of the amount stated in the
              Memorandum in part payment of the Purchase Price, which deposit,
              with effect on and from the Date of Sale, is and shall be held by
              the said solicitor as stakeholder pending Completion or otherwise
              in accordance with the Conditions
            </div>
            <div className="mt-5">
              (b) if notwithstanding General Condition 5(a) such deposit or any
              part of it has been or is paid to any other person appointed or
              nominated by the Vendor, that other person, with effect as from
              the Date of Sale, shall be deemed to receive or to have received
              the said deposit or part thereof as stakeholder pending Completion
              or otherwise in accordance with the Conditions
            </div>
            <div className="mt-5">
              (c) any moneys paid by way of deposit by or on behalf of the
              Purchaser prior to the Date of Sale to the Vendor’s solicitor or
              to any such other person as aforesaid shall, up to the Date of
              Sale, be held by the recipient thereof as trustee for the
              Purchaser.
            </div>
            <div className="mt-10 text-center font-black">
              THE FOLLOWING CONDITIONS APPLY WHETHER THE SALE IS BY AUCTION OR
              BY PRIVATE TREATY{" "}
            </div>
            <div className="mt-5 font-black">TITLE</div>
            <div className="mt-5">
              {" "}
              6. (a) Subject to and except to the extent that they are excluded
              or varied by the Conditions, the Vendor and Purchaser agree that
              the common law and statutory provisions governing deduction and
              investigation of title apply to them, notwithstanding that the
              title to the Subject Property was deduced and investigated prior
              to the Date of Sale.
            </div>
            <div className="mt-5">
              (b) The title shown to the Subject Property is as set forth in the
              Particulars and in the Special Conditions. The Purchaser Accepts
              that he has received copies (or that copies have been made
              available to him for inspection) of the documents specified in the
              Documents Schedule, together with a standard set of the latest Law
              Society of Ireland Requisitions on Title with replies and the
              replies to such other Requisitions and Rejoinders as the Purchaser
              may have raised prior to the Date of Sale, and purchases with
              notice of those documents and replies. In the case of any conflict
              between General Conditions 6(a) and 6(b) then the provisions of 6
            </div>
            <div className="mt-5">(b) shall prevail.</div>
            <div className="mt-5">
              (c) The Purchaser confirms that he has been afforded the
              opportunity to make any Requisitions and Rejoinders prior to the
              Date of Sale and he Accepts the title offered. No further or other
              Requisitions shall be made on the title shown by the Vendor
              pursuant to General Condition 6(b). Subsequent Requisitions (if
              any) may only be raised in accordance with General Condition 7.
            </div>
            <div className="mt-5">
              (d) The Vendor confirms that the replies to Requisitions and
              Rejoinders are deemed to be given as of the Date of Sale.
            </div>
            <div className="mt-5">
              (e) Where the title shown to the whole or any part of the Subject
              Property is based on possession, the Vendor shall furnish to the
              Purchaser on or before Completion a certificate from the Revenue
              Commissioners to the effect (i) that the Subject Property or (as
              the case may be) such part of the same as aforesaid is not charged
              with any of the taxes covered by the provisions of Section 62 of
              the Capital Acquisitions Tax Consolidation Act 2003 or (ii) that
              the Revenue Commissioners are satisfied that any such charge will
              be discharged within a time considered by them to be reasonable.
            </div>
            10
            <div className="mt-5">
              (f ) Save as stipulated in the Special Conditions the Vendor
              shall, prior to or at Completion, discharge all mortgages
              (including judgment mortgages) and charges for the payment of
              money (other than items apportionable under General Condition
              23(b)) which affect the Subject Property.
            </div>
          </div>
        </div>

        <div className=" flex">
          <button
            className="mr-auto  mb-5 ml-32 flex flex rounded bg-gradient-to-r from-gradient-for-footer to-gradient-to py-2 px-4 font-bold text-white"
            type="submit"
            name="TXT"
          >
            Descargar TXT
          </button>
          <button
            className="ml-auto  mb-5 mr-32 flex flex rounded bg-gradient-to-r from-gradient-for-footer to-gradient-to py-2 px-4 font-bold text-white"
            type="submit"
            name="Word"
          >
            Descargar Documento Word
          </button>
        </div>
      </form>
    </div>
  );
}
