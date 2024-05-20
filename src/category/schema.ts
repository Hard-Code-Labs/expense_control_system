import { object, string } from "yup";

export const categoriesSchema = object().shape({
  cat_name: string().required("Este campo es requerido"),
  cat_icon: string().required("Este campo es requerido"),
  cat_type: string().required("Este campo es requerido")
})