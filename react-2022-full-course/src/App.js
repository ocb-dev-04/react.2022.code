import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import NewPost from './pages/NewPost';
import PostList from './pages/PostList';
import About from './pages/About';
import Missing from './pages/Missing';

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <Home />
      <NewPost />
      <PostList />
      <About />
      <Missing />
      <Footer />
    </div>
  )
}

export default App
