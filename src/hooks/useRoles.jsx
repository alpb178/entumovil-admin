import { getData } from "@/lib";
import {
  API_URLS_ROLES_LIST,
} from "@/lib/constant";
import { useQuery } from "react-query";

export default function useRoles({ args = {}, options = {} } = {}) {
  return useQuery([API_URLS_ROLES_LIST, { ...args }], getData, {
    ...options,
  });
}

export function useFindRoles({ args = {}, options = {} } = {}) {
  return useQuery([API_URLS_ROLES_LIST, { ...args }], getData, {
    ...options,
  });
}
