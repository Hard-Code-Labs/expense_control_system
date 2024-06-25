import { object, string, ref } from "yup";

export const registerSchema = object().shape({
  name: string()
    .required("Este campo es requerido")
    .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
      message: "El nombre solo puede contener letras, espacios y tildes",
    }),
  lastName: string()
    .required("Este campo es requerido")
    .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
      message: "El apellido solo puede contener letras, espacios y tildes",
    }),
  email: string()
    .required("Este campo es requerido")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: "El correo electrónico no es válido"
    }),
  country: string().required("Este campo es requerido"),
  password: string()
    .required("Este campo es requerido")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_\-!@#$%&+=])[A-Za-z\d_\-!@#$%&+=]{12,32}$/, "La contraseña no cumple con los requisitos de seguridad"),
  confirmPassword: string()
    .oneOf([ref('password')], 'Las contraseñas deben coincidir')
    .required('La confirmación de la contraseña es obligatoria')
})