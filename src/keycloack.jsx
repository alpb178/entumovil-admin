import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080/",
  clientId: "proyecto-entumovil",
  realm: "portal-entumovil",
});

export default keycloak;
