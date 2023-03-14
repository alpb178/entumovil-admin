import ViewDocContractDrafter from "./viewDocContractDrafter";

export default function BodyContractDrafterJson(props) {
  return (
    <div
      id="content"
      className="mx-auto  mt-5 w-full  break-after-page  text-justify text-xl leading-loose "
    >
      {props?.contract &&
        Object.keys(props?.contract).map((key, i) => (
          <div key={i} className="mx-5 mt-5 mb-5  text-center">
            <ViewDocContractDrafter key={i} textDoc={props?.contract[key]} />
          </div>
        ))}
    </div>
  );
}
