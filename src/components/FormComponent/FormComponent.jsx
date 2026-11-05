import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import styles from "./FormComponent.module.sass";
import classNames from "classnames";

const FORM_SHEMA = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(24)
    .matches(/^(?=.*\d)/, "Password must have a number")
    .matches(/(?=.*[a-z])/, "Password must have a little letter")
    .matches(/(?=.*[!@#$%^&*])/, "Ppassword must have a symbol")
    .matches(/^\S+$/, "Password don`t must have a whitespace")
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
        const inputEmailClass = classNames(styles.input, {
          [styles.valid]: !formikProps.errors.email && formikProps.touched.email,
          [styles.invalid]: formikProps.errors.email && formikProps.touched.email,
        });

        const inputPasswordClass = classNames(styles.input, {
          [styles.valid]:
            !formikProps.errors.password && formikProps.touched.password,
          [styles.invalid]:
            formikProps.errors.password && formikProps.touched.password,
        });

        return (
          <Form className={styles.form}>
            <label className={styles.label}>
              <Field
                type="email"
                name="email"
                placeholder="email@email"
                className={inputEmailClass}
              ></Field>
              <ErrorMessage
                name="email"
                component="span"
                className={styles.error}
              ></ErrorMessage>
            </label>
            <label className={styles.label}>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className={inputPasswordClass}
              ></Field>
              <ErrorMessage
                name="password"
                component="span"
                className={styles.error}
              ></ErrorMessage>
            </label>
            <button type="submit" className={styles.loginBtn}>
              Login
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormComponent;
