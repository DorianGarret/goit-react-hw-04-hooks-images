import axios from 'axios';

export default class PixabayApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages() {
    const setRequestSetting = axios.create({
      baseURL: 'https://pixabay.com/api/',
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 1000,
      method: 'GET',
      params: {
        key: '23790821-6777a11e2db191613ff9bf1d2',
        q: this.searchQuery,
        page: this.page,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 16,
      },
    });

    const { data } = await setRequestSetting.get();

    return this.getImagesParams(data);
  }

  getImagesParams({ hits }) {
    return hits.map(({ id, webformatURL, largeImageURL, tags }) => {
      return {
        id,
        webformatURL,
        largeImageURL,
        tags,
      };
    });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
