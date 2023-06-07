import { getData } from "@/lib";
import { API_URL_FIND_BY_KEYCLOACK } from "@/lib/constant";
import { useQuery } from "react-query";

export default function findUsersByKeycloack({ args = {}, options = {}  } = {}) {
  return useQuery([API_URL_FIND_BY_KEYCLOACK, { ...args }], getData, {
    ...options,
  });
}
