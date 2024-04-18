import { urlPOST, apiKey, authorization } from "../keys"

interface Category {
  cat_name: string;
  cat_type: string;
  cat_icon: string;
  cat_editable: boolean;
}

export const postCategories = async (newCategory: Category) => {

  const options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'apikey': apiKey,
      'Authorization': authorization,
    },
    body: JSON.stringify(newCategory),
  }

  const response = fetch(urlPOST, options)

  if (!response) {
    throw new Error(`Error al agregar categoría: ${response}`);
  }

  const data = (await response).json;

  return data;
}