import useUrls from "@/hooks/useUrl";
import { Card, Typography } from "@material-tailwind/react";
import Loader from "../loader";

const SitesAvailables = () => {
  const { data, isLoading } = useUrls({
    args: {},
    options: {
      keepPreviousData: true,
    },
  });
  return (
    <Card className="p-5">
      <></>
      <Typography variant="h5" color="blue-gray">
        Sitios del Portal Entumovil
      </Typography>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="ml-5 mt-5">
          <dl>
            {data?.map((field) => (
              <div key={field} className="sm:col-span-1">
                <a
                  className="font-black italic text-black hover:text-link-red"
                  href={field?.url}
                >
                  {field?.name}
                </a>
              </div>
            ))}
          </dl>
          <a
            className="font-black italic text-black hover:text-link-red"
            href="http://localhost:4001"
          >
            Portal de Cuentas
          </a>
        </div>
      )}
    </Card>
  );
};

export default SitesAvailables;
