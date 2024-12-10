import { ServiceError } from "@/src/shared/errors/ServiceError";

export const emailConfirm = async (token: string) => {
  
  const response = await fetch (process.env.NEXT_PUBLIC_URL_POST_EMAIL_CONFIRM!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ "verificationCode": token }),
  })

  const responseData = await response.json();

  if (!response.ok) {
    console.error(`Error ${responseData.code}: ${responseData.customMessage}`);
    throw new ServiceError(responseData, "es");
  }

  return responseData
};