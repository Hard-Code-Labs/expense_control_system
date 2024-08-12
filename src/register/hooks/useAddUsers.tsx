import { useCallback, useState } from "react"
import { postUsers } from "../services/postUsers"
import { Users } from "../types";
import { useSnack } from "@/src/hooks/useSnack";

export const useAddUsers = () => {
  const { enqueueSnack } = useSnack();
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
      enqueueSnack(`${error}`, "error")
      throw error;
    } finally {
      setLoading(false)
    }
  }, [])

  return {result, loading, error, addUsers}
}