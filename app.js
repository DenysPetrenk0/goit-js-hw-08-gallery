const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const ulItem = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const imgModal = document.querySelector('.lightbox__image');
const divClose = document.querySelector('.lightbox__overlay');

ulItem.addEventListener('click', openModal);
lightbox.addEventListener('click', closeModal);
divClose.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModal);

const removeAtr = atr => imgModal.removeAttribute(atr);
const setAtr = (atr, value) => {
  imgModal.setAttribute(atr, value);
};

const addGallery = galleryItems.reduce(
  (acc, elem) =>
    acc +
    `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href='${elem.original}'
  >
    <img
      class="gallery__image"
      src='${elem.preview}'
      data-source='${elem.original}'
      alt='${elem.description}'
    />
  </a>
</li>`,
  ''
);

ulItem.innerHTML = addGallery;

function openModal(event) {
  event.preventDefault();
  const targetBlock = event.target;

  lightbox.classList.add('is-open');
  setAtr('src', targetBlock.dataset.source);
  setAtr('alt', targetBlock.getAttribute('alt'));
}

function closeModal(event) {
  const targetBlock = event.target;

  if (
    targetBlock.tagName === 'BUTTON' ||
    event.code === 'Escape' ||
    targetBlock.tagName === 'DIV'
  ) {
    lightbox.classList.remove('is-open');
    removeAtr('src');
    removeAtr('alt');
  }

  if (event.code === 'ArrowRight') {
    const findElem = galleryItems.findIndex(
      elem => elem.original === imgModal.getAttribute('src')
    );
    imgModal.setAttribute('src', galleryItems[findElem + 1].original);
  }

  if (event.code === 'ArrowLeft') {
    const findElem = galleryItems.findIndex(
      elem => elem.original === imgModal.getAttribute('src')
    );
    imgModal.setAttribute('src', galleryItems[findElem - 1].original);
  }
}
