const body = document.querySelector('body');

const closeIcon = document.querySelector('#close-icon');

const hamburger = document.querySelector('#hamburger');

const speakerList = document.querySelector('#speakers-list');

hamburger.addEventListener('click', () => {
  body.classList.add('active');
});

closeIcon.addEventListener('click', () => {
  body.classList.remove('active');
});