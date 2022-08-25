import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikYupPage = () => {
  const {
    // handleChange,
    // values,
    handleSubmit,
    handleReset,
    errors,
    touched,
    // handleBlur,
    getFieldProps,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Debe de tener 15 caracteres o menos")
        .required("Requerido"),
      lastName: Yup.string()
        .max(10, "Debe de tener 10 caracteres o menos")
        .required("Requerido"),
      email: Yup.string()
        .email("Debe de tener un formato válido")
        .required("Requerido"),
    }),
  });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" {...getFieldProps("firstName")} />

        {touched.firstName && <span>{errors.firstName}</span>}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" {...getFieldProps("lastName")} />

        {touched.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" {...getFieldProps("email")} />

        {touched.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};
