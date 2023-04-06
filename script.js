import Pong from "./pong.js";

const projectListSection = document.querySelector(".project-list");
const allProjects = [
  {
    title: "FlickShare",
    description: "A web app that allows users to share their favorite movies and TV shows with their friends.",
    technologies: [
      "React",
      "CSS",
      "JavaScript",
      "Nodejs",
      "Express",
      "Knex",
      "PostgreSQL",
      "Mocha",
      "Chai",
      "JWT",
      "Vercel",
      "Heroku",
    ],
    image: "./flickshare.png",
    url: "https://dionis-gonzalez-portfolio.netlify.app/pong.html",
  },
  {
    title: "LangCards",
    description: "A web app that allows users to create flashcards for learning languages.",
    technologies: [
      "React",
      "CSS",
      "JavaScript",
      "Nodejs",
      "Express",
      "Knex",
      "PostgreSQL",
      "Mocha",
      "Chai",
      "Cypress",
      "JWT",
      "Helmet",
      "Vercel",
      "Heroku",
    ],
    image: "./langcards.png",
    url: "https://dionis-gonzalez-portfolio.netlify.app/pong.html",
  },
  {
    title: "TabGPT",
    description: "A web app that allows users to share their favorite movies and TV shows with their friends.",
    technologies: ["HTML", "CSS", "JavaScript", "Chrome API", "GPT"],
    image: "./tabgpt.png",
    url: "https://dionis-gonzalez-portfolio.netlify.app/pong.html",
  },
];
const allArticles = [
  {
    title: "The Fast-Paced Software Engineering Journey",
    subtitle: "MASTERING CODE & THE ART OF REFLECTION",
    description: "In the rapidly-evolving world of software engineering, mastering code is truly just the tip of the iceberg. It quickly becomes a reflective process of welcoming mistakes in a way that encourages learning and growth, while being patient with yourself. And the connections you get to make along the way are definitely just as important as the code you write.",
    tags: [
      {
        src: "https://img.shields.io/badge/Software%20Engineering-4B8BBE.svg?style=flat&logoColor=white",
        alt: "Software Engineering",
      },
      {
        src: "https://img.shields.io/badge/Networking-0078D7.svg?style=flat",
        alt: "Networking",
      },
    ],
    image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406__480.jpg",
    url: "!",
  },
  {
    title: "Why I Like JavaScript",
    subtitle: "BALANCED, AS ALL THINGS SHOULD BE",
    description: "JavaScript has been a key web development language, providing quick development, full-stack capabilities, cross-platform compatibility, and a generally low learning curve. It comes with trade-offs, often noted as a reduced maintainability for larger-scale applications. But I've found its untyped and flexible nature can be advantageous when used appropriately.",
    tags: [
      {
        src: 'https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat',
        alt: 'JavaScript',
      },
    ],
    image: "./developer.jpeg",
    url: "!",
  },
  {
    title: "HCI: It Takes Two to Tango",
    subtitle: "LOREM IPSUM DOLOR SIT AMET",
    description: "The field of Human-Computer Interaction has become an increasingly interesting topic these days, and for good reason! We rely on our computers for everything, from work to entertainment, and it's safe to say they're not going away anytime soon. So what is this field about? What is user-centered design, and what should these mean to you?",
    tags: [
      {
        src: 'https://img.shields.io/badge/HCI-663399.svg?style=flat',
        alt: 'HCI',
      },
      {
        src: 'https://img.shields.io/badge/UX-4D4D4D.svg?style=flat',
        alt: 'UX',
      },
      {
        src: 'https://img.shields.io/badge/User--Centered%20Design-FFA500.svg?style=flat',
        alt: 'User-Centered Design',
      },
    ],
    image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406__480.jpg",
    url: "!",
  },
  {
    title: "ChatGPT: A Phenomenom",
    subtitle: "ENGLISH, THE HOTTEST NEW LANGUAGE",
    description: "Just a few years ago, learning to code was considered an essential skill to harness the power of technology. Now the advent of powerful AI language models like GPT have begun to revolutionize our problem-solving approaches. The need for specialized coding languages may just begin to fade, albeit slowly, but making it easier for more non-technical roles to participate in the development process.",
    tags: [
      {
        src: 'https://img.shields.io/badge/Artificial_Intelligence-FF6F00.svg?style=flat&logoColor=white',
        alt: 'Artificial Intelligence',
      },
      {
        src: 'https://img.shields.io/badge/GPT-1F1F1F.svg?style=flat',
        alt: 'GPT',
      }
    ],
    image: "./robot.webp",
    url: "!",
  },
];
let projectFilters = [];
let articleFilters = [];
const badgesInPng = ['cypress'];

function addButtonToggleListeners() {
  document.querySelectorAll(".projects .filter-bar button").forEach((el) => {
    el.addEventListener('click', (evt) => toggleFilter(evt, 'projects'));
  });

  document.querySelectorAll('.blog .filter-bar button').forEach((el) => {
    el.addEventListener('click', (evt) => toggleFilter(evt, 'articles'));
  });
}

function toggleFilter({ target }, type) {
  let filters = type === "projects" ? projectFilters : articleFilters;
  let { innerText: filter } = target;
  filter = filter.toLowerCase();

  if (!filters.includes(filter)) {
    filters.push(filter);
  } else {
    filters = filters.filter((f) => f !== filter);
  }

  target.classList.toggle("active");

  if (type === "projects") {
    projectFilters = filters;
    
    updateProjects();
  } else if (type === "articles") {
    articleFilters = filters;
    
    updateArticles();
  }
}

