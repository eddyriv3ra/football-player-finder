import React, { FC } from "react";
import Header from "../Header";

interface Props {
  headers: Array<string>;
}

const Grid: FC<Props> = ({ headers }) => {
  return (
    <table className="table table-striped">
      <Header headers={headers} />
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Grid;
