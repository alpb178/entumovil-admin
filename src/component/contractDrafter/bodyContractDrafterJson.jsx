import { saveTXT, saveWord } from "@/lib/utils";
import { useEffect, useState } from "react";
import ViewDocContractDrafter from "./viewDocContractDrafter";

export default function BodyContractDrafterJson(props) {
  const [json, setJson] = useState({});

  useEffect(() => {
    const doc = document.getElementById('content');
    console.log(props.contentId)
    const element = doc.querySelectorAll(`[id=${props.contentId}`)[0];
    if (element) {
      setTimeout(
        () =>
          element?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          }),
        1000
      );
    }
  }, [props.contentId]);

  return (
    <form
      id="myform"
      className="mx-auto mt-5 w-full "
      onSubmit={(e) => {
        event.preventDefault();
        const buttonName = e.nativeEvent.submitter.name;
        if (buttonName === "Word") {
          saveWord(props?.contract?.title, "content", json),
            document.getElementById("myform").reset();
        }
        if (buttonName === "TXT") {
          saveTXT(props?.contract?.title, "content", json),
            document.getElementById("myform").reset();
        }
      }}
    >
      <div id="content">
        {props?.contract &&
          Object.keys(props?.contract).map((key, i) => (
            <div
              key={i}
              id={key}
              className="mx-5 mt-5 mb-5  whitespace-pre-wrap text-justify text-xl  leading-loose"
            >
              <ViewDocContractDrafter
                key={i}
                textDoc={props?.contract[key]}
                info={key}
                json={json}
                setJson={setJson}
              />
              <br />
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
