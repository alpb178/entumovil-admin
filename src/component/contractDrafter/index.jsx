import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ViewDoc from "../doc";

const ContractDrafterComponent = (props) => {
  return (
    <section className=" mb-20 flex px-2 text-xl leading-loose  text-gray">
      <div className="container mx-auto">
        <div className="item-center flex content-center  ">
          <div className="w-2/6">
            <ul className="list-check mt-7">
              <li className="border-bottom flex-inline mb-4 flex pb-3">
                <div className="rounded-full bg-legislation-gray">
                  <i className="fas fa-check m-1 rounded-full text-red" />
                </div>
                <h5 className="flex-inline ml-5 flex ">
                  <a
                    href=""
                    className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                  >
                    Titulo
                    <ArrowRightIcon className="mt ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
                  </a>
                </h5>
              </li>
              <li className="border-bottom flex-inline mb-4 flex pb-3">
                <div className="rounded-full bg-legislation-gray">
                  <i className="fas fa-check m-1 rounded-full text-red" />
                </div>
                <h5 className="ml-5">
                  <a
                    href=""
                    className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                  >
                    Participantes
                    <ArrowRightIcon className="mt ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
                  </a>
                </h5>
              </li>
            </ul>
          </div>
          <div className="w-4/6">
            {props?.title}
           { props.sumary && < ViewDoc textDoc={props?.sumary} />}
            <p className="mt-6">{props?.headersParts}</p>
           { props.parts && <ViewDoc textDoc={props?.parts} />}
            <p className="mt-6">{props?.headersClausesClient}</p>
            { props.clausesClient && props?.clausesClient?.map((element)=><div className="mb-5">
           <ViewDoc
              textDoc={element}
            />
           </div>)  }
           <p className="mt-6">{props?.headersClausesContract}</p>
           {  props.clausesContract && props?.clausesContract.map((element)=><div className="mb-5">
           <ViewDoc
              textDoc={element}
            />
           </div>)  }
            <div className="mb-10 mt-10">
              {props.footer &&  <ViewDoc
              textDoc={props?.footer}
            />}
            </div>
            <div className="item-center mb-24 mt-24 flex content-center">
              <div className="w-1/2">Comprador</div>
              <div className="w-1/2">Vendedor</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractDrafterComponent;
