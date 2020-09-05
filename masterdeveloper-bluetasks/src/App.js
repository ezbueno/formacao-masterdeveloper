import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TaskListTable from './Components/TaskListTable';
import TaskForm from './Components/TaskForm';
import Login from './Components/Login';

class App extends Component {
  //constructor(props) {
    //super(props);
  //}
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
            <div className="container" style={{marginTop: 20}}>
              <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/form" component={TaskForm}/>
                <Route exact path="/form/:id" component={TaskForm}/>
                <Route path="/" component={TaskListTable}/>
              </Switch>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
