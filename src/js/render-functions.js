const gallery = document.querySelector('.gallery');

export function renderPhotos(images) {
  let galleryHTML = '';

  images.forEach(image => {
    galleryHTML += `
    <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
            <img
                class="gallery-image"
                src="${image.webformatURL}"
                data-source="${image.largeImageURL}"
                alt="${image.tags}"
            />
        </a>
        <div class="stats">
          <div>Likes<span>${image.likes}</span></div>
          <div>Views<span>${image.views}</span></div>
          <div>Comments<span>${image.comments}</span></div>
          <div>Downloads<span>${image.downloads}</span></div>
        </div>
    </li>
  `;
  });

  gallery.innerHTML = galleryHTML;
}

export function clearGallery() {
  gallery.innerHTML = '';
}
