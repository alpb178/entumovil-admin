import { getData, saveData } from "@/lib";
import {
  API_URLS_USERS_LIST,
  API_URL_DELETE,
  API_URL_EDITAR,
  API_URL_EDIT_BY_KEYCLOACK_ID,
  API_URL_FIND_BY_KEYCLOACK,
  API_URL_INSERTAR,
  API_URL_INSERT_BY_KEYCLOACK,
  API_URL_LIST,
  DELETE,
  POST,
  PUT,
} from "@/lib/constant";
import { useQuery } from "react-query";

export default function useUsers({ args = {}, options = {} } = {}) {
  return useQuery([API_URLS_USERS_LIST, { ...args }], getData, {
    ...options,
  });
}

export function useFindUsers({ args = {}, options = {} } = {}) {
  return useQuery([API_URLS_USERS_LIST, { ...args }], getData, {
    ...options,
  });
}

export const saveUsers = async ({ args = {}, options = {} } = {}) => {
  switch (options?.method) {
    case POST:
      await saveData({ path: API_URL_INSERTAR, data: args, method: POST });
      break;
    case PUT:
      await saveData({
        path: API_URL_EDITAR + `/${args.id}`,
        data: args,
        method: PUT,
      });
      break;
  }
};

export const saveUsersKeyCloack = async ({ args = {}, options = {} } = {}) => {
  if (options.method == POST) {
    const data = await saveData({
      path: API_URL_INSERT_BY_KEYCLOACK + `/${args.id}`,
      data: {},
      method: POST,
    });
    return data;
  } else if (options.method == PUT) {
    const data = await saveData({
      path: API_URL_EDIT_BY_KEYCLOACK_ID + `/${args.keyDoackId}`,
      data: args,
      method: PUT,
    });
    return data;
  }
};
export const deleteUsers = async ({ args = {} } = {}) => {
  await deleteData({ path: API_URL_DELETE + `/${args.id}`, method: DELETE });
};
