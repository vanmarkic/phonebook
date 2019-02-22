import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

impo


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
          <div className="App">
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
>>