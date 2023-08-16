import { Button, Card } from "@material-tailwind/react";
import { URL_POTECTED } from "@/lib/constant";
import SitesAvailables from "@/component/sites";

export default function PublicPage() {
  return (
    <div className="align-center  content-center">
      <div className="align-center flex content-center">
        <div className="mx-auto w-1/2 py-5">
          <Card className="mb-12 overflow-hidden">
            <img
              alt="nature"
              className="h-[32rem] w-full object-cover object-center"
              src="/cabecera-equipo-contacto-inmocor.jpg"
            />
          </Card>
        </div>

        <div className="w-1/4 p-10 ">
          <SitesAvailables />
        </div>
      </div>

      <a className="ml-60" href={URL_POTECTED}>
        <Button
          size="xxl"
          className="hidden rounded-lg text-2xl lg:inline-block lg:bg-button"
        >
          <span>Comenzar</span>
        </Button>
      </a>
    </div>
  );
}
