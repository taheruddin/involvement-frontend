import React, {Component} from "react";
import Involvements from "./Involvements";
import {getAll} from "../ServerClient/InvolvementClient";
import {Link} from "react-router-dom";

class InvolvementsList extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    getAll().then(involvements => this.setState({involvements: involvements}))
  }

  render() {
    return this.state.involvements ?
      (<div>
        <Involvements involvements={this.state.involvements} />
        <div className="button right"><Link id={"add"} to={"/add"}>Add</Link></div>
      </div>) :
      (<div>Loading ...</div>);
  };
}

export default InvolvementsList;