import { object, string} from "yup";

export const loginSchema = object().shape({
  username: string()
    .required("Este campo es requerido")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: "El correo electrónico no es válido"
    })
    .max(60, "Este campo no puede tener más de 60 caracteres"),
  password: string()
    .required("Este campo es requerido")
    .max(60, "Este campo no puede tener más de 60 caracteres"),
})