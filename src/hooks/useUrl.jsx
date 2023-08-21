import {getDataApiII } from "@/lib";
import { API_URLS_LIST } from "@/lib/constant";
import { useQuery } from "react-query";

export default function useUrls({ args = {}, options = {} } = {}) {
  return useQuery([API_URLS_LIST, { ...args }], getDataApiII, {
    ...options,
  });
}
