import { useEffect, useState, useRef } from "react";
import keycloak from "@/keycloack";

export const useProfile = () => {
  const [userLogged, setUser] = useState({});
  const isRun = useRef(false);
  const roles = keycloak?.realmAccess?.roles;

  useEffect(() => {
    if (isRun.current) return true;

    isRun.current = true;

    keycloak.loadUserProfile().then((res) => {
      setUser(res);
    });
  }, []);

  return {
    userLogged,
    roles,
  };
};
