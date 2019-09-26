import React, { FC } from "react";
import styles from "./styles.module.scss";

interface Props {
  label: string;
}

const Cell: FC<Props> = ({ label }) => {
  return (
    <th scope="col" className={styles.header}>
      {label}
    </th>
  );
};

export default Cell;
