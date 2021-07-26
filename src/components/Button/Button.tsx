import * as React from "react";
import styles from "./Button.module.css";

export interface ButtonProps {
  onClick?: (e: React.SyntheticEvent) => void;
  children: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, children, className } = props;
  return (
    <button
      data-cy="btn"
      className={`${styles.btn} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
