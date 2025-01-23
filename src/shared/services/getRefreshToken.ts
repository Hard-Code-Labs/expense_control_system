import { ServiceError } from "@/src/shared/errors/ServiceError";

type Props = {
  accessToken: string;
  refreshToken: string;
}

export const getRefreshToken = async ({
  accessToken,
  refreshToken
} : Props) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${accessToken}`);

  const response = await fetch (process.env.NEXT_PUBLIC_URL_NEW_REFRESH_TOKEN!, {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      "token": refreshToken
    }),
  })

  const responseData = await response.json();

  if (!response.ok) {
    console.error(`Error ${responseData.code}: ${responseData.customMessage}`);
    throw new ServiceError(responseData, "es");
  }

  return responseData
};