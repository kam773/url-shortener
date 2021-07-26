import * as React from "react";
import Button from "../Button/Button";
import styles from "./ListItem.module.css";

export interface ListItemProps {
  onClick: (e: React.SyntheticEvent) => void;
  data: {
    short_link: string;
    original_link: string;
    copied: boolean;
  };
}

const ListItem: React.FC<ListItemProps> = (props) => {
  const {
    data: { short_link, original_link, copied },
    onClick,
  } = props;
  return (
    <li className={styles.listItem}>
      <div className={styles.wrapper}>
        <div className={styles.originalUrl}>{original_link}</div>
        <div className={styles.itemRight}>
          <div className={styles.shorten}>{short_link}</div>
          <Button onClick={onClick} className={styles.btnCopy}>
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
