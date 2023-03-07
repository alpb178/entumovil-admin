import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ViewDoc from "../doc";

const ContractDrafterComponent = (props) => {
  return (
    <section className=" mb-20 flex px-2 text-xl leading-loose  text-gray">
      <div className="container mx-auto">
        <div className="item-center flex content-center  ">
          <div className="w-1/6">
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
          <div className="mt-5 ml-7 mb-7 w-5/6 border-2">
            <div className="mx-5 mt-7 border-2 text-center text-3xl text-black">
              {props?.title}
            </div>
            {props.sumary && (
              <div className="mx-5 mt-5 border-2 text-center">
                <div className="mx-5 mb-5">
                  <ViewDoc textDoc={props?.sumary} />
                </div>
              </div>
            )}

            {props?.headersParts && (
              <p className="mt-6 text-center">{props?.headersParts}</p>
            )}
            {props.parts && (
              <div className="mx-5 mt-5 border-2 text-justify">
                <div className="mx-5 mb-5">
                  <ViewDoc textDoc={props?.parts} />
                </div>
              </div>
            )}

            {props?.headersClausesClient && (
              <p className="mt-6 text-center">{props?.headersClausesClient}</p>
            )}

            {props.clausesClient && (
              <div className="mx-5 mt-5 border-2 text-justify">
                <div className="mx-5 mb-5">
                  {props?.clausesClient?.map((element) => (
                    <div className="mb-5">
                      <ViewDoc textDoc={element} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mx-5 mt-5 border-2 text-justify">
              <p className="mt-6 text-center">
                {props?.headersClausesContract}
              </p>
              <div className="mx-5 mb-5">
                {props.clausesContract &&
                  props?.clausesContract.map((element) => (
                    <div className="mb-5">
                      <ViewDoc textDoc={element} />
                    </div>
                  ))}
              </div>
            </div>

            <div className="mx-5">
              <h4 className="mt-7 text-center text-2xl">
                CLÁUSULAS ADICIONALES
              </h4>
              <textarea className="w-full border-2"></textarea>
            </div>

            <div className="mx-5 mb-5 border-2">
              <div className="mx-5 mb-10 mt-5 text-justify">
                {props.footer && <ViewDoc textDoc={props?.footer} />}
              </div>
              <div className="text-justify">
                <div className="flex">
                  <div className="w-1/2 ml-5">Comprador</div>
                  <div className="w-1/2 mr-5">Vendedor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractDrafterComponent;
