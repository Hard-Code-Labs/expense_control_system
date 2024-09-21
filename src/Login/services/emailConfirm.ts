
export const emailConfirm = async (token: string) => {
  
  const response = await fetch (process.env.NEXT_PUBLIC_URL_POST_EMAIL_CONFIRM!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  })

  if (!response.ok) {
    if (response.status === 400) {
      throw new Error('Token inválido o expirado.')
    } else {
      throw new Error(`Error al confirmar el correo: ${response.status}`)
    }
  }

  const data = response.json()

  return data
};