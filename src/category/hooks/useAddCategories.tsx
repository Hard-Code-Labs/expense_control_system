import { useCallback, useState } from "react";
import { postCategories } from "../services/postCategories"
import { newCategory } from "../types";

interface UseAddCategoryResult {
  result: any;
  error: Error | null;
  loading: boolean;
  addCategory: (newCategory: newCategory) => Promise<void>;
}

export const useAddCategory = (): UseAddCategoryResult => {
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const addCategory = useCallback(async (newCategory: newCategory) => {
    setLoading(true);
    setError(null);
    try {
      const response = await postCategories(newCategory);
      setResult(response);
      console.log("Categoría agregada correctamente:", response);
      return response;
    } catch (error) {
      setError(error as Error)
      console.error("Error al agregar categoría:", error);
      throw error;
    } finally {
      setLoading(false)
    }
  },[])

  return {result, loading, error, addCategory}
}
