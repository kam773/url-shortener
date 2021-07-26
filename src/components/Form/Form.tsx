import * as React from "react";
import styles from "./Form.module.css";

export interface FormProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = (props) => {
  const { onSubmit } = props;
  return (
    <form data-cy="form" className={styles.form} onSubmit={onSubmit}>
      {props.children}
    </form>
  );
};

export default Form;
