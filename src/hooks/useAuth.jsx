import { useEffect, useState, useRef } from "react";
import Keycloak from "keycloak-js";
import keycloak from "@/keycloack";

const useAuth = () => {
  const [islogin, setLogin] = useState(false);
  const isRun = useRef(false);

  useEffect(() => {
    if (isRun.current) return true;

    isRun.current = true;

    keycloak.init({ onLoad: "login-required",kc_idp_hint:'portal-entumovil' }).then((res) => {
      setLogin(res)
    });
  }, []);

  return islogin;
};
export default useAuth;
