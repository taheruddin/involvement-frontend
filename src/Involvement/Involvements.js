import React from "react";
import Involvement from "./Involvement";
import "./Involvements.css"


function Involvements(props) {
  return (
    <table className="list">
      <thead>
      <tr>
        <th>Name</th>
        <th>Options</th>
      </tr>
      </thead>
      <tbody>
      {props.involvements.map(
        involvement => (
          <Involvement key={involvement.id} involvement={involvement} />
        )
      )}
      </tbody>
    </table>
  );
}

export default Involvements;