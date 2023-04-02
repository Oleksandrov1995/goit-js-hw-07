import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const gallery = document.querySelector(".gallery");

(function () {
    const markupLightbox = galleryItems
      .map(
        ({ preview, original, description }) => `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
     </li>
  `
      )
      .join("");
  
    gallery.insertAdjacentHTML("beforeend", markupLightbox);
  })();
  new SimpleLightbox('.gallery a', {
	captionDelay: 250
})