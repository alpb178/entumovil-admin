import { useEffect, useState, useRef } from "react";

import keycloak from "@/keycloack";

const useAuth = () => {
  const [islogin, setLogin] = useState();
  const isRun = useRef(false);

  useEffect(() => {
    if (isRun.current) return true;

    isRun.current = true;

    try {
      keycloak
        .init({
          onLoad: "login-required",
        })
        .then((authenticated) => {
          if (authenticated) {
            setLogin(true);
          } else {
            setLogin(false);
          }
        });
    } catch (error) {
      throw error;
    }
  }, []);

  return islogin;
};
export default useAuth;
