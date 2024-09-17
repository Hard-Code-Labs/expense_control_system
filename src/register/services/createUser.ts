import { NewUser } from "../../global/types/Users";

export const createUser = async (newUser: NewUser) => {

  const response = await fetch (process.env.NEXT_PUBLIC_URL_POST_USERS!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  })

  if (!response.ok) {
    if (response.status === 400) {
      throw new Error('Este correo electrónico ya está registrado.')
    } else {
      throw new Error(`Error al crear un usuario: ${response.status}`)
    }
  }

  const data = response.json()

  return data
};