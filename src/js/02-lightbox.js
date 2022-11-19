import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryContainer = document.querySelector('.gallery');
const itemMarkup = createGalleryCart(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', createGalleryCart(galleryItems));
const originalImg = new SimpleLightbox('.gallery a', { fadeSpeed: 250 });

function createGalleryCart(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
           return  `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" title="${description}" />
            </a>
            `
        }
        
        ).join('');
}

galleryContainer.addEventListener('click', clickImg);

function clickImg(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    originalImg;
   

}
