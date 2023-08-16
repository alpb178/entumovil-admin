import { Card } from "@material-tailwind/react";
import { URL_POTECTED } from "@/lib/constant";

export default function PublicPage() {
  return (
    <div className="mx-auto max-w-screen-md py-12">
      <Card className="mb-12 overflow-hidden">
        <img
          alt="nature"
          className="h-[32rem] w-full object-cover object-center"
          src="/cabecera-equipo-contacto-inmocor.jpg"
        />
      </Card>

      <a
        href={URL_POTECTED}
        className="flex content-center items-center hover:text-red"
      >
        Comenzar
      </a>
    </div>
  );
}
