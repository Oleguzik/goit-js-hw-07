import { galleryItems } from './gallery-items.js'
// Change code below this line

// console.log(galleryItems)

const galleryMainItem = document.querySelector('.gallery')
const galleryMarkUp = galleryItems.map(createImageGridMarkup).join('')

galleryMainItem.insertAdjacentHTML('afterbegin', galleryMarkUp)
galleryMainItem.addEventListener('click', onGalleryClick)

function createImageGridMarkup({ preview, original, description } = {}) {
  return `
			<div class="gallery__item">
				<a class="gallery__link" href="${original}">
					<img
						class="gallery__image"
						src="${preview}"
						data-source="${original}"
						alt="${description}"
					/>
				</a>
			</div>`
}

function onGalleryClick(e) {
  e.preventDefault()
  console.log(e.currentTarget)
}
