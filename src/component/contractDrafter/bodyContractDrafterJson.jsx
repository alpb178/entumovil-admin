import ViewDocContractDrafter from "./viewDocContractDrafter";

export default function BodyContractDrafterJson(props) {
  return (
    <form
      id="content"
      className="mx-auto  mt-5 w-full  break-after-page whitespace-pre-wrap  text-justify text-xl leading-loose "
    >
      {props?.contract &&
        Object.keys(props?.contract).map((key, i) => (
          <div key={i} className="mx-5 mt-5 mb-5">
            <ViewDocContractDrafter key={i} textDoc={props?.contract[key]} />
          </div>
        ))}
        
    </form>
  );
}
