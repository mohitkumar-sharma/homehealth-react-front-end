import React from 'react';
import './assets/css/style.css';
import { Switch, Route } from 'react-router-dom';
import { Home, Inner } from './pages';

const App = (): JSX.Element => {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/inner' component={Inner} exact />
    </Switch>
  );
}

export default App;
