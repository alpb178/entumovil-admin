import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080/",
  clientId: "portal-entumovil",
  realm: "Proyecto-Desoft-EnTuMovil",
  "ssl-required": "external",
  "public-client": true,
  "confidential-port": 0,
});

export default keycloak;