function updateProjects() {
  if (!projectFilters.length) {
    return renderProjects(allProjects);
  }

  const filteredProjects = allProjects.filter((project) => {
    return projectFilters.every((filter) =>
      project.technologies.includes(filter)
    );
  });

  if (!filteredProjects.length) {
    return (projectListSection.innerHTML =
      '<p class="no-match">Sorry, no projects match that combination.</p>');
  }

  filteredProjects.sort((a, b) => {
    const aMatches = a.technologies.filter((tech) =>
      projectFilters.includes(tech)).length;
    const bMatches = b.technologies.filter((tech) =>
      projectFilters.includes(tech)).length;

    return bMatches - aMatches;
  });

  renderProjects(filteredProjects);
}

function updateArticles() {
  const blogList = document.querySelector(".blog-list");
  let articles = allArticles;
  blogList.innerHTML = '';

  if (articleFilters.length) {
    articles = articles.filter((article) => {
      const tags = article.tags.map(({ alt }) => alt.toLowerCase());
  
      return articleFilters.every((filter) => tags.includes(filter.toLowerCase()));
    });
  }

  articles.sort((a, b) => {
    const aMatches = a.tags.filter((tag) => articleFilters.includes(tag)).length;
    const bMatches = b.tags.filter((tag) => articleFilters.includes(tag)).length;

    return bMatches - aMatches;
  });

  articles.forEach(({ title, subtitle, description, tags, image, url }, i) => {
    const blogCard = document.createElement("div");
    const metaDiv = document.createElement("div");
    const photoDiv = document.createElement("div");
    const descriptionDiv = document.createElement("div");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const a = document.createElement("a");
    const tagElements = tags.map(({ src, alt }) => {
      const img = document.createElement("img");
      img.alt = alt;
      img.src = src;

      img.classList.add("badge");
      return img;
    });

    blogCard.classList.add("blog-card");
    metaDiv.classList.add("meta");
    photoDiv.classList.add("photo");
    descriptionDiv.classList.add("description");
    p2.classList.add("read-more");
    h1.textContent = title;
    h2.textContent = subtitle;
    p1.textContent = description;
    a.href = url;
    a.textContent = "Read More";
    photoDiv.style.backgroundImage = `url(${image})`;

    if (3 % i === 0) blogCard.classList.add("alt");

    metaDiv.appendChild(photoDiv);
    p2.appendChild(h1);
    p2.appendChild(h2);
    p2.appendChild(p1);
    tagElements.forEach((img) => p2.appendChild(img));
    p2.appendChild(a);
    blogCard.appendChild(metaDiv);
    blogCard.appendChild(descriptionDiv);
    descriptionDiv.appendChild(h1);
    descriptionDiv.appendChild(h2);
    descriptionDiv.appendChild(p1);
    descriptionDiv.appendChild(p2);
    blogList.appendChild(blogCard);
  });
}

function addTechnologies(technologies, el) {
  el.classList.add("technologies");

  technologies.forEach((tech) => {
    tech = tech.toLowerCase().split(" ")[0];

    const img = document.createElement("img");
    const ext = badgesInPng.includes(tech) ? "png" : "svg";

    if (badgesInPng.includes(tech)) {
      img.src = `./${tech}.png`;
    } else {
      img.src = `./${tech}.svg`;
    }

    img.src = `./${tech}.${ext}`;
    img.alt = `${tech} logo`;

    img.classList.add("tech-badge");
    el.appendChild(img);
  });

  return el;
}

function renderProjects(projects) {
  projectListSection.innerHTML = "";
  projects.forEach((project) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const a = document.createElement("a");
    const div2 = addTechnologies(
      project.technologies,
      document.createElement("div")
    );
    const children = [img, h3, p, div2, a];

    div.classList.add("project", project.title.toLowerCase());

    img.src = project.image;
    img.alt = project.alt;
    h3.innerText = project.title;
    p.innerText = project.description;
    a.textContent = "View Project";
    a.href = project.url;

    children.forEach((child) => div.appendChild(child));
    projectListSection.appendChild(div);
  });
}

function addSurveyListener() {
  const survey = document.querySelector(".survey");
  const surveyContent = survey.querySelector(".survey-content");

  document.addEventListener("click", ({ target }) => {
    if (target == survey) {
      surveyContent.classList.toggle("hide");
    } else if (
      !surveyContent.classList.contains("hide") &&
      !survey.contains(target)
    ) {
      surveyContent.classList.add("hide");
    }
  });
}

function addNavListeners() {
  const headerLogo = document.querySelector(".me");
  const navLinks = document.querySelectorAll("nav a");

  [headerLogo, ...navLinks].forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const sectionId = event.target.hash;
      const section = document.querySelector(sectionId);
      const offset = event.target != headerLogo ? section.offsetTop - 100 : 0;

      window.scrollTo(0, offset);
    });
  });
}

function setMobileMenuListener() {
  const menuButton = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav.mobile");

  menuButton.addEventListener("click", () => {
    console.log('works')
    navMenu.classList.toggle("hide");
  });
}

setMobileMenuListener();
addButtonToggleListeners();
addSurveyListener();
addNavListeners();
renderProjects(allProjects);
updateArticles();
Pong.initialize();
