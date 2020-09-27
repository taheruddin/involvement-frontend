import React from "react";
import {Link} from 'react-router-dom';

function Involvement(props) {
  const {id, username} = props.involvement;
  return (
    <tr>
      <td>{username}</td>
      <td><Link to={"/" + id + "/edit"}>Edit</Link></td>
    </tr>
  );
}

export default Involvement;