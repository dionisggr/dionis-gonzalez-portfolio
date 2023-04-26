import Pong from"./pong.js";const projectListSection=document.querySelector(".project-list"),allProjects=[{title:"FlickShare",description:"Personalized movie suggestions based from full custom lists, and not just one movie!",technologies:["React","CSS","JavaScript","Nodejs","Express","Knex","PostgreSQL","Mocha","Chai","JWT","Vercel","Heroku"],image:"../src/img/flickshare.png",url:"https://dionis-gonzalez-portfolio.netlify.app/pong.html"},{title:"LangCards",description:"A Spanish language trainer app that uses spaced repetition for effective learning.",technologies:["React","CSS","JavaScript","Nodejs","Express","Knex","PostgreSQL","Mocha","Chai","Cypress","JWT","Helmet","Vercel","Heroku"],image:"../src/img/langcards.png",url:"https://dionis-gonzalez-portfolio.netlify.app/pong.html"},{title:"TabGPT",description:"An AI-powered Chrome extension that answer questions from the text in active tabs.",technologies:["HTML","CSS","JavaScript","Chrome API","GPT"],image:"../src/img/tabgpt.png",url:"https://dionis-gonzalez-portfolio.netlify.app/pong.html"}],allArticles=[{title:"The Fast-Paced Software Engineering Journey",subtitle:"MASTERING CODE & THE ART OF REFLECTION",description:"In the rapidly-evolving world of software engineering, mastering code is truly just the tip of the iceberg. It quickly becomes a reflective process of welcoming mistakes in a way that encourages learning and growth, while being patient with yourself. And the connections you get to make along the way are definitely just as important as the code you write.",tags:[{src:"https://img.shields.io/badge/Software%20Engineering-4B8BBE.svg?style=flat&logoColor=white",alt:"Software Engineering"},{src:"https://img.shields.io/badge/Networking-0078D7.svg?style=flat",alt:"Networking"}],image:"https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406__480.jpg",url:"!"},{title:"Why I Like JavaScript",subtitle:"BALANCED, AS ALL THINGS SHOULD BE",description:"JavaScript has been a key web development language, providing quick development, full-stack capabilities, cross-platform compatibility, and a generally low learning curve. It comes with trade-offs, often noted as a reduced maintainability for larger-scale applications. But I've found its untyped and flexible nature can be advantageous when used appropriately.",tags:[{src:"https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat",alt:"JavaScript"}],image:"../src/img/developer.jpeg",url:"!"},{title:"Human-Computer Interaction",subtitle:"TECHNOLOGY FOR HUMANS, NOT ROBOTS",description:"The field of HCI has become an increasingly interesting topic these days, and for good reason! We rely on our computers for everything, from work to entertainment, and it's safe to say they're not going away anytime soon. So what is this field about? What is user-centered design, and what should these mean to you?",tags:[{src:"https://img.shields.io/badge/HCI-663399.svg?style=flat",alt:"HCI"},{src:"https://img.shields.io/badge/UX-4D4D4D.svg?style=flat",alt:"UX"},{src:"https://img.shields.io/badge/User--Centered%20Design-FFA500.svg?style=flat",alt:"User-Centered Design"}],image:"../src/img/human-robot-hand.jpeg",url:"!"},{title:"ChatGPT: A Phenomenom",subtitle:"ENGLISH, THE HOTTEST NEW LANGUAGE",description:"Just a few years ago, learning to code was considered an essential skill to harness the power of technology. Now the advent of powerful AI language models like GPT have begun to revolutionize our problem-solving approaches. The need for specialized coding languages may just begin to fade, albeit slowly, but making it easier for more non-technical roles to participate in the development process.",tags:[{src:"https://img.shields.io/badge/Artificial_Intelligence-FF6F00.svg?style=flat&logoColor=white",alt:"Artificial Intelligence"},{src:"https://img.shields.io/badge/GPT-1F1F1F.svg?style=flat",alt:"GPT"}],image:"../src/img/robot.webp",url:"!"}];let projectFilters=[],articleFilters=[];const badgesInPng=["cypress"];let isSurveyTaken=!1;function addButtonToggleListeners(){document.querySelectorAll(".projects .filter-bar button").forEach((e=>{e.addEventListener("click",(e=>toggleFilter(e,"projects")))})),document.querySelectorAll(".blog .filter-bar button").forEach((e=>{e.addEventListener("click",(e=>toggleFilter(e,"articles")))}))}function toggleFilter({target:e},t){let o="projects"===t?projectFilters:articleFilters,{innerText:n}=e;n=n.toLowerCase(),o.includes(n)?o=o.filter((e=>e!==n)):o.push(n),e.classList.toggle("active"),"projects"===t?(projectFilters=o,updateProjects()):(articleFilters=o,updateArticles())}function updateProjects(){if(!projectFilters.length)return renderProjects(allProjects);const e=allProjects.filter((e=>projectFilters.every((t=>e.technologies.map((e=>e.toLowerCase())).includes(t)))));if(!e.length)return projectListSection.innerHTML='<p class="no-match">Sorry, no projects match that combination.</p>';e.sort(((e,t)=>{const o=e.technologies.filter((e=>projectFilters.includes(e))).length;return t.technologies.filter((e=>projectFilters.includes(e))).length-o})),renderProjects(e)}function updateArticles(){const e=document.querySelector(".blog-list");let t=allArticles;e.innerHTML="",articleFilters.length&&(t=t.filter((e=>{const t=e.tags.map((({alt:e})=>e.toLowerCase()));return articleFilters.every((e=>t.includes(e.toLowerCase())))}))),t.sort(((e,t)=>{const o=e.tags.filter((e=>articleFilters.includes(e))).length;return t.tags.filter((e=>articleFilters.includes(e))).length-o})),t.forEach((({title:t,subtitle:o,description:n,tags:r,image:s,url:i},a)=>{const l=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div"),g=document.createElement("div"),u=document.createElement("h1"),p=document.createElement("h2"),m=document.createElement("p"),h=document.createElement("p"),f=document.createElement("a"),y=r.map((({src:e,alt:t})=>{const o=document.createElement("img");return o.alt=t,o.src=e,o.classList.add("badge"),o}));l.classList.add("blog-card"),c.classList.add("meta"),d.classList.add("photo"),g.classList.add("description"),h.classList.add("read-more"),u.textContent=t,p.textContent=o,m.textContent=n,f.href=i,f.textContent="Read More",d.style.backgroundImage=`url(${s})`,3%a==0&&l.classList.add("alt"),c.appendChild(d),h.appendChild(u),h.appendChild(p),h.appendChild(m),y.forEach((e=>h.appendChild(e))),h.appendChild(f),l.appendChild(c),l.appendChild(g),g.appendChild(u),g.appendChild(p),g.appendChild(m),g.appendChild(h),e.appendChild(l)}))}function addProjectTechnologies(e,t){return t.classList.add("technologies"),e.forEach((e=>{e=e.toLowerCase().split(" ")[0];const o=document.createElement("img"),n=badgesInPng.includes(e)?"png":"svg";o.src=`../src/img/icons/${e}.${n}`,o.alt=`${e} logo`,o.classList.add("tech-badge"),t.appendChild(o)})),t}function renderProjects(e){projectListSection.innerHTML="",e.forEach((e=>{const t=document.createElement("div"),o=document.createElement("img"),n=document.createElement("h3"),r=document.createElement("p"),s=document.createElement("a"),i=[o,n,r,addProjectTechnologies(e.technologies,document.createElement("div")),s];t.classList.add("project",e.title.toLowerCase()),o.src=e.image,o.alt=e.alt,n.innerText=e.title,r.innerText=e.description,s.textContent="View Project",i.forEach((e=>t.appendChild(e))),projectListSection.appendChild(t)}))}async function addSurveyListener(){const e=document.querySelector(".survey"),t=e.querySelector("h4"),o=e.querySelector(".survey-content"),n=o.querySelector("form"),r=e.querySelector(".survey .close"),s=document.querySelector(".post-survey.error"),i=document.querySelector(".post-survey.success");[t,r].forEach((n=>n.addEventListener("click",(({target:n})=>{isSurveyTaken&&(s.classList.add("hide"),i.classList.add("hide"),r.classList.add("hide"),t.innerText="Thanks for participating!"),(navigator.userAgentData.mobile||window.innerWidth<865)&&(e.classList.toggle("mobile"),toggleModal(e)),!isSurveyTaken&&e.contains(n)?(o.classList.toggle("hide"),r.classList.toggle("hide")):o.classList.contains("hide")||(o.classList.add("hide"),r.classList.add("hide"))})))),await n.addEventListener("submit",(async e=>{e.preventDefault();const t=new FormData(n),r=new URLSearchParams;t.forEach(((e,t)=>{r.append(t,e)}));try{await fetch("https://docs.google.com/forms/d/e/1FAIpQLScZO7Uk0NfkvJi4t288cMPumhZzOtBnCZMgQVX2LKBxrNOEWQ/formResponse",{method:"POST",body:r}),isSurveyTaken=!0,o.classList.add("hide"),i.classList.remove("hide")}catch(e){o.classList.add("hide"),i.classList.remove("hide")}}))}function addNavListeners(){const e=document.querySelector("nav.mobile"),t=document.querySelector(".me"),o=document.querySelectorAll("nav a"),n=document.querySelector(".conversation-btn");[t,n,...o].forEach((o=>{o.addEventListener("click",(o=>{o.preventDefault();const n=o.target.hash,r=document.querySelector(n),s=o.target!=t?r.offsetTop-70:0;e.classList.toggle("open"),window.scrollTo(0,s)}))})),e.addEventListener("click",(({target:t})=>{t==e&&e.classList.remove("open")}))}function setMobileMenuListener(){const e=document.querySelector("nav.mobile"),t=document.querySelector(".menu-toggle"),o=t.querySelector(".bars"),n=t.querySelector(".menu-toggle .close");t.addEventListener("click",(()=>{e.classList.toggle("open"),n.classList.toggle("hide"),o.classList.toggle("hide")}))}function setPrintListener(){const e=()=>{window.location.href="https://drive.google.com/file/d/1R5c_-jpCvC3_e1QuuR5Ph1NXcsrhzc77/view?usp=sharing"};window.addEventListener("keydown",(t=>{80===t.keyCode&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),e())})),window.onbeforeprint=e}function generateRandomRgbColor(e,t,o,n,r){return Math.floor(o/29*(parseInt(t.substring(n,r),16)-parseInt(e.substring(n,r),16))+parseInt(e.substring(n,r),16))}function getRandomGradientColors(e){const t="#"+Math.floor(16777215*Math.random()).toString(16),o="#"+Math.floor(16777215*Math.random()).toString(16),n=[];for(let r=0;r<e;r++){const e=generateRandomRgbColor(t,o,r,1,3),s=generateRandomRgbColor(t,o,r,3,5),i=generateRandomRgbColor(t,o,r,5,7);n.push(`rgb(${e}, ${s}, ${i})`)}return n}function setHeroGradientListener(){[document.querySelector("main #top h2"),document.querySelector("main #top p")].forEach((e=>{const t=e.innerText,o=getRandomGradientColors(t.length);e.innerHTML="",t.split("").forEach(((t,n)=>{const r=document.createElement("span");r.innerText=t,r.addEventListener("mouseover",(()=>{r.style.color=o[n]})),r.addEventListener("mouseleave",(()=>{setTimeout((()=>{r.style.color="#fff"}),100)})),e.appendChild(r)}))}))}function toggleModal(e){console.log("runs");const t=document.querySelector(".modal");if(t){const o=document.querySelector(".contact .container");return t.remove(),o.appendChild(e)}if(isSurveyTaken)return;const o=document.createElement("div");o.className="modal",o.appendChild(e),document.body.appendChild(o),o.style.display="block"}function setContactListener(){document.querySelector(".contact-form-inputs").addEventListener("submit",(e=>{e.preventDefault()}))}setMobileMenuListener(),addButtonToggleListeners(),addSurveyListener(),addNavListeners(),setPrintListener(),setHeroGradientListener(),setContactListener(),renderProjects(allProjects),updateArticles(),Pong.initialize();