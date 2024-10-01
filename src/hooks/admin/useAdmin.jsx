import { getData, saveData } from "@/lib";
import {
  API_URLS_ADD_ROLE,
  API_URLS_ROLES_DELETE,
  API_URLS_USERS_LIST,
  DELETE,
  POST,
} from "@/lib/constant";
import { useQuery } from "react-query";

export default function useRoles({ args = {}, options = {} } = {}) {
  return useQuery([API_URLS_USERS_LIST, { ...args }], getData, {
    ...options,
  });
}

export const saveRoles = async ({ args = {}, options = {} } = {}) => {
  switch (options?.method) {
    case POST:
      await saveData({
        path: API_URLS_ADD_ROLE + `/${args.id}`,
        data: args.data,
        method: POST,
      });
      break;
    case DELETE:
      await saveData({
        path: API_URLS_ROLES_DELETE + `/${args.id}`,
        data: args.data,
        method: DELETE,
      });
      break;
  }
};
