import { useRouter } from 'vue-router';
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export function useLoginForm() {
  const router =useRouter();

  const schema = yup.object({
    email: yup.string().trim()
    .required("Пожалуйста введите email")
    .email("Необходимо вввести корректный email"),
    password: yup.string().trim()
    .required("Пожалуйста введите пароль")
    .min(6, "пароль не может быть меньше 6 символов"),
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

  const onSubmit = handleSubmit(async values => {
    console.log(values);
    router.push('/');
  });


  return {
    email,
    eError,
    password,
    pError,
    onSubmit,
  }
}
