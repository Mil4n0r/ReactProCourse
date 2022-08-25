import { Formik, Form } from "formik";
import * as Yup from "yup";

import { MySelect, MyTextInput, MyCheckbox } from "../components";

import "../styles/styles.css";

export const FormikAbstractation = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe de tener 10 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Debe de tener un formato válido")
            .required("Requerido"),
          terms: Yup.boolean().isTrue("Debe aceptar términos y condiciones"),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "Esta opción no es permitida")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Enrique"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Moreno"
            />

            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="enrique@gmail.com"
            />

            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Junior</option>
            </MySelect>

            <MyCheckbox label="Terms and conditions" name="terms" />

            <button type="submit">Submit</button>
            <button type="button" onClick={formik.handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
