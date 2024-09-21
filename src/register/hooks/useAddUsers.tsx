import { useEffect } from "react"
import { createUser } from '../services/createUser';
import { useSnack } from "@/src/hooks/useSnack";
import { useMutation } from '@tanstack/react-query'


export const useAddUser = () => {
  const { enqueueSnack } = useSnack();

  const { mutate: addUser, isSuccess, error,} = useMutation({
    mutationFn: createUser,
    onSuccess: (response) => {
      enqueueSnack(`Registro exitoso, Bienvenido ${response.perName}! 🎉`, "success");
      enqueueSnack(`Verifica tu correo para activar tu cuenta y acceder.`, "info");
    },
    onError: (error) => {
      enqueueSnack(error.message, "error")
      if (error.message.includes("Este correo electrónico ya está registrado.")) {
        enqueueSnack("Por favor, usa uno diferente o intenta iniciar sesión.", "info")
      }
    }
  })

  return {
    addUser,
    isSuccess,
    error
  }
}