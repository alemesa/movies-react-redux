import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MoviesList from './components/MoviesList/MoviesList';
import MovieDetail from './components/MovieDetail/MovieDetail';
import SearchMovie from './components/SearchMovie/SearchMovie';
import UpcomingList from './components/UpcomingList/UpcomingList';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/rootReducer';
import logger from 'redux-logger';
import Toggle from './components/Toggle/Toggle';
import thunk from 'redux-thunk';

const middleware = [logger, thunk];
const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Header />
        <Toggle />
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/search" component={SearchMovie} />
          <Route path="/upcoming" component={UpcomingList} />
          <Route path="/movie/:id" component={MovieDetail} />
        </Switch>
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default App;
