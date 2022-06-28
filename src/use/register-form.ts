import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export function useRegisterForm() {

  const schema = yup.object({
    email: yup.string().trim()
    .required("Пожалуйста введите email")
    .email("Необходимо вввести корректный email"),
    password: yup.string().trim()
    .required("Пожалуйста введите пароль")
    .min(6, "пароль не может быть меньше 6 символов"),
    name: yup.string().trim().required("Пожалуйста введите имя"),
  });

  const { handleSubmit } = useForm({validationSchema: schema});

  const {
    value: email,
    errorMessage: eError,
  } = useField("email");
  const {
    value: password,
    errorMessage: pError,
  } = useField("password");
  const {
    value: name,
    errorMessage: nError,
  } = useField("name");

  const onSubmit = handleSubmit(async values => {
  });

  return {
    email,
    eError,
    password,
    pError,
    name,
    nError,
    onSubmit,
  }
}
