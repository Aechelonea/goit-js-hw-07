import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryParentElement = document.querySelector(".gallery");

galleryItems.forEach((photo) => {
  galleryParentElement.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item">
    <a class="gallery__link" href="${photo.original}">
      <img
        class="gallery__image"
        src="${photo.preview}"
        data-source="${photo.original}"
        alt="${photo.description}"
      />
    </a>
  </div>`
  );
});

const photosElementsArr = document.querySelectorAll(".gallery__link");

for (let i = 0; i < photosElementsArr.length; i++) {
  photosElementsArr[i].addEventListener("click", (e) => {
    e.preventDefault();

    function handleKeyPress(e) {
      if (e.code === "Escape") {
        instance.close();
      }
    };

    const instance = basicLightbox.create(
      `<img src="${photosElementsArr[i].href}">`,
      {
        onShow: (instance) => {
          photosElementsArr[i].addEventListener("keydown", handleKeyPress);
        },
        onClose: (instance) => {
          photosElementsArr[i].removeEventListener("keydown", handleKeyPress);
        },
      }
    );
    instance.show();
  });
}
