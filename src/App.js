import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MoviesList from './components/MoviesList/MoviesList';
import MovieDetail from './components/MovieDetail/MovieDetail';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
