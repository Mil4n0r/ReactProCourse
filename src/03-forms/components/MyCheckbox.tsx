import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: Props) => {
  const [field] = useField({...props, type: 'checkbox'});
  // También tenemos el campo meta dentro del hook
  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>

      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
