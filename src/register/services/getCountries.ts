import { ServiceError } from "@/src/shared/errors/ServiceError";

export const getCountries = async () => {

  const response = await fetch (process.env.NEXT_PUBLIC_URL_GET_COUNTRIES!, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const responseData = await response.json();

  if (!response.ok) {
    console.error(`Error ${responseData.code}: ${responseData.customMessage} -> ${responseData.details.error}`);
    throw new ServiceError(responseData, "es");
  }

  return responseData
};