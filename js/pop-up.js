const detailsTargetElement = document.querySelector('#details-target-element');
const closeDetailsElement = document.querySelector('#close-details-element');
const worksTargetElement = document.querySelector('#works-target-element');

const projects = [
  {
    id: 'display-tonic-element',
    title: 'Tonic',
    tags: ['TONIC', 'FrontEnd Dev', '2015'],
    image: 'images/snapshoot-portfolio-profile-img.png',
    imagealt: 'Screenshot of Tonic Project',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    fulldescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    framework: ['html', 'css', 'javascript'],
    frameworks: ['html', 'css', 'javascript', 'Ruby', 'BootStrap'],
    btnId: 'tonic-btn-element',
  },
  {
    id: 'display-availability-element',
    title: 'Multi-Post Stories',
    tags: ['AVAILABILITY', 'Back End Dev', '2015'],
    image: 'images/snapshoot-portfolio-availability.png',
    imagealt: 'Screenshot of Multi-Post Stories Project',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    fulldescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    framework: ['html', 'css', 'javascript'],
    frameworks: ['html', 'css', 'javascript', 'Ruby', 'BootStrap'],
    btnId: 'availability-btn-element',
  },
  {
    id: 'display-weather-element',
    title: 'Facebook 360',
    tags: ['FACEBOOK', 'FullStack Dev', '2015'],
    image: 'images/snapshoot-portfolio-weather.png',
    imagealt: 'Screenshot of Facebook 360 Project',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    fulldescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    framework: ['html', 'css', 'javascript'],
    frameworks: ['html', 'css', 'javascript', 'Ruby', 'BootStrap'],
    btnId: 'weather-btn-element',
  },
  {
    id: 'display-art-element',
    title: 'Uber Navigation',
    tags: ['UBER', 'Load Developer', '2015'],
    image: 'images/snapshoot-portfolio-art.png',
    imagealt: 'Screenshot of Uber Navigation Project',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    fulldescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    framework: ['html', 'css', 'javascript'],
    frameworks: ['html', 'css', 'javascript', 'Ruby', 'BootStrap'],
    btnId: 'art-btn-element',
  },
  {
    id: 'display-window-element',
    title: 'Window Pop-up',
    tags: ['WINDOW', 'Full Stack Dev', '2015'],
    image: 'images/snapshoot-portfolio-availability.png',
    imagealt: 'Screenshot of Window pop-up Project',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    fulldescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    framework: ['html', 'css', 'javascript'],
    frameworks: ['html', 'css', 'javascript', 'Ruby', 'BootStrap'],
    btnId: 'window-btn-element',
  },
  {
    id: 'display-art-work-element',
    title: 'Art Work',
    tags: ['ART', 'FrontEnd Dev', '2015'],
    image: 'images/snapshoot-portfolio-weather.png',
    imagealt: 'Screenshot of Art Work Project',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    fulldescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    framework: ['html', 'css', 'javascript'],
    frameworks: ['html', 'css', 'javascript', 'Ruby', 'BootStrap'],
    btnId: 'art-work-btn-element',
  },
];

const generateDetailsWork = (id, title, tags, image, imagealt, description, frameworks) =>
  `<article id="${id}" class="details-target-element details-target-element details-works-article details-popup left d-none">
<div class="works-article d-flex">
  <div class="details-header">
    <h3 class="works-headline details-works-headline">
      ${title}
      <svg id="close-details-element" class="close-details" width="30" height="30" viewBox="0 0 25 29" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
          fill="black" />
      </svg>
    </h3>
  </div>
  <ul class="details-about-icon d-flex">
  ${tags
    .map((tag) => '<li class="details-content">' + tag + '</li>')
    .join('<li class="dot details-dot"></li>')}
  </ul>

  <div class="img-profile details-img-profile">
    <img class="details-works-img" src="${image}" alt="${imagealt}" />
  </div>

  <p class="works-writeup details-works-writeup">
  ${description}
  </p>

  <ul class="details-abt-link d-flex">
  ${frameworks.map((framework) => '<li class="details-works-link">' + framework + '</li>').join('')}
  </ul>

  <div class="details-btn-wrapper">
    <button class="details-live-btn">
      See Live
      <svg class="details-btn-svg" width="20" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z"
          fill="#6070FF" />
      </svg>
    </button>
    <button class="details-source-btn">
      See Source
      <svg class="details-btn-svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_39_522)">
          <g clip-path="url(#clip1_39_522)">
            <path
              d="M20.9989 9.46114C20.9989 8.32124 20.6329 7.25043 19.9342 6.31779C20.2004 5.41969 20.2669 4.27979 20.2004 2.96718C20.1671 2.41451 19.7345 2 19.2022 2C18.9028 2 16.3741 2.03454 14.9101 3.38169C13.6458 3.1399 12.315 3.1399 11.0174 3.38169C9.58667 2.03454 7.05802 2 6.7253 2C6.19296 2 5.76042 2.41451 5.72715 2.96718C5.62734 4.27979 5.72715 5.41969 5.99333 6.31779C5.29462 7.28497 4.92863 8.35579 4.92863 9.46114C4.92863 11.8791 6.7253 14.0553 9.45358 15.0915C9.35377 15.2988 9.28723 15.5406 9.22068 15.7824C6.32604 15.4715 4.9619 12.7427 4.89536 12.639C4.66246 12.1209 4.06357 11.9136 3.56449 12.19C3.06541 12.4318 2.86578 13.0535 3.13196 13.5717C3.1985 13.7444 5.02845 17.4404 9.05432 17.8549V20.9637C9.05432 21.5509 9.48686 22 10.0525 22H15.875C16.4406 22 16.8732 21.5509 16.8732 20.9637V16.8532C16.8732 16.2314 16.7401 15.6442 16.5072 15.1261C19.2022 14.0553 20.9989 11.9136 20.9989 9.46114Z"
              fill="#6070FF" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_39_522">
            <rect width="18" height="20" fill="white" transform="translate(3 2)" />
          </clipPath>
          <clipPath id="clip1_39_522">
            <rect width="18" height="20" fill="white" transform="translate(3 2)" />
          </clipPath>
        </defs>
      </svg>
    </button>
  </div>
</div>
</article>`;

const displayDetailsPopup = (id) => {
  const displaySeeProjects = displayDetailsScreen.find((value) => value.id === id);

  if (displaySeeProjects) {
    const displayDetailsArray = details.map((detail) =>
      generateDetailsWork(
        detail.id,
        detail.title,
        detail.tags,
        detail.image,
        detail.imagealt,
        detail.description,
        detail.frameworks,
        detail.closeId,
      ),
    );

    detailsTargetElement.innerHTML = displayDetailsArray;

    closeDetailsElement.addEventListener('click', function closeId() {
      detailsTargetElement.classList.add('d-none');
      detailsTargetElement.classList.remove('d-flex');
    });
  }
};

function displaySeeProject(event) {
  const button = event.target;
  const seeProjects = button.value;

  if (seeProjects === 'see-project') {
    displayDetailsPopup(button.id);
    detailsTargetElement.classList.remove('d-none');
    detailsTargetElement.classList.add('d-flex');
  }
}
worksTargetElement.addEventListener('click', displaySeeProject);