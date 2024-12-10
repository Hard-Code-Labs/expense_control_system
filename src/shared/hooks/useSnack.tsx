import { useSnackbar, VariantType } from "notistack";

export const useSnack = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const enqueueSnack = (message: string, type: VariantType = "success") =>
    enqueueSnackbar(message, {
      variant: type,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      autoHideDuration: 5000,
    });

  return { enqueueSnack, closeSnack: closeSnackbar };
};
