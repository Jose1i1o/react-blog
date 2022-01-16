import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import logo from './logo.svg';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticleListPage from './pages/ArticleListPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Routes>
                <Route path="/" element={<HomePage />} exact/>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/articles-list" element={<ArticleListPage />} />
                <Route path="/article/:name" element={<ArticlePage />} />
                <Route path="/404" element={<NotFoundPage />} />
                <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
  }
}

export default App;
