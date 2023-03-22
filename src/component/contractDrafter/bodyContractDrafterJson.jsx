import reactStringReplace from "react-string-replace";
import ViewDocContractDrafter from "./viewDocContractDrafter";

export default function BodyContractDrafterJson(props) {
  const saveWord = (filename = "") => {
    var preHtml =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";

    var dataR = reactStringReplace(
      document.getElementById("content").innerHTML,
      /<input (.*?)>/,
      (match, i) => "..............."
    );
    var html = preHtml + dataR.join(' ') + postHtml;

    var blob = new Blob(["\ufeff", html], {
      type: "application/msword",
    });

    // Specify link url
    var url =
      "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(html);

    // Specify file name
    filename = filename ? filename + ".doc" : "document.doc";

    // Create download link element
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      // Create a link to the file
      downloadLink.href = url;

      // Setting the file name
      downloadLink.download = filename;

      //triggering the function
      downloadLink.click();
    }

    document.body.removeChild(downloadLink);
  };

  const saveTXT = () => {
    let data = document.getElementById("content").innerHTML;

    let dataR = "";

    dataR = reactStringReplace(
      data,
      /<input (.*?)>/,
      (match, i) => "..............."
    );

    var strippedHtml = dataR.join(" ").replace(/<[^>]+>/g, " ");

    const textToBLOB = new Blob([strippedHtml], { type: "text/plain" });
    const sFileName = "formData.txt";

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
    }

    newLink.click();
  };

  return (
    <form
      className="mx-auto mt-5 w-full "
      onSubmit={(e) => {
        event.preventDefault();
        const buttonName = e.nativeEvent.submitter.name;
        if (buttonName === "Word") saveWord();
        if (buttonName === "TXT") saveTXT();
      }}
    >
      <div id="content">
        {props?.contract &&
          Object.keys(props?.contract).map((key, i) => (
            <div
              key={i}
              className="mx-5 mt-5 mb-5  whitespace-pre-wrap text-justify text-xl  leading-loose"
            >
              <ViewDocContractDrafter key={i} textDoc={props?.contract[key]} />
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
