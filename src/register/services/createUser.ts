import { NewUser } from "../../shared/types/Users";
import { ServiceError } from "../../shared/errors/ServiceError";

export const createUser = async (newUser: NewUser) => {

  const response = await fetch ('/xis/v1/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  })

  const responseData = await response.json();

  if (!response.ok) {
    console.error(`Error ${responseData.code}: ${responseData.customMessage}`);
    throw new ServiceError(responseData, "es");
  }

  return responseData
};