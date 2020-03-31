import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheet/styles.css';
import { Home } from './components/Home';
import { Addpatient } from './components/AddPatient';
import { Editpatient } from './components/EditPatient';


import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={Addpatient} exact />
        <Route path="/edit/:id" component={Editpatient} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
