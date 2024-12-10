import { urlPUT, apiKey, authorization } from "../keys"
import { newCategory } from "../hooks/useAddCategories"

export const updateCategories = async (id: number, category:newCategory) => {
  
  const options = {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
      'apikey': apiKey,
      'Authorization': authorization,
    },
    body: JSON.stringify(category),
  }

  const catUpdated = urlPUT.concat(id.toString())

  const response = await fetch(catUpdated, options)

  return response
}