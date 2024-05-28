import { updateCategories } from "../services/updateCategories";
import { newCategory } from "../types";

export const useUpdateCategory = (category: newCategory) => {
  try {
    const result = updateCategories(category.cat_id, category)
    console.log("Categoría editada correctamente:", result);
  } catch (error) {
    console.error("Error al editar categoría:", error);
  }
}