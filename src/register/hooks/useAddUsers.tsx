import { useCallback, useState } from "react"
import { postUsers } from "../services/postUsers"
import { Users } from "../types";

export const useAddUsers = () => {
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const addUsers = useCallback(async (newUser: Users) => {
    try {
      const response = await postUsers(newUser);
      setResult(response);
      console.log("Usuario creado correctamente", response);
      return response;
    } catch (error) {
      setError(error as Error)
      console.error("Error al crear un usuario:", error);
      throw error;
    } finally {
      setLoading(false)
    }
  }, [])

  return {result, loading, error, addUsers}
}