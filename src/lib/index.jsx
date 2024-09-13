import { apiFetcher } from "@/lib/apiFetcher";

import { getErrorTransaction } from "./utils";

export const getData = async ({ queryKey }) => {
  try {
    const [path, params] = queryKey;
    const { id, ...rest } = params;
    const url = id ? path.concat("/", id) : path;
    const { data } = await apiFetcher(url, { params: rest });
    return data;
  } catch (error) {
    getErrorTransaction(error);
  }
};

export const saveData = async (args) => {
  try {
    const { path, data: values, method } = args;
    const { data } = await apiFetcher(path, { data: values, method });
    return data;
  } catch (error) {
    getErrorTransaction(error);
  }
};

export const deleteData = async (args) => {
  try {
    
    const { path, method } = args;
    const { data } = await apiFetcher(path, { method });
    return data;
  } catch (error) {
    getErrorTransaction(error)
  }
 
};
