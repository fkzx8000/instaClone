import axios from 'axios';

export const getRandomImages = async () => {
  const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=10');
  return response.data;
};
