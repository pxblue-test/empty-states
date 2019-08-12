import React from 'react';
import { Switch, Route } from 'react-router-dom'

// Different App Pages/Routes
import Action from '../pages/action';
import TextOnly from '../pages/textOnly';
import Placeholder from '../pages/placeholder';
import Subcontent from '../pages/subcontent';

/*
The main page body, which contains the route definitions
*/
const Main = ({ style }) => (
  <main style={{ height: '100%' }}>
    <Switch>
      <Route exact path='/action' component={Action} />
      <Route exact path='/text-only' component={TextOnly} />
      <Route exact path='/placeholder' component={Placeholder} />
      <Route exact path='/sub-content' component={Subcontent} />
      <Route path='/*' component={Action} />
    </Switch>
  </main>
);
export default Main;