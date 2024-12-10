import { urlPOST, apiKey, authorization } from "../keys"
import { newCategory } from "../types"

export const postCategories = async (newCategory: newCategory) => {

  const options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'apikey': apiKey,
      'Authorization': authorization,
      'Prefer': 'return=representation',
    },
    body: JSON.stringify(newCategory),
  }

  const data = await fetch(urlPOST, options)
    .then(res => res.json())
    .catch(error => {
      throw new Error(`Error al agregar categoría: ${error.message}`)
    })
    .then(response => {
      return response
    })

  return data;
}