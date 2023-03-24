import TopImage from "@/component/topImage";
import { stateForm } from "@/lib/drafter";
import { saveTXT, saveWord } from "@/lib/utils";
import { useState } from "react";
export default function ContractDrafterEnEU() {
  const [json, setJson] = useState(stateForm);
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
        className="m-16 mx-auto mt-5 w-full  text-xl  text-gray"
        onSubmit={(e) => {
          event.preventDefault();
          const buttonName = e.nativeEvent.submitter.name;
          if (buttonName === "Word") {
            saveWord(
              "LOUISIANA RESIDENTIAL AGREEMENT TO BUY OR SELL",
              "content",
              json
            ),
              document.getElementById("myform").reset();
          }
          if (buttonName === "TXT") {
            saveTXT(
              "LOUISIANA RESIDENTIAL AGREEMENT TO BUY OR SELL",
              "content",
              json
            ),
              document.getElementById("myform").reset();
          }
        }}
      >
        <div id="content" className="m-10">
          <div className="border">
            <div className="m-11 flex space-x-20">
              <div className="mr-0 w-80 flex-grow ">
                <input
                  id="1"
                  name="input1"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
                ></input>
                <p className=" ml-5 mt-2">Listing Firm</p>

                <input
                  id="1"
                  name="input2"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  mt-10 ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
                ></input>
                <p className=" ml-5 mt-2">Seller’s Designated</p>

                <div className="mt-10 flex">
                  <div className="mr-1">
                    <input
                      id="1"
                      name="input3"
                      type="text"
                      onChange={(e) =>
                        handleChangeV2(e.target.value, e.target.name)
                      }
                      className="border-gray-400  ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Phone Number</p>
                  </div>

                  <div className="mr-1">
                    <input
                      id="1"
                      name="input4"
                      type="text"
                      onChange={(e) =>
                        handleChangeV2(e.target.value, e.target.name)
                      }
                      className="border-gray-400  ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Office</p>
                  </div>

                  <div className="mr-1">
                    <input
                      id="1"
                      name="input5"
                      type="text"
                      onChange={(e) =>
                        handleChangeV2(e.target.value, e.target.name)
                      }
                      className="border-gray-400  ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Fax</p>
                  </div>
                </div>

                <input
                  id="1"
                  name="input6"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  mt-10 ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
                ></input>
                <p className=" ml-5 mt-2">Email Address</p>

                <input
                  id="1"
                  name="input7"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  mt-10 ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
                ></input>
                <p className=" ml-5 mt-2">Delivered by Designated Agent to</p>
              </div>

              <div className="mx-1/2 my-1/2 mt-40 h-10 w-10">
                <input
                  id="1"
                  name="input8"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  ml-1 mr-1 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <p className="mt-2 text-center">Dual Agent</p>
              </div>

              <div className="mr-0 w-80 flex-grow ">
                <input
                  id="1"
                  name="input9"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
                ></input>
                <p className=" ml-5 mt-2">Selling Firm</p>

                <input
                  id="1"
                  name="input10"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  mt-10 ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
                ></input>
                <p className=" ml-5 mt-2">Buyer’s Designated Agent</p>

                <div className="mt-10 flex">
                  <div className="mr-1">
                    <input
                      id="1"
                      name="input11"
                      type="text"
                      onChange={(e) =>
                        handleChangeV2(e.target.value, e.target.name)
                      }
                      className="border-gray-400  ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Phone Number</p>
                  </div>

                  <div className="mr-1">
                    <input
                      id="12"
                      name="input12"
                      type="text"
                      onChange={(e) =>
                        handleChangeV2(e.target.value, e.target.name)
                      }
                      className="border-gray-400  ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Office</p>
                  </div>

                  <div className="mr-1">
                    <input
                      id="13"
                      name="input13"
                      type="text"
                      onChange={(e) =>
                        handleChangeV2(e.target.value, e.target.name)
                      }
                      className="border-gray-400  ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Fax</p>
                  </div>
                </div>

                <input
                  id="14"
                  name="input14"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  mt-10 ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
                ></input>
                <p className=" ml-5 mt-2">Email Address</p>

                <div className="mt-10 flex">
                  <div className="mr-1">
                    <input
                      id="15"
                      name="input15"
                      type="text"
                      onChange={(e) =>
                        handleChangeV2(e.target.value, e.target.name)
                      }
                      className="border-gray-400  ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Day</p>
                  </div>

                  <div className="mr-16">
                    <input
                      id="16"
                      name="input16"
                      type="text"
                      onChange={(e) =>
                        handleChangeV2(e.target.value, e.target.name)
                      }
                      className="border-gray-400  ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Date</p>
                  </div>

                  <div className="mr-17">
                    <input
                      id="17"
                      name="input17"
                      type="text"
                      onChange={(e) =>
                        handleChangeV2(e.target.value, e.target.name)
                      }
                      className="border-gray-400  ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Time</p>
                  </div>
                  <div className="mr-18">
                    <input
                      id="1"
                      name="input1"
                      type="text"
                      onChange={(e) =>
                        handleChangeV2(e.target.value, e.target.name)
                      }
                      className="border-gray-400  ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">AM/PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" m-11 space-x-20">
              <input
                id="19"
                name="input19"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400 mt-10 mr-16  w-full  border-b-2 outline-none focus:border-blue-400"
              ></input>
              <p className=" ml-5 mt-2">Comments</p>
            </div>
            <div className="m-11 flex space-x-20">
              <div className="mt-10 mr-0 w-80 flex-grow ">
                <input
                  id="20"
                  name="input20"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
                ></input>
                <p className=" ml-5 mt-2">Received by Designated Agent</p>
              </div>

              <div className="mr-0 w-80 flex-grow ">
                <div className="mt-10 flex">
                  <div className=" mr-1">
                    <input
                      id="21"
                      name="input21"
                      type="text"
                      onChange={(e) =>
                        handleChangeV2(e.target.value, e.target.name)
                      }
                      className="border-gray-400  ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Day</p>
                  </div>

                  <div className=" mr-1">
                    <input
                      id="22"
                      name="input22"
                      type="text"
                      onChange={(e) =>
                        handleChangeV2(e.target.value, e.target.name)
                      }
                      className="border-gray-400  ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Date</p>
                  </div>

                  <div className=" mr-1">
                    <input
                      id="23"
                      name="input23"
                      type="text"
                      onChange={(e) =>
                        handleChangeV2(e.target.value, e.target.name)
                      }
                      className="border-gray-400  ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p className=" ml-5 mt-2 text-center">Time</p>
                  </div>
                  <div className=" mr-1">
                    <input
                      id="24"
                      name="input24"
                      type="text"
                      onChange={(e) =>
                        handleChangeV2(e.target.value, e.target.name)
                      }
                      className="border-gray-400  ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
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
                id="25"
                name="input25"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  ml-1 mr-1  w-1/2 border-b-2 outline-none focus:border-blue-400"
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
                id="26"
                name="input26"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  ml-1 mr-1  w-1/2 border-b-2 outline-none focus:border-blue-400"
              ></input>
            </div>

            <div className="ml-5 mr-0 flex w-full">
              <div className="ml-5 mt-10 mr-0 flex">
                <p className=" mt-2">City</p>
                <input
                  id="27"
                  name="input27"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
                ></input>
              </div>
              <div className="mt-10 mr-0 flex">
                <p className=" mt-2">;</p>
              </div>
              <div className="ml-2 mt-10 mr-0 flex">
                <p className=" mt-2">Zip</p>
                <input
                  id="28"
                  name="input28"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
                ></input>
              </div>
              <div className="mt-10 mr-0 flex">
                <p className=" mt-2">;</p>
              </div>
              <div className="ml-2 mt-10 mr-0 flex">
                <p className=" mt-2">Parish</p>
                <input
                  id="29"
                  name="input29"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  ml-1 mr-1  w-80 border-b-2 outline-none focus:border-blue-400"
                ></input>
              </div>
              <div className="mt-10 mr-0 flex">
                <p className=" mt-2">Louisiana,</p>
              </div>
            </div>
            <div className="ml-10 mt-2 mr-0 flex w-full">
              <p className=" mt-2">(Legal Description)</p>
              <input
                id="30"
                name="input30"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  ml-1 mr-1  w-3/5 border-b-2 outline-none focus:border-blue-400"
              ></input>
            </div>
            <div className="ml-10 flex">
              <p className=" mt-2">
                on lands and grounds measuring approximately
              </p>
              <input
                id="31"
                name="input32"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  ml-1 mr-1  w-1/2 border-b-2 outline-none focus:border-blue-400"
              ></input>
            </div>
            <div className="ml-10 flex">
              <p className=" mt-2 mr-5 text-justify">
                or as per record title; including all buildings, structures,
                component parts, and all installed, built-in, permanently 11
                attached improvements, together with all fences, security
                systems, all installed speakers or installed sound 12 systems,
                all landscaping, all outside TV antennas, all satellite dishes,
                all installed and/or built-in appliances, all 13 ceiling fans,
                all air conditioning or heating systems including window units,
                all bathroom mirrors, all window 14 coverings, blinds and
                associated hardware, all shutters, all flooring, all carpeting,
                all cabinet tops, all cabinet 15 knobs or handles, all doors,
                all door knobs or handles, all windows, all roofing, all
                electrical systems, and all 16 installed lighting fixtures,
                chandeliers and associated hardware, other constructions
                permanently attached to the 17 ground. If owned by the SELLER
                prior to date of this Agreement, standing timber, unharvested
                crops and 18 ungathered fruits of trees on the property shall be
                conveyed to the BUYER. The following movable items here 19
                remain with the property, but are not to be considered as part
                of the Sale Price and have no value:
                <input
                  id="33"
                  name="input33"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  mr ml-1 w-40 border-b-2 outline-none focus:border-blue-400"
                ></input>
              </p>
            </div>
            <div className="ml-10 flex">
              <input
                id="34"
                name="input34"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
              ></input>
            </div>
            <div className="ml-10 flex">
              <input
                id="35"
                name="input35"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
              ></input>
            </div>
            <div className="ml-10 flex">
              <input
                id="36"
                name="input36"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
              ></input>
            </div>
            <div className="ml-10 flex">
              <p className=" mt-2 mr-5 text-justify">
                All items listed herein are included in the property sold no
                matter how they are attached or installed, provided that 24 any
                or all of these items are in place at the time of signing of
                this Agreement to Buy or Sell (the 25 “Agreement”),unless
                otherwise stated herein. (All of the above contained in lines 5
                through 22 are collectively 26 referred to herein as the
                “Property.”) The following items are excluded from the Property
                sold:
                <input
                  id="37"
                  name="input37"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  mr ml-1 w-full border-b-2 outline-none focus:border-blue-400"
                ></input>
                <input
                  id="38"
                  name="input38"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  mr ml-1 w-full border-b-2 outline-none focus:border-blue-400"
                ></input>
              </p>
            </div>
            <p className="mt-10 ml-10 text-2xl font-black">MINERAL RIGHTS:</p>
            <div className="ml-10 flex">
              <p className=" mt-2 mr-5 text-justify">
                If the SELLER transfers any mineral rights, they are to be
                transferred without warranty.
                <input
                  id="39"
                  name="input39"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  mr ml-1 w-40 border-b-2 outline-none focus:border-blue-400"
                ></input>{" "}
                % mineral rights owned by the SELLER are to be reserved by the
                SELLER and the SELLER shall waive any right to use the surface
                for any such reserved mineral activity or use.
              </p>
            </div>
            <p className="mt-10 ml-10 text-2xl font-black">PRICE:</p>
            <div className="ml-10 flex">
              <p className=" mt-2 mr-5 text-justify">
                The Property will be sold and purchased subject to title and
                zoning restrictions, servitudes of record, and 35 law or
                ordinances affecting the Property for the sum of
                <input
                  id="40"
                  name="input40"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  mr ml-1 w-1/2 border-b-2 outline-none focus:border-blue-400"
                ></input>{" "}
                Dollars ($
                <input
                  id="41"
                  name="input42"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  mr ml-1 w-40 border-b-2 outline-none focus:border-blue-400"
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
                  id="43"
                  name="input43"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  mr ml-1 w-40 border-b-2 outline-none focus:border-blue-400"
                ></input>{" "}
                , 20
                <input
                  id="44"
                  name="input44"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  mr ml-1 w-20 border-b-2 outline-none focus:border-blue-400"
                ></input>
                , or before if mutually agreed upon. Any change of the date for
                execution of the Act of Sale must be mutually agreed upon in
                writing and signed by the SELLER and the BUYER. At closing, the
                BUYER must provide "good funds" as by Louisiana statute LA R.S.
                22:2092.2 et seq.
              </p>
            </div>
            <p className="mt-10 ml-10 text-2xl font-black">OCCUPANCY:</p>
            <div className="ml-10 flex">
              <p className=" mt-2 mr-5 text-justify">
                Occupancy/possession and transfer of keys is to be granted at
                Act of Sale unless mutually agreed upon in writing.
              </p>
            </div>
            <div className="flex space-x-98">
              <div className="">
                <p className="mt-20 ml-10 flex text-2xl">
                  BUYER’S Initials
                  <div className="flex ">
                    <input
                      id="45"
                      name="input45"
                      type="text"
                      onChange={(e) =>
                        handleChangeV2(e.target.value, e.target.name)
                      }
                      className="border-gray-400  mr ml-2 w-20 border-b-2 outline-none focus:border-blue-400"
                    ></input>
                    <input
                      id="46"
                      name="input46"
                      type="text"
                      onChange={(e) =>
                        handleChangeV2(e.target.value, e.target.name)
                      }
                      className="border-gray-400  mr ml-5 w-20 border-b-2 outline-none focus:border-blue-400"
                    ></input>
                  </div>
                </p>
              </div>
              <div className="">
                <p className="mt-20 ml-10 flex text-2xl">
                  SELLER’S Initials
                  <div className=" flex">
                    <input
                      id="47"
                      name="input47"
                      type="text"
                      onChange={(e) =>
                        handleChangeV2(e.target.value, e.target.name)
                      }
                      className="border-gray-400  mr ml-2 w-20 border-b-2 outline-none focus:border-blue-400"
                    ></input>
                    <input
                      id="48"
                      name="input48"
                      type="text"
                      onChange={(e) =>
                        handleChangeV2(e.target.value, e.target.name)
                      }
                      className="border-gray-400  mr ml-5 w-20 border-b-2 outline-none focus:border-blue-400"
                    ></input>
                  </div>
                </p>
              </div>
            </div>

            <div className="mt-40 flex space-x-20 ">
              <div className="mr-1 w-1/2">
                <input
                  id="49"
                  name="input49"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <p className=" ml-5 mt-2 text-center">
                  Property address, street, city, state, zip{" "}
                </p>
              </div>

              <div className="mr-1 w-1/2">
                <input
                  id="50"
                  name="input50"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  ml-1 mr-1 w-full border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <p className=" ml-5 mt-2 text-center">Date</p>
              </div>
            </div>

            <div className="mt-20 ml-10 text-xl font-black underline">
              CONTINGENCY FOR SALE OF BUYER’S OTHER PROPERTY:
            </div>
            <div className="mt-2 flex h-10">
              <input
                id="51"
                name="input51"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
              ></input>
              <p className="mt-1">
                This sale is contingent on the sale of other property by the
                BUYER and the attached contingency clause addendum shall apply.
              </p>
            </div>
            <div className="mt-2 flex h-10">
              <input
                id="52"
                name="input52"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-40 ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
              ></input>
              <p className="mt-1">
                This sale is not contingent upon the sale of other property by
                the BUYER nor is the loan needed by the BUYER to obtain the Sale
                Price contingent on the BUYER’S sale of any property.
              </p>
            </div>
            <div className="mt-10 flex h-10">
              <input
                id="53"
                name="input53"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-40 ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
              ></input>
              <p className="mt-1">
                <a className=" font-black">ALL CASH SALE:</a> The BUYER warrants
                the BUYER has cash readily available to close the sale of this
                Property
              </p>
            </div>
            <div className="mt-10 flex h-10 text-justify">
              <input
                id="54"
                name="input54"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-40 ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
              ></input>
              <p className="mt-1">
                <a className=" font-black">FINANCED SALE:</a> : This sale is
                conditioned upon the ability of BUYER to borrow with this
                Property as security for the loan the sum of $
                <input
                  id="55"
                  name="input55"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  mr ml-1 w-40 border-b-2 outline-none focus:border-blue-400"
                ></input>{" "}
                or{" "}
                <input
                  id="56"
                  name="input56"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  mr ml-1 w-20 border-b-2 outline-none focus:border-blue-400"
                ></input>
                % of the Sale Price by a mortgage loan or loans at an initial
                interest rate not to exceed{" "}
                <input
                  id="57"
                  name="input57"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  mr ml-1 w-20 border-b-2 outline-none focus:border-blue-400"
                ></input>
                % per annum, interest and principal, amortized over a period of
                not less than{" "}
                <input
                  id="59"
                  name="input59"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  mr ml-1 w-20 border-b-2 outline-none focus:border-blue-400"
                ></input>{" "}
                years, payable in monthly installments or on any other terms as
                may be acceptable to the BUYER provided that these terms do not
                increase the cost, fees or expenses to the SELLER. The loan
                shall be secured by:
              </p>
            </div>
            <div className="mt-32 flex">
              <div className="w-1/2">
                <div className="mt-2 flex h-10">
                  <input
                    id="60"
                    name="input60"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                  ></input>
                  <p className="mt-1">Fixed Rate Mortgage</p>
                </div>
                <div className="mt-2 flex h-10">
                  <input
                    id="61"
                    name="input61"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                  ></input>
                  <p className="mt-1">Adjustable Rate Mortgage</p>
                </div>
                <div className="mt-2 flex h-10">
                  <input
                    id="62"
                    name="input62"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                  ></input>
                  <p className="mt-1">Rural Development</p>
                </div>
                <div className="mt-2 flex h-10">
                  <input
                    id="63"
                    name="input63"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                  ></input>
                  <p className="mt-1">VA Guaranteed Mortgage</p>
                </div>
              </div>
              <div className="ml-48 w-1/2">
                <div className="mt-2 flex h-10">
                  <input
                    id="64"
                    name="input64"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                  ></input>
                  <p className="mt-1">FHA Insured Mortgage</p>
                </div>
                <div className="mt-2 flex h-10">
                  <input
                    id="65"
                    name="input65"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                  ></input>
                  <p className="mt-1">Owner Financing</p>
                </div>
                <div className="mt-2 flex h-10">
                  <input
                    id="66"
                    name="input66"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                  ></input>
                  <p className="mt-1">Bond Financing</p>
                </div>
                <div className="mt-2 flex h-10">
                  <input
                    id="67"
                    name="input68"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                  ></input>
                  <p className="mt-1 flex">Other</p>
                  <input
                    id="69"
                    name="input69"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  ml-1 w-full border-b-2 outline-none focus:border-blue-400"
                  ></input>
                </div>
              </div>
            </div>
            <p className="mt-10 text-justify">
              The BUYER agrees to pay discount points not to exceed{" "}
              <input
                id="70"
                name="input70"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr ml-1 w-20 border-b-2 outline-none focus:border-blue-400"
              ></input>
              % of the loan amount. Other financing conditions:
              <input
                id="71"
                name="input71"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr ml-1 w-full border-b-2 outline-none focus:border-blue-400"
              ></input>
              <input
                id="72"
                name="input72"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr ml-1 w-full border-b-2 outline-none focus:border-blue-400"
              ></input>
              <input
                id="73"
                name="input73"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr ml-1 w-full border-b-2 outline-none focus:border-blue-400"
              ></input>
              . The BUYER acknowledges and warrants that the BUYER has available
              the funds which may be required to complete the sale of the
              Property including, but not limited to, the deposit, the down
              payment, closing costs, pre72 paid items, and other expenses. The
              BUYER shall supply the SELLER written documentation from a lender
              that a written loan application has been made within (
              <input
                id="74"
                name="input74"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr ml-1 w-20 border-b-2 outline-none focus:border-blue-400"
              ></input>
              ) calendar days after the date of acceptance of this offer by both
              parties. If the BUYER fails to make written loan application
              within this period, the SELLER may, at the SELLER’S option,
              terminate this Agreement, by giving the BUYER written notice of
              the SELLER’S termination. In the event the BUYER is not able to
              secure financing, the SELLER reserves the right to provide all or
              part of mortgage loan(s) under the terms set forth above.
            </p>
            <p className="mt-10 text-justify">
              <a className="font-black">PRORATIONS/OTHER COSTS:</a> Real estate
              taxes, flood insurance premium if assumed, rents, condominium
              dues, assessments, and/or other dues owed to homeowners
              associations and the like for the current year are to be prorated
              through the date of the Act of Sale. Act of Sale costs,
              abstracting costs, title search, title insurance and other costs
              required to obtain financing, shall be paid by the BUYER, unless
              otherwise stated herein. All necessary tax, mortgage, conveyance,
              release certificates or cancellations and the SELLER closing fees,
              if any, shall be paid by the SELLER. The SELLER shall pay all
              previous years’ taxes, assessments, condominium dues, and/or dues
              owed to homeowners associations and the like. All special
              assessments bearing against the Property prior to Act of Sale,
              other than those to be assumed by written agreement, as of the
              date of the Act of Sale, are to be paid by the SELLER.
            </p>
            <p className="mt-10 text-justify">
              <a className="font-black">APPRAISAL:</a> :{" "}
              <input
                id="75"
                name="input75"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  ml-1 mr-1 h-5 w-5 border border-b-2 text-center outline-none focus:border-blue-400"
              ></input>{" "}
              This sale is NOT conditioned on appraisal.{" "}
              <input
                id="76"
                name="input76"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  ml-1 mr-1 h-5 w-5 border border-b-2 text-center outline-none focus:border-blue-400"
              ></input>{" "}
              This sale IS conditioned on the appraisal of the Property being
              not less than the Sale Price. If the appraised value of the
              Property is equal to or greater than the Sale Price, the BUYER
              shall pay the Sale Price agreed upon prior to the appraisal. If
              the appraised value is less than the Sale Price, the BUYER shall
              provide the SELLER with a copy of the appraisal within{" "}
              <input
                id="77"
                name="input77"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr ml-1 w-40 border-b-2 outline-none focus:border-blue-400"
              ></input>{" "}
              ({" "}
              <input
                id="78"
                name="input78"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr ml-1 w-20 border-b-2 outline-none focus:border-blue-400"
              ></input>
              ) calendar days of receipt of same, along with the BUYER’S written
              request for the SELLER to reduce the Sale Price. Within{" "}
              <input
                id="79"
                name="input79"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr ml-1 w-40 border-b-2 outline-none focus:border-blue-400"
              ></input>{" "}
              ({" "}
              <input
                id="80"
                name="input80"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr ml-1 w-20 border-b-2 outline-none focus:border-blue-400"
              ></input>
              ) calendar days after the SELLER’S receipt of such written
              documentation of the appraised value, the BUYER shall have the
              option to pay the Sale Price agreed upon prior to the appraisal or
              to void this Agreement unless the SELLER agrees in writing to
              reduce the Sale Price to the appraised value or all parties agree
              to a new Sale Price.
            </p>
            <p className="mt-10 text-justify">
              <a className="font-black">DEPOSIT:</a>Upon acceptance of this
              offer, or any attached counter offer, the SELLER and the BUYER
              shall be bound by all terms and conditions of this Agreement, and
              the BUYER or the BUYER’S agent shall deliver immediately, upon
              notice of acceptance of the offer, the BUYER’S deposit (the
              “Deposit”) in the amount of $
              <input
                id="81"
                name="input81"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr ml-1 w-20 border-b-2 outline-none focus:border-blue-400"
              ></input>{" "}
              or{" "}
              <input
                id="82"
                name="input82"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr ml-1 w-20 border-b-2 outline-none focus:border-blue-400"
              ></input>
              % of the Sale Price to be paid in the form of:
              <input
                id="83"
                name="input83"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  ml-1 mr-1 h-5 w-5 border border-b-2 text-center outline-none focus:border-blue-400"
              ></input>{" "}
              Cash $
              <input
                id="84"
                name="input4"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr ml-1 w-20 border-b-2 outline-none focus:border-blue-400"
              ></input>{" "}
              <input
                id="85"
                name="input85"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  ml-1 mr-1 h-5 w-5 border border-b-2 text-center outline-none focus:border-blue-400"
              ></input>{" "}
              Promissory Note $
              <input
                id="86"
                name="input86"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr ml-1 w-40 border-b-2 outline-none focus:border-blue-400"
              ></input>
              <input
                id="87"
                name="input87"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  ml-1 mr-1 h-5 w-5 border border-b-2 text-center outline-none focus:border-blue-400"
              ></input>{" "}
              Check $
              <input
                id="88"
                name="input88"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr ml-1 w-40 border-b-2 outline-none focus:border-blue-400"
              ></input>
              The Deposit shall be held by{" "}
              <input
                id="89"
                name="input89"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr ml-1 w-full border-b-2 outline-none focus:border-blue-400"
              ></input>
            </p>
            <p className="mt-10 text-justify">
              Failure to deliver the Deposit shall be considered a default of
              this Agreement. If the Deposit is held by a Broker, it must be
              held in accordance with the rules of the Louisiana Real Estate
              Commission in a federally insured banking or savings and loan
              institution without responsibility on the part of the Broker in
              the case of failure or suspension of such institution. In the
              event the parties fail to execute an Act of Sale by date specified
              herein, and/or a dispute arises as to ownership of, or entitlement
              to, the Deposit or funds held in escrow, the Broker shall abide by
              the Rules and Regulations set forth by the Louisiana Real Estate
              Commission.
            </p>
            <p className="mt-10 text-justify">
              <a className="font-black">RETURN OF DEPOSIT:</a> The Deposit shall
              be returned to the BUYER and this Agreement declared null and void
              without demand in consequence of the following events:
              <p className="mt-5">
                1) If this Agreement is declared null and void by the BUYER
                during the inspection and due diligence period as set forth in
                lines 157 through 187 of this Agreement;
              </p>
              <p className="mt-5">
                2) If this Agreement is subject to the BUYER’S ability to obtain
                a loan and the loan cannot be obtained, except as stated in
                lines 70 through 77 of this Agreement, but only if the BUYER has
                made timely application for the loan and made good faith efforts
                to obtain the loan;{" "}
              </p>
              <p className="mt-5">
                3) If the BUYER conditions the Sale Price on an appraisal and
                the appraisal is less than the Sale Price and the SELLER will
                not reduce the Sale Price as set forth in lines 89 through 97 of
                this Agreement;
              </p>
              <p className="mt-5">
                4) If the BUYER timely terminates the Agreement after having
                received the leases or assessments, as set forth in lines 138
                through 143 of this Agreement;
              </p>
              <p className="mt-5">
                5) If the SELLER is unable to timely deliver to the BUYER an
                approved sewerage and/or water inspection report as set forth in
                lines 189 through 199.
              </p>
              <p className="mt-5">
                6.) If the SELLER chooses not to repair or replace the sewer
                system(s) as per the SEPTIC/WATER WELL ADDENDUM, and the BUYER
                terminates the agreement as a result thereof.
              </p>
              <p className="mt-5">
                7.) If the SELLER chooses not to repair or replace the private
                water well system(s) as per the SEPTIC/WATER WELL ADDENDUM, and
                the BUYER terminates the agreement as a result thereof.
              </p>
            </p>
            <p className="mt-10 text-justify">
              <a className="font-black">LEASES/SPECIAL ASSESSMENTS:</a> If the
              property to be sold is completed new construction, under
              construction, or to be constructed, check one:
              <div className="flex">
                <input
                  id="90"
                  name="input90"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400 ml-1 mr-1 mt-1  h-5 w-5 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <p>
                  A new home construction addendum, with additional terms and
                  conditions, is attached.
                </p>
              </div>
              <div className="flex">
                <input
                  id="91"
                  name="input91"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400 ml-1 mr-1 mt-1  h-5 w-5 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <p>There is no new home construction addendum.</p>
              </div>
            </p>
            <p className="mt-10 text-justify">
              <a className="font-black">INSPECTION AND DUE DILIGENCE PERIOD:</a>{" "}
              The BUYER ACKNOWLEDGES THAT THE SALE PRICE OF THE PROPERTY WAS
              NEGOTIATED BASED UPON THE PROPERTY'S APPARENT CURRENT CONDITION;
              ACCORDINGLY, the SELLER IS NOT OBLIGATED TO MAKE REPAIRS TO THE
              PROPERTY, INCLUDING REPAIRS REQUIRED BY THE LENDER UNLESS
              OTHERWISE STATED HEREIN. THE SELLER IS RESPONSIBLE FOR MAINTAINING
              THE PROPERTY IN SUBSTANTIALLY THE SAME OR BETTER CONDITION AS IT
              WAS WHEN THE AGREEMENT WAS FULLY EXECUTED.{" "}
            </p>
            <p className="mt-10 text-justify">
              The BUYER shall have an inspection and due diligence period of (
              <input
                id="92"
                name="input92"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr ml-1 w-20 border-b-2 outline-none focus:border-blue-400"
              ></input>
              ) calendar days, commencing the first day after acceptance of this
              Agreement wherein, the BUYER may, at the BUYER’S expense, have any
              inspections made by experts or others of his choosing. Such
              physical inspections may include, but are not limited to,
              inspections for termites and other wood destroying insects, and/or
              damage from same, molds, and fungi hazards, and analysis of
              synthetic stucco, drywall, appliances, structures, foundations,
              roof, heating, cooling, electrical, plumbing systems, utility and
              sewer availability and condition, out-buildings, and square
              footage. Other due diligence by the BUYER may include, but is not
              limited to investigation into the property’s school district,
              insurability, flood zone classifications, current zoning and/or
              subdivision restrictive covenants and any items addressed in the
              SELLER’S Property Disclosure Document. All testing shall be
              nondestructive testing. The SELLER agrees to provide the utilities
              for inspections and immediate access. If the BUYER is not
              satisfied with the condition of the Property or the results of the
              BUYER’S due diligence investigation, the BUYER may choose one of
              the following options within the inspection and due diligence
              period:
            </p>
            <p className="mt-10 text-justify">
              <a className="font-black">Option 1:</a> The BUYER may elect, in
              writing, to terminate the Agreement and declare the Agreement null
              and void;
            </p>
            <p className="mt-10 text-justify">
              <a className="font-black">Option 2:</a> The BUYER may indicate in
              writing the deficiencies and desired remedies and the SELLER will
              within seventy two (72) hours respond in writing as to the
              SELLER’S willingness to remedy those deficiencies (“SELLER’S
              Response”).
            </p>
            <p className="mt-10 text-justify">
              Should the SELLER in the SELLER’S Response refuse to remedy any or
              all of the deficiencies listed by the BUYER, then the BUYER shall
              have seventy-two (72) hours from the date of the SELLER'S Response
              or seventy-two (72) hours from the date that the SELLER'S Response
              was due, whichever is earlier, to: (a) accept the SELLER'S
              Response to the BUYER’S written requests or (b) accept the
              Property in its current condition, or (c) to elect to terminate
              this Agreement. The BUYER’S response shall be in writing. Upon the
              BUYER'S failure to respond to the SELLER’S Response by the time
              specified or the BUYER’S electing, in writing, to terminate this
              Agreement, the Agreement shall be automatically, with no further
              action required by either party, ipso facto null and void except
              for return of Deposit to the BUYER.
            </p>
            <p className="mt-10 text-justify">
              FAILURE TO GIVE WRITTEN NOTICE OF EITHER TERMINATION OR
              DEFICIENCIES AND DESIRED REMEDIES TO THE SELLER (OR THE SELLER’S
              DESIGNATED AGENT) AS SET FORTH IN LINES 150 THROUGH 173 WITHIN THE
              INSPECTION AND DUE DILIGENCE PERIOD SHALL BE DEEMED AS ACCEPTANCE
              BY THE BUYER OF THE PROPERTY'S CURRENT CONDITION.
            </p>
            <p className="mt-10 text-justify font-black">
              PRIVATE WATER/SEWERAGE:
            </p>
            <div className="mt-5 flex h-10">
              <input
                id="93"
                name="input93"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
              ></input>
              <p className="mt-1">
                There is/are{" "}
                <input
                  id="94"
                  name="input94"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  mr ml-1 w-40 border-b-2 outline-none focus:border-blue-400"
                ></input>{" "}
                (
                <input
                  id="95"
                  name="input95"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  mr ml-1 w-20 border-b-2 outline-none focus:border-blue-400"
                ></input>
                ) private water system(s) servicing only the primary residence,
                and the attached private Septic/Water Addendum inspections shall
                include only the system(s) supplying service to the primary
                residence.{" "}
              </p>
            </div>
            <div className="mt-10 flex h-10">
              <input
                id="96"
                name="input96"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
              ></input>
              <p className="mt-1">
                There is/are{" "}
                <input
                  id="97"
                  name="input97"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400   ml-1 w-40 border-b-2 outline-none focus:border-blue-400"
                ></input>{" "}
                (
                <input
                  id="98"
                  name="input98"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400   ml-1 w-20 border-b-2 outline-none focus:border-blue-400"
                ></input>
                ) private septic/treatment system(s) servicing only the primary
                residence and the attached private Septic/Water Addendum
                inspections shall include only those systems supplying service
                to the primary residence
              </p>
            </div>
            <div className="mt-10 flex h-10">
              <input
                id="99"
                name="input99"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
              ></input>
              <p className="mt-1">
                There is NO private septic/treatment system(s) servicing only
                the primary residence.
              </p>
            </div>
            <p className="mt-10 text-justify">
              <a className="font-black">HOME SERVICE/WARRANTY:</a> A home
              service/warranty plan{" "}
              <input
                id="100"
                name="input100"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  ml-1 mr-1 h-5 w-5 border border-b-2 text-center outline-none focus:border-blue-400"
              ></input>{" "}
              will /{" "}
              <input
                id="101"
                name="input101"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  ml-1 mr-1 h-5 w-5 border border-b-2 text-center outline-none focus:border-blue-400"
              ></input>{" "}
              will not be purchased at the closing of sale at a cost not to
              exceed $
              <input
                id="102"
                name="input102"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400   ml-1 w-20 border-b-2 outline-none focus:border-blue-400"
              ></input>{" "}
              to be paid by{" "}
              <input
                id="103"
                name="input103"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  ml-1 mr-1 h-5 w-5 border border-b-2 text-center outline-none focus:border-blue-400"
              ></input>{" "}
              the BUYER /{" "}
              <input
                id="104"
                name="input105"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  ml-1 mr-1 h-5 w-5 border border-b-2 text-center outline-none focus:border-blue-400"
              ></input>{" "}
              the SELLER. Home Service Warranty will be ordered by
              <input
                id="106"
                name="input106"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400   ml-1 w-80 border-b-2 outline-none focus:border-blue-400"
              ></input>
              .
            </p>
            <p className="mt-10 text-justify">
              It is understood that the Agent/Broker may receive compensation
              from the home warranty company for actual services performed. The
              home service warranty plan does not warrant pre-existing defects
              and options, and does not supersede or replace any other
              inspection clause or responsibilities. If neither the BUYER nor
              the SELLER accepts the home service warranty plan, they declare
              that they have been made aware of the existence of such a plan,
              and further declare that they hold the Broker and Agents harmless
              from any responsibility or liability due to their rejection of
              such a plan.
            </p>
            <p className="mt-10 text-justify">
              <a className="font-black">
                WARRANTY OR AS IS CLAUSE WITH WAIVER OF RIGHT OF REDHIBITION:
              </a>{" "}
              (CHECK ONE ONLY)
              <div className="mt-10 flex h-10">
                <input
                  id="107"
                  name="input107"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <p className="mt-1">
                  A. SALE WITH WARRANTIES: The SELLER and the BUYER acknowledge
                  that this sale shall be with full SELLER warranties as to any
                  claims or causes of action including but not limited to
                  redhibition pursuant to Louisiana Civil Code Article 2520, et
                  seq. and Article 2541, et seq.
                </p>
              </div>
              <div className="mt-20 flex h-10">
                <input
                  id="108"
                  name="input108"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <p className="mt-1">
                  B. SALE “AS IS” WITHOUT WARRANTIES: The SELLER and the BUYER
                  hereby acknowledge and recognize that the Property being sold
                  and purchased is to be transferred in “as is” condition and
                  further the BUYER does hereby waive, relieve and release the
                  SELLER from any claims or causes of action for redhibition
                  pursuant to Louisiana Civil Code Article 2520, et seq. and
                  Article 2541, et seq. or for reduction of Sale Price pursuant
                  to Louisiana Civil Code Article 2541, et seq. Additionally,
                  the BUYER acknowledges that this sale is made without warranty
                  of fitness for ordinary or particular use pursuant to
                  Louisiana Civil Code Article 2524. The SELLER and the BUYER
                  agree that this clause shall be made a part of the Act of Sale
                </p>
              </div>
              <div className="mt-40 flex h-10">
                <input
                  id="109"
                  name="input109"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                ></input>
                <p className="mt-1">
                  C. NEW HOME WARRANTIES. Notwithstanding lines 212 through 223
                  and irrespective of whether A or B above is checked, if the
                  Property is a new construction, the parties agree that neither
                  A or B will apply but instead the provisions of the New Home
                  Warranty Act (LA R.S. 9:3141 et seq.) shall apply. The
                  warranty of condition of this Property is governed by the New
                  Home Warranty Act if a home on the Property is a “home” as
                  defined in the New Home Warranty Act.
                </p>
              </div>
            </p>
            <p className="mt-40 text-justify">
              <a className="font-black">MERCHANTABLE TITLE/CURATIVE WORK:</a>{" "}
              The SELLER shall deliver to the BUYER a merchantable title at the
              SELLER’S costs (see lines 234 through 236). In the event curative
              work in connection with the title to the Property is required or
              is a requirement for obtaining the loan(s) upon which this
              Agreement is conditioned, the parties agree to and do extend the
              date for passing the Act of Sale to a date not more than
              <input
                id="110"
                name="input110"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400   ml-1 w-40 border-b-2 outline-none focus:border-blue-400"
              ></input>{" "}
              ({" "}
              <input
                id="111"
                name="input111"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400   ml-1 w-20 border-b-2 outline-none focus:border-blue-400"
              ></input>
              ) calendar days from the date of the Act of Sale stated herein.
              The SELLER’S title shall be merchantable and free of all liens and
              encumbrances except those that can be satisfied at Act of Sale.
              All costs and fees required to make title merchantable shall be
              paid by the SELLER. The SELLER shall make good faith efforts to
              deliver merchantable title. The SELLER’S inability to deliver
              merchantable title within the time stipulated herein shall render
              this Agreement null and void, reserving unto the BUYER the right
              to demand the return of the Deposit and to recover from the SELLER
              actual costs incurred in processing of sale as well as legal fees
              incurred by the BUYER.
            </p>
            <p className="mt-10 text-justify">
              <a className="font-black">FINAL WALK THROUGH:</a> The BUYER shall
              have the right to re-inspect the Property within five (5) calendar
              days prior to the Act of Sale, or occupancy, whichever will occur
              first in order to determine if the Property is in the same or
              better condition as it was at the initial inspection(s) and to
              insure all agreed upon repairs have been completed. The SELLER
              agrees to provide utilities for the final walk through and
              immediate access to the Property.
            </p>
            <p className="mt-10 text-justify">
              <a className="font-black">DEFAULT OF AGREEMENT BY THE SELLER:</a>{" "}
              : In the event of any default of this Agreement by the SELLER, the
              BUYER shall at the BUYER’S option have the right to declare this
              Agreement null and void with no further demand, or to demand
              and/or sue for any of the following:
            </p>
            <p className="mt-10 text-justify">
              1) Termination of this Agreement; 2) Specific performance; 3)
              Termination of this Agreement and an amount equal to 10% of the
              Sale Price as stipulated damages.
            </p>
            <p className="mt-10 text-justify">
              Further, the BUYER shall be entitled to the return of the Deposit.
              The prevailing party to any litigation brought to enforce any
              provision of this Agreement shall be awarded their attorney fees
              and costs. The SELLER may also be liable for Broker fees.
            </p>
            <p className="mt-10 text-justify">
              <a className="font-black">DEFAULT OF AGREEMENT BY BUYER:</a> In
              the event of any default of this Agreement by the BUYER, the
              SELLER shall have at the SELLER’S option the right to declare this
              Agreement null and void with no further demand, or to demand and
              sue for any of the following: 1) Termination of this Agreement; 2)
              Specific performance; 3) Termination of this Agreement and an
              amount equal to 10% of the Sale Price as stipulated damages.
            </p>
            <p className="mt-10 text-justify">
              Further, the SELLER shall be entitled to retain the Deposit. The
              prevailing party to any litigation brought to enforce any
              provision of this Agreement shall be awarded their attorney fees
              and costs. The BUYER may also be liable for Broker fees.
            </p>
            <p className="mt-10 text-justify">
              <a className="font-black">MOLD RELATED HAZARDS NOTICE:</a> An
              informational pamphlet regarding common mold related hazards that
              can affect real property is available at the EPA website{" "}
              <a
                className=" hover:text-link-to-black text-black"
                href="http://www.epa.gov/iaq/molds/index.html"
              >
                http://www.epa.gov/iaq/molds/index.html
              </a>
              . By initialing this page of the Agreement, the BUYER acknowledges
              that the real estate agent has provided the BUYER with the EPA
              website enabling the BUYER to obtain information regarding common
              mold related hazards.
            </p>
            <p className="mt-10 text-justify">
              <a className="font-black">OFFENDER NOTIFICATION:</a> : The
              Louisiana State Police maintains the State Sex Offender and Child
              Predator Registry through the Louisiana Bureau of Criminal
              Identification and Information. It is a public access database of
              the locations of individuals who are required to register pursuant
              to LA R.S. 15:540, et seq. The website for the database is{" "}
              <a
                className=" hover:text-link-to-black text-black"
                href=" http://www.lsp.org/socpr/default.html"
              >
                http://www.lsp.org/socpr/default.html
              </a>{" "}
              . Sheriff and police departments serving jurisdictions of 450,000
              also maintain such information. Inquiries can be made by phone at
              1-800-858-0551 or 1-225-925-6100. Send written inquiries to Post
              Office Box 66614, Box A-6, Baton Rouge, Louisiana 70896.
            </p>
            <p className="mt-10 text-justify">
              <a className="font-black">CHOICE OF LAW:</a> This Agreement shall
              be governed by and shall be interpreted in accordance with the
              laws of the State of Louisiana.
            </p>
            <p className="mt-10 text-justify">
              <a className="font-black">DEADLINES:</a> TIME IS OF THE ESSENCE
              and all deadlines are final, except where modifications, changes,
              or extensions are made in writing and signed by all parties to
              this Agreement. All “calendar days” as used in this Agreement
              shall end at 11:59 p.m. in Louisiana.
            </p>
            <div className="Underline mt-10 font-black">
              ADDITIONAL TERMS AND CONDITIONS:
            </div>
            <div className="ml-10 flex">
              <input
                id="112"
                name="input112"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
              ></input>
            </div>
            <div className="ml-10 flex">
              <input
                id="113"
                name="input113"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
              ></input>
            </div>
            <div className="ml-10 flex">
              <input
                id="114"
                name="input114"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
              ></input>
            </div>
            <div className="ml-10 flex">
              <input
                id="115"
                name="input115"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
              ></input>
            </div>
            <div className="ml-10 flex">
              <input
                id="116"
                name="input116"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
              ></input>
            </div>
            <div className="ml-10 flex">
              <input
                id="117"
                name="input117"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
              ></input>
            </div>
            <p className="mt-10 text-justify">
              <a className="font-black">
                ROLES OF BROKERS AND DESIGNATED AGENTS:
              </a>{" "}
              Broker(s) and Designated Agent(s) have acted only as real estate
              brokers to bring the parties together and make no warranty to
              either party for performance or non performance of any part of
              this Agreement or for any warranty of any nature unless
              specifically set forth in writing. Broker(s) and Designated
              Agent(s) make no warranty or other assurances whatsoever
              concerning Property measurements, square footage, room dimensions,
              lot size, Property lines or boundaries. Broker(s) and Designated
              Agent(s) make no representations as to suitability or to a
              particular use of the Property, and the BUYER has or will
              independently investigate all conditions and characteristics of
              the Property which are important to the BUYER. The BUYER is not
              relying on the Broker or the Designated Agent(s) to choose a
              representative to inspect or re-inspect the Property; the BUYER
              understands any representative desired by the BUYER may perform
              this function. In the event Broker/Agent(s) provides names or
              sources for such advice or assistance, Broker/Agent(s) does not
              warrant the services of such experts or their products and cannot
              warrant the condition of Property or interest to be acquired, or
              guarantee that all defects are disclosed by the SELLER(S).
              Broker/Agent(s) do not investigate the status of permits, zoning,
              code compliance, restrictive covenants, or insurability. The
              Broker(s) and Designated Agent(s) specifically make no warranty
              whatsoever as to whether or not the Property is situated in or out
              of the Government’s hundred year flood plan or is or would be
              classified as wetlands by the U.S. Army Corps of Engineers, or as
              to the presence of wood destroying insects or damage there from.
              The BUYER(S) are to satisfy themselves concerning these issues.
              Designated Agent shall be an independent contractor for Broker if
              the conditions as set forth in LA R.S. 37:1446(h) are met.
            </p>
            <p className="mt-10 font-black">
              WARRANTY OR AS IS CLAUSE WITH WAIVER OF RIGHT OF REDHIBITION:
            </p>
            <div className="mt-5 flex text-justify">
              <div className="w-1/2">
                <div className="mt-5 flex h-10">
                  <input
                    id="118"
                    name="input118"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                  ></input>
                  <p className="mt-1">
                    Contingency for Sale of the BUYER’S Other Property Addendum
                  </p>
                </div>
                <div className="mt-5 flex h-10">
                  <input
                    id="119"
                    name="input119"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                  ></input>
                  <p className="mt-1">Condominium Addendum</p>
                </div>
                <div className="mt-5 flex h-10">
                  <input
                    id="120"
                    name="input120"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                  ></input>
                  <p className="mt-1">FHA Amendatory Clause</p>
                </div>
                <div className="mt-5 flex h-10">
                  <input
                    id="121"
                    name="input121"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                  ></input>
                  <p className="mt-1">New Construction Addendum</p>
                </div>
              </div>
              <div className="w-1/2">
                <div className="mt-5 flex h-10">
                  <input
                    id="122"
                    name="input122"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                  ></input>
                  <p className="mt-1">Private Water/Sewerage Addendum</p>
                </div>
                <div className="mt-5 flex h-10">
                  <input
                    id="123"
                    name="input123"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                  ></input>
                  <input
                    id="124"
                    name="input124"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
                  ></input>
                </div>
                <div className="mt-5 flex h-10">
                  <input
                    id="125"
                    name="input125"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                  ></input>
                  <input
                    id="126"
                    name="input126"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
                  ></input>
                </div>
                <div className="mt-5 flex h-10">
                  <input
                    id="127"
                    name="input127"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                  ></input>
                  <input
                    id="128"
                    name="input128"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
                  ></input>
                </div>
              </div>
            </div>
            <p className="mt-10 text-justify">
              If any of the pre-printed portions of this Agreement vary or are
              in conflict with any additional or modified terms on blanks
              provided in this form or Addendum attached to this Agreement, the
              additional, modified or Addendum provisions control.
            </p>
            <p className="mt-10 text-justify">
              <a className="font-black">SINGULAR – PLURAL USE:</a> Wherever the
              word BUYER or the word SELLER occurs in this Agreement or is
              referred to, the same shall be construed as singular or plural,
              masculine or feminine or neuter, as the case may be.
            </p>
            <p className="mt-10 text-justify">
              <a className="font-black">ACCEPTANCE:</a> Acceptance of this
              Agreement must be in writing. Notice of this acceptance may be
              communicated by facsimile transmission or electronic signature.
              The original of this document shall be delivered to the listing
              Broker’s firm. This Agreement and any supplement addendum or
              modification relating hereto, including any photocopy, facsimile
              or electronic transmission thereof, may be executed in two or more
              counterparts, all of which shall constitute one and the same
              Agreement.
            </p>
            <p className="mt-10 text-justify">
              <a className="font-black">NOTICES AND OTHER COMMUNICATIONS:</a>{" "}
              All notices, requests, claims, demands, and other communications
              related to this Agreement shall be in writing. Notices permitted
              or required to be given (excluding service of process) shall be
              deemed sufficient if given by (a) registered or certified mail,
              postage prepaid, return receipt requested; (b) private courier
              service; or (c) facsimile addressed to the respective addresses of
              the parties as first above written or at such other addresses as
              the respective parties may designate by like notice from time to
              time.
            </p>
            <div className="mt-10 flex h-10">
              <input
                id="130"
                name="input130"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
              ></input>
              <p className="mt-1">
                The BUYER further authorizes notices and other communications to
                be delivered electronically to the following Agent address(es):
                <input
                  id="131"
                  name="input131"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
                ></input>
              </p>
            </div>
            <div className="mt-10 flex h-10">
              <input
                id="132"
                name="input132"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
              ></input>
              <p className="mt-1">
                The SELLER further authorizes notices and other communications
                to be delivered electronically to the following Agent
                address(es):
                <input
                  id="133"
                  name="input133"
                  type="text"
                  onChange={(e) =>
                    handleChangeV2(e.target.value, e.target.name)
                  }
                  className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
                ></input>
              </p>
            </div>
            <p className="mt-20 text-justify">
              <a className="font-black">CONTRACT:</a> This is a legally binding
              contract when signed by both the SELLER and the BUYER. READ IT
              CAREFULLY. If you do not understand the effect of any part of this
              Agreement seek legal advice before signing this contract or
              attempting to enforce any obligation or remedy provided herein.
            </p>
            <p className="mt-10 text-justify">
              <a className="font-black">ENTIRE AGREEMENT:</a> This Agreement
              constitutes the entire Agreement between the parties, and any
              other agreements not incorporated herein in writing are void and
              of no force and effect.
            </p>
            <div className="mt-20 text-justify font-black">
              EXPIRATION OF OFFER:
            </div>
            <p className="mt-10 text-justify">
              This offer is binding and irrevocable until{" "}
              <input
                id="134"
                name="input134"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr-5 ml-1  w-40 border-b-2 outline-none focus:border-blue-400"
              ></input>
              , 20{" "}
              <input
                id="135"
                name="input135"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr-5 ml-1  w-20 border-b-2 outline-none focus:border-blue-400"
              ></input>{" "}
              at{" "}
              <input
                id="136"
                name="input136"
                type="text"
                onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
                className="border-gray-400  mr-5 ml-1  w-20 border-b-2 outline-none focus:border-blue-400"
              ></input>{" "}
              AM/PM/MIDNIGHT/NOON. The Acceptance of this offer must be
              communicated to the offering party by the deadline stated on line
              352 to be binding and effective.
            </p>

            <div className="mt-5 flex space-x-80 text-justify">
              <div className="mt-10 w-1/2 text-justify font-black">
                X__________________________________________
                <div className="flex w-1/2">
                  <div className="mt-2 flex h-10 ">
                    <input
                      id="137"
                      name="input137"
                      type="text"
                      onChange={(e) =>
                        handleChangeV2(e.target.value, e.target.name)
                      }
                      className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p>Buyer’s</p>
                  </div>
                  <div className="mt-2 ml-2 flex h-10 ">
                    <input
                      id="138"
                      name="input138"
                      type="text"
                      onChange={(e) =>
                        handleChangeV2(e.target.value, e.target.name)
                      }
                      className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p>Seller’s.Signature</p>
                    <p className="ml-10">Date/Time</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 w-1/2 text-justify font-black">
                X__________________________________________
                <div className="flex w-1/2">
                  <div className="mt-2 flex h-10 ">
                    <input
                      id="139"
                      name="input140"
                      type="text"
                      onChange={(e) =>
                        handleChangeV2(e.target.value, e.target.name)
                      }
                      className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p>Buyer’s</p>
                  </div>
                  <div className="mt-2 ml-2 flex h-10 ">
                    <input
                      id="141"
                      name="input141"
                      type="text"
                      onChange={(e) =>
                        handleChangeV2(e.target.value, e.target.name)
                      }
                      className="border-gray-400  ml-1 mr-1 h-8 w-8 border border-b-2 text-center outline-none focus:border-blue-400"
                    ></input>
                    <p>Seller’s.Signature</p>
                    <p className="ml-10">Date/Time</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-1 flex space-x-80">
              <div className="w-1/2">
                <div className="mt-2">
                  <input
                    id="142"
                    name="input142"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
                  ></input>
                  <p>Print Buyer’s/Seller’s Full Name (First, Middle, Last)</p>
                </div>
                <div className="mt-1">
                  <input
                    id="143"
                    name="input143"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
                  ></input>
                  <p>Street Address</p>
                </div>
                <div className="mt-1">
                  <input
                    id="144"
                    name="input144"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
                  ></input>
                  <p>City, State, Zip</p>
                </div>
                <div className="mt-1">
                  <input
                    id="145"
                    name="input145"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
                  ></input>
                  <p>Telephone Number.Cell</p>
                </div>
                <div className="mt-1">
                  <input
                    id="146"
                    name="input146"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
                  ></input>
                  <p>Telephone Number. home / Telephone Number.Work</p>
                </div>
                <div className="mt-1">
                  <input
                    id="147"
                    name="input147"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
                  ></input>
                  <p>E-Mail Address</p>
                </div>
                <div className="mt-1">
                  <input
                    id="148"
                    name="input148"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
                  ></input>
                  <p>This counter offer was presented to the Seller/Buyer by</p>
                </div>
              </div>

              <div className="w-1/2">
                <div className="mt-2">
                  <input
                    id="149"
                    name="input149"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
                  ></input>
                  <p>Print Buyer’s/Seller’s Full Name (First, Middle, Last)</p>
                </div>
                <div className="mt-1">
                  <input
                    id="150"
                    name="input150"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
                  ></input>
                  <p>Street Address</p>
                </div>
                <div className="mt-1">
                  <input
                    id="151"
                    name="input151"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
                  ></input>
                  <p>City, State, Zip</p>
                </div>
                <div className="mt-1">
                  <input
                    id="152"
                    name="input152"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
                  ></input>
                  <p>Telephone Number.Cell</p>
                </div>
                <div className="mt-1">
                  <input
                    id="153"
                    name="input153"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
                  ></input>
                  <p>Telephone Number. home / Telephone Number.Work</p>
                </div>
                <div className="mt-1">
                  <input
                    id="154"
                    name="input154"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
                  ></input>
                  <p>E-Mail Address</p>
                </div>
                <div className="mt-1">
                  <input
                    id="155"
                    name="input155"
                    type="text"
                    onChange={(e) =>
                      handleChangeV2(e.target.value, e.target.name)
                    }
                    className="border-gray-400  mr-5 ml-1  w-full border-b-2 outline-none focus:border-blue-400"
                  ></input>
                  <p>Day/ Date/ Time AM/PM MIDNIGHT/NOON</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" ml-20 mr-20 mb-20 flex">
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
