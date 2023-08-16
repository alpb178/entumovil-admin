import { Card, Typography } from "@material-tailwind/react";

const SitesAvailables = () => {
  return (
    <Card className="p-5">
      <Typography variant="h5" color="blue-gray">
        Sitios del Portal Entumovil
      </Typography>
      <div className="ml-5 mt-5">
        <a
          className="font-black italic text-black hover:text-link-red"
          href="http://localhost:4001"
        >
          Portal de Cuentas
        </a>
      </div>
    </Card>
  );
};

export default SitesAvailables;
