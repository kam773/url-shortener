import * as React from "react";
import styles from "./Card.module.css";

export interface CardProps {
  icon: string;
  title: string;
  body: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { icon, title, body } = props;
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardIcon}>
          <img src={icon} alt="" width={40} height={40} />
        </div>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardBody}>{body}</div>
      </div>
    </div>
  );
};

export default Card;
