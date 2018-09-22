import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './Logo';
import Navigation from './Navigation';
import UserProfile from './UserProfile';
import Search from './Search';
import Hero from './Hero';
class App extends Component {
  state = {
    searchTerm: "",
    searchURL: "",
    APIkey: '1589b4248d33d003fc0d0978cc22d66f'
  }

 handleKeyUp = (event) => {
    if (event.key === 'Enter' && this.state.searchTerm !== '') {
     var searchURL = `search/multi?query${this.state.searchTerm}&api_key${this.state.APIkey}`
     this.setState({searchURL})
    }
 }
  
 handleChange = (event) => {
   this.setState({searchTerm: event.target.value})
   console.log(this.state.searchTerm);
 }

  render() {
 

  
    return (
      <div className="App">
        <header className="Header">
        <Logo />
        <Navigation />
        <UserProfile />
        <Search onKeyUp={this.handleKeyUp} onChange={this.handleChange} value={this.state.searchTerm} />
        
        </header>
        <Hero />
      </div>
    );
  }
}

export default App;
