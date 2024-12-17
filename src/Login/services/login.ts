import { ServiceError } from "@/src/shared/errors/ServiceError";
import { UserLogin } from "@/src/shared/types/Users";

export const login = async (user: UserLogin) => {

  console.log("service", user);
  
  const response = await fetch (process.env.NEXT_PUBLIC_URL_POST_LOGIN!, {
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