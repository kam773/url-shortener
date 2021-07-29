import * as React from "react";
import styles from "./Button.module.css";


// To avoid this and make is simpler you can use style-components
export interface ButtonProps {
  onClick?: (e: React.SyntheticEvent) => void;
  children: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  // TODO: incomplete support of props, what bout the disabled property
  const { onClick, children, className } = props;
  return (
    <button
      data-cy="btn" // TODO: Why is this hardcoded? Test id's should be unique
      className={`${styles.btn} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
