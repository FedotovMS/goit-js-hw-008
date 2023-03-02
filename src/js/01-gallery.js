// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/01-gallery.css';
// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);

//add module markup
const galleryModuleRef = document.querySelector('div');
galleryModuleRef.classList.add('gallery-module');

//add markup
const galleryRef = window.document.createElement('div');
galleryRef.classList.add('gallery');

const createMarkup = images =>
  images
    .map(
      ({ preview, original, description }) =>
        `
    <div class='gallery__item'>
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </div>
   `
    )
    .join('');

const galleryMarkup = createMarkup(galleryItems);
galleryRef.innerHTML = galleryMarkup;
galleryModuleRef.appendChild(galleryRef);

//add to DOM
window.document.querySelector('body').appendChild(galleryModuleRef);

// add simpleLightBox
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
