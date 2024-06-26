const projects = [
  {
    title: "Tutorize",
    description: "AI-powered tutoring platform that personalizes video course content to learners.",
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
      "JWT",
      "Vercel",
      "Supabase",
    ],
    image: "../src/img/tutorize_banner.png",
    url: "https://tutorize.vercel.app/",
  },
  {
    title: "PixelHaus",
    description: "Online renting platform for the niche of AI-generated wall art",
    technologies: [
      "Vue.js",
      "TailwindCSS",
      "Vite",
      "Vuex",
      "JavaScript",
      "GPT",
      "Vercel",
    ],
    image: "../src/img/pixelhaus.png",
    url: "https://pixelhaus.vercel.app",
  },
  {
    title: "PromptGarage",
    description: "Web-based GPT prompt enhancer, evaluator and builder.",
    technologies: [
      "Vue.js",
      "TailwindCSS",
      "Vite",
      "Vuex",
      "JavaScript",
      "GPT",
      "Vercel",
    ],
    image: "../src/img/promptgarage.png",
    url: "https://promptgarage.vercel.app",
  },
];
const articles = [
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
  {
    title: "Building Apps with ChatGPT: A Practical Approach",
    subtitle: "OVERCOMING COMMON CHALLENGES",
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
    image: "../src/img/building-apps-with-chatgpt.webp",
    url: "https://medium.com/design-bootcamp/building-apps-with-chatgpt-a-practical-approach-d8d76c8de239",
  },
  {
    title: "Navigating the AI Startup Hype",
    subtitle: "LESSONS FROM THE PAST AND A LOOK INTO THE FUTURE",
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
    image: "../src/img/navigating-ai-startup-hype.webp",
    url: "https://medium.com/latinxinai/navigating-the-ai-startup-hype-af3b3967a2c",
  },
];

export default { projects, articles};
