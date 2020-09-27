import React, {Component} from "react";
import SelectBox from "../SelectBox/SelectBox";
import SaveReport from "./SaveReport";
import "./InvolvementForm.css"
import {post,get, put} from "../ServerClient/InvolvementClient";

class InvolvementForm extends Component{
  constructor(props) {
    super(props);

    this.state = {
      saveReport:false,
      saveClicked: false,
      isValidUsername: false,
      isValidSectors: false,
      sectors: [],
      name: "",
      isAgreed: false
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      get(id).then(involvement => {
        console.log(involvement)
        const serverState = {
          saveClicked: true,
          isValidUsername: true,
          isValidSectors: true,
          sectors: involvement.sectors.map(sector => sector.id),
          name: involvement.username,
          isAgreed: true
        };
        this.setState(serverState);
      });
    }
  }

  handleSave = (event) => {
    this.setState({
      saveReport:false,
      saveClicked: true
    });

    const {isValidUsername, isValidSectors, sectors, name, isAgreed} = this.state;
    if (isValidUsername && isValidSectors && isAgreed) {
      const data = {
        username: name,
        isAgreed: isAgreed,
        sectors: sectors
      }
      console.log("Sending data to the server ...")

      // TODO: disable the form
      const id = this.props.match.params.id;
      const failed = {cssClass: "error", message: "Failed to save data."};
      const success = {cssClass: "success", message: "Data saved successfully."};
      if (id) {
        put(id, data).then(involvement => {
          this.setState({saveReport: success});
        }).catch(error => {
          this.setState({saveReport: failed});
        });
      } else {
        post(data).then(involvement => {
          this.setState({saveReport: success});
          this.props.history.replace("/list" );
        }).catch(error => {
          this.setState({saveReport: failed});
        });
      }
    }
  }

  handleUsername = (event) => {
    const name = event.target.value;
    if (name.length === 0) {
      this.setState({isValidUsername: false});
    } else {
      this.setState({
        isValidUsername: true,
        name: name
      });
    }
  }

  handleIsAgreed = (event) => {
    if (event.target.checked)
      this.setState({isAgreed: true});
    else
      this.setState({isAgreed: false});
  }

  sectorAdd = (id) => {
    const sectors = [...this.state.sectors, id];
    this.setState({
      isValidSectors: true,
      sectors: sectors
    });
  }

  sectorRemove = (id) => {
    const sectors = this.state.sectors.filter(
      (existingId, index) => existingId !== id
    );
    console.log(sectors); // TODO: clean up
    this.setState({
      isValidSectors:  sectors.length > 0,
      sectors: sectors
    });
  }

  render() {
    const saveReport = this.state.saveReport;
    return (
      <div>
        <p>Please enter your name and pick the Sectors you are currently involved in.</p>
        <div className="form-item">
          <div>
            <label>Name</label>
          </div>
          <div className="form-input">
            <input onChange={this.handleUsername} value={this.state.name} name="username" type="text"/>
          </div>
          {
            this.state.saveClicked && !this.state.isValidUsername &&
              <p className="validation-message">Please, enter your username.</p>
          }
        </div>

        <div className="form-item">
          <div>
            <label>Selectors</label>
          </div>
          <div className="form-input">
            <SelectBox sectorsIds={this.state.sectors} sectorAdd={this.sectorAdd} sectorRemove={this.sectorRemove} />
          </div>
          {
            this.state.saveClicked && !this.state.isValidSectors &&
              <p className="validation-message">Please, select at least one sector.</p>
          }
        </div>
        <div className="form-item">
          <label>
            <input onChange={this.handleIsAgreed} checked={this.state.isAgreed} type="checkbox"/>
            Agree to terms
          </label>
          {
            this.state.saveClicked && !this.state.isAgreed &&
              <p className="validation-message">Please, agree to our terms.</p>
          }
        </div>
        <div className="form-item">
          <button onClick={this.handleSave}>Save</button>
          {saveReport && <SaveReport saveReport={saveReport}/> }
        </div>
      </div>
    );
  }
}

export default InvolvementForm;