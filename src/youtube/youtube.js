import axios from 'axios';
const KEY = 'AIzaSyBC67l0jwfQtGl982VSyiR5PiiQpX0tppY';

export default axios.create({
  baseURL:
    'https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCjyOzrdVouG-yl30XlEykmw',
  params: {
    part: 'contentDetails',
    maxResults: 5,
    key: KEY,
  },
});
