import { useEffect } from "react";


const Translate = () => {
  let count = 0;
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    count++;
    if (count <= 1) {
  var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
    }
  }, []);

  return (
    <div className=" flex h-10  w-full bg-ocre-red">
      <div className="absolute top-2 bottom-0 h-5 right-2  ml-auto" id="google_translate_element"/>
    </div>
  );
};

export default Translate;
