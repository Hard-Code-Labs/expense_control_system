import { postCategories } from "../services/postCategories"

export interface newCategory {
  cat_id: number;
  cat_name: string;
  cat_type: string;
  cat_icon: string;
  cat_editable: boolean;
}

export const useAddCategory = (newCategory: newCategory) => {
  try {
    const result = postCategories(newCategory);
    console.log("Categoría agregada correctamente:", result);
  } catch (error) {
    console.error("Error al agregar categoría:", error);
  }

}