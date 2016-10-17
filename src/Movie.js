import React, {Component} from "react";
import {fetchMovieData} from "./lib/movie.js";

export default class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {movieData: ''}
  }

  componentDidMount() {
    fetchMovieData().then((response) => this.setState({movieData: response}))
  }

  render() {
    const {Plot, Poster, Title} = this.state.movieData;

    return (
      <div className="Movie">
        <h2>
          {Title}
        </h2>
        <img alt="poster" src={Poster} />
        <p>
          {Plot}
        </p>
      </div>
    );
  }
}
