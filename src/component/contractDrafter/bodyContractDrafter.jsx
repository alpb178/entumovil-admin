import ViewDocContractDrafter from "./viewDocContractDrafter";

export default function BodyContractDrafter({ props }) {
  return (
    <div
      id="content"
      className="mx-auto  mt-5 w-full  break-after-page  leading-loose text-justify text-xl "
    >
      <div className=" mt-5 mb-14 text-center ">{props?.title}</div>
      {props.sumary && (
        <div className="mx-5 mt-5 mb-5">
          <ViewDocContractDrafter textDoc={props?.sumary} />
        </div>
      )}

      {props?.headersParts && (
        <p className="mt-6 text-center">{props?.headersParts}</p>
      )}
      {props.parts && (
        <div className="mx-5 mt-5 mb-5 ">
          <ViewDocContractDrafter textDoc={props?.parts} />
        </div>
      )}

      {props?.headersClausesClient && (
        <p className="mt-6 text-center">{props?.headersClausesClient}</p>
      )}

      {props.clausesClient && (
        <div className="mx-5 mt-5 mb-5">
          {props?.clausesClient?.map((element) => (
            <ViewDocContractDrafter textDoc={element} />
          ))}
        </div>
      )}

      <div className="mt-6 text-center">{props?.headersClausesContract}</div>

      {props.clausesContract && (
        <div className="mx-5 mt-5 mb-5">
          {props?.clausesContract.map((element) => (
            <ViewDocContractDrafter textDoc={element} />
          ))}
        </div>
      )}
      {props.clausesAdd && (
        <div className="mx-5">
          <h4 className="mt-7 text-center">
            {<ViewDocContractDrafter textDoc={props?.clausesAdd} />}
          </h4>
          <textarea className="mt-5 mb-5 w-full border border-t-transparent border-r-transparent border-l-transparent focus:border focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent"></textarea>
        </div>
      )}

      <div className="mx-5 mb-10 mt-5 text-justify">
        {props.footer && <ViewDocContractDrafter textDoc={props?.footer} />}
      </div>
      <div className="mx-5   mb-14 text-justify">
        <div className="flex">
          <div className="ml-5 w-1/2">
            {props.seller && <ViewDocContractDrafter textDoc={props?.seller} />}
          </div>
          <div className="mr-5 w-1/2">
            {props.buyer && <ViewDocContractDrafter textDoc={props?.buyer} />}
          </div>
        </div>
      </div>
    </div>
  );
}
