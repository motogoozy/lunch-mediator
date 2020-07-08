import React from 'react';
import './globals.scss';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage';

function App() {
   return (
      <div className="App">
         <Switch>
            <Route component={LandingPage} exact path='/' />
         </Switch>
      </div>
   );
}

export default App;
