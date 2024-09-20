import { deleteData, getData, saveData } from "@/lib";
import {
  API_URLS_USERS_LIST,
  API_URLS_USER_CHANGE_PASS,
  API_URLS_USER_CREATE,
  API_URLS_USER_DELETE,
  API_URLS_USER_UPDATE,
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

export const deleteUsers = async ({ args = {} } = {}) => {
  await deleteData({
    path: API_URLS_USER_DELETE + `/${args.id}`,
    method: DELETE,
  });
};

export const saveUsers = async ({ args = {}, options = {} } = {}) => {
  switch (options?.method) {
    case POST:
      await saveData({ path: API_URLS_USER_CREATE, data: args, method: POST });
      break;
    case PUT:
      await saveData({
        path: API_URLS_USER_UPDATE + `/${args.id}`,
        data: args.data,
        method: PUT,
      });
      break;
  }
};

export const saveUsersPass = async ({ args = {} } = {}) => {
  const data = await saveData({
    path: API_URLS_USER_CHANGE_PASS + `/${args.id}`,
    data: args.data,
    method: POST,
  });
  return data;
};
