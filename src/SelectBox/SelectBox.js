import React, {Component} from "react";
import Sector from "./Sector";
import "./SelectBox.css";
import {getTree} from "../ServerClient/SectorClient";

class SelectBox extends Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    getTree().then(
      rootSector => {
        console.log(rootSector);
        this.setState({rootSector: rootSector});
      });
  }

  render() {
    return this.state.rootSector ?
    (
      <div className="select-box">
        <Sector
          sector={this.state.rootSector}
          sectorsIds={this.props.sectorsIds}
          sectorAdd={this.props.sectorAdd}
          sectorRemove={this.props.sectorRemove}
        />
      </div>
    ) :
    (<p>Loading ...</p>);
  }
}

export default SelectBox;