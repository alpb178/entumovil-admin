import TopImage from "@/component/topImage";
import { saveTXT, saveWord } from "@/lib/utils";
import { useState } from "react";
export default function ContractDrafterEnEU() {
  const [json, setJson] = useState({input1:'',input2:'',input3:'',input4:'',input5:'',input6:'',input7:'',input8:'',input9:'',input10:''});
  const handleChangeV2 = (value, field) => {
    const newState = { ...json, [field]: value };
    setJson(newState);
  };
  return (
    <div className="text-xl md:w-full">
      <TopImage
        name="Redactor de Documentos"
        description="Plantilla EE.UU"
        imageUrl="cabecera-contratos-inmocor.jpg"
      />
       <form
      id="myform"
      className="mx-auto mt-5 w-full m-16  text-xl  text-gray"
      onSubmit={(e) => {
        event.preventDefault();
        const buttonName = e.nativeEvent.submitter.name;
        if (buttonName === "Word") {
          saveWord( "LOUISIANA RESIDENTIAL AGREEMENT TO BUY OR SELL", "content", json),
            document.getElementById("myform").reset();
        }
        if (buttonName === "TXT") {
          saveTXT( "LOUISIANA RESIDENTIAL AGREEMENT TO BUY OR SELL", "content", json),
            document.getElementById("myform").reset();
        }
      }}
    >
    <div id='content' className="m-10">
      
          <div className="border">
            <div className="flex m-11 space-x-20">
              <div className="mr-0 w-80 flex-grow ">
                <input
                  id="1"
                  name="input1"
                  onChange={(e)=>handleChangeV2(e.target.value,e.target.name)}
                  type="text"
                  className="border-gray-400 required ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
                ></input>
                <p className=" ml-5 mt-2">Listing Firm</p>

                <input
                  id="1"
                  name="input2"
                  type="text"
                  className="border-gray-400 required mt-10 ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
                ></input>
                <p className=" ml-5 mt-2">Seller’s Designated</p>

                <div className="mt-10 flex overflow-x-auto">
                  <div>
                    <input
                      id="1"
                      name="input1"
                      type="text"
                      className="border-gray-400 required ml-1 mr-1 w-80 w-auto border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Phone Number</p>
                  </div>

                  <div>
                    <input
                      id="1"
                      name="input1"
                      type="text"
                      className="border-gray-400 required ml-1 mr-1 w-80 w-auto border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Office</p>
                  </div>

                  <div>
                    <input
                      id="1"
                      name="input1"
                      type="text"
                      className="border-gray-400 required ml-1 mr-1 w-80 w-auto border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Fax</p>
                  </div>
                </div>

                <input
                  id="1"
                  name="input1"
                  type="text"
                  className="border-gray-400 required mt-10 ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
                ></input>
                <p className=" ml-5 mt-2">Email Address</p>

                <input
                  id="1"
                  name="input1"
                  type="text"
                  className="border-gray-400 required mt-10 ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
                ></input>
                <p className=" ml-5 mt-2">Delivered by Designated Agent to</p>
              </div>

              <div className="mx-1/2 my-1/2 mt-40 h-10 w-10">
                <input
                  id="1"
                  name="input1"
                  type="text"
                  className="border-gray-400 required ml-1 mr-1 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <p className="mt-2 text-center">Dual Agent</p>
              </div>

              <div className="mr-0 w-80 flex-grow ">
                <input
                  id="1"
                  name="input1"
                  type="text"
                  className="border-gray-400 required ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
                ></input>
                <p className=" ml-5 mt-2">Selling Firm</p>

                <input
                  id="1"
                  name="input1"
                  type="text"
                  className="border-gray-400 required mt-10 ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
                ></input>
                <p className=" ml-5 mt-2">Buyer’s Designated Agent</p>

                <div className="mt-10 flex">
                  <div className="mr-1">
                    <input
                      id="1"
                      name="input1"
                      type="text"
                      className="border-gray-400 required ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Phone Number</p>
                  </div>

                  <div className="mr-1">
                    <input
                      id="1"
                      name="input1"
                      type="text"
                      className="border-gray-400 required ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Office</p>
                  </div>

                  <div className="mr-1">
                    <input
                      id="1"
                      name="input1"
                      type="text"
                      className="border-gray-400 required ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Fax</p>
                  </div>
                </div>

                <input
                  id="1"
                  name="input1"
                  type="text"
                  className="border-gray-400 required mt-10 ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
                ></input>
                <p className=" ml-5 mt-2">Email Address</p>

                <div className="mt-10 flex">
                  <div className="mr-1">
                    <input
                      id="1"
                      name="input1"
                      type="text"
                      className="border-gray-400 required ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Day</p>
                  </div>

                  <div className="mr-1">
                    <input
                      id="1"
                      name="input1"
                      type="text"
                      className="border-gray-400 required ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Date</p>
                  </div>

                  <div className="mr-1">
                    <input
                      id="1"
                      name="input1"
                      type="text"
                      className="border-gray-400 required ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Time</p>
                  </div>
                  <div className="mr-1">
                    <input
                      id="1"
                      name="input1"
                      type="text"
                      className="border-gray-400 required ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">AM/PM</p>
                  </div>
                </div>
              </div>
            </div>

<div className=" m-11 space-x-20">
<input
              id="1"
              name="input1"
              type="text"
              className="border-gray-400 w-full mt-10  mr-16  border-b-2 outline-none focus:border-blue-400"
            ></input>
            <p className=" ml-5 mt-2">Comments</p>
          </div>
            <div className="flex m-11 space-x-20">
              <div className="mt-10 mr-0 w-80 flex-grow ">
                <input
                  id="1"
                  name="input1"
                  type="text"
                  className="border-gray-400 required ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
                ></input>
                <p className=" ml-5 mt-2">Received by Designated Agent</p>
              </div>

              <div className="mr-0 w-80 flex-grow ">
                <div className="mt-10 flex">
                  <div className=" mr-1">
                    <input
                      id="1"
                      name="input1"
                      type="text"
                      className="border-gray-400 required ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Day</p>
                  </div>

                  <div className=" mr-1">
                    <input
                      id="1"
                      name="input1"
                      type="text"
                      className="border-gray-400 required ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Date</p>
                  </div>

                  <div className=" mr-1">
                    <input
                      id="1"
                      name="input1"
                      type="text"
                      className="border-gray-400 required ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Time</p>
                  </div>
                  <div className=" mr-1">
                    <input
                      id="1"
                      name="input1"
                      type="text"
                      className="border-gray-400 required ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">AM/PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
      

  
        <div className="m-11 space-x-20">
          <p className="mb-6 text-center text-4xl font-black">
            LOUISIANA RESIDENTIAL AGREEMENT TO BUY OR SELL
          </p>
          <div className="ml-10 mt-10 mr-0 flex w-full">
            <p className=" mt-2">Date:</p>
            <input
              id="1"
              name="input1"
              type="text"
              className="border-gray-400 required ml-1 mr-1  w-1/2 border-b-2 outline-none focus:border-blue-400"
            ></input>
          </div>

          <div className=" ml-10 mt-10  flex">
            <p className=" font-black">PROPERTY DESCRIPTION:</p>
            <p className="">
              I/We offer and agree to Buy/Sell the property at:
            </p>
          </div>

          <div className="ml-10 mt-10 mr-0 flex w-full">
            <p className=" mt-2">(Municipal Address)</p>
            <input
              id="1"
              name="input1"
              type="text"
              className="border-gray-400 required ml-1 mr-1  w-1/2 border-b-2 outline-none focus:border-blue-400"
            ></input>
          </div>

          <div className="ml-5 mr-0 flex w-full">
            <div className="ml-5 mt-10 mr-0 flex">
              <p className=" mt-2">City</p>
              <input
                id="1"
                name="input1"
                type="text"
                className="border-gray-400 required ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
              ></input>
            </div>
            <div className="mt-10 mr-0 flex">
              <p className=" mt-2">;</p>
            </div>
            <div className="ml-2 mt-10 mr-0 flex">
              <p className=" mt-2">Zip</p>
              <input
                id="1"
                name="input1"
                type="text"
                className="border-gray-400 required ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
              ></input>
            </div>
            <div className="mt-10 mr-0 flex">
              <p className=" mt-2">;</p>
            </div>
            <div className="ml-2 mt-10 mr-0 flex">
              <p className=" mt-2">Parish</p>
              <input
                id="1"
                name="input1"
                type="text"
                className="border-gray-400 required ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
              ></input>
            </div>
            <div className="mt-10 mr-0 flex">
              <p className=" mt-2">Louisiana,</p>
            </div>
          </div>
          <div className="ml-10 mt-2 mr-0 flex w-full">
            <p className=" mt-2">(Legal Description)</p>
            <input
              id="1"
              name="input1"
              type="text"
              className="border-gray-400 required ml-1 mr-1  w-3/5 border-b-2 outline-none focus:border-blue-400"
            ></input>
          </div>
          <div className="ml-10 flex">
            <p className=" mt-2">
              on lands and grounds measuring approximately
            </p>
            <input
              id="1"
              name="input1"
              type="text"
              className="border-gray-400 required ml-1 mr-1  w-1/2 border-b-2 outline-none focus:border-blue-400"
            ></input>
          </div>
          <div className="ml-10 flex">
            <p className=" mt-2 mr-5 text-justify">
              or as per record title; including all buildings, structures,
              component parts, and all installed, built-in, permanently 11
              attached improvements, together with all fences, security systems,
              all installed speakers or installed sound 12 systems, all
              landscaping, all outside TV antennas, all satellite dishes, all
              installed and/or built-in appliances, all 13 ceiling fans, all air
              conditioning or heating systems including window units, all
              bathroom mirrors, all window 14 coverings, blinds and associated
              hardware, all shutters, all flooring, all carpeting, all cabinet
              tops, all cabinet 15 knobs or handles, all doors, all door knobs
              or handles, all windows, all roofing, all electrical systems, and
              all 16 installed lighting fixtures, chandeliers and associated
              hardware, other constructions permanently attached to the 17
              ground. If owned by the SELLER prior to date of this Agreement,
              standing timber, unharvested crops and 18 ungathered fruits of
              trees on the property shall be conveyed to the BUYER. The
              following movable items here 19 remain with the property, but are
              not to be considered as part of the Sale Price and have no value:
              <input
                id="1"
                name="input1"
                type="text"
                className="border-gray-400 required mr ml-1 w-40 border-b-2 outline-none focus:border-blue-400"
              ></input>
            </p>
          </div>
          <div className="ml-10 flex">
            <input
              id="1"
              name="input1"
              type="text"
              className="border-gray-400 required mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
          </div>
          <div className="ml-10 flex">
            <input
              id="1"
              name="input1"
              type="text"
              className="border-gray-400 required mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
          </div>
          <div className="ml-10 flex">
            <input
              id="1"
              name="input1"
              type="text"
              className="border-gray-400 required mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
            ></input>
          </div>
          <div className="ml-10 flex">
            <p className=" mt-2 mr-5 text-justify">
              All items listed herein are included in the property sold no
              matter how they are attached or installed, provided that 24 any or
              all of these items are in place at the time of signing of this
              Agreement to Buy or Sell (the 25 “Agreement”),unless otherwise
              stated herein. (All of the above contained in lines 5 through 22
              are collectively 26 referred to herein as the “Property.”) The
              following items are excluded from the Property sold:
              <input
                id="1"
                name="input1"
                type="text"
                className="border-gray-400 required mr ml-1 w-full border-b-2 outline-none focus:border-blue-400"
              ></input>
              <input
                id="1"
                name="input1"
                type="text"
                className="border-gray-400 required mr ml-1 w-full border-b-2 outline-none focus:border-blue-400"
              ></input>
            </p>
          </div>
          <p className="mt-10 ml-10 text-2xl font-black">MINERAL RIGHTS:</p>
          <div className="ml-10 flex">
            <p className=" mt-2 mr-5 text-justify">
              If the SELLER transfers any mineral rights, they are to be
              transferred without warranty.
              <input
                id="1"
                name="input1"
                type="text"
                className="border-gray-400 required mr ml-1 w-40 border-b-2 outline-none focus:border-blue-400"
              ></input>{" "}
              % mineral rights owned by the SELLER are to be reserved by the
              SELLER and the SELLER shall waive any right to use the surface for
              any such reserved mineral activity or use.
            </p>
          </div>
          <p className="mt-10 ml-10 text-2xl font-black">PRICE:</p>
          <div className="ml-10 flex">
            <p className=" mt-2 mr-5 text-justify">
              The Property will be sold and purchased subject to title and
              zoning restrictions, servitudes of record, and 35 law or
              ordinances affecting the Property for the sum of
              <input
                id="1"
                name="input1"
                type="text"
                className="border-gray-400 required mr ml-1 w-1/2 border-b-2 outline-none focus:border-blue-400"
              ></input>{" "}
              Dollars ($
              <input
                id="1"
                name="input1"
                type="text"
                className="border-gray-400 required mr ml-1 w-40 border-b-2 outline-none focus:border-blue-400"
              ></input>
              ) (the “Sale Price”).
            </p>
          </div>

          <p className="mt-10 ml-10 text-2xl font-black">ACT OF SALE:</p>
          <div className="ml-10 flex">
            <p className=" mt-2 mr-5 text-justify">
              The Act of Sale is to be executed before a settlement agent or
              Notary Public to be chosen by the BUYER, on
              <input
                id="1"
                name="input1"
                type="text"
                className="border-gray-400 required mr ml-1 w-40 border-b-2 outline-none focus:border-blue-400"
              ></input>{" "}
              , 20
              <input
                id="1"
                name="input1"
                type="text"
                className="border-gray-400 required mr ml-1 w-20 border-b-2 outline-none focus:border-blue-400"
              ></input>
              , or before if mutually agreed upon. Any change of the date for
              execution of the Act of Sale must be mutually agreed upon in
              writing and signed by the SELLER and the BUYER. At closing, the
              BUYER must provide "good funds" as required by Louisiana statute
              LA R.S. 22:2092.2 et seq.
            </p>
          </div>
          <p className="mt-10 ml-10 text-2xl font-black">OCCUPANCY:</p>
          <div className="ml-10 flex">
            <p className=" mt-2 mr-5 text-justify">
              Occupancy/possession and transfer of keys is to be granted at Act
              of Sale unless mutually agreed upon in writing.
            </p>
          </div>
          <div className="flex space-x-98">
            <div className="">
              <p className="mt-20 ml-10 flex text-2xl">
                BUYER’S Initials
                <div className="flex ">
                  <input
                    id="1"
                    name="input1"
                    type="text"
                    className="border-gray-400 required mr ml-2 w-20 border-b-2 outline-none focus:border-blue-400"
                  ></input>
                  <input
                    id="1"
                    name="input1"
                    type="text"
                    className="border-gray-400 required mr ml-5 w-20 border-b-2 outline-none focus:border-blue-400"
                  ></input>
                </div>
              </p>
            </div>
            <div className="">
              <p className="mt-20 ml-10 flex text-2xl">
              SELLER’S Initials
                <div className=" flex">
                  <input
                    id="1"
                    name="input1"
                    type="text"
                    className="border-gray-400 required mr ml-2 w-20 border-b-2 outline-none focus:border-blue-400"
                  ></input>
                  <input
                    id="1"
                    name="input1"
                    type="text"
                    className="border-gray-400 required mr ml-5 w-20 border-b-2 outline-none focus:border-blue-400"
                  ></input>
                </div>
              </p>
            </div>
          </div>
        </div>
    

      </div>

      <div className="flex">
        <button
          className="mr-auto  mb-5 ml-5 flex flex rounded bg-gradient-to-r from-gradient-for-footer to-gradient-to py-2 px-4 font-bold text-white"
          type="submit"
          name="TXT"
        >
          Descargar TXT
        </button>
        <button
          className="ml-auto  mb-5 mr-5 flex flex rounded bg-gradient-to-r from-gradient-for-footer to-gradient-to py-2 px-4 font-bold text-white"
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
