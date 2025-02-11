import Cookies from "js-cookie";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
// import { customSessionStorage } from "./sessionStorage";
import jwt from "jsonwebtoken";
import { getRefreshToken } from "../services/getRefreshToken";
import { logoutService } from "../services/logoutService";

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
  automaticRenewToken: (isActive: boolean) => void;
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

        const decodedToken = jwt.decode(token) as { exp: number };
        const expiresToken = new Date(decodedToken.exp * 1000);

        Cookies.set(
          "token",
          token,
          { 
            secure: true,
            sameSite: "Strict",
            expires: expiresToken 
          });
        
        set(() => ({
          refreshToken: token,
        }));

        get().automaticRenewToken(true);
      },

      clearTokens: () => {
        logoutService({
          accessToken: get().accessToken,
          refreshToken: get().refreshToken
        });

        get().automaticRenewToken(false);

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

        get().clearTokens();

        get().setAccessToken(newTokens.accessToken)
        get().setRefreshToken(newTokens.refreshToken)
      },

      automaticRenewToken: (isActive: boolean) => {
        const accessToken = get().accessToken;
        const refreshToken = get().refreshToken;
    
        if (!accessToken || !refreshToken) return;

        if (isActive) {
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
              const timeToRenewToken = 60 // tiempo en segundos
              const renewTime = Math.max(timeLeft - timeToRenewToken * 1000, 0);

              const timeout = setTimeout(() => {
                get().renewToken();
              }, renewTime);
        
              set({ tokenExpiryTimeout: timeout });
            }
      
          } catch (error) {
          }
        } else {
          const existingTimeout = get().tokenExpiryTimeout;
          if (existingTimeout) {
            clearTimeout(existingTimeout);
            set({ tokenExpiryTimeout: null });
          }
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
