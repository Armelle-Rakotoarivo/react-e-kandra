import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { Home } from './components/Home/Home';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Emploi } from './components/Emploi';
import { Contact } from './components/Contact';
import { Candidat } from './components/Candidat';
import { HomeScreen } from './components/HomeScreen';
import { Connexion } from './components/Connexion';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/emploi" exact component={Home} />
        <Route path="/emploi/:id" component={Emploi} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/candidats" exact component={Candidat} />
        <Route path="/profils" exact component={Candidat} />
        <Route path="/recruteur" exact component={Contact} />
        <Route path="/connexion" exact component={Connexion} />
      </Switch>
    </Router>
  );
}

export default App;
