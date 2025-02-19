import { ServiceError } from "@/src/shared/errors/ServiceError";

type Props = {
  password: string;
  token: string;
}

export const changePasswordService = async ({
  password,
  token
} : Props) => {
  
  const response = await fetch ('v1/recovery/resetPassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: token,
      newPassword: password
    }),
  })

  const responseData = await response.json();

  if (!response.ok) {
    console.error(`Error ${responseData.code}: ${responseData.customMessage}`);
    throw new ServiceError(responseData, "es");
  }

  return responseData
};