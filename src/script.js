import Pong from "./pong.js";
import data from './data.js';

const projectListSection = document.querySelector(".project-list");
const projects = {
  all: data.projects,
  filters: [],
};
const articles = {
  all: data.articles,
  filtered: data.articles,
  filters: [],
};
const badges = {
  png: ['cypress', 'passportjs', 'supabase', 'vuex'],
};
let isSurveyTaken = false;

function addButtonToggleListeners() {
  document.querySelectorAll(".projects .filter-bar button").forEach((el) => {
    el.addEventListener('click', (evt) => toggleFilter(evt, 'projects'));
  });

  document.querySelectorAll('.blog .filter-bar button').forEach((el) => {
    el.addEventListener('click', (evt) => toggleFilter(evt, 'articles'));
  });
}

function toggleFilter({ target }, type) {
  let filters = type === "projects" ? projects.filters : articles.filters;
  let { innerText: filter } = target;
  filter = filter.toLowerCase();

  if (!filters.includes(filter)) {
    filters.push(filter);
  } else {
    filters = filters.filter((f) => f !== filter);
  }

  target.classList.toggle("active");

  if (type === "projects") {
    projects.filters = filters;
    updateProjects();
  } else {
    articles.filters = filters;
    updateArticles();
  }
}

function updateProjects() {
  if (!projects.filters.length) {
    return renderProjects(projects.all);
  }

  const filteredProjects = projects.all.filter((project) => {
    return projects.filters.every((filter) => {
      const technologies = project.technologies.map((tech) => tech.toLowerCase());
      return technologies.includes(filter);
    });
  });

  if (!filteredProjects.length) {
    return (projectListSection.innerHTML =
      '<p class="no-match">Sorry, no projects match that combination.</p>');
  }

  filteredProjects.sort((a, b) => {
    const aMatches = a.technologies.filter((tech) =>
      projects.filters.includes(tech)).length;
    const bMatches = b.technologies.filter((tech) =>
      projects.filters.includes(tech)).length;
    return bMatches - aMatches;
  });

  renderProjects(filteredProjects);
}

function addProjectTechnologies(technologies, el) {
  el.classList.add("technologies");
  technologies.forEach((tech) => {
    const techLowercase = tech.toLowerCase().replace('.', '').split(' ')[0];
    const img = document.createElement("img");
    const ext = badges.png.includes(techLowercase) ? "png" : "svg";
    img.src = `../src/img/icons/${techLowercase}.${ext}`;
    img.alt = `${tech} logo`;
    img.title = tech;
    img.classList.add("tech-badge");
    el.appendChild(img);
  });
  return el;
}

function renderProjects(list) {
  projectListSection.innerHTML = "";
  list.forEach((project) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const a = document.createElement("a");
    const div2 = addProjectTechnologies(
      project.technologies,
      document.createElement("div")
    );
    const children = [img, h3, p, div2, a];
    div.classList.add("project", project.title.toLowerCase());
    img.classList.add("project-image");
    img.src = project.image;
    img.alt = project.title;
    h3.innerText = project.title;
    p.innerText = project.description;
    a.textContent = "View Project";
    a.href = project.url;
    a.target = "_blank";
    if (project.comingSoon) {
      a.classList.add("coming-soon");
    }
    children.forEach((child) => div.appendChild(child));
    projectListSection.appendChild(div);
  });
}

function addNavListeners() {
  const mobileNav = document.querySelector("nav.mobile");
  const headerLogo = document.querySelector(".me");
  const navLinks = document.querySelectorAll("nav a");
  [headerLogo, ...navLinks].forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const sectionId = event.target.hash;
      const section = document.querySelector(sectionId);
      const offset = event.target != headerLogo ? section.offsetTop - 70 : 0;
      window.scrollTo(0, offset);
    });
  });
  mobileNav.addEventListener("click", (evt) => {
    if (mobileNav.contains(evt.target)) {
      mobileNav.classList.remove("open");
    }
  });
}

function setMobileMenuListener() {
  const navMenu = document.querySelector("nav.mobile");
  const menuButton = document.querySelector(".menu-toggle");
  const bars = menuButton.querySelector(".bars");
  const closeBtn = menuButton.querySelector(".menu-toggle .close");
  menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    closeBtn.classList.toggle("hide");
    bars.classList.toggle("hide");
  });
}

function setPrintListener() {
  const redirectToResumePDF = () => {
    const resumePdfUrl = 'https://drive.google.com/file/d/1R5c_-jpCvC3_e1QuuR5Ph1NXcsrhzc77/view?usp=sharing';
    window.location.href = resumePdfUrl;
  }
  const handlePrintEvent = (event) => {
    if (event.keyCode === 80 && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      redirectToResumePDF();
    }
  }
  window.addEventListener('keydown', handlePrintEvent);
  window.onbeforeprint = redirectToResumePDF;
}

function generateRandomRgbColor(color1, color2, i, start, end) {
  return Math.floor((i / 29) * (parseInt(color2.substring(start, end), 16) - parseInt(color1.substring(start, end), 16)) + parseInt(color1.substring(start, end), 16));
}

function getRandomGradientColors(length) {
  const color1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const color2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const colors = [];
  for (let i = 0; i < length; i++) {
    const r = generateRandomRgbColor(color1, color2, i, 1, 3);
    const g = generateRandomRgbColor(color1, color2, i, 3, 5);
    const b = generateRandomRgbColor(color1, color2, i, 5, 7);
    colors.push(`rgb(${r}, ${g}, ${b})`);
  }
  return colors;
}

function setHeroGradientListener() {
  const h2 = document.querySelector("main #top h2");
  const p = document.querySelector("main #top p");
  [h2, p].forEach((el) => {
    const text = el.innerText;
    const colors = getRandomGradientColors(text.length);
    el.innerHTML = '';
    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.innerText = char;
      span.addEventListener('mouseover', () => {
        span.style.color = colors[i];
      });
      span.addEventListener('mouseleave', () => {
        setTimeout(() => {
          span.style.color = '#fff';
        }, 100);
      });
      el.appendChild(span);
    });
  });
}

function toggleModal(element) {
  const existing = document.querySelector('.modal');
  if (existing) {
    const contactContainer = document.querySelector('.contact .container');
    existing.remove();
    return contactContainer.appendChild(element);
  }
  if (isSurveyTaken) return;
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.appendChild(element);
  document.body.appendChild(modal);
  modal.style.display = 'block';
}

function setContactListener() {
  const form = document.querySelector(".contact-form-inputs");
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
}

setMobileMenuListener();
addButtonToggleListeners();
addNavListeners();
setPrintListener();
setHeroGradientListener();
setContactListener();
renderProjects(projects.all);
