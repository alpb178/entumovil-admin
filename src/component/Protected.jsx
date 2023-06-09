import keycloak from "@/keycloack";

import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

import Profile from "@/container/Profile";
import { useProfile } from "@/hooks/useProfile";

import UsersList from "../container/UsersList";
import { saveUsersKeyCloack } from "@/hooks/useUsers";
import { useQueryClient } from "react-query";
import Loader from "./loader";
import { POST } from "@/lib/constant";
import EditProfile from "@/container/EditProfile";

export default function ProtectedPage() {
  const queryClient = useQueryClient();

  const [openNav, setOpenNav] = useState(false);
  const [hideInfoAdmin, setHideInAdmin] = useState(false);

  const [loading, setLoading] = useState(true);

  const [hideInfoUsers, setHideInfoUsers] = useState(false);
  const [hideInfoListUsers, setHideInfoListUsers] = useState(false);
  const [hideInfoEditUsers, setHideInfoEditUsers] = useState(false);

  const [hideImage, setHideImage] = React.useState(false);

  const { userLogged, roles } = useProfile();

  const onLoad = async () => {
    let method = POST;

    try {
      setLoading(true);
      await saveUsersKeyCloack({
        args: { id: userLogged.id },
        options: {
          method,
        },
      });
      //await queryClient.invalidateQueries([API_AREA_URL]);
      // toast(message);
    } catch (error) {
      /*  toast.error(error.response.data.message || error.toString(), {
        theme: "colored",
      });*/
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    roles.includes("admin") ? setHideInAdmin(true) : setHideInAdmin(false);
  }, [roles]);

  useEffect(() => {
    if (userLogged.id) onLoad();
  }, [userLogged]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between text-blue-gray-900">
              <Typography
                as="a"
                href="#"
                className="mr-4 cursor-pointer py-1.5 font-medium"
              >
                Portal de cuentas
              </Typography>
              <div className="flex items-center gap-4">
                <Button
                  variant="gradient"
                  size="sm"
                  onClick={() => keycloak.logout()}
                  className="hidden lg:inline-block"
                >
                  <span>Cerrar Sesión</span>
                </Button>

                <IconButton
                  variant="text"
                  className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                  ripple={false}
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </IconButton>
              </div>
            </div>
            <MobileNav open={openNav}>
              <Button
                variant="gradient"
                size="sm"
                onClick={() => keycloak.logout()}
                fullWidth
                className="mb-2"
              >
                <span>Cerrar Sesión</span>
              </Button>
            </MobileNav>
          </Navbar>

          <div className="align-center content-center">
            <div className="mx-auto max-w-screen-lg py-12">
              <div className="mx-auto max-w-screen-md py-12">
                <Typography
                  variant="h2"
                  color="blue-gray"
                  className="m-5 mb-2 ml-24"
                >
                  Usuario {userLogged.username} Autenticado
                </Typography>
              </div>

              <Card className="overflow-hidden">
                {!hideImage && (
                  <img
                    alt="nature"
                    className="h-[32rem] w-full object-cover object-center"
                    src="/cabecera-contratos-inmocor.jpg"
                  />
                )}
                {hideInfoUsers && (
                  <Profile userlogged={userLogged} roles={roles} />
                )}
                {hideInfoEditUsers && (
                  <EditProfile userlogged={userLogged} roles={roles} />
                )}
                <div className="mx-auto max-w-screen-md py-12">
                  <Button
                    className=" mr-2 bg-cyan-800 font-normal text-white"
                    onClick={() => {
                      setHideImage(true),
                        setHideInfoListUsers(false),
                        setHideInfoEditUsers(false),
                        setHideInfoUsers(true);
                    }}
                  >
                    Mostar Info del usuario
                  </Button>
                  <Button
                    className=" mr-2 bg-orange-400 font-normal text-white"
                    onClick={() => {
                      setHideImage(true),
                        setHideInfoListUsers(false),
                        setHideInfoEditUsers(true),
                        setHideInfoUsers(false);
                    }}
                  >
                    Editar Info del usuario
                  </Button>
                  {hideInfoAdmin && (
                    <Button
                      className=" mr-2 bg-gray font-normal text-white"
                      onClick={() => {
                        setHideImage(true),
                          setHideInfoListUsers(true),
                          setHideInfoEditUsers(false),
                          setHideInfoUsers(false);
                      }}
                    >
                      Listar Info de los usuarios
                    </Button>
                  )}
                </div>

                <div className="mx-auto max-w-screen-md py-12">
                  <div className="overflow-hidden">
                    {hideInfoListUsers && <UsersList />}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </>
      )}
    </>
  );
}
