import "./SaveReport.css";
import React, {Component} from "react";

class SaveReport extends Component{
  constructor(props) {
    super(props);
    this.state = {show: true};
  }

  componentDidMount() {
    setTimeout(()=>{this.setState({show: false})}, 2000);
  }

  render() {
    const {cssClass, message} = this.props.saveReport;
    return this.state.show &&
      <p className={cssClass}>{message}</p>
    ;
  }
}

export default SaveReport;