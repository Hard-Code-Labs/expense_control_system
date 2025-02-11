import { ServiceError } from "@/src/shared/errors/ServiceError";

type Props = {
  accessToken: string;
  refreshToken: string;
}

export const logoutService = async ({
  accessToken,
  refreshToken
} : Props) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${accessToken}`);

  const response = await fetch ('/xis/v1/auth/logout', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      "accessToken": accessToken,
      "refreshToken": refreshToken
    }),
  })

  if (!response.ok) {
    console.error(`Error ${response.status}: ${response.statusText}`);
  }

  return { success: true}
};