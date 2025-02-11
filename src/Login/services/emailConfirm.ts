import { ServiceError } from "@/src/shared/errors/ServiceError";

export const emailConfirm = async (token: string) => {
  
  const response = await fetch ('/v1/register/confirmation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ "token": token }),
  })

  const responseData = await response.json();

  if (!response.ok) {
    console.error(`Error ${responseData.code}: ${responseData.customMessage}`);
    throw new ServiceError(responseData, "es");
  }

  return responseData
};