import { emailConfirm } from '../services/emailConfirm';
import { useSnack } from "@/src/shared/hooks/useSnack";
import { useMutation } from "@tanstack/react-query";
import { useState } from 'react';

export const useEmailConfirm = () => {
  const { enqueueSnack } = useSnack();
  const [ isSuccess, setIsSuccess ] = useState(false)
  const [ isError, setIsError ] = useState(false)

  const { mutate: emailConfirmMutation, isPending: isLoading } = useMutation({
    mutationFn: emailConfirm,
    onSuccess: () => {
      enqueueSnack("Ahora puedes iniciar sesión. 🎉", "success");
      setIsSuccess(true)
      setIsError(false)
    },
    onError: (error) => {
      const message = error.message.split('.').filter(parte => parte.trim() !== '');
      message.map(m => enqueueSnack(m.trim(), "error"))
      setIsSuccess(false)
      setIsError(true)
    },
  });

  return {
    emailConfirmMutation,
    isSuccess,
    isLoading,
    isError
  };
};