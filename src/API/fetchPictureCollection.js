import axios from 'axios';

export default async function fetchPictureCollection(query, page) {
  const setRequestSetting = axios.create({
    baseURL: 'https://pixabay.com/api/',
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 1000,
    method: 'GET',
    params: {
      key: '23790821-6777a11e2db191613ff9bf1d2',
      q: query,
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 16,
    },
  });
  const { data } = await setRequestSetting.get();

  return data;
}
