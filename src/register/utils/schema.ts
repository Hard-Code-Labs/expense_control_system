import { object, string, ref } from "yup";

export const registerSchema = object().shape({
  perName: string()
    .required("Este campo es requerido")
    .matches(/^(?!\s+$)[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
      message: "El nombre solo puede contener letras, espacios y tildes, y no puede estar vacío o solo con espacios",
    })
    .test("no-multiple-spaces", "El nombre no puede contener múltiples espacios consecutivos", (value) => {
      if (!value) return true; // Si el campo está vacío, dejar que la validación de `required` maneje el error.
      return !/\s{2,}/.test(value); // Verifica que no existan 2 o más espacios consecutivos.
    })
    .max(20, "Este campo no puede tener más de 60 caracteres"),
  perLastname: string()
    .required("Este campo es requerido")
    .matches(/^(?!\s+$)[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
      message: "El apellido solo puede contener letras, espacios y tildes, y no puede estar vacío o solo con espacios",
    })
    .test("no-multiple-spaces", "El nombre no puede contener múltiples espacios consecutivos", (value) => {
      if (!value) return true; // Si el campo está vacío, dejar que la validación de `required` maneje el error.
      return !/\s{2,}/.test(value); // Verifica que no existan 2 o más espacios consecutivos.
    })
    .max(20, "Este campo no puede tener más de 60 caracteres"),
  perMail: string()
    .required("Este campo es requerido")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: "El correo electrónico no es válido"
    })
    .max(60, "Este campo no puede tener más de 60 caracteres"),
  countryId: string().required("Este campo es requerido"),
  perPassword: string()
    .required("Este campo es requerido")
    .matches(/^[A-Za-z\d_\-!@#*$%&+=]+$/, {
      message: "La contraseña contiene símbolos no permitidos. Solo se permiten los caracteres especiales: _-!@#*$%&+=",
    })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_\-!@#$%&+=])[A-Za-z\d_\-!@#*$%&+=]{12,60}$/, {
      message: "La contraseña debe tener más de 12 caracteres, incluir al menos una letra mayúscula, una letra minúscula, un número y un carácter especial: _-!@#*$%&+=",  
    })
    .max(60, "Este campo no puede tener más de 60 caracteres"),
  confirmPassword: string()
    .oneOf([ref('perPassword')], 'Las contraseñas deben coincidir')
    .required('La confirmación de la contraseña es obligatoria')
    .max(60, "Este campo no puede tener más de 60 caracteres"),
})