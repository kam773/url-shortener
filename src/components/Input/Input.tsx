import * as React from "react";
import styles from "./Input.module.css";

export interface InputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  error: null | string;
  className: string;
  style?: React.CSSProperties;
  type: "text";
  placeholder: string;
}

const Input: React.FC<InputProps> = (props) => {
  const { handleChange, name, value, error, placeholder, className, ...rest } =
    props;
  return (
    <div className={styles.wrapInput}>
      <input
        data-cy="input"
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        name={name}
        className={`${className} ${error && styles.error}`}
        {...rest}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Input;
