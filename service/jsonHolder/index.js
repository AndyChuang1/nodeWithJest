import axios from 'axios';

module.exports = {
  async getTodo() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    return data;
  },
};
