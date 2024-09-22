import { object, string, ref } from "yup";

export const passwordRecoverySchema = object().shape({
  perMail: string()
    .required("Este campo es requerido")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: "El correo electrónico no es válido"
    }),
})

export const resetPasswordSchema = object().shape({
  perPassword: string()
    .required("Este campo es requerido")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_\-!@#$%&+=])[A-Za-z\d_\-!@#$%&+=]{12,32}$/, "La contraseña no cumple con los requisitos de seguridad"),
  confirmPassword: string()
    .oneOf([ref('perPassword')], 'Las contraseñas deben coincidir')
    .required('La confirmación de la contraseña es obligatoria')
})

