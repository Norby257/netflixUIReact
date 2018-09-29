import React from 'react'

export default class Hero extends React.Component {
    render() {
        return (
            <div id="hero" className="Hero" style={{backgroundImage: 'url(https://images6.alphacoders.com/696/696661.jpg)'}}>
            <div className="content">
              {/* <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="ozark background" /> */}
              <h2>All Seasons now available</h2>
              <p>The Truth is out there. Experience the gripping show of the 90's, trailbalzer to other science-fiction, political dramas.</p>
             
            </div>
            <div className="overlay"></div>
          </div>

        )
    }
}


