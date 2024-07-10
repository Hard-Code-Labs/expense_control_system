import { Users } from "../types"

export const postUsers = async (newUser: Users) => {
  
  const options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  }

  const data = await fetch("https://inquisitive-sarita-hardcodelabs-7e4c08e2.koyeb.app/xis/person/registration", options)
    .then(res => res.json())
    .catch(error => {
      throw new Error(`Error al agregar categoría: ${error.message}`)
    })
    .then(response => {
      return response
    })

    return data
}