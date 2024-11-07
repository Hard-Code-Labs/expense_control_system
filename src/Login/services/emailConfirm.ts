
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
    console.error(`Error code ${responseData.code}: ${responseData.customMessage}`);
    throw new Error(responseData.customMessage);
  }

  return responseData
};