import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './Logo';
import Navigation from './Navigation';
import UserProfile from './UserProfile';
import Search from './Search';
import Hero from './Hero';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header">
        <Logo />
        <Navigation />
        <UserProfile />
        <Search />
        
        </header>
        
        
        <Hero />
      </div>
    );
  }
}

export default App;
