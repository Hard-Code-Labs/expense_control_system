import { NewUser } from "../../global/types/Users";

export const postUsers = async (newUser: NewUser) => {
  const options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  };

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_URL_POST_USERS!, options);

    if (!response.ok) {
      let errorResponse;
      try {
        errorResponse = await response.json();
      } catch (e) {
        errorResponse = { message: response.statusText }; 
      }

      throw new Error(`Error ${response.status}: ${errorResponse.message || response.statusText}`);
    }

    const data = await response.json();
    return data;

  } catch (error: any) {
    console.error(`Error al crear un usuario: ${error.message}`);
    throw new Error(`Request failed with status ${error.message}`);
  }
};