import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import HomePage from './pages/HomePage';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<HomePage />} exact />
        </Routes>
      </Router>
  );
  }
}

export default App;
