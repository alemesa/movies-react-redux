import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MoviesList from './components/MoviesList/MoviesList';
import MovieDetail from './components/MovieDetail/MovieDetail';
import SearchMovie from './components/SearchMovie/SearchMovie';
import UpcomingList from './components/UpcomingList/UpcomingList';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/search" component={SearchMovie} />
        <Route path="/upcoming" component={UpcomingList} />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
