import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);
// Change code below this line

const gallery = document.querySelector(".gallery");

(function () {
  const markupGallery = galleryItems
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", markupGallery);
})();

gallery.addEventListener("click", onClick);
function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const currentCard = evt.target.getAttribute("data-source");
  const instance = basicLightbox.create(`
<img src="${currentCard}" width="800" height="600">
`);
  instance.show();

  gallery.addEventListener("keydown", onEscKeyPress);
  function onEscKeyPress(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
  }
}
