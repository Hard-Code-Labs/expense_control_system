import { ServiceError } from "@/src/shared/errors/ServiceError";

export const passwordRecoveryService = async (email: string) => {
  
  const response = await fetch ('v1/recovery/password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({"username": email}),
  })

  const responseData = await response.json();

  if (!response.ok) {
    console.error(`Error ${responseData.code}: ${responseData.customMessage}`);
    throw new ServiceError(responseData, "es");
  }

  return response
};