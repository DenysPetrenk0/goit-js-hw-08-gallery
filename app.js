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

ulItem.addEventListener('click', openModal);
lightbox.addEventListener('click', closeModal);

function createGallery(array) {
  array.forEach(elem => {
    
    const liElem = document.createElement('li');
    liElem.classList.add('gallery__item');

    const linkElem = document.createElement('a');
    linkElem.setAttribute('href', elem.original);
    linkElem.classList.add('gallery__link');

    const imgElem = document.createElement('img');
    imgElem.setAttribute('src', elem.preview);
    imgElem.setAttribute('alt', elem.description);
    imgElem.setAttribute('data-source', elem.original);
    imgElem.classList.add('gallery__image');

    addedElem(ulItem, liElem);
    addedElem(liElem, linkElem);
    addedElem(linkElem, imgElem);
  });
}

function openModal(event) {
  event.preventDefault();
  const targetBlock = event.target;
 
  if (targetBlock) {
    lightbox.classList.add('is-open');
    console.log(targetBlock.parentNode.getAttribute('href'));
    imgModal.setAttribute('src', targetBlock.parentNode.getAttribute('href'));
    imgModal.setAttribute('alt', targetBlock.getAttribute('alt'));
  }
}

function closeModal(event) { 
  const parent = event.currentTarget;
  const targetBlock = event.target;
 
  if (targetBlock.tagName === 'BUTTON') {
    lightbox.classList.remove('is-open');
    imgModal.removeAttribute('src');
    imgModal.removeAttribute('alt');
  }

  console.log(parent);
  console.log(targetBlock.tagName);
}

const addedElem = (firstElem, secondElem) => firstElem.append(secondElem);

createGallery(galleryItems);