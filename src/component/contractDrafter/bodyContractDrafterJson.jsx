import { saveTXT, saveWord } from "@/lib/utils";
import { useState } from "react";
import ViewDocContractDrafter from "./viewDocContractDrafter";

export default function BodyContractDrafterJson(props) {
  const [json, setJson] = useState({});
  return (
    <form
      id="myform"
      className="mx-auto mt-5 w-full "
      onSubmit={(e) => {
        event.preventDefault();
        const buttonName = e.nativeEvent.submitter.name;
        if (buttonName === "Word") {
          saveWord("contrato", "content", json), document.getElementById("myform").reset();;
        }
        if (buttonName === "TXT") {
          saveTXT("content", json), document.getElementById("myform").reset();;
        }
      }}
    >
      <div id="content">
        {props?.contract &&
          Object.keys(props?.contract).map((key, i) => (
            <div
              key={i}
              className="mx-5 mt-5 mb-5  whitespace-pre-wrap text-justify text-xl  leading-loose"
            >
              <ViewDocContractDrafter
                key={i}
                textDoc={props?.contract[key]}
                info={key}
                json={json}
                setJson={setJson}
              />
              <br/>
            </div>
          ))}
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
  );
}
