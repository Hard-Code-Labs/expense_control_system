import { urlGET, apiKey, authorization } from "../keys"

export const getCategories = async () => {

  const options = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'apikey': apiKey,
      'Authorization': authorization,
    },
  }

  const response = await fetch(urlGET, options)

  return response
}