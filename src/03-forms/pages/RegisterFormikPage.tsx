import { Form, Formik } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";
import { MyTextInput } from '../components/MyTextInput';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "El nombre debe de ser de 2 o más caracteres")
            .max(15, "El nombre debe de ser de 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Revise el formato del correo electrónico")
            .required("Requerido"),
          password1: Yup.string()
            .min(6, "La contraseña debe ser de al menos 6 caracteres")
            .required("Requerido"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Las 2 contraseñas deben coincidir")
            .required("Requerido"),
        })}
      >
        {
          ({handleReset}) => (
            <Form>
              <MyTextInput
                label="Nombre"
                name="name"
                placeholder="Enrique"
              />
              <MyTextInput
                label="Email"
                name="email"
                type="email"
                placeholder="enrique@gmail.com"
              />
              <MyTextInput
                label="Password"
                name="password1"
                type="password"
              />
              <MyTextInput
                label="Repeat Password"
                name="password2"
                type="password"
              />
              <button type="submit">Create</button>
              <button type="button" onClick={handleReset}>
                Reset Form
              </button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};
