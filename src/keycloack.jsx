import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: import.meta.env.VITE_API_URL_KEYCLOACK,
  clientId: import.meta.env.VITE_CLIENT_ID_KEYCLOACK,
  realm: import.meta.env.VITE_REALM_KEYCLOACK,
  "ssl-required": "external",
  "public-client": true,
  "confidential-port": 0,
});

export default keycloak;
