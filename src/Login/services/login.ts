import { ServiceError } from "@/src/shared/errors/ServiceError";
import { UserLogin } from "@/src/shared/types/Users";

export const login = async (user: UserLogin) => {
  
  const response = await fetch ('/xis/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })

  const responseData = await response.json();

  if (!response.ok) {
    console.error(`Error ${responseData.code}: ${responseData.customMessage}`);
    throw new ServiceError(responseData, "es");
  }

  return responseData
};