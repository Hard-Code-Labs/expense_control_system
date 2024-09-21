import { useEffect, useState } from "react";
import { emailConfirm } from '../services/emailConfirm';
import { useSnack } from "@/src/hooks/useSnack";
import { useMutation } from "@tanstack/react-query";

export const useEmailConfirm = () => {
  const { enqueueSnack } = useSnack();

  //! Descomentar para usar el endpoint de la API
  // const { mutate: emailConfirmMutation, isSuccess, isPending: isLoading } = useMutation({
  //   mutationFn: emailConfirm,
  //   onSuccess: () => {
  //     enqueueSnack(`Correo confirmado con éxito. 🎉`, "success");
  //   },
  //   onError: (error) => {
  //     enqueueSnack(error.message, "error");
  //   },
  // });

  //! Codigo solo de prueba
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const emailConfirmMutation = (token: string) => {
    setIsLoading(true);
    if (token.length > 50) {
      setIsSuccess(true);
      enqueueSnack(`Correo confirmado con éxito. 🎉`, "success");
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } else {
      setIsSuccess(false);
      enqueueSnack(`Token inválido o expirado.`, "error");
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }

  return {
    emailConfirmMutation,
    isSuccess,
    isLoading,
  };
};