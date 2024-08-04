const API_KEY = '22615360-5cbe46b430b53ed17aa097d2d';
const BASE_URL = 'https://pixabay.com/api/';

const searchParams = new URLSearchParams({
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true
});

export function fetchPhotos(query) {
  return fetch(`${BASE_URL}?${searchParams}&q=${query}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}