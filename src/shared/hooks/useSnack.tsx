import { useSnackbar, VariantType } from "notistack";

type Props = {
  message: string;
  type?: VariantType;
  duration?: number;
  persist?: boolean;
  vertical?: "top" | "bottom";
  horizontal?: "left" | "center" | "right";
};

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

    const enqueueSnackProps = ({
      message,
      type = "success",
      duration = 5000,
      persist = false,
      vertical = "top",
      horizontal = "right",
      
    }: Props) =>
      enqueueSnackbar(message, {
        variant: type,
        anchorOrigin: {
          vertical,
          horizontal,
        },
        autoHideDuration: duration,
        persist,
      });

  return { enqueueSnack, enqueueSnackProps, closeSnack: closeSnackbar };
};

// import { useSnackbar, VariantType } from "notistack";
// import { persist } from 'zustand/middleware';

// type Props = {
//   message: string;
//   type?: VariantType;
//   duration?: number;
//   persist?: boolean;
// };

// export const useSnack = () => {
//   const { enqueueSnackbar, closeSnackbar } = useSnackbar();

//   const enqueueSnack = ({
//     message,
//     type = "success",
//     duration = 5000,
//     persist = false
//   }: Props) =>
//     enqueueSnackbar(message, {
//       variant: type,
//       anchorOrigin: {
//         vertical: "top",
//         horizontal: "right",
//       },
//       autoHideDuration: duration,
//       persist,
//     });

//   return { enqueueSnack, closeSnack: closeSnackbar };
// };

