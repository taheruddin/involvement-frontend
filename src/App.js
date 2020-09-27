import React from 'react';
import {Route, Switch, /*, IndexRoute, Link, hashHistory*/} from 'react-router-dom';
import InvolvementsList from "./Involvement/InvolvementsList";
import './App.css';
import InvolvementForm from "./InvolvementForm/InvolvementForm";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
// TODO: clean up
      </header>*/}
      <div>
        <Switch>
          <Route path={"/"} exact component={InvolvementsList} />
          <Route path={"/list"} exact component={InvolvementsList} />
          <Route path={"/add"} exact component={InvolvementForm} />
          <Route path={"/:id/edit"} exact component={InvolvementForm} />
        </Switch>
      </div>


    </div>
  );
}

export default App;
