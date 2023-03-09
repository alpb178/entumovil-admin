import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function NavigationContractDrafter(props) {
  return (
    <ul className="list-check mt-7 w-1/12">
      <li className="border-bottom flex-inline mb-4 flex pb-3">
        <div className="rounded-full bg-legislation-gray">
          <i className="fas fa-check m-1 rounded-full text-red" />
        </div>
        <h5 className="flex-inline ml-5 flex ">
          <a className="icon-btn btn-link btn-arrow text-dark flex-inline flex">
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
  );
}
