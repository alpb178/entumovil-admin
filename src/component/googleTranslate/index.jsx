import { useEffect } from "react";

const Translate = () => {
  let count = 0;

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

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",

        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  return (
    <div className=" relative flex h-10  w-full bg-ocre-red">
      <a className="ml-auto m-2" id="google_translate_element" />
    </div>
  );
};

export default Translate;
