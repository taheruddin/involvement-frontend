import React from "react";
import Sector from "./Sector";
import {sortBy} from "lodash";

function ListSectors(props) {
  const categories = sortBy(props.categories, o => o.title) ; //TODO: Not required anymore as backend send sorted list
  return(
    <>
      {categories.map(category => <Sector key={category.id} category={category}/>)}
    </>
  );

}

export default ListSectors;

// TODO: remove this file