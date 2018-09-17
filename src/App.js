import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './Logo';
import Navigation from './Navigation';
import UserProfile from './UserProfile';
import Search from './Search';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        
        <Logo />
        <Navigation />
        <UserProfile />
        <Search />
      </div>
    );
  }
}

export default App;
