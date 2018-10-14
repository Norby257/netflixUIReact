import React, { Component } from 'react';
import './App.css';
import Logo from './Logo';
import Navigation from './Navigation';
import UserProfile from './UserProfile';
import Search from './Search';
import Hero from './Hero';
import TitleList from './TitleList';
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
        <TitleList title="Search Results" url={this.state.searchUrl} />
        <TitleList title="Top TV picks for Norby" url='discover/tv?sort_by=popularity.desc&page=1' />
        <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' />
        <TitleList title="Captivating Dramas " url='genre/18/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Crime and Action Dramas" url='genre/80-crime/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Because you watched Harry Potter" url='genre/14-fantasy/movies?sort_by=popularity.desc&page=1' />
      </div>
    );
  }
}

export default App;
