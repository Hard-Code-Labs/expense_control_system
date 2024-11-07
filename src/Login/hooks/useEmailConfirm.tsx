import { emailConfirm } from '../services/emailConfirm';
import { useSnack } from "@/src/hooks/useSnack";
import { useMutation } from "@tanstack/react-query";
import { useState } from 'react';

export const useEmailConfirm = () => {
  const { enqueueSnack } = useSnack();
  const [ isSuccess, setIsSuccess ] = useState(false)

  const { mutate: emailConfirmMutation, isPending: isLoading, isError } = useMutation({
    mutationFn: emailConfirm,
    onSuccess: (values) => {
      console.log(`Code: ${values.code}`, values.customMessage);
      enqueueSnack(values.customMessage, "success");
      setIsSuccess(true)
    },
    onError: (error) => {
      enqueueSnack(error.message, "error");
      setIsSuccess(false)
    },
  });

  return {
    emailConfirmMutation,
    isSuccess,
    isLoading,
    isError
  };
};