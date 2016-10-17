import axios from 'axios';

export function fetchMovieData() {
  const imdbUrl = "http://www.omdbapi.com/?t=the+rock&y=&plot=short&r=json";
  return axios.get(imdbUrl).then((response) => response.data)
}
