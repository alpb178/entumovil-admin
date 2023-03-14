export const findPhraseWordTxt = (docTxt, findText) => {
  if (
    findText.includes(`"`) &&
    docTxt.toUpperCase().includes(findText.split(`"`)[1].toUpperCase())
  )
    return true;
  return false;
};

export const findWordsDocTxt = (docTxt, findText) => {
  if (findPhraseWordTxt(docTxt, findText)) {
    return true;
  } else {
    let text = findText.split(" ");
    let count = 0;
    text.map((element) => {
      if (docTxt.toUpperCase().includes(element.toUpperCase())) count++;
    });
    return count === text.length ? true : false;
  }
};
