import reactStringReplace from "react-string-replace";

export const obtainTexTWithQuotes = (text) => {
  const regex =
    /[^'"\\]*(?:\\.[^'"\\]*)*(["'])([^"'\\]*(?:(?:(?!\1)["']|\\.)[^"'\\]*)*)\1/gy;

  let grupo = "";
  let resultado = [];

  while ((grupo = regex.exec(text)) !== null) {
    resultado.push(grupo[2]);
  }

  return resultado;
};

export const findWordsDocTxt = (docTxt, findText) => {
  const textWithDoubleQuotes = obtainTexTWithQuotes(findText);
  if (
    textWithDoubleQuotes.length &&
    docTxt.toUpperCase().includes(textWithDoubleQuotes[0].toUpperCase())
  ) {
    return true;
  } else if (!textWithDoubleQuotes.length) {
    let text = findText.split(" ");
    let count = 0;
    text.map((element) => {
      if (docTxt.toUpperCase().includes(element.toUpperCase())) count++;
    });
    return count === text.length ? true : false;
  }
  return false;
};

export const replaceInput = (content, json) => {
  var dataR = reactStringReplace(content, /<input (.*?)>/, (match, i) =>
    extractNameInput(match, json)
  );
  return dataR.join(" ");
};

export const extractNameInput = (content, json) => {
  let result = "";
  reactStringReplace(content, /name="(.*?)"/, (match, i) => (result = match));
  return json[result] === "" ? "......." : json[result];
};

export const returnJson = (content, info, setJson, json) => {
  let jsonNew = {};
  reactStringReplace(content, "XXX", (match, i) => {
    jsonNew[info + i] = "";
  });
  setJson(Object.assign(json, jsonNew));
};

export const saveWord = (filename = "", id, json) => {
  var preHtml =
    "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
  var postHtml = "</body></html>";

  var html =
    preHtml +
    replaceInput(document.getElementById(id).innerHTML, json) +
    postHtml;

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

export const saveTXT = (id, json) => {
  let data = document.getElementById(id).innerHTML;

  var strippedHtml = replaceInput(data, json);

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
