import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const itemMarkup = createGalleryCart(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', createGalleryCart(galleryItems));


function createGalleryCart(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
           return  `
            <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
            </a>
            </div>
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

    const originalImg = basicLightbox.create(`
    <div class="modal">
    <a><img src="${e.target.dataset.source}" alt="${e.target.description}"></a>
    </div>
`, {
    onShow: (originalImg) => {
        originalImg.element().querySelector('a').onclick = originalImg.close
    }
})

originalImg.show()

}

