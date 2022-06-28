import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export function useLoginForm() {

  const schema = yup.object({
    email: yup.string().trim()
    .required("Пожалуйста введите email")
    .email("Необходимо вввести корректный email"),
    password: yup.string().trim()
    .required("Пожалуйста введите пароль")
    .min(6, "пароль не может быть меньше 6 символов"),
  });
  useForm({validationSchema: schema});

  const {
    value: email,
    handleBlur: eBlur,
    errorMessage: eError,
  } = useField("email");
  const {
    value: password,
    handleBlur: pBlur,
    errorMessage: pError,
  } = useField("password");



  return {
    email,
    eError,
    eBlur,
    pBlur,
    password,
    pError,
  }
}
