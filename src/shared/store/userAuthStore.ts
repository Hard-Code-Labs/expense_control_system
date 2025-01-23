import Cookies from "js-cookie";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
// import { customSessionStorage } from "./sessionStorage";
import jwt from "jsonwebtoken";
import { getRefreshToken } from "../services/getRefreshToken";

interface User {
  id?: string;
  name?: string;
  email?: string;
  roles?: string[];
  permissions?: string[];
}

type State = {
  accessToken: string;
  refreshToken: string;
  tokenExpiryTimeout: NodeJS.Timeout | null;
  userInfo: User;
};

type Actions = {
  setAccessToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
  clearTokens: () => void;
  renewToken: () => Promise<void>;
  setupTokenExpiryCheck: () => void;
  setUserInfo: (userInfo: User) => void;
};

export const useUserAuthStore = create(
  persist<State & Actions>(
    (set, get) => ({
      // Tokens
      accessToken: "",
      refreshToken: Cookies.get("token") || "",
      tokenExpiryTimeout: null,

      setAccessToken: (token: string) => {
        set(() => ({
          accessToken: token,
        }));

        const decodedToken = jwt.decode(token) as { authorities: string };
        const roles = decodedToken.authorities.split(",").filter(item => item.includes("ROLE"))
        const permissions = decodedToken.authorities.split(",").filter(item => !item.includes("ROLE"))

        get().setUserInfo({
          roles,
          permissions
        })

        sessionStorage.setItem("token", token);
      },
      setRefreshToken: (token: string) => {
        Cookies.set("token", token, { secure: true, sameSite: "Strict" });
        
        set(() => ({
          refreshToken: token,
        }));

        get().setupTokenExpiryCheck();
      },

      clearTokens: () => {
        const existingTimeout = get().tokenExpiryTimeout;
        if (existingTimeout) {
          clearTimeout(existingTimeout);
          set(() => ({ tokenExpiryTimeout: null }));
        }

        Cookies.remove("token");
        sessionStorage.removeItem("token");
    
        set(() => ({
          refreshToken: "",
        }));
      },
      
      renewToken: async () => {
        const newTokens = await getRefreshToken({
          accessToken: get().accessToken,
          refreshToken: get().refreshToken
        })
    
        get().setAccessToken(newTokens.accessToken)
        get().setRefreshToken(newTokens.refreshToken)
      },

      setupTokenExpiryCheck: () => {
        const accessToken = get().accessToken;
        const refreshToken = get().refreshToken;
    
        if (!accessToken || !refreshToken) return;
      
        try {
          const decodedToken = jwt.decode(accessToken) as { exp: number };
          const expiryTime = decodedToken.exp * 1000;
          const currentTime = Date.now();
      
          const timeLeft = expiryTime - currentTime;
      
          if (timeLeft > 0) {
            const existingTimeout = get().tokenExpiryTimeout;
            if (existingTimeout) {
              clearTimeout(existingTimeout);
            }
      
            // Configura un timeout para renovar el token antes de que expire
            const timeToRenewToken = 30 // tiempo en segundos
            const renewTime = Math.max(timeLeft - timeToRenewToken * 1000, 0);
    
            const timeout = setTimeout(() => {
              console.log("Renovando token...");
              get().renewToken();
            }, renewTime);
      
            set({ tokenExpiryTimeout: timeout });
          }
    
        } catch (error) {
          console.error("Error al decodificar el token:", error);
        }
      },

      // Información del usuario
      userInfo: {
        id: "",
        name: "",
        email: "",
        roles: [],
        permissions: [],
      },

      setUserInfo: (userInfo: User) => {
        set(() => ({
          userInfo: userInfo,
        }));
      },


    }),
    {
      name: "auth",
      // // storage: createJSONStorage(() => customSessionStorage),
      // hacer que en el sessionStorage se guarde solamente la info del usuario
    }
  )
);
