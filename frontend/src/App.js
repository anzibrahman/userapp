import React from 'react';
import { BrowserRouter as Router, Route,  BrowserRouter } from 'react-router-dom';
import Header from './components/Layout/Header';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Home from './components/Pages/Home';
import NotFound from './components/Pages/NotFound';

const App = () => {
  return (
    <Router>
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </BrowserRouter>
    </Router>
  );
};

export default App;