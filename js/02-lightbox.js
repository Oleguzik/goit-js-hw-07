import { galleryItems } from './gallery-items.js'
// Change code below this line

// console.log(galleryItems)

const galleryMeinItem = document.querySelector('.gallery')
const galleryMarkUp = galleryItems.map(createImageGridMarkup).join('')

galleryMeinItem.insertAdjacentHTML('afterbegin', galleryMarkUp)

function createImageGridMarkup({ preview, original, description } = {}) {
  return `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/></a>`
}

;(function () {
  var $gallery = new SimpleLightbox('.gallery a', { captionDelay: 250 })
})()
