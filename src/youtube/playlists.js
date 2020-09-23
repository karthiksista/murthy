import axios from 'axios';
const KEY = 'AIzaSyBC67l0jwfQtGl982VSyiR5PiiQpX0tppY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY,
  },
});
