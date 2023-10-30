const worksTargetElement = document.querySelector('#works-target-element');

const projects = [
  {
    title: 'Tonic',
    tags: [
      `<li class="content">CANOPY</li>
    <li class="dot"></li>
    <li class="content">Back End Dev</li>
    <li class="dot"></li>
    <li class="content">2015</li>`,
    ],
    screenshot: 'images/snapshoot-portfolio-profile-img.png',
    screenshotalt: 'Screenshot of Tonic Project',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    title: 'Multi-Post Stories',
    tags: [
      `<li class="content">CANOPY</li>
    <li class="dot"></li>
    <li class="content">Back End Dev</li>
    <li class="dot"></li>
    <li class="content">2015</li>`,
    ],
    screenshot: 'images/snapshoot-portfolio-availability.png',
    screenshotalt: 'Screenshot of Multi-Post Stories Project',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    title: 'Facebook 360',
    tags: [
      `<li class="content">CANOPY</li>
    <li class="dot"></li>
    <li class="content">Back End Dev</li>
    <li class="dot"></li>
    <li class="content">2015</li>`,
    ],
    screenshot: 'images/snapshoot-portfolio-weather.png',
    screenshotalt: 'Screenshot of Facebook 360 Project',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    title: 'Uber Navigation',
    tags: [
      `<li class="content">CANOPY</li>
    <li class="dot"></li>
    <li class="content">Back End Dev</li>
    <li class="dot"></li>
    <li class="content">2015</li>`,
    ],
    screenshot: 'images/snapshoot-portfolio-art.png',
    screenshotalt: 'Screenshot of Uber Navigation Project',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
];

const generateProjectWork = (title, tags, screenshot, screenshotalt, description) =>
  `<article id="tonic-element" class="work d-block d-flex-lg">
  <div class="img-profile">
    <img class="works-img" src="${screenshot}" alt="${screenshotalt}" />
  </div>

  <div class="works-article">
    <h3 class="works-headline">${title}</h3>
    <ul class="about-icon d-flex">
      ${tags}
    </ul>

    <p class="works-writeup">
    ${description}
    </p>

    <ul class="abt-link d-flex">
      <li><a class="works-link" href="">html</a></li>
      <li><a class="works-link" href="">Ruby on rails</a></li>
      <li><a class="works-link" href="">css</a></li>
      <li><a class="works-link" href="">javascript</a></li>
    </ul>

    <button id="tonic-btn-element" class="btn">See Project</button>
  </div>
</article>`;

const displayProjectArray = projects
  .map((project) =>
    generateProjectWork(
      project.title,
      project.tags,
      project.screenshot,
      project.screenshotalt,
      project.description,
    ),
  )
  .join('');

worksTargetElement.innerHTML += displayProjectArray;
