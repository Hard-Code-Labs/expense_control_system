import { object, string } from "yup";

export const categoriesSchema = object().shape({
  cat_name: string()
    .required("Este campo es requerido")
    .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
      message: "El nombre solo puede contener letras, espacios y tildes",
    }),
  cat_icon: string().required("Este campo es requerido"),
  cat_type: string().required("Este campo es requerido")
})