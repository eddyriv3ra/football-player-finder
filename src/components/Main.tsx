import React, { FC } from "react";
import Grid from "./Grid/Table";
import { TAB_HEADER_TITLE } from "../constants";

const Main: FC = () => {
  return (
    <div>
      <Grid headers={TAB_HEADER_TITLE} />
    </div>
  );
};

export default Main;
