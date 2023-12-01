import projects from './project-list.js';

const worksTargetElement = document.querySelector('#works-target-element');

const generateProjectWork = (title, tags, screenshot, screenshotalt, description, links, id) =>
  `<article class="work d-block d-flex-lg">
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

    <button id="${id}" value="see-project" class="btn">See Project</button>
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
      project.link,
      project.id,
    ),
  )
  .join('');

worksTargetElement.innerHTML = displayProjectArray;
