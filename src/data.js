const projects = [
  {
    title: "Baseport",
    description: "A REST API boilerplate for Node.js projects with the most common features already implemented.",
    technologies: [
      "JavaScript",
      "Nodejs",
      "Express",
      "Knex",
      "PostgreSQL",
      "JWT",
      "Supabase",
      "Mailgun",
      "SwaggerUI",
    ],
    image: "../src/img/baseport.png",
    url: "https://baseport.up.railway.app/docs",
  },
  {
    title: "PromptWiz",
    description: "A web tool built in Vue 3 for enhancing ChatGPT prompts, guiding it in providing higher quality and more contextually accurate responses.",
    technologies: [
      "Vue.js",
      "TailwindCSS",
      "Vite",
      "Vuex",
      "JavaScript",
      "GPT",
      "Nodejs",
      "Express",
      "Knex",
      "PostgreSQL",
      "Mocha",
      "JWT",
      "Vercel",
      "Supabase",
    ],
    image: "../src/img/promptwiz.png",
    url: "https://promptwiz.vercel.app/",
  },
  {
    title: "ChatterAI",
    description: "A group chat application for leveraging ChatGPT, DALLE and Whisper models in conversations, or to discuss topics and projects.",
    technologies: [
      "React.js",
      "TailwindCSS",
      "Redis",
      "JavaScript",
      "GPT",
      "Nodejs",
      "Express",
      "Knex",
      "PostgreSQL",
      "Mocha",
      "Chai",
      "JWT",
      "Vercel",
      "Supabase",
    ],
    image: "../src/img/chatterai.png",
    url: "https://dionis-gonzalez-portfolio.netlify.app/pong.html",
    comingSoon: true,
  },
  {
    title: "FlickShare",
    description: "Personalized movie suggestions based from full custom lists, and not just one movie!",
    technologies: [
      "React.js",
      "TailwindCSS",
      "JavaScript",
      "Nodejs",
      "Express",
      "Knex",
      "PostgreSQL",
      "Mocha",
      "Chai",
      "JWT",
      "Vercel",
      "Supabase",
    ],
    image: "../src/img/flickshare.png",
    url: "https://dionis-gonzalez-portfolio.netlify.app/pong.html",
    comingSoon: true,
  },
];
const articles = [
  {
    title: "Starting a Blog in the Era of AI",
    subtitle: "AN ODYSSEY INTO THE MATRIX",
    description: "As the world has shifted into hyperdrive with AI, large language models, and the emergence of what I like to call the ‘GPT phenomenon’, it’s become almost a Herculean task to keep up with the sheer pace of technological advancements. It feels a bit like trying to catch a runaway train — but this train’s on an infinite loop, and we’re chasing it on foot. Well, let’s change that narrative.",
    tags: [
      {
        src: "https://img.shields.io/badge/Technology%20Trends-8E44AD.svg?style=flat",
        alt: "Technology Trends",
      },
      {
        src: "https://img.shields.io/badge/Artificial%20Intelligence-FF6F00.svg?style=flat",
        alt: "Artificial Intelligence",
      },
    ],
    image: "../src/img/starting-a-blog.jpeg",
    url: "https://medium.com/@dionisggr/starting-a-blog-in-the-era-of-ai-bdf17c0160e8?source=your_stories_page-------------------------------------",
  },
  {
    title: "Embracing the Future",
    subtitle: "NAVIGATING AN ERA OF AI LANGUAGE MODELS",
    description: "In this constantly evolving panorama of our world, technology has been a pivotal force propelling us into the future. We are living in an era characterized by unprecedented technological advancement and innovation, a time where new technologies are not only emerging but transforming the fabric of our lives, and in a very short amount of time.",
    tags: [
      {
        src: "https://img.shields.io/badge/Technology%20Trends-8E44AD.svg?style=flat",
        alt: "Technology Trends",
      },
      {
        src: "https://img.shields.io/badge/Artificial%20Intelligence-FF6F00.svg?style=flat",
        alt: "Artificial Intelligence",
      },
    ],
    image: "../src/img/embracing-the-future.jpeg",
    url: "https://medium.com/@dionisggr/embracing-the-future-724916203001?source=your_stories_page-------------------------------------",
  },
  {
    title: "Beyond the Interface",
    subtitle: "UNDERSTANDING MEANINGFUL USER EXPERIENCES",
    description: "One of the biggest mistakes designers make when designing interfaces is that they often rush straight to the prototype (or drawing board), sketching out how the buttons and screens will look, without first understanding the task and, more importantly, their users better. Think about it, it’s like trying to solve a jigsaw puzzle without having seen the picture on the box, or knowing it’s context.",
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
    image: "../src/img/beyond-the-interface.jpeg",
    url: "https://medium.com/@dionisggr/beyond-the-interface-8ee7e68f9433?source=your_stories_page-------------------------------------",
  },
  {
    title: "A Hitchhiker’s Guide to ChatGPT",
    subtitle: "UNDERSTANDING AI'S TALKATIVE COUSIN",
    description: "Have you ever wished you had a buddy who could straight up answer your deepest, most random questions at the right time, or make up a captivating story on the spot, maybe even simply keep you company during an insomnia-ridden night? Well, in comes ChatGPT, the charismatic AI that’s been taking the digital world by storm. It’s like the Siri of texting, but with the verve of Shakespeare and the knowledge of a trivia champion.",
    tags: [
      {
        src: 'https://img.shields.io/badge/Artificial_Intelligence-FF6F00.svg?style=flat&logoColor=white',
        alt: 'Artificial Intelligence',
      },
      {
        src: 'https://img.shields.io/badge/GPT-1F1F1F.svg?style=flat',
        alt: 'GPT',
      },
    ],
    image: "../src/img/robot.webp",
    url: "https://medium.com/@dionisggr/a-hitchhikers-guide-to-chatgpt-19e5f4c0be6a?source=your_stories_page-------------------------------------",
  },
  {
    title: "The Art of Prompt Engineering",
    subtitle: "HOW TO TALK TO CHATGPT AND GET IT RIGHT EVERYTIME",
    description: "In the ever-evolving orchestra of our digital reality, OpenAI’s ChatGPT has truly stolen the limelight, painting the canvas of our daily lives with its whimsical and almost magical conversational capabilities. It’s answered our midnight existential queries, gracefully composed our overflowing inbox, and even narrated bedtime stories in the velvety voice of prose. Yet, the true secret sauce to unlocking its full potential doesn’t really lie in ‘how it works’, but rather in ‘how you work it’.",
    tags: [
      {
        src: 'https://img.shields.io/badge/GPT-1F1F1F.svg?style=flat',
        alt: 'GPT',
      },
      {
        src: 'https://img.shields.io/badge/Prompt_Engineering-74B8B1.svg?style=flat',
        alt: 'Prompt Engineering',
      }
    ],
    image: "../src/img/art-of-prompt-engineering.jpeg",
    url: "https://medium.com/@dionisggr/the-art-of-prompt-engineering-aa07d8c787ca?source=your_stories_page-------------------------------------",
  },
];

export default { projects, articles};
