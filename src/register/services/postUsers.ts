import { Users } from "../types"

export const postUsers = async (newUser: Users) => {
  
  const options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  }

  const data = await fetch(process.env.NEXT_PUBLIC_URL_POST_USERS!, options)
    .then(res => res.json())
    .catch(error => {
      throw new Error(`Error al crear un usuario: ${error.message}`)
    })
    .then(response => {
      return response
    })

    return data
}