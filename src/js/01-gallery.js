// Add imports above this lines
import { galleryItems } from '../js/gallery-items.js';

// Change code below this line

console.log(galleryItems);

const container = document.querySelector('.gallery');

galleryItems.forEach(image => {
  let list = document.createElement('li');
  list.setAttribute('class', 'gallery__item');

  let link = document.createElement('a');
  link.setAttribute('href', image.original);
  link.setAttribute('class', 'gallery__link');

  let img = document.createElement('img');
  img.setAttribute('src', image.preview);
  //   img.setAttribute("data-source", image.original);
  img.setAttribute('alt', image.description);
  img.setAttribute('class', 'gallery__image');

  link.appendChild(img);

  list.appendChild(link);

  container.append(list);
});

const clickContainerBox = event => {
  event.preventDefault();
  if (event.target.classList.contains('gallery')) return;
  const lightbox = new SimpleLightbox('.gallery a');
};

container.addEventListener('click', clickContainerBox);
