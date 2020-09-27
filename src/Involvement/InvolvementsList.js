import React, {Component} from "react";
import Involvements from "./Involvements";
import {getAll} from "../ServerClient/InvolvementClient";

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
      (<Involvements involvements={this.state.involvements} />) :
      (<div>Loading ...</div>);
  };
}

export default InvolvementsList;