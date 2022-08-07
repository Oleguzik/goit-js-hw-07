import { galleryItems } from './gallery-items.js'
// Change code below this line

// console.log(galleryItems)

const galleryMainItem = document.querySelector('.gallery')
const galleryMarkUp = galleryItems.map(createImageGridMarkup).join('')
let simpleModal

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

function onGalleryClick(event) {
  event.preventDefault()
  // console.log(event.target.dataset.source)
  openModalWin(event.target.dataset.source)
}

function openModalWin(src) {
  if (simpleModal?.visible()) {
    simpleModal.close()
  }

  simpleModal = basicLightbox.create(
    `<img src="${src}" width="1280" alt="original">`,
    {
      onClose: () => {
        window.removeEventListener('keydown', onKeyboardClick)
      },
    }
  )
  simpleModal.show()
  window.addEventListener('keydown', onKeyboardClick)
  // console.log(simpleModal.element().querySelector('img').src);
}

function closeModal() {
  simpleModal.close()
}

function onKeyboardClick(event) {
  const oldSrcIndex = findCurrentSrcIndex(
    simpleModal.element().querySelector('img').src
  )

  // console.log('oldSrcIndex', oldSrcIndex)

  switch (event?.code) {
    case 'Escape':
      closeModal()
      return

    case 'ArrowLeft':
    case 'ArrowDown':
      openModalWin(
        galleryItems[
          oldSrcIndex === 0 ? galleryItems.length - 1 : oldSrcIndex - 1
        ].original
      )
      break

    case 'ArrowRight':
    case 'ArrowUp':
    case 'Space':
      openModalWin(
        galleryItems[
          oldSrcIndex === galleryItems.length - 1 ? 0 : oldSrcIndex + 1
        ].original
      )
      break
  }
}

function findCurrentSrcIndex(src) {
  for (let i = 0; i < galleryItems.length; i += 1) {
    if (galleryItems[i].original === src) return i
  }
  return
}
