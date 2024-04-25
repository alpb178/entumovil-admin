import { apiFetcher } from "./apiFetcher";

export const userRegisterd = async () => {
    try {
      const response = await apiFetcher("api/user/search/alpb17.08@gmail.com");

      if (response.status == 200) {
        sessionStorage.setItem("user", response);
        return true;
      } else {
        sessionStorage.setItem("user", "");
        return false;
      }
    } catch (error) {
      
      sessionStorage.setItem("user", "");
      return false;
    }
  };