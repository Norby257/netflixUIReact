import React from "react"

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
