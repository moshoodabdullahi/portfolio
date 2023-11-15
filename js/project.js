const worksTargetElement = document.querySelector('#works-target-element');

tags = ['CANOPY', 'Back End Dev', '2015'];
links = ['html', 'Ruby on rails', 'css', 'javascript'];

const projects = [
  {
    title: 'Tonic',
    tags: ['CANOPY', 'Back End Dev', '2015'],
    screenshot: 'images/snapshoot-portfolio-profile-img.png',
    screenshotalt: 'Screenshot of Tonic Project',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    links: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
  {
    title: 'Multi-Post Stories',
    tags: ['CANOPY', 'Back End Dev', '2015'],
    screenshot: 'images/snapshoot-portfolio-availability.png',
    screenshotalt: 'Screenshot of Multi-Post Stories Project',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    links: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
  {
    title: 'Facebook 360',
    tags: ['CANOPY', 'Back End Dev', '2015'],
    screenshot: 'images/snapshoot-portfolio-weather.png',
    screenshotalt: 'Screenshot of Facebook 360 Project',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    links: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
  {
    title: 'Uber Navigation',
    tags: ['CANOPY', 'Back End Dev', '2015'],
    screenshot: 'images/snapshoot-portfolio-art.png',
    screenshotalt: 'Screenshot of Uber Navigation Project',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    links: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
  {
    title: 'Window Pop-up',
    tags: ['CANOPY', 'Back End Dev', '2015'],
    screenshot: 'images/snapshoot-portfolio-availability.png',
    screenshotalt: 'Screenshot of Window pop-up Project',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    links: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
  {
    title: 'Art Work',
    tags: ['CANOPY', 'Back End Dev', '2015'],
    screenshot: 'images/snapshoot-portfolio-weather.png',
    screenshotalt: 'Screenshot of Art Work Project',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    links: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
];

const generateProjectWork = (title, tags, screenshot, screenshotalt, description, links) =>
  `<article id="tonic-element" class="work d-block d-flex-lg">
  <div class="img-profile">
    <img class="works-img" src="${screenshot}" alt="${screenshotalt}" />
  </div>

  <div class="works-article">
    <h3 class="works-headline">${title}</h3>
    <ul class="about-icon d-flex">
    ${tags.map((tag) => '<li class="content">' + tag + '</li>').join('<li class="dot"></li>')}
    </ul>

    <p class="works-writeup">
    ${description}
    </p>

    <ul class="abt-link d-flex">
    ${links.map((link) => '<li class="works-link">' + link + '</li>').join('')}
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
      project.links,
    ),
  )
  .join('');

worksTargetElement.innerHTML += displayProjectArray;
