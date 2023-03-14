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
