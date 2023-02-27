import { galleryItems } from './gallery-items.js';
// Change code below this line

lightbox.option({
    'showImageNumberLabel': false
  })

const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);
function createGallery(img) {
    return img
        .map(({preview, original, description}) => {
            return `
                <div class="gallery__item">
                <a class="gallery__link" href=${original} data-lightbox="images">
                <img
                    class="gallery__image"
                    src=${preview}
                    data-source=${original}
                    alt=${description}
                />
                </a>
            </div>
            `;
        })
        .join('')
}
galleryList.insertAdjacentHTML('afterbegin', galleryMarkup);

galleryList.addEventListener('click', onGalleryListClick);
function onGalleryListClick(evt) {
    evt.preventDefault();
    const click = evt.target;

    if (!click.classList.contains('gallery__image')) {
        return
    } else {
        const originaSize = click.dataset.source;
        click.src = originaSize
    }
}
