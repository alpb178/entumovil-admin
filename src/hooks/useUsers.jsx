import { getData } from "@/lib";
import {
  API_URL_DELETE,
  API_URL_EDITAR,
    API_URL_INSERTAR,
  API_URL_LIST,
  DELETE,
  POST,
  PUT,
} from "@/lib/constant";
import { useQuery } from "react-query";

export default function useUsers({ args = {}, options = {} } = {}) {
  return useQuery([API_URL_LIST, { ...args }], getData, {
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
export const deleteUsers = async ({ args = {} } = {}) => {
  await deleteData({ path: API_URL_DELETE + `/${args.id}`, method: DELETE });
};
