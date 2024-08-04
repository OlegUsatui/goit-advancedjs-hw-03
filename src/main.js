import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchPhotos } from './js/pixabay-api.js';
import { clearGallery, renderPhotos } from './js/render-functions.js';

iziToast.settings({
  position: 'topRight',
  progressBar: false,
  messageColor: '#FFFFFF',
  icon: '',
  close: false
})

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

  const fetchPhotosBtn = document.querySelector('.btn');
  const searchInput = document.querySelector('.search');
  const loader = document.querySelector('.loader');

  const errorMessage = 'Sorry, there are no images matching your search query. Please try again!';

  fetchPhotosBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query === '') {
      return;
    }
    clearGallery();
    loader.style.display = 'block';

    fetchPhotos(query)
      .then((photos) => {
        if (photos.hits.length === 0) {
          throw new Error(errorMessage)
        } else {
          loader.style.display = 'none';
          renderPhotos(photos.hits);
          lightbox.refresh();
          searchInput.value = '';
        }
      })
      .catch(() => {
        loader.style.display = 'none';
        searchInput.value = '';
        iziToast.error({ message: errorMessage });
      });
  });
});


