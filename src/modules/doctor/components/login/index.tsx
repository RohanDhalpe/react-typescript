import { useFormik } from "formik";
import { useLogin } from "../../../../hooks";
import LoginComponent from "./component";
import { LoginFormData, loginSchema } from "./loginSchema";

function LoginContainer() {
  const { sendLoginRequest, isLoginPending } = useLogin();

  const handleSubmit = (values: LoginFormData) => {
    sendLoginRequest(values);
  };

  const formik = useFormik<LoginFormData>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: handleSubmit,
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      formik.handleSubmit();
    }
  };

  return (
    <LoginComponent
      isLoginPending={isLoginPending}
      formValues={formik.values}
      formErrors={formik.errors}
      formTouched={formik.touched}
      handleChange={formik.handleChange}
      handleBlur={formik.handleBlur}
      handleSubmit={formik.handleSubmit}
      handleKeyDown={handleKeyDown}
    />
  );
}
export default LoginContainer;
