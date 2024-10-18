import { getAdmin, getId, getToken, getUsername } from "@/lib/utils";

export const useAuth = () => {
  return {
    getToken,
    isAuthenticated:
      !!getToken() && !!getId() && !!getUsername() && !!getAdmin(),
    username: getUsername(),
    isAdmin: getAdmin(),
    id: getId(),
  };
};
