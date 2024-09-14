import { useCallback, useState } from "react"
import { postUsers } from "../services/postUsers"
import { NewUser } from "../../global/types/Users";
import { useSnack } from "@/src/hooks/useSnack";

export const useAddUsers = () => {
  const { enqueueSnack } = useSnack();
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const addUsers = useCallback(async (newUser: NewUser) => {
    try {
      const response = await postUsers(newUser);
      setResult(response);
      console.log("Usuario creado correctamente", response);
      enqueueSnack(`Registro exitoso, Bienvenido ${response.perName}! 🎉`, "success");
      return response;
    } catch (error: any) {
      setError(error as Error)
      if(error.message.includes("400")) {
        enqueueSnack("Este correo electrónico ya está registrado.", "error")
        enqueueSnack("Por favor, usa uno diferente o intenta iniciar sesión.", "error")
        return
      }
      enqueueSnack(`${error.message}`, "error")
      throw error;
    } finally {
      setLoading(false)
    }
  }, [])

  return {result, loading, error, addUsers}
}