const openMenuImage = document.querySelector('#open-menu-image');
const closeMenuImage = document.querySelector('#close-menu-image');

const displayMenuImage = document.querySelector('#display-menu-image');

const portfolioMenuElement = document.querySelector('#portfolio-menu-element');
const aboutMenuElement = document.querySelector('#about-menu-element');
const contactMenuElement = document.querySelector('#contact-menu-element');

const tonicBtnElement = document.querySelector('#tonic-btn-element');
const availabilityBtnElement = document.querySelector('#availability-btn-element');
const artBtnElement = document.querySelector('#art-btn-element');
const weatherBtnElement = document.querySelector('#weather-btn-element');
const windowBtnElement = document.querySelector('#window-btn-element');
const artWorkBtnElement = document.querySelector('#art-work-btn-element');

const closeTonicElement = document.querySelector('#close-tonic-element');
const closeAvailabilityElement = document.querySelector('#close-availability-element');
const closeArtElement = document.querySelector('#close-art-element');
const closeWeatherElement = document.querySelector('#close-weather-element');
const closeWindowElement = document.querySelector('#close-window-element');
const closeArtWorkElement = document.querySelector('#close-art-work-element');

const displayTonicElement = document.querySelector('#display-tonic-element');
const displayAvailabilityElement = document.querySelector('#display-availability-element');
const displayWeatherElement = document.querySelector('#display-weather-element');
const displayArtElement = document.querySelector('#display-art-element');
const displayWindowElement = document.querySelector('#display-window-element');
const displayArtWorkElement = document.querySelector('#display-art-work-element');

const openMenu = () => {
  openMenuImage.classList.replace('d-block', 'd-none');
  displayMenuImage.classList.replace('d-none', 'd-block');
};

const closeMenu = () => {
  closeMenuImage.classList.replace('d-none', 'd-block');
  displayMenuImage.classList.replace('d-block', 'd-none');
};

const openTonic = () => {
  tonicBtnElement.classList.replace('d-block', 'd-none');
  displayTonicElement.classList.replace('d-none', 'd-block');
};

const closeTonic = () => {
  closeTonicElement.classList.replace('d-none', 'd-block');
  displayTonicElement.classList.replace('d-block', 'd-none');
};

const openAvailability = () => {
  availabilityBtnElement.classList.replace('d-block', 'd-none');
  displayAvailabilityElement.classList.replace('d-none', 'd-block');
};

const closeAvailability = () => {
  closeAvailabilityElement.classList.replace('d-none', 'd-block');
  displayAvailabilityElement.classList.replace('d-block', 'd-none');
};

const openWeather = () => {
  weatherBtnElement.classList.replace('d-block', 'd-none');
  displayWeatherElement.classList.replace('d-none', 'd-block');
};

const closeWeather = () => {
  closeWeatherElement.classList.replace('d-none', 'd-block');
  displayWeatherElement.classList.replace('d-block', 'd-none');
};

const openArt = () => {
  artBtnElement.classList.replace('d-block', 'd-none');
  displayArtElement.classList.replace('d-none', 'd-block');
};

const closeArt = () => {
  closeArtElement.classList.replace('d-none', 'd-block');
  displayArtElement.classList.replace('d-block', 'd-none');
};

const openWindow = () => {
  windowBtnElement.classList.replace('d-block', 'd-none');
  displayWindowElement.classList.replace('d-none', 'd-block');
};

const closeWindow = () => {
  closeWindowElement.classList.replace('d-none', 'd-block');
  displayWindowElement.classList.replace('d-block', 'd-none');
};

const openArtWork = () => {
  artWorkBtnElement.classList.replace('d-block', 'd-none');
  displayArtWorkElement.classList.replace('d-none', 'd-block');
};

const closeArtWork = () => {
  closeArtWorkElement.classList.replace('d-none', 'd-block');
  displayArtWorkElement.classList.replace('d-block', 'd-none');
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

tonicBtnElement.addEventListener('click', openTonic);
closeTonicElement.addEventListener('click', closeTonic);

availabilityBtnElement.addEventListener('click', openAvailability);
closeAvailabilityElement.addEventListener('click', closeAvailability);

weatherBtnElement.addEventListener('click', openWeather);
closeWeatherElement.addEventListener('click', closeWeather);

artBtnElement.addEventListener('click', openArt);
closeArtElement.addEventListener('click', closeArt);

windowBtnElement.addEventListener('click', openWindow);
closeWindowElement.addEventListener('click', closeWindow);

artWorkBtnElement.addEventListener('click', openArtWork);
closeArtWorkElement.addEventListener('click', closeArtWork);
