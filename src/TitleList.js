import React from "react"
import Item from "./Item"
export default class TitleList extends React.Component {

 

  state = {
    data: [],
    mounted: false,
    APIkey: "1589b4248d33d003fc0d0978cc22d66f"
  }

  loadContent = () => {
    var requestUrl = `https://api.themoviedb.org/3/${this.props.url}&api_key=${
      this.state.APIkey
    }`
    fetch(requestUrl)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({ data: data })
      })
      .catch(err => {
        console.log("There has been an error")
      })
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.url !== this.props.url && nextProps.url !== "") {
      this.setState({ mounted: true, url: nextProps.url }, () => {
        this.loadContent()
      })
    }
  }

  componentDidMount = () => {
    if (this.props.url !== "") {
      this.loadContent()
      this.setState({ mounted: true })
    }
  }

  render() {
    var titles = ""
    if (this.state.data.results) {
      titles = this.state.data.results.map(function(title, i) {
        if (i < 5) {
          var name = ""
          var backDrop =
            "http://image.tmdb.org/t/p/original" + title.backdrop_path
          if (!title.name) {
            name = title.original_title
          } else {
            name = title.name
          }
          return (
            <Item
              key={title.id}
              title={name}
              score={title.vote_average}
              overview={title.overview}
              backdrop={backDrop}
            />
          )
        } else {
          return <div key={title.id} />
        }
      })
    }

    return (
      <div
        ref="titlecategory"
        className="TitleList"
        data-loaded={this.state.mounted}
      >
        <div className="Title">
          <h1>{this.props.title}</h1>
          <div className="titles-wrapper">{titles}</div>
        </div>
      </div>
    )
  }
}
