import React from 'react';
import './App.scss';
import {
  BrowserRouter, Route, Switch, Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import MyLists from './components/MyLists';
import store from './Redux/stores/configureStore';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MyLists} />
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
