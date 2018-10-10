import React from "react"

//  since I'd like this to be functional I will keep this as a class component 
//  as it would have to manage state, i.e. for search queries
export default class Search extends React.Component {
  render() {
    return (
      <div id="search" className="Search">
        <input type="search" 
        placeholder="Search for a title" />
      </div>
    )
  }
}
