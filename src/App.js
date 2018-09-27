import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './Logo';
import Navigation from './Navigation';
import UserProfile from './UserProfile';
import Search from './Search';
import Hero from './Hero';
import TitleList from './TitleList';
class App extends Component {
  constructor(props) {
    super(props);
  }
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
        <TitleList title="Search Results" url={this.state.searchUrl} />
        <TitleList title="Top TV picks for Jack" url='discover/tv?sort_by=popularity.desc&page=1' />
        <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' />
        <TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' />
      </div>
    );
  }
}

export default App;
