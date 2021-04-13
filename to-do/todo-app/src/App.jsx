import React from 'react';
import './App.scss';
import {
  BrowserRouter, Route, Switch, Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Cards from './components/Cards';
import CardDetails from './components/CardDetail';
import NewTask from './components/NewTask';
import store from './Redux/stores/configureStore';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Cards} />
          <Route path="/card-details/:name" exact component={CardDetails} />
          <Route path="/card-details/:name/new-task" exact component={NewTask} />
          <Route>
            <h2>404. Page not found!</h2>
            <Link to="/">Got to Dashboard</Link>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
