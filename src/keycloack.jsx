import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080/",
  clientId: "vite",
  realm: "realm",
});

export default keycloak;
