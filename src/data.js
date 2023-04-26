const projects = [
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
    image: "../src/img/flickshare.png",
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
    image: "../src/img/langcards.png",
    url: "https://dionis-gonzalez-portfolio.netlify.app/pong.html",
  },
  {
    title: "TabGPT",
    description: "An AI-powered Chrome extension that answer questions from the text in active tabs.",
    technologies: ["HTML", "CSS", "JavaScript", "Chrome API", "GPT"],
    image: "../src/img/tabgpt.png",
    url: "https://dionis-gonzalez-portfolio.netlify.app/pong.html",
  },
];
const articles = [
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
    image: "../src/img/developer.jpeg",
    url: "!",
  },
  {
    title: "Human-Computer Interaction",
    subtitle: "TECHNOLOGY FOR HUMANS, NOT ROBOTS",
    description: "The field of HCI has become an increasingly interesting topic these days, and for good reason! We rely on our computers for everything, from work to entertainment, and it's safe to say they're not going away anytime soon. So what is this field about? What is user-centered design, and what should these mean to you?",
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
    image: "../src/img/human-robot-hand.jpeg",
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
    image: "../src/img/robot.webp",
    url: "!",
  },
];

export default { projects, articles};
