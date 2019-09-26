import React, { FC } from "react";
import Cell from "./HeaderCell";

interface Props {
  headers: Array<string>;
}

const Header: FC<Props> = ({ headers }) => {
  const Cells = headers.map(header => <Cell label={header} />);
  return (
    <thead>
      <tr>{Cells}</tr>
    </thead>
  );
};

export default Header;
