import { useSnack } from "@/src/shared/hooks/useSnack";
import { useMutation } from '@tanstack/react-query'
import { ServiceError } from "../../shared/errors/ServiceError";
import { passwordRecoveryService } from "../services/passwordRecovery";

export const usePasswordRecovery = () => {
  const { enqueueSnack } = useSnack();

  const { mutate: passwordRecovery, isSuccess, isPending, error} = useMutation({
    mutationFn: passwordRecoveryService,
    onSuccess: () => {
      enqueueSnack(`Email enviado con éxito! 📧`, "success");
    },
    onError: (error: ServiceError) => {
      enqueueSnack(error.customMessage, "error")
    }
  })

  return {
    passwordRecovery,
    isSuccess,
    isPending,
    error
  }
}