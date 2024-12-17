import { useSnack } from "@/src/shared/hooks/useSnack";
import { useMutation } from '@tanstack/react-query'
import { ServiceError } from "../../shared/errors/ServiceError";
import { changePasswordService } from "../services/changePassword";

export const usePasswordRecovery = () => {
  const { enqueueSnack } = useSnack();

  const { mutate: changePassword, isSuccess, isPending, error} = useMutation({
    mutationFn: changePasswordService,
    onSuccess: () => {
      enqueueSnack(`Contraseña cambiada con éxito! 🔏`, "success");
    },
    onError: (error: ServiceError) => {
      enqueueSnack(error.customMessage, "error")
    }
  })

  return {
    changePassword,
    isSuccess,
    isPending,
    error
  }
}