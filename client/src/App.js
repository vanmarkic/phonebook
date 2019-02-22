import React, { Component } from "react";
import {  Switch, Route, BrowserRouter } from "react-router-dom";

import Home from './Components/Home/Home'
import NewEntry from './Components/NewEntry/NewEntry'
import EditEntry from './Components/EditEntry/EditEntry'
import NavBar from './Components/NavBar'





class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className="App">
            <NavBar />           
            <Switch>       
              <Route exact path="/" component={Home} />
              <Route exact path="/new" component={NewEntry} />
              <Route exact path="/edit" component={EditEntry} />
            </Switch>    
         </div>
      </BrowserRouter>
    );
  }
}

export default App;
