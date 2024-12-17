import { useSnack } from "@/src/shared/hooks/useSnack";
import { useMutation } from '@tanstack/react-query'
import { ServiceError } from "../../shared/errors/ServiceError";
import { login } from "../services/login";

export const useLogin = () => {
  const { enqueueSnack } = useSnack();

  const { mutate: userLogin, isSuccess, isPending, error} = useMutation({
    mutationFn: login,
    onSuccess: () => {
      enqueueSnack(`Bienvenido a Money Attic! 🎉`, "success");
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