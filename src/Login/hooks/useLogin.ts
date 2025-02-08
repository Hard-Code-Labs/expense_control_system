import { useSnack } from "@/src/shared/hooks/useSnack";
import { useMutation } from '@tanstack/react-query'
import { ServiceError } from "../../shared/errors/ServiceError";
import { login } from "../services/login";
import { useUserAuthStore } from "@/src/shared/store/userAuthStore";

export const useLogin = () => {
  const { enqueueSnack } = useSnack();
  const setAccessToken = useUserAuthStore(state => state.setAccessToken);
  const setRefreshToken = useUserAuthStore(state => state.setRefreshToken);

  const { mutate: userLogin, isSuccess, isPending, error} = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      enqueueSnack(`Bienvenido a Money Attic! 🎉`, "success");
      setAccessToken(data.accessToken)
      setRefreshToken(data.refreshToken)
    },
    onError: (error: ServiceError) => {
      enqueueSnack(error.customMessage, "error")
    }
  })

  return {
    userLogin,
    isSuccess,
    isPending,
    error
  }
}