import React, { FC } from "react";
import Title from "./components/Title";
import Main from "./components/Main";
import { APP_TITLE } from "./constants";
import styles from "./styles.module.scss";

const App: FC = () => {
  return (
    <div className={styles.app}>
      <Title title={APP_TITLE} />
      <Main />
    </div>
  );
};

export default App;
