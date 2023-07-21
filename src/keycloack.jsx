import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080/",
  clientId: "proyecto-entumovil",
  realm: "portal-entumovil",
  "ssl-required": "external",
  "public-client": true,
});

export default keycloak;
