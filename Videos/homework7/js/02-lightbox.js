import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const galleryMarkup = createGalleryItems(galleryItems);
function createGalleryItems(img) {
    return img
        .map(({preview, original, description}) => {
            return `
                <a class="gallery__item" href=${original} data-lightbox="nature" title=${description}>
                    <img class="gallery__image" src=${preview} alt=${description} />
                </a>
            `;
        })
        .join('')
    }
galleryList.insertAdjacentHTML('afterbegin', galleryMarkup);


var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250
});

