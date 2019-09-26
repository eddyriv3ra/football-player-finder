import React, { FC } from "react";
import style from "./styles.module.scss";

interface Props {
  title: string;
}

const Title: FC<Props> = ({ title }) => {
  return <div className={style.title}>{title}</div>;
};

export default Title;
