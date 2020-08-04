import React from 'react';
import {Route, Switch} from "react-router-dom";
import Header from './Components/Header/Header';
import MapComponent from './Components/MapComponent';
import FreeComp from './Components/FreeComp';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
        <Header />
          <Switch>
              <Route exact path="/" component={MapComponent}/>
              <Route exact path="/FreeComp" component={FreeComp}/>
          </Switch>
    </div>
  );
}

export default App;
