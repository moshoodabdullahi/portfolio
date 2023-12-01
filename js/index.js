const openMenuImage = document.querySelector('#open-menu-image');
const closeMenuImage = document.querySelector('#close-menu-image');

const displayMenuImage = document.querySelector('#display-menu-image');

const portfolioMenuElement = document.querySelector('#portfolio-menu-element');
const aboutMenuElement = document.querySelector('#about-menu-element');
const contactMenuElement = document.querySelector('#contact-menu-element');

const openMenu = () => {
  openMenuImage.classList.replace('d-block', 'd-none');
  displayMenuImage.classList.replace('d-none', 'd-block');
};

const closeMenu = () => {
  closeMenuImage.classList.replace('d-none', 'd-block');
  displayMenuImage.classList.replace('d-block', 'd-none');
};

const portfolioMenu = () => {
  portfolioMenuElement.classList.replace('d-none', 'd-block');
  displayMenuImage.classList.replace('d-block', 'd-none');
};

const aboutMenu = () => {
  aboutMenuElement.classList.replace('d-none', 'd-block');
  displayMenuImage.classList.replace('d-block', 'd-none');
};

const contactMenu = () => {
  contactMenuElement.classList.replace('d-none', 'd-block');
  displayMenuImage.classList.replace('d-block', 'd-none');
};

closeMenuImage.addEventListener('click', closeMenu);
openMenuImage.addEventListener('click', openMenu);
portfolioMenuElement.addEventListener('click', portfolioMenu);
aboutMenuElement.addEventListener('click', aboutMenu);
contactMenuElement.addEventListener('click', contactMenu);
