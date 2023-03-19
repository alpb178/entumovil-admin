import ViewDocContractDrafter from "./viewDocContractDrafter";

export default function BodyContractDrafterJson(props) {
  const saveWordsDocTxt = (id, filename = "") => {
    var html =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta><title>Export HTML To Doc</title></head><body>";
    var footer = "</body></html>";
    var html = html + document.getElementById(id).innerHTML + footer;
    var strippedHtml = html.replace(/<[^>]+>/g, "");

    //link url
    var url =
      "data:application/vnd.ms-;charset=utf-8," +
      encodeURIComponent(
        html + document.getElementById(id).textContent + footer
      );

    //file name
    filename = filename ? filename + ".doc" : "document.doc";

    // Creates the  download link element dynamically
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    //Link to the file
    downloadLink.href = url;

    //Setting up file name
    downloadLink.download = filename;

    //triggering the function
    downloadLink.click();
    //Remove the a tag after donwload starts.
    document.body.removeChild(downloadLink);

    saveTxt("content", "a");
  };

  const saveTxt = (id, title) => {
    var myHTML = document.querySelector("#content").innerText;

    var strippedHtml = myHTML.replace(/<[^>]+>/g, "");

    asignar();
  };

  function asignar() {
    var myHTML = document.getElementById("content");
    /*  if(myHTML.hasChildNodes()){
      const div = myHTML.childNodes;
      for (let i = 0; i < div.length; i++) {
         if(div[i].hasChildNodes())
         {const input = div[i].childNodes;
          for (let j = 0; j < input.length; j++) {
           if(input[j].value){
           input[j].textContent =input[j].value}
          }
        }
 
        }
      }*/
    console.log(document.querySelector("div#info").textContent);
    console.log(myHTML.textContent);
  }

  return (
    <form
      id="content"
      className="mx-auto  mt-5 w-full line- break-after-page whitespace-pre-wrap  text-justify text-xl leading-5 "
    >
      {props?.contract &&
        Object.keys(props?.contract).map((key, i) => (
          <div key={i} className="mx-5 mt-5 mb-5">
            <ViewDocContractDrafter key={i} textDoc={props?.contract[key]} />
          </div>
        ))}

      <button
        className="ml-auto mb-5 mr-5 flex flex rounded bg-gradient-to-r from-gradient-for-footer to-gradient-to py-2 px-4 font-bold text-white"
        onClick={() => saveWordsDocTxt("content", "pepe")}
        type="primary"
      >
        Descargar PDF
      </button>
    </form>
  );
}
