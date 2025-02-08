import { ServiceError } from "@/src/shared/errors/ServiceError";

export const changePasswordService = async (password: string) => {
  
  const response = await fetch (process.env.NEXT_PUBLIC_URL_POST_CHANGE_PASSWORD!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(password),
  })

  const responseData = await response.json();

  if (!response.ok) {
    console.error(`Error ${responseData.code}: ${responseData.customMessage}`);
    throw new ServiceError(responseData, "es");
  }

  return responseData
};