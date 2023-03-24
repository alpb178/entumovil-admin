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
        <div id="content" className="m-40 text-justify">
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
          <div className="mt-10 font-black">POST-CONTRACT REQUISITIONS</div>
          <div className="mt-5 text-justify">
            {" "}
            7. (a) The Purchaser may, after the Date of Sale, but within five
            Working Days of becoming aware of the matter, send to the Vendor’s
            solicitor Requisitions on a matter of title which prior to the Date
            of Sale was not apparent from:
          </div>
          <div className="mt-5 ml-10 text-justify">
            {" "}
            (i) the Particulars, the Special Conditions or the documents and
            information provided to the Purchaser pursuant to General Condition
            6 or otherwise, or{" "}
          </div>
          <div className="mt-5 ml-10 text-justify">
            (ii) an inspection of the Subject Property, or
          </div>
          <div className="mt-5 ml-10 text-justify">
            {" "}
            (iii) an inspection of the Planning Register or the searches (if
            any) furnished to the Purchaser pursuant to General Condition 15, or
            was not otherwise known to the Purchaser prior to the Date of Sale.{" "}
          </div>
          <div className="mt-5 text-justify">
            (b) Any Requisitions not sent within the time aforesaid shall be
            deemed to have been waived.
          </div>
          <div className="mt-5 text-justify">
            (c) The Vendor’s written replies to Requisitions shall be sent as
            soon as practicable after the delivery of such Requisitions.
          </div>
          <div className="mt-5 text-justify">
            (d) The Purchaser may raise Rejoinders to the Vendor’s replies to
            Requisitions within five Working Days of delivery of such replies
            and the Vendor’s written replies to such Rejoinders shall be sent as
            soon as practicable after delivery of such Rejoinders and so on
            toties quoties, and, if not so answered, the replies to such
            Requisitions or Rejoinders shall be considered to have been accepted
            by the Purchaser as satisfactory.
          </div>
          <div className="mt-5 text-justify">
            {" "}
            (e) Any Rejoinders not sent within the time aforesaid shall be
            deemed to have been waived.
          </div>
          <div className="mt-5 text-justify">
            {" "}
            (f ) In respect of the periods specified in this Condition for the
            Purchaser to raise Requisitions or Rejoinders, time shall be of the
            essence.
          </div>
          <div className="mt-5">
            8. If the Purchaser shall make and insist on any Requisitions or
            Rejoinders raised pursuant to General Condition 7, which the Vendor
            shall, on the grounds of unreasonable delay or expense or other
            reasonable ground, be unable or unwilling to remove or comply with,
            the Vendor, acting reasonably, shall be at liberty to rescind the
            Sale (notwithstanding any intermediate negotiation or litigation or
            attempts to remove or comply with the same) by giving to the
            Purchaser or his solicitor not less than five Working Days’ notice.
            In that case, unless within the said notice period either
            <div className="mt-5">
              (a) the Requisitions or Rejoinders (and if more than one then all
              of them) shall have been withdrawn or
            </div>
            <div className="mt-5">
              (b) (where the subject matter of the Requisitions or Rejoinders
              constitutes an “error” within the meaning of General Condition 29)
              the Purchaser shall have notified the Vendor in writing of a claim
              for compensation under General Condition 29 in respect of such
              error (in which case the Requisitions or Rejoinders shall be
              deemed to be withdrawn but without prejudice to the Purchaser’s
              claim for compensation) 11 the Sale shall be rescinded at the
              expiration of such notice.
            </div>
          </div>
          <div className="mt-5 font-black"> LEASEHOLD TITLE</div>
          <div className="mt-5">
            {" "}
            9. (a) Where the whole or any part of the Subject Property is stated
            in the Particulars or in the Special Conditions to be held under a
            Lease, the Purchaser Accepts it was well and validly made, and is a
            valid and subsisting Lease.
          </div>
          <div className="mt-5">
            (b) Where any of the Subject Property is stated to be held under a
            Lease or an agreement therefor, then, without prejudice to the
            generality of General Condition 6, the Purchaser Accepts:
          </div>
          <div className="mt-5 ml-10">
            {" "}
            (i) that he has investigated and satisfied himself as to the
            leasehold tenure and any previous apportionment of rent reserved by
            any Lease on title whereby the Subject Property is liable for, or
            indemnified against, payment of all or any part thereof and any rent
            charge affecting the Subject Property
          </div>
          <div className="mt-5 ml-10">
            {" "}
            (ii) any discrepancy between the covenants, conditions and
            provisions contained in any sublease and those in any superior Lease
          </div>
          <div className="mt-5 ml-10">
            {" "}
            (iii) the production of the receipt for the last gale of rent
            reserved by the Lease or agreement therefor, under which the whole
            or any part of the Subject Property is held (without proof of the
            title or authority of the person giving such receipt) as evidence
            that all accrued rent due has been paid and all covenants and
            conditions in such Lease or agreement and in every (if any) superior
            Lease have been duly performed and observed or any breaches thereof
            (past or continuing) effectively waived or sanctioned up to the
            Completion Date, whether or not it shall appear that the lessor or
            reversioner was aware of such breaches. If the said rent (not being
            a rack rent) shall not have been paid in circumstances where the
            party entitled to receive the same is not known to the Vendor, or
            the rent is only payable if demanded, or if the Subject Property is
            indemnified against payment of rent, the production of a statutory
            declaration so stating shall be Accepted, provided that the
            declaration further indicates that no notices or rent demands have
            been served on or received by the Vendor under the Lease or
            agreement on foot of which the Subject Property is held, that the
            Vendor has complied with all the covenants (other than those in
            respect of payment of rent) on the part of the lessee and the
            conditions contained in such Lease or agreement, and that he is not
            aware of any breaches thereof either by himself or by any of his
            predecessors in title.
          </div>
          <div className="mt-5">
            (c ) If any of the Subject Property is held under a Lease or
            agreement therefor requiring consent to alienation, the Vendor shall
            apply for and shall use reasonable endeavours to obtain such
            consent, and the Purchaser shall deal expeditiously and
            constructively with and shall satisfy all reasonable requirements of
            the lessor in relation to the application therefor, but the Vendor
            shall not be required to institute legal proceedings to enforce the
            issue of any such consent or otherwise as to the conditions being
            imposed or as to the delay in or the withholding of the same. If
            such consent shall have been refused or shall not have been procured
            and written evidence of the same furnished to the Purchaser on or
            before the Closing Date, or if any such consent is issued subject to
            a condition, which the Purchaser on reasonable grounds refuses to
            accept, either party may rescind the Sale by seven days’ prior
            notice to the other.
          </div>
          <div className="mt-5 font-black">REGISTERED LAND</div>
          <div className="mt-5">
            10. Where any of the Subject Property consists of freehold or
            leasehold registered land, registered under the Registration of
            Title Acts 1891 to 1942 (“the Acts of 1891 to 1942”) or the
            Registration of Title Act 1964 (“the Act of 1964”) then:
          </div>
          <div className="mt-5">
            (a) if the registration is subject to equities under the Acts of
            1891 to 1942, the Purchaser shall not require 12 the equities to be
            discharged, and the Purchaser Accepts that the Vendor has prior to
            the Date of Sale furnished sufficient evidence of title to enable
            the Purchaser to procure their discharge
          </div>
          <div className="mt-5">
            (b) if the registration is with a possessory title under the Act of
            1964, the Purchaser shall not require the Vendor to be registered
            with an absolute title, and the Purchaser Accepts that the Vendor
            has prior to the Date of Sale, furnished sufficient evidence of the
            title to enable the Purchaser to be registered with an absolute
            title
          </div>
          <div className="mt-5">
            {" "}
            (c) the Vendor confirms that he has furnished to the Purchaser on or
            prior to the Date of Sale a copy of the Land Registry sealed and
            certified Folio or Folios and filed plan or plans relating to the
            registered part of the Subject Property written up-to-date (or as
            nearly as practicable up-to-date)
          </div>
          <div className="mt-5">
            {" "}
            (d) the Vendor shall on or before Completion furnish a statutory
            declaration, by some person competent to make it, confirming that
            there are not in existence any burdens which under the Act of 1964
            affect registered land without registration, save such (if any) as
            are specifically mentioned in the Particulars or the Special
            Conditions
          </div>
          <div className="mt-5">
            {" "}
            (e) the Purchaser shall procure himself to be registered as owner of
            the Subject Property at his own expense
          </div>
          <div className="mt-5">
            (f ) in the event of the Subject Property being subject to a Land
            Purchase Annuity the Vendor shall, prior to Completion, redeem the
            same or (as the case may be) such proportion thereof as may be
            allocated to the Subject Property
          </div>
          <div className="mt-5">
            {" "}
            (g) where the Subject Property is part only of the lands in a Folio,
            the Vendor shall (i) do everything within the reasonable power or
            procurement of the Vendor to satisfy within a reasonable time any
            Land Registry mapping queries arising on the registration of the
            Assurance to the Purchaser so far as it affects that land, and (ii)
            pay and discharge any outlay to the Land Registry which ought
            properly to be paid by the Vendor, including additional fees
            attributable to default on the part of the Vendor
          </div>
          <div className="mt-5 font-black">IDENTITY</div>
          <div className="mt-5">
            {" "}
            11. (a) The Purchaser Accepts the evidence of identity as may be
            gathered from the documents specified in the Documents Schedule. The
            Vendor confirms that he has furnished to the Purchaser such
            information as is in his possession relative to the identity and
            extent of the Subject Property, but the Vendor is not and shall not
            be required to define exact boundaries, fences, ditches, hedges or
            walls or to specify which (if any) of the same are of a party
            nature, and the Vendor is not and shall not be required to identify
            parts of the Subject Property held under different titles.
          </div>
          <div className="mt-5">
            (b) The Vendor shall not be obliged to produce a statutory
            declaration of identity that the Subject Property has been held and
            enjoyed for any period in accordance with the title shown unless it
            is provided for in the Documents Schedule or in the Special
            Conditions.
          </div>
          <div className="mt-5 font-black">FOREIGN VENDOR</div>
          <div className="mt-5">
            12. Where the Vendor is a company, corporation, association or other
            similar entity incorporated, formed or established outside the
            state, the Vendor shall disclose this fact in the Special
            Conditions.
          </div>
          <div className="mt-5 font-black">
            RIGHTS - LIABILITIES - CONDITION OF SUBJECT PROPERTY
          </div>
          <div className="mt-5">
            13. The Vendor confirms that he has disclosed before the Date of
            Sale, in the Particulars the Special Conditions or otherwise, all
            easements, rights, reservations, exceptions, privileges, covenants,
            conditions, restrictions, rents, taxes and other liabilities (not
            already known to the Purchaser or apparent from inspection) which
            are known by the Vendor to affect the Subject Property and are
            likely to affect it following Completion.
          </div>
          <div className="mt-5">
            14. Subject to General Condition 13, the Purchaser Accepts that the
            Subject Property is sold and the Purchaser shall be deemed to buy:
          </div>
          <div className="mt-5">
            (a) with full notice of the actual state and condition of the
            Subject Property and
          </div>
          <div className="mt-5">
            (b) subject to (i) all Leases (if any) mentioned in the Particulars
            or in the Special Conditions and (ii) all easements, rights,
            reservations, exceptions, privileges, covenants, conditions,
            restrictions, rents, taxes, liabilities, outgoings and all incidents
            of tenure affecting the Subject Property (each a “Relevant
            Provision”) and
          </div>
          <div className="mt-5">
            (c) notwithstanding any partial statement or description of the
            Lease or the Relevant Provision in the Particulars or in the Special
            Conditions or in any document specified in the Documents Schedule.
          </div>
          <div className="mt-5 font-black">SEARCHES</div>
          <div className="mt-5">
            15. The Vendor confirms he has furnished to the Purchaser prior to
            the Date of Sale the searches (if any) specified in the Searches
            Schedule and any searches on the Index of Names in the Registry of
            Deeds already in the Vendor’s possession, which are relevant to the
            title or titles shown. Any other searches required by the Purchaser
            shall be obtained by him at his own expense. Where the Special
            Conditions provide that the title shall commence with a particular
            instrument and then pass to a second instrument or to a specified
            event, the Vendor shall not be obliged to explain and discharge any
            act which appears on a search covering the period between such
            particular instrument and the date of the second instrument or
            specified event. Subject as aforesaid the Vendor shall explain and
            discharge any acts appearing on searches covering the period from
            the date stipulated or implied from the commencement of the title to
            the Completion Date.
          </div>
          <div className="mt-5 font-black">ASSURANCE</div>
          <div className="mt-5">
            {" "}
            16. (a) If the draft Assurance has not been settled prior to the
            Date of Sale, a draft of it shall be submitted to the Vendor’s
            solicitor not less than seven Working Days, and the engrossment not
            less than four Working Days, prior to the Closing Date. The Vendor’s
            solicitor shall approve or revise the draft within three Working
            Days after delivery of the draft to him or retain it for use as an
            engrossment. The delivery of an engrossed Assurance shall not
            prejudice any outstanding Requisitions or Rejoinders raised pursuant
            to General Condition 7.
          </div>
          <div className="mt-5">
            (b) On payment of all moneys payable by him in respect of the Sale,
            and subject to the provisions of Section 980 of the Taxes
            Consolidation Act 1997 as amended, the Purchaser shall be entitled
            to a proper Assurance of the Subject Property from the Vendor and
            all other (if any) necessary parties.
          </div>
          <div className="mt-5">
            (c) On Completion the Purchaser shall accept delivery of the
            Assurance of the entire of the Subject Property in favour of the
            Purchaser or such other person(s) as the Purchaser shall nominate.
          </div>
          <div className="mt-5">
            (d) Where required by the Purchaser to enable the Purchaser to stamp
            the Assurance, the Vendor will (i) furnish to the Purchaser the tax
            number and tax type of the Vendor and, if applicable, the Local
            Property Tax (LPT) property ID number, all appropriately vouched,
            prior to or on Completion and (ii) render such assistance to the
            Purchaser as the Purchaser shall reasonably require.
          </div>
          <div className="mt-5 font-black">VACANT POSSESSION</div>
          <div className="mt-5">
            17. Subject to any provision to the contrary in the Particulars or
            in the Conditions or implied by the nature of the transaction, the
            Purchaser shall be entitled to vacant possession of the Subject
            Property on Completion.
          </div>
          <div className="mt-5 font-black">LEASES</div>
          <div className="mt-5">
            18. Where the Subject Property is sold subject to any Lease, the
            Vendor confirms that a copy of the same (or, if the provisions
            thereof have not been reduced to writing, such evidence of its
            nature and terms as the Vendor shall be able to supply) together
            with copies of any notices in the Vendor’s possession served by or
            on the lessee (and of continuing and material relevance) have been
            provided to the Purchaser prior to the Date of Sale.
          </div>
          <div className="mt-5">
            19. Unless the Special Conditions provide to the contrary, the
            Purchaser shall be entitled to assume that, at the Date of Sale, the
            lessee named in any such Lease (as is referred to in Condition 18)
            is still the lessee, that there has been no variation in the terms
            and conditions of said Lease (other than such as may be evident from
            an inspection of the Subject Property or apparent from the
            Particulars or the documents furnished to the Purchaser prior to the
            Date of Sale) and that the said terms and conditions (save those
            pertaining to the actual state and condition of the Subject
            Property) have been complied with.{" "}
          </div>
          <div className="mt-5 font-black">COMPLETION AND INTEREST</div>
          <div className="mt-5">
            20. (a) The Sale shall be completed and the balance of the Purchase
            Price paid by the Purchaser on or before the Closing Date.
          </div>
          <div className="mt-5">
            (b) Unless otherwise agreed, Completion shall take place at the
            office of the Vendor’s solicitor.
          </div>
          <div className="mt-5">
            (c) Where Completion is to take place otherwise than at the office
            of the Vendor’s solicitor then, unless otherwise agreed in writing,
            the following provisions shall apply:
          </div>
          <div className="mt-5 ml-10">
            {" "}
            (i) the Purchaser’s solicitor shall nominate not less than five
            Working Days prior to the Closing Date the manner in which all
            completion documents are to be dispatched (registered post, by hand
            or courier, DX, collection or other agreed mode of dispatch). The
            mode of dispatch will be at the Purchaser’s solicitor’s sole risk
            and expense provided that the Vendor’s solicitor uses the mode of
            dispatch nominated by the Purchaser’s solicitor or otherwise agreed
          </div>
          <div className="mt-5 ml-10">
            {" "}
            (ii) not later than three Working Days prior to the Closing Date the
            Purchaser’s solicitor shall send to the Vendor’s solicitor a list of
            closing requirements in accordance with the terms of the contract
            and as agreed in replies to Requisitions and Rejoinders (if any). It
            is the responsibility of the Purchaser’s solicitor to ensure that
            closing searches are furnished to the Vendor’s solicitor on or
            before the Closing Date and failure to do so will not be a reason to
            postpone Completion
          </div>
          <div className="mt-5 ml-10">
            {" "}
            (iii) when the Vendor’s solicitor is immediately able to satisfy
            these closing requirements, then: – where applicable, redemption
            figures for any mortgage or charge on the Vendor’s title shall be
            furnished to the Purchaser’s solicitor – the Vendor’s solicitor
            shall undertake with the Purchaser’s solicitor in the following form
            “In consideration of the completion of the within sale and in
            consideration of your furnishing the balance of the purchase price
            to us (in the agreed manner) we hereby undertake with you to
            immediately furnish copies of all the completion documents to be
            signed by the vendor properly executed and to act as your agent
            (without charge) in accepting delivery of the Assurance containing
            the receipt clause (thereby complying with Section 77(3) of the Land
            and Conveyancing Law Reform Act 2009) and immediately thereafter to
            dispatch to you all of the completion documents in accordance with
            the agreed list of completion documents and the mode of dispatch
            nominated or otherwise agreed.”
          </div>
          <div className="mt-5 ml-10">
            {" "}
            (iv) Completion shall take place at the office of the Vendor’s
            solicitor when the Vendor’s solicitor has received the balance of
            the Purchase Price and is in a position to satisfactorily explain,
            in accordance with General Condition 15, all acts appearing on any
            closing searches received and is in a position to satisfy all of the
            Purchaser’s closing requirements in accordance with the terms of the
            contract
          </div>
          <div className="mt-5 ml-10">
            {" "}
            (v) all of the completion documents shall thereupon be dispatched to
            the Purchaser’s solicitor by the mode of dispatch nominated or
            otherwise agreed to include satisfactory explanation of all acts
            appearing on searches in accordance with General Condition 15 and
            the property’s keys or authority for their collection. The Vendor’s
            solicitor shall communicate with the Purchaser’s solicitor in a
            recorded form advising that Completion has taken place and thereupon
            the Vendor’s solicitor shall be entitled to release the purchase
            moneys and the Purchaser shall thereupon be entitled to vacant
            possession.
          </div>
          <div className="mt-5">
            (d) Pending Completion in accordance with the Conditions any moneys
            received in advance of Completion by the Vendor’s solicitor, other
            than any deposit held as stakeholder, shall be held by the Vendor’s
            solicitor as trustee for the Purchaser.
          </div>
          <div className="mt-5">
            21. (a) If by reason of any default on the part of the Purchaser,
            the Sale shall not have been completed on or before the later of (i)
            the Closing Date or (ii) such subsequent date whereafter delay in
            completing shall not be attributable to default on the part of the
            Vendor
          </div>
          <div className="mt-5 ml-10">
            {" "}
            (i) the Purchaser shall pay interest to the Vendor on the balance of
            the Purchase Price remaining unpaid at the Stipulated Interest Rate
            for the period between the Closing Date (or as the case may be such
            subsequent date as aforesaid) and the Completion Date. Such interest
            shall accrue from day to day and shall be payable before and after
            any judgment and
          </div>
          <div className="mt-5 ml-10">
            (ii) the Vendor shall in addition to being entitled to receive such
            interest, have the right to take the rents and profits less the
            outgoings of the Subject Property up to the Completion Date.
          </div>
          <div className="mt-5">
            (b) If the Vendor by reason of his default shall not be able, ready
            and willing to complete the Sale on the Closing Date he shall
            thereafter give to the Purchaser at least five Working Days’ prior
            notice of a date upon which he shall be so able ready and willing
            and the Purchaser shall not before the expiration of that notice be
            deemed to be in default for the purposes of this Condition provided
            that no such notice shall be required if the Vendor is prevented
            from being able and ready to complete or to give said notice by
            reason of the act or default of the Purchaser.
          </div>
          <div className="mt-5">
            (c) If by reason of any default on the part of the Vendor the Sale
            shall not have been completed on or before the later of (i) the
            Closing Date or (ii) such subsequent date whereafter delay in
            completing shall not be attributable to default on the part of the
            Purchaser the Vendor shall pay compensation to the Purchaser
            calculated as the amount of the Purchase Price at the Stipulated
            Interest Rate for the period between the Closing Date (or as the
            case may be such subsequent date as aforesaid) and the Completion
            Date. The Vendor shall not for the purposes of this Condition be
            deemed to be in default during the period of notice given pursuant
            to clause (b) of this Condition. Such compensation shall accrue from
            day to day and shall be payable before and after any judgment.
          </div>
          <div className="mt-5">
            (d) Neither the Vendor nor the Purchaser shall be entitled to delay
            Completion solely because of a dispute between the parties with
            regard to liability for such interest or compensation (if any) or as
            to the amount of such interest or compensation payable PROVIDED
            ALWAYS that Completion and the delivery of any Assurance on foot of
            these Conditions shall be had strictly without prejudice to the
            right of the Vendor to pursue his claim for interest or the right of
            the Purchaser to pursue his claim for compensation. 22. The
            submission of an apportionment account made up to a particular date
            or other corresponding step taken 16 in anticipation of completing
            the Sale shall not per se preclude the Vendor from exercising his
            rights under the provisions of General Condition 21 and in the event
            of such exercise the said apportionment account or the said other
            corresponding step shall (if appropriate) be deemed not to have been
            furnished or taken, and the Vendor shall be entitled to furnish a
            further apportionment account.
          </div>
          <div className="mt-5 font-black">APPORTIONMENT AND POSSESSION</div>
          <div className="mt-5">
            23. (a) Subject to the stipulations contained in the Conditions, the
            Purchaser, on paying the Purchase Price shall be entitled to vacant
            possession of the Subject Property or (as the case may be) the rents
            and profits thereout with effect from the Apportionment Date.
          </div>
          <div className="mt-5">
            (b) All rents, profits, rates, outgoings and moneys (including rent,
            profits, rates, outgoings and money payable in advance but not
            including impositions derived from hypothecation) referable to the
            Subject Property shall for the purposes of this Condition, be
            apportioned (whether apportionable by law or not) on a day to day
            basis as at the Apportionment Date, up to and including which the
            liability for or the entitlement to the same shall (subject to
            apportionment as aforesaid to accord with the position obtaining as
            to moneys paid or due at such date) be for the account of the Vendor
            and thereafter for the account of the Purchaser.
          </div>
          <div className="mt-5">
            (c) In the implementation of this Condition the Vendor shall be
            entitled to or liable for (as the case may require) the rents,
            profits, rates, outgoings and moneys until midnight on the
            Apportionment Date unless the Purchaser shall opt prior to
            Completion to take the rents and profit less the outgoings referable
            to the Apportionment Date and the Vendor shall receive the balance
            of the Purchase Price for value on the Completion Date in which
            event the Purchaser shall be entitled to or liable for (as the case
            may require) the rents, profits, rates, outgoings and moneys from
            and including the Apportionment Date.
          </div>
          <div className="mt-5">
            (d) The balance of the Purchase Price shall (where appropriate) be
            adjusted upwards or downwards to accommodate apportionments
            calculated pursuant to this Condition and the expression “balance of
            the Purchase Price” where used in the Conditions shall be construed
            accordingly.
          </div>
          <div className="mt-5">
            {" "}
            (e) To the extent that same shall be unknown at the Apportionment
            Date (or shall not then be readily ascertainable) amounts to be
            apportioned hereunder, including any amount apportionable pursuant
            to this Condition, shall be apportioned provisionally on a fair
            estimate thereof, and, upon ascertainment of the actual figures, a
            final apportionment shall be made, and the difference between it and
            the provisional apportionment shall be refunded by the Vendor or the
            Purchaser (as the case may be) to the other within ten Working Days
            of the liable party becoming aware of the amount of such difference.
          </div>
          <div className="mt-5">
            (f ) Excise and kindred duties payable in respect of the Subject
            Property or any licence attached thereto shall be apportioned on a
            day to day basis as at the Apportionment Date up to which the
            liability for the same shall be for the account of the Vendor and
            thereafter for that of the Purchaser and General Condition 23(b)
            shall apply for the purposes of such apportionment.
          </div>
          <div className="mt-5 font-black">COMPULSORY REGISTRATION</div>
          <div className="mt-5">
            24. If all or any of the Subject Property is unregistered land the
            registration of which was compulsory prior to the Date of Sale, the
            Vendor shall be obliged to procure such registration prior to
            Completion.
          </div>
          <div className="mt-5">
            25. If all or any of the Subject Property is unregistered land, the
            registration of which shall become compulsory at or subsequent to
            the Date of Sale, the Vendor shall not be under any obligation to
            procure such registration but shall at or prior to Completion
            furnish to the Purchaser a map of the Subject Property complying
            with the requirements of the Land Registry as then recognised and
            further the Vendor shall, if so requested within six years after the
            Completion Date, by and at the expense of the Purchaser, supply any
            additional information, which he may reasonably be able to supply,
            and produce and furnish any documents in his possession that may be
            required to effect such registration.
          </div>
          <div className="mt-5 font-black">
            SIGNING “IN TRUST” OR “AS AGENT”
          </div>
          <div className="mt-5">
            26. A Purchaser who signs the Memorandum “in Trust”, “as Trustee” or
            “as Agent”, or with any similar qualification or description without
            therein specifying the identity of the principal or other party for
            whom he so signs, shall be personally liable to complete the Sale,
            and to fulfil all such further stipulations on the part of the
            Purchaser as are contained in the Conditions, unless and until he
            shall have disclosed to the Vendor the name of his principal or
            other such party.
          </div>
          <div className="mt-5 font-black">FAILURE TO PAY DEPOSIT</div>
          <div className="mt-5">
            27. The failure by the Purchaser to pay in full the deposit
            hereinbefore specified as payable by him shall constitute a breach
            of condition entitling the Vendor to terminate the Sale or to sue
            the Purchaser for damages or both but such entitlement shall be
            without prejudice to any rights otherwise available to the Vendor.
            28. In case a cheque taken for the deposit (having been presented
            and whether or not it has been re-presented) shall not have been
            honoured, then and on that account the Vendor may (without prejudice
            to any rights otherwise available to him) elect either:
          </div>
          <div className="mt-5">
            (a) to treat the contract evidenced by the Memorandum, the
            Particulars and the Conditions as having been discharged by breach
            thereof on the Purchaser’s part or
          </div>
          <div className="mt-5">
            (b) to enforce payment of the deposit as a deposit by suing on the
            cheque or otherwise.
          </div>
          <div className="mt-5 font-black">DIFFERENCES - ERRORS</div>
          <div className="mt-5">
            29. (a) In this Condition “error” includes any omission,
            non-disclosure, discrepancy, difference, inaccuracy, misstatement or
            mis-representation made in the Memorandum, the Particulars, the
            Conditions or the replies to Requisitions and Rejoinders or in the
            course of any representation, response or negotiations leading to
            the Sale, and whether in respect of measurements, quantities,
            descriptions or otherwise.
          </div>
          <div className="mt-5">
            (b) The Purchaser shall be entitled to be compensated by the Vendor
            for any loss suffered by the Purchaser in his bargain relative to
            the Sale as a result of an error made by or on behalf of the Vendor
            provided however that no compensation shall be payable for loss of
            trifling materiality (unless attributable to recklessness or fraud
            on the part of the Vendor) nor in respect of any matter of which the
            Purchaser shall be deemed to have had notice under General Condition
            14(a) nor in relation to any error in a location or similar plan
            furnished for identification only.
          </div>
          <div className="mt-5">
            (c) Nothing in the Memorandum, the Particulars or the Conditions
            shall:
          </div>
          <div className="mt-5 ml-10">
            {" "}
            (i) entitle the Vendor to require the Purchaser to accept property
            which differs substantially from the property agreed to be sold
            whether in quantity, quality, tenure or otherwise, if the Purchaser
            would be prejudiced materially by reason of any such difference or
          </div>
          <div className="mt-5 ml-10">
            {" "}
            (ii) affect the right of the Purchaser to rescind or repudiate the
            Sale where compensation for a claim attributable to a material error
            made by or on behalf of the Vendor cannot be reasonably assessed. 18
          </div>
          <div className="mt-5">
            (d) Save as aforesaid, no error shall annul the Sale or entitle the
            Vendor or the Purchaser (as the case may be) to be discharged
            therefrom.
          </div>
          <div className="mt-5 font-black">
            DOCUMENTS OF TITLE RELATING TO OTHER PROPERTY
          </div>
          <div className="mt-5">
            30. (a) Documents of title relating to other property as well as to
            the Subject Property shall be retained by the Vendor or other person
            entitled to the possession thereof.
          </div>
          <div className="mt-5">
            (b) Where the Subject Property is sold in lots, all documents of
            title relating to more than one lot shall be retained by the Vendor
            until the completion of the sales of all the lots comprised in such
            documents, and shall then (unless they also relate to any property
            retained by the Vendor) be handed over to such of the purchasers as
            the Vendor shall consider best entitled thereto.
          </div>
          <div className="mt-5">
            (c) The Vendor shall give to the Purchaser (and where the Subject
            Property is sold in lots, to the purchaser of each lot) certified
            copies of all documents retained under this Condition and pertinent
            to the title to be furnished (other than documents of record, of
            which plain copies only will be given).
          </div>
          <div className="mt-5">
            (d) Subject as hereinafter provided, the Vendor shall give the usual
            statutory acknowledgement of the right of production and undertaking
            for safe custody of all documents (other than documents of record)
            retained by him under this Condition and pertinent to the title to
            be furnished. Such acknowledgement and undertaking shall be prepared
            by and at the expense of the Purchaser.
          </div>
          <div className="mt-5">
            (e) If the Vendor is retaining any unregistered land held wholly or
            partly under the same title as the Subject Property, the Assurance
            shall be engrossed in duplicate by and at the expense of the
            Purchaser, who shall deliver to the Vendor the counterpart thereof,
            same having been stamped and registered and (if appropriate)
            executed by the Purchaser.
          </div>
          <div className="mt-5 font-black">DISCLOSURE OF NOTICES</div>
          <div className="mt-5">31. (a) Where</div>
          <div className="mt-5 ml-10">
            {" "}
            (i) prior to or on the Date of Sale any closing, demolition or
            clearance order or any notice for compulsory acquisition or any
            other notice made or issued by or at the behest of a Competent
            Authority in respect of the Subject Property and affecting the same
            at the Date of Sale has been notified or given to the Vendor
            (whether personally or by advertisement or posting on the Subject
            Property or in any other manner) or is otherwise known to the Vendor
            or
          </div>
          <div className="mt-5 ml-10">
            {" "}
            (ii) at the Date of Sale the Subject Property is affected by any
            award or grant, which is or may be repayable by the Vendor’s
            successor in title then, if the Vendor fails to show
            <div className="mt-5 ml-14">
              – that, before the Date of Sale, the Purchaser received notice or
              was aware of the matter in question or
            </div>
            <div className="mt-5 ml-14">
              – that the matter in question was apparent from inspection of the
              Development Plan or the current or published draft Development
              Plan for the area within which the Subject Property is situate or
            </div>
            <div className="mt-5 ml-14">
              – that same is no longer applicable or material or{" "}
            </div>
            <div className="mt-5 ml-14">
              – that any reduction in the value of the Subject Property is of
              trifling materiality or
            </div>
            <div className="mt-5 ml-14">
              {" "}
              – that the subject thereof can and will be dealt with fully in the
              apportionment account the Purchaser may by notice given to the
              Vendor rescind the Sale.
            </div>
          </div>
          <div className="mt-5">
            (b) The right conferred on the Purchaser to rescind the Sale arising
            out of the circumstances in General Condition 31(a) shall not apply
            in respect of any order, notice, award or grant details of which
            were entered on the Planning Register prior to the Date of Sale.
          </div>
          <div className="mt-5 font-black">DEVELOPMENT</div>
          <div className="mt-5">
            {" "}
            32. (a) Unless the Special Conditions contain a stipulation to the
            contrary, the Vendor warrants:
          </div>
          <div className="mt-5 ml-10">
            (i) that during the Relevant Period there has been no Development of
            the Subject Property for which planning permission was required by
            law or that all planning permissions required by law for the
            Development of the Subject Property during the Relevant Period were
            obtained (save in respect of matters of trifling materiality), and
            that, where implemented, the conditions thereof in relation to and
            specifically addressed to such Development were complied with
            substantially and
          </div>

          <div className="mt-5 ml-10">
            (ii) that in all cases where the provisions of the Building Control
            Acts 1990 to 2014 apply to the design or Development of the Subject
            Property or any part of the same or any activities in connection
            therewith, there has been substantial compliance with the said
            provisions in so far as they pertained to such design, Development
            or activities during the Relevant Period and
          </div>

          <div className="mt-5 ml-10">
            {" "}
            (iii) that the Vendor is not on actual notice of any breach or
            non-compliance with Planning Legislation affecting the Subject
            Property which arose prior to commencement of the Relevant Period.
          </div>

          <div className="mt-5">
            (b) For the purposes of this Condition, and without prejudice to the
            generality thereof, the Vendor shall be deemed to be on actual
            notice of any matter disclosed to the Vendor on his acquisition of
            the Subject Property.
          </div>

          <div className="mt-5">
            (c) The warranty referred to in General Condition 32(a) shall not
            extend to any breach of provisions contained in Planning Legislation
            which breach has been remedied or is no longer continuing at the
            Date of Sale.
          </div>

          <div className="mt-5">
            (d) The Vendor shall prior to the Date of Sale make available to the
            Purchaser for inspection or furnish to the Purchaser copies of:
          </div>

          <div className="mt-5 ml-10">
            (i) all planning permissions which relate to the Development of the
            Subject Property
          </div>

          <div className="mt-5 ml-10">
            (ii) all Fire Safety Certificates, Revised Fire Safety Certificates,
            Disability Access Certificates, Revised Disability Access
            Certificates and Regularisation Certificates issued under
            regulations made pursuant to the Building Control Acts 1990 to 2014
            referable to the Subject Property (such permissions and certificates
            specified in this General Condition 32(d)(i) and (ii) being
            hereinafter in General Condition 32 referred to as the “Consents”)
          </div>

          <div className="mt-5 ml-10">
            (iii) (if available) Building Bye-Law Approvals made under the
            Public Health Acts or Dublin Corporation Act 1890 and Commencement
            Notices issued under regulations made pursuant to the Building
            Control Acts 1990 to 2014 and
          </div>

          <div className="mt-5 ml-10">
            {" "}
            (iv) (save where Development is intended to be carried out between
            the Date of Sale and the Closing Date) the documents referred to in
            General Condition 32(e).
          </div>

          <div className="mt-5">
            {" "}
            (e) The Vendor shall, on or prior to Completion, furnish to the
            Purchaser
          </div>

          <div className="mt-5 ml-10">
            (i) written confirmation from the planning authority of compliance
            with all conditions involving financial contributions or the
            furnishing of bonds in any such Consents PROVIDED HOWEVER that where
            the Development authorised by such Consents relates to a residential
            housing estate of which the Development of the Subject Property
            forms part and such Consents relate to the initial construction of a
            building on the Subject Property written confirmation from the local
            authority that the roads and services abutting on the Subject
            Property is in charge by it shall be accepted as satisfactory
            evidence of compliance with such conditions, unless the said
            confirmation discloses a requirement for payment of outstanding
            moneys
          </div>

          <div className="mt-5 ml-10">
            (ii) a certificate or opinion by an architect or an engineer (or
            other professionally qualified person competent so to certify or
            opine) confirming that
          </div>

          <div className="mt-5 ml-14">
            – such Consents relate to the Subject Property
          </div>
          <div className="mt-5 ml-14">
            – (where applicable) the design of the buildings on the Subject
            Property is in substantial compliance with the Building Control
            Acts1990 to 2014
          </div>
          <div className="mt-5 ml-14">
            – the Development of the Subject Property has been carried out in
            substantial compliance with such Consents and (where applicable) the
            requirements of the Building Control Acts 1990 to 2014
          </div>
          <div className="mt-5 ml-14">
            – all conditions (other than financial conditions) of such Consents
            have been complied with substantially and
          </div>
          <div className="mt-5 ml-14">
            – in the event of the Subject Property forming part of a larger
            development, all conditions (other than financial conditions) of
            such Consents which relate to the overall development have been
            complied with substantially so far as was reasonably possible in the
            context of such development as at the date of such Certificate or
            Opinion Provided however that where a certificate of compliance on
            completion is required under regulations made pursuant to the
            Building Control Acts 1990 to 2014 a copy (or a certified copy if
            the certificate on the building control authority register is not
            accessible to the public) of such certificate, together with
            evidence that such certificate has been registered by the building
            control authority, shall be accepted as appropriate evidence of
            compliance with the requirements of the Building Control Acts 1990
            to 2014 in respect of the matter to which it relates and no further
            evidence of compliance with the requirements of the Building Control
            Acts 1990 to 2014 shall be required in respect of that matter And
            provided further that where a certificate of compliance on
            completion is not required because a valid declaration of intention
            to opt out of statutory certification has been registered by the
            building control authority, then in addition to the certificate or
            opinion required pursuant to this Condition
          </div>
          <div className="mt-5">
            {" "}
            (e)(ii), the Vendor shall furnish to the Purchaser a copy (or a
            certified copy if the declaration on the building control authority
            register is not accessible to the public) of such declaration
            together with evidence that such declaration has been registered by
            the building control authority.
          </div>

          <div className="mt-5">
            (f ) (i) Where the Vendor has furnished certificates or opinions
            pursuant to General Condition 32(e), the Vendor shall have no
            liability on foot of the warranties expressed in General Condition
            32(a) in respect of any matter with regard to which such certificate
            or opinion is erroneous or inaccurate, unless the Vendor was aware
            at the Date of Sale that the same contained any material error or
            inaccuracy.
          </div>

          <div className="mt-5 ml-10">
            (ii) If, subsequent to the Date of Sale and prior to Completion, it
            is established that any such certificate or opinion is erroneous or
            inaccurate, then, if the Vendor fails to show that
          </div>

          <div className="mt-5 ml-14">
            – before the Date of Sale the Purchaser was aware of the error or
            inaccuracy or
          </div>
          <div className="mt-5 ml-14">
            – same is no longer relevant or material or
          </div>
          <div className="mt-5 ml-14">
            – same does not prejudicially affect the value of the Subject
            Property the Purchaser may by notice given to the Vendor rescind the
            Sale
          </div>
          <div className="mt-5 font-black">RESCISSION</div>
          <div className="mt-5">
            33. Upon rescission of the Sale in accordance with any of the
            provisions herein or in the Special Conditions contained or
            otherwise:
          </div>

          <div className="mt-5 ml-10">
            (a) the Purchaser shall be entitled to a return of his deposit (save
            where it shall lawfully have been forfeited) but without interest
            thereon
          </div>

          <div className="mt-5 ml-10">
            (b) the Purchaser shall remit to the Vendor all documents in his
            possession belonging to the Vendor and the Purchaser shall at his
            expense (save where Special Conditions otherwise provide) procure
            the cancellation of any entry relating to the Sale in any register.
          </div>

          <div className="mt-5">
            34. If any such deposit as is to be returned pursuant to General
            Condition 33 shall not have been returned to the Purchaser within
            five Working Days from the date upon which the Sale shall have been
            rescinded, the Purchaser shall be entitled to interest thereon at
            the Stipulated Interest Rate from the expiration of the said period
            of five Working Days to the date upon which the deposit shall have
            been so returned.
          </div>

          <div className="mt-5">
            35. The right to rescind shall not be lost by reason only of any
            intermediate negotiations or attempts to comply with or to remove
            the issue giving rise to the exercise of such right.
          </div>
          <div className="mt-5 font-black">COMPLETION NOTICES</div>
          <div className="mt-5">
            36. Save where time is of the essence in respect of the Closing
            Date, the following provisions shall apply:
          </div>

          <div className="mt-5 ml-10">
            (a) if the Sale be not completed on or before the Closing Date
            either party may on or after that date (unless the Sale shall first
            have been rescinded or become void) give to the other party notice
            to complete the Sale in accordance with this Condition, but such
            notice shall be effective only if the party giving it shall then
            either be able, ready and willing to complete the Sale or is not so
            able, ready or willing by reason of the default or misconduct of the
            other party
          </div>

          <div className="mt-5 ml-10">
            (b) upon service of such notice the party upon whom it shall have
            been served shall complete the Sale within a period of twenty-eight
            days after the date of such service (as defined in General Condition
            45 and excluding the date of service), and in respect of such period
            time shall be of the essence of the contract but without prejudice
            to any intermediate right of rescission by either party
          </div>

          <div className="mt-5 ml-10">
            (c) the recipient of any such notice shall give to the party serving
            the same reasonable advice of his readiness to complete
          </div>

          <div className="mt-5 ml-10">
            (d) if the Purchaser shall not comply with such a notice within the
            said period (or within any extension thereof which the Vendor may
            agree) he shall be deemed to have failed to comply with these
            Conditions in a material respect and the Vendor may enforce against
            the Purchaser, without further notice, such rights and remedies as
            may be available to the Vendor at law or in equity, or (without
            prejudice to such rights and remedies) he may invoke and impose the
            provisions of General Condition 37
          </div>

          <div className="mt-5 ml-10">
            (e) if the Vendor does not comply with such a notice within the said
            period (or within any extension thereof which the Purchaser may
            agree), then the Purchaser may elect either to enforce against the
            Vendor, without further notice, such rights and remedies as may be
            available to the Purchaser at law or in equity or (without prejudice
            to any right of the Purchaser to damages) to give notice to the
            Vendor requiring a return to the Purchaser of all moneys paid by
            him, whether by way of deposit or otherwise, on account of the
            Purchase Price. General Condition 34 shall apply to all moneys so to
            be returned, the period of five Working Days therein being computed
            from the date of the giving of such last mentioned notice. If the
            Purchaser gives such a notice and all the said moneys and interest
            (if any) are remitted to him, the Purchaser shall no longer be
            entitled to specific performance of the Sale, and shall return
            forthwith all documents in his possession belonging to the Vendor,
            and (at the Vendor’s expense) procure the cancellation of any entry
            relating to the Sale in any register
          </div>

          <div className="mt-5 ml-10">
            (f ) the party serving a notice under this Condition may, at the
            request of or with the consent of the other party, by written
            communication to the other party extend the term of such notice for
            one or more specified periods of time, and, in that case, the term
            of the notice shall be deemed to expire on the last day of such
            extended period or periods, and the notice shall operate as though
            such extended period or periods had been specified in this Condition
            in lieu of the said period of twenty-eight days, and time shall be
            of the essence in relation to such extended period
          </div>

          <div className="mt-5 ml-10">
            (g) the Vendor shall not be deemed to be other than able, ready and
            willing to complete for the purposes of this Condition:
          </div>

          <div className="mt-5 ml-14">
            {" "}
            (i) by reason of the fact that the Subject Property has been
            mortgaged or charged, provided that the funds (including the
            deposit) receivable on Completion shall (after allowing for all
            prior claims thereon) be sufficient to discharge the aggregate of
            all amounts payable in satisfaction of such mortgages and charges to
            the extent that they relate to the Subject Property or
          </div>

          <div className="mt-5 ml-14">
            {" "}
            (ii) by reason of being unable, not ready or unwilling at the date
            of service of such notice to deliver vacant possession of the
            Subject Property provided that (where it is a term of the Sale that
            vacant possession thereof be given) the Vendor is, upon being given
            reasonable advice of the other party’s intention to close the Sale
            on a date within the said period of twenty-eight days or any
            extension thereof pursuant to General Condition 36(f ), able, ready
            and willing to deliver vacant possession of the Subject Property on
            that date.
          </div>
          <div className="mt-5 font-black">DAMAGES FOR DEFAULT</div>
          <div className="mt-5">
            38. (a) Neither the Vendor nor the Purchaser, in whose favour an
            order for specific performance has been made, shall be precluded
            from an award of damages at law or in equity, in the event of such
            order not being complied with.
          </div>

          <div className="mt-5">
            (b) Notwithstanding any rule of law to the contrary, failure on the
            part of the Vendor to show title to the Subject Property in
            accordance with the Conditions shall not per se preclude the making
            of an award for damages to the Purchaser for loss of bargain or
            otherwise in relation to the Sale.
          </div>
          <div className="mt-5 font-black">RISK</div>
          <div className="mt-5">
            {" "}
            39. Subject as hereinafter provided, the Vendor shall be liable for
            any loss or damage howsoever occasioned (other than by the Purchaser
            or his agent) to the Subject Property (and the Purchased Chattels)
            between the Date of Sale and Completion BUT any such liability
            (including liability for consequential or resulting loss) shall not
            as to the amount thereof exceed the Purchase Price.
          </div>

          <div className="mt-5">
            40. The liability imposed on the Vendor by General Condition 39
            shall not apply:
          </div>

          <div className="mt-5 ml-10">
            (a) to inconsequential damage or insubstantial deterioration from
            reasonable wear and tear in the course of normal occupation and use,
            and not materially affecting value
          </div>

          <div className="mt-5 ml-10">
            (b) to damage occasioned by operations reasonably undertaken by the
            Vendor in his removal from, and vacation of the Subject Property,
            provided that the same are so undertaken with reasonable care
          </div>

          <div className="mt-5 ml-10">
            (c) where any such loss or damage has resulted from a requirement
            restriction or obligation imposed by a Competent Authority after the
            Date of Sale.
          </div>

          <div className="mt-5">
            41. Nothing in General Conditions 39 and 40 shall affect:
          </div>

          <div className="mt-5 ml-10">
            (a) the Purchaser’s right to specific performance in an appropriate
            case
          </div>

          <div className="mt-5 ml-10">
            (b) the Purchaser’s right to rescind or repudiate the Sale upon the
            Vendor’s failure to deliver the Subject Property substantially in
            its condition at the Date of Sale (save where such failure shall
            have been occasioned by the Purchaser or his agent)
          </div>

          <div className="mt-5 ml-10">
            (c) the operation of the doctrine of conversion
          </div>

          <div className="mt-5 ml-10">
            (d) the Purchaser’s right to gains accruing to the Subject Property
            (or the Purchased Chattels) after the Date of Sale
          </div>

          <div className="mt-5 ml-10">
            (e) the Purchaser’s right to effect on or after the Date of Sale his
            own insurance against loss or damage in respect of the Subject
            Property or any part of the same (or the Purchased Chattels)
          </div>

          <div className="mt-5 ml-10">
            (f ) the rights and liabilities of parties other than the Vendor and
            the Purchaser
          </div>

          <div className="mt-5 ml-10">
            (g) the rights and liabilities of the Purchaser on foot of any Lease
            subsisting at the Date of Sale, or of any arrangement whereby the
            Purchaser shall prior to Completion have been allowed into
            occupation of the Subject Property or any part thereof (or into
            possession of the Purchased Chattels).
          </div>
          <div className="mt-5 font-black">CHATTELS</div>
          <div className="mt-5">
            42. Unless otherwise disclosed to the Purchaser prior to the Date of
            Sale, the Vendor warrants that, at Completion, all the Purchased
            Chattels shall be his unencumbered property and that same shall not
            be subject to any lease, rental hire, hire-purchase or credit sale
            agreement or chattel mortgage
          </div>
          <div className="mt-5 font-black">INSPECTION</div>
          <div className="mt-5">
            43. The Vendor shall accede to all such requests as may be made by
            the Purchaser for the inspection on a reasonable number of occasions
            and at reasonable times of the Subject Property (and the Purchased
            Chattels).
          </div>
          <div className="mt-5 font-black">NON-MERGER</div>
          <div className="mt-5">
            44. Notwithstanding delivery of the Assurance of the Subject
            Property to the Purchaser on foot of the Sale, all obligations and
            provisions designed to survive Completion and all warranties in the
            Conditions contained, which shall not have been implemented by the
            said Assurance, and which shall be capable of continuing or taking
            effect after Completion, shall enure and remain in full force and
            effect.
          </div>
          <div className="mt-5 font-black">NOTICES</div>
          <div className="mt-5">
            45. Unless otherwise expressly provided, any notice to be given or
            served on foot of the Conditions shall be in writing, and may (in
            addition to any other prescribed mode of service) be given:
          </div>

          <div className="mt-5">
            (a) by handing same to the intended recipient, and shall be deemed
            to have been delivered when so handed
          </div>

          <div className="mt-5">
            (b) by directing it to the intended recipient, and delivering it by
            hand, or sending same by prepaid post to:
          </div>

          <div className="mt-5 ml-10">
            {" "}
            (i) such address as shall have been advised by him to the party
            serving the notice as being that required by the intended recipient
            for the service of notices or
          </div>

          <div className="mt-5 ml-10">
            {" "}
            (ii) (failing such last mentioned advice) the address of the
            intended recipient as specified in the Memorandum or
          </div>

          <div className="mt-5 ml-10">
            {" "}
            (iii) (in the event of the intended recipient being a company) its
            registered office for the time being or
          </div>

          <div className="mt-5 ml-10">
            (iv) the office of the solicitor representing the intended recipient
            in relation to the Sale
          </div>

          <div className="mt-5">
            (c) by facsimile transmission directed to the office of the
            solicitor representing the intended recipient in relation to the
            Sale
          </div>

          <div className="mt-5">
            (d) by email sent to the Nominated Email Address (if any) and any
            such notice shall be deemed to have been given or served, when
            delivered, at the time of delivery, and, when posted, at the
            expiration of three Working Days after the envelope containing the
            same, and properly addressed, was put in the post and, when sent by
            facsimile transmission or email, at the time of its transmission.
          </div>
          <div className="mt-5 font-black">TIME LIMITS</div>
          <div className="mt-5">
            46. Where the last day for taking any step on foot of the Conditions
            or any notice served thereunder would, but for this provision, be a
            day (whether or not a Working Day) on which the registers or records
            wherein it shall be appropriate to make searches referable to the
            Sale shall not be available to the public, then such last day shall
            instead be the next following Working Day which is not the subject
            of this circumstance.
          </div>
          <div className="mt-5 font-black">DISPUTE RESOLUTION</div>
          <div className="mt-5">
            {" "}
            47. All differences and disputes between the Vendor and the
            Purchaser as to:
          </div>

          <div className="mt-5">
            (a) whether any Requisitions or Rejoinders have been validly raised
            in accordance with General Condition 7 or, if so raised, whether
            they have been satisfactorily addressed by the Vendor or
          </div>

          <div className="mt-5">
            (b) whether a rent is or is not a rack rent for the purposes of
            General Condition9(b)(iii) or
          </div>

          <div className="mt-5">
            (c) the identification of the Apportionment Date, or the treatment
            or quantification of any item pursuant to the provisions for
            apportionment in the Conditions or
          </div>

          <div className="mt-5">
            (d) any issue on foot of General Condition 29, including the
            applicability of said Condition, and the amount of compensation
            payable thereunder or
          </div>

          <div className="mt-5">
            (e) the applicability or materiality of any matter, or the effect on
            the value of the Subject Property of any matter, pursuant to General
            Condition 31 or
          </div>

          <div className="mt-5">
            (f ) the materiality of any matter for the purposes of General
            Condition 32(a)(i), or the relevance or materiality, or effect on
            the value of the Subject Property, of any matter pursuant to General
            Condition 32(f )(ii) or
          </div>

          <div className="mt-5">
            (g) the materiality of damage or any other question involving any of
            the provisions in General Conditions 39, 40 and 41 including the
            amount of compensation (if any) payable or
          </div>

          <div className="mt-5">
            (h) whether any particular item or thing is or is not included in
            the Sale, or otherwise as to the nature or condition thereof or
          </div>

          <div className="mt-5">
            (i) the terms of the Assurance shall (unless otherwise agreed by the
            parties) in the first instance be referred to mediation. To initiate
            the mediation a party shall give notice in writing (the “Mediation
            Notice”) to the other party requesting mediation. Unless otherwise
            agreed between the parties, the mediator will be nominated on the
            application of either party by the President for the time being of
            the Law Society of Ireland or, should the said President be absent,
            unwilling or unable to do so, by the next senior officer of that
            Society who is ready, willing and able to make the nomination,
            whereupon the mediator will be appointed by the parties. The
            mediation will start not later than twenty eight days after the date
            of appointment of the mediator. No party will commence court
            proceedings or arbitration in relation to any difference or dispute
            referred to in this Condition unless he has attempted to settle the
            dispute by mediation. If the mediation does not start within twenty
            eight days (or such longer period as the parties agree in writing)
            from the date of appointment of the mediator or if the parties are
            unable to resolve the difference or dispute by mediation within
            fifty six days from the date of appointment of the mediator the
            difference or dispute shall be submitted to arbitration by a sole
            arbitrator to be appointed (in the absence of agreement between the
            parties upon such appointment and on the application of either of
            them) by the President (or other officer endowed with the functions
            of such President) for the time being of the Law Society of Ireland
            or (in the event of the President or other officer as aforesaid
            being unable or unwilling to make the appointment) by the next
            senior officer of that Society who is so able and willing to make
            the appointment and such arbitration shall be governed by the
            Arbitration Act 2010 provided however that if the arbitrator shall
            relinquish his appointment or die, or if it shall become apparent
            that for any reason he shall be unable or shall have become unfit or
            unsuited (whether because of bias or otherwise) to complete his
            duties, or if he shall be removed from office by court order, a
            substitute may be appointed in his place and in relation to any such
            appointment the procedures hereinbefore set forth shall be deemed to
            apply as though the substitution were an appointment de novo which
            said procedures may be repeated as many times as may be necessary.
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
