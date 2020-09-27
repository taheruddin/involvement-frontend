import React, {Component} from "react";
import "./Selectable.css"

class Selectable extends Component{

  handleChange = (event) => {
    if (event.target.checked)
      this.props.sectorAdd(this.props.sector.id); // console.log("checked " + this.props.sector.id);
    else
      this.props.sectorRemove(this.props.sector.id); // console.log("Unchecked " + this.props.sector.id);
  }

  render() {
    const id = this.props.sector.id;
    const beSelected = this.props.sectorsIds?.includes(this.props.sector.id);

    return(
      <div className="leaf">
        <label>
          <input id={"sector-" + id} checked={beSelected} type="checkbox" onChange={this.handleChange} />
          {this.props.sector.title}
        </label>
      </div>
    );
  }
}

export default Selectable;