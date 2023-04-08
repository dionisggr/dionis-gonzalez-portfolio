import Pong from "./pong.js";

const projectListSection = document.querySelector(".project-list");
const allProjects = [
  {
    title: "FlickShare",
    description: "Personalized movie suggestions based from full custom lists, and not just one movie!",
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
    image: "../img/flickshare.png",
    url: "https://dionis-gonzalez-portfolio.netlify.app/pong.html",
  },
  {
    title: "LangCards",
    description: "A Spanish language trainer app that uses spaced repetition for effective learning.",
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
    image: "../img/langcards.png",
    url: "https://dionis-gonzalez-portfolio.netlify.app/pong.html",
  },
  {
    title: "TabGPT",
    description: "An AI-powered Chrome extension that answer questions from the text in active tabs.",
    technologies: ["HTML", "CSS", "JavaScript", "Chrome API", "GPT"],
    image: "../img/tabgpt.png",
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
    image: "../img/developer.jpeg",
    url: "!",
  },
  {
    title: "HCI: It Takes Two to Tango",
    subtitle: "TECHNOLOGY FOR HUMANS, NOT ROBOTS",
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
    image: "../img/human-robot-hand.jpeg",
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
    image: "../img/robot.webp",
    url: "!",
  },
];
let projectFilters = [];
let articleFilters = [];
const badgesInPng = ['cypress'];
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
  } else {
    articleFilters = filters;
    
    updateArticles();
  }
}

function updateProjects() {
  if (!projectFilters.length) {
    return renderProjects(allProjects);
  }

  const filteredProjects = allProjects.filter((project) => {
    return projectFilters.every((filter) => {
      const technologies = project.technologies.map((tech) => tech.toLowerCase());

      return technologies.includes(filter)
    });
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
    // a.href = project.url;

    children.forEach((child) => div.appendChild(child));
    projectListSection.appendChild(div);
  });
}

function addSurveyListener() {
  const survey = document.querySelector(".survey");
  const h4 = survey.querySelector("h4");
  const surveyContent = survey.querySelector(".survey-content");
  const form = surveyContent.querySelector('form')
  const closeBtn = survey.querySelector(".survey .close");
  const surveyError = document.querySelector(".post-survey.error");
  const surveySuccess = document.querySelector(".post-survey.success");

  [h4, closeBtn].forEach(el => el.addEventListener("click", ({ target }) => {

    if (isSurveyTaken) {
      surveyError.classList.add('hide');
      surveySuccess.classList.add('hide');
      closeBtn.classList.add('hide');
      h4.innerText = 'Thanks for participating!';
    }

    if (navigator.userAgentData.mobile || window.innerWidth < 865) {
      survey.classList.toggle('mobile');
      toggleModal(survey);
    }

    if (!isSurveyTaken && survey.contains(target)) {
      surveyContent.classList.toggle("hide");
      closeBtn.classList.toggle("hide");
    } else if (!surveyContent.classList.contains("hide")) {
      surveyContent.classList.add("hide");
      closeBtn.classList.add("hide");
    }
  }));

  form.addEventListener('submit', async evt => {
    evt.preventDefault();
  
    const formData = new FormData(form);
    const params = new URLSearchParams();
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const site = 'https://docs.google.com/forms/d/e/1FAIpQLScZO7Uk0NfkvJi4t288cMPumhZzOtBnCZMgQVX2LKBxrNOEWQ/formResponse';
  
    formData.forEach((value, key) => {
      params.append(key, value)
    })

    try {
      await fetch(cors + site, {
        method: 'POST',
        body: params
      });

      isSurveyTaken = true;

      surveyContent.classList.add('hide');
      surveySuccess.classList.remove('hide');
    } catch (err) {
      surveyContent.classList.add('hide');
      surveyError.classList.remove('hide');
    }
  })
}

function addNavListeners() {
  const mobileNav = document.querySelector("nav.mobile");
  const headerLogo = document.querySelector(".me");
  const navLinks = document.querySelectorAll("nav a");
  const chatBtn = document.querySelector(".conversation-btn");

  [headerLogo, chatBtn, ...navLinks].forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const sectionId = event.target.hash;
      const section = document.querySelector(sectionId);
      const offset = event.target != headerLogo ? section.offsetTop - 70 : 0;

      mobileNav.classList.toggle("open");
      window.scrollTo(0, offset);
    });
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
  return Math.floor((i / 29) * (parseInt(color2.substring(start, end), 16) - parseInt(color1.substring(start, end), 16)) + parseInt(color1.substring(start, end), 16))
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
        },100)
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


  })
}

setMobileMenuListener();
addButtonToggleListeners();
addSurveyListener();
addNavListeners();
setPrintListener();
setHeroGradientListener();
setContactListener();
renderProjects(allProjects);
updateArticles();
Pong.initialize();
