import React from "react";
import Selectable from "./Selectable";
import "./Sector.css";

function Sector(props) {
  const isRoot = props.sector?.title === "ROOT";

  if(props.sector?.children.length)
    return(
      <div className="list-outer">
        {!isRoot && <div>{props.sector.title}</div>}
        <div className={isRoot ? "" : "category"}>
          {
            props.sector.children.map(
              sector => <Sector
                key={sector.id}
                sector={sector}
                sectorsIds={props.sectorsIds}
                sectorAdd={props.sectorAdd}
                sectorRemove={props.sectorRemove}
              />
            )
          }
        </div>
      </div>
    );
  else
    return(
      <Selectable
        sector={props.sector}
        sectorsIds={props.sectorsIds}
        sectorAdd={props.sectorAdd}
        sectorRemove={props.sectorRemove}
      />
    );
}

export default Sector;