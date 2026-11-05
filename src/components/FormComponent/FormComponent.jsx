import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import styles from "./FormComponent.module.sass";

const FORM_SHEMA = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(24)
    .matches(/^(?=.*\d)/, "Password must have a number")
    .matches(/(?=.*[a-z])/, "Password must have a little number")
    .matches(/(?=.*[!@#$%^&*])/, "Ppassword must have a symbol")
    .matches(/(?=.*\W)/, "Password don`t must have a whitespace")
    .required(),
});

function FormComponent() {
  const initialValues = { email: "", password: "" };

  const handleSubmit = (values, formBag) => {
    console.log("Submit from values", values);
    formBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FORM_SHEMA}
    >
      {(formikProps) => {
        return (
          <Form>
            <label>
              <Field type="email" name="email" placeholder="email@email"></Field>
              <ErrorMessage name="email" component="span"></ErrorMessage>
            </label>
            <label>
              <Field type="password" name="password" placeholder="Password"></Field>
              <ErrorMessage name="password" component="span"></ErrorMessage>
            </label>
            <button type="submit">Login</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormComponent;
