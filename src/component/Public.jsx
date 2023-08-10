import keycloak from "@/keycloack";
import { Button, Card } from "@material-tailwind/react";

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

      <Button
        size="sm"
        onClick={() => keycloak.login()}
        className="hidden rounded-none lg:inline-block lg:bg-button"
      >
        <span>Iniciar</span>
      </Button>
    </div>
  );
}
