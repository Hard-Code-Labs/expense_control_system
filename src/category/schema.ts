import { object, string } from "yup";

export const categoriesSchema = object().shape({
  //! Permitir que el nombre sean solo letras mayusculas y minusculas y espacios
  cat_name: string()
    .required("Este campo es requerido")
    .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
      message: "El nombre de la farmacia no es válido",
    }),
  cat_icon: string().required("Este campo es requerido"),
  cat_type: string().required("Este campo es requerido")
})