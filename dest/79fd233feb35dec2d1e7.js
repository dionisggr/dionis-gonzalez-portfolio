import Pong from"./pong.js";const projectListSection=document.querySelector(".project-list");let projectFilters=[],articleFilters=[];const badgesInPng=["cypress"];let isSurveyTaken=!1;function addButtonToggleListeners(){document.querySelectorAll(".projects .filter-bar button").forEach((e=>{e.addEventListener("click",(e=>toggleFilter(e,"projects")))})),document.querySelectorAll(".blog .filter-bar button").forEach((e=>{e.addEventListener("click",(e=>toggleFilter(e,"articles")))}))}function toggleFilter({target:e},t){let n="projects"===t?projectFilters:articleFilters,{innerText:r}=e;r=r.toLowerCase(),n.includes(r)?n=n.filter((e=>e!==r)):n.push(r),e.classList.toggle("active"),"projects"===t?(projectFilters=n,updateProjects()):(articleFilters=n,updateArticles())}function updateProjects(){if(!projectFilters.length)return renderProjects(allProjects);const e=allProjects.filter((e=>projectFilters.every((t=>e.technologies.map((e=>e.toLowerCase())).includes(t)))));if(!e.length)return projectListSection.innerHTML='<p class="no-match">Sorry, no projects match that combination.</p>';e.sort(((e,t)=>{const n=e.technologies.filter((e=>projectFilters.includes(e))).length;return t.technologies.filter((e=>projectFilters.includes(e))).length-n})),renderProjects(e)}function updateArticles(){const e=document.querySelector(".blog-list");let t=allArticles;e.innerHTML="",articleFilters.length&&(t=t.filter((e=>{const t=e.tags.map((({alt:e})=>e.toLowerCase()));return articleFilters.every((e=>t.includes(e.toLowerCase())))}))),t.sort(((e,t)=>{const n=e.tags.filter((e=>articleFilters.includes(e))).length;return t.tags.filter((e=>articleFilters.includes(e))).length-n})),t.forEach((({title:t,subtitle:n,description:r,tags:o,image:s,url:c},i)=>{const l=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div"),u=document.createElement("div"),p=document.createElement("h1"),g=document.createElement("h2"),m=document.createElement("p"),h=document.createElement("p"),L=document.createElement("a"),f=o.map((({src:e,alt:t})=>{const n=document.createElement("img");return n.alt=t,n.src=e,n.classList.add("badge"),n}));l.classList.add("blog-card"),a.classList.add("meta"),d.classList.add("photo"),u.classList.add("description"),h.classList.add("read-more"),p.textContent=t,g.textContent=n,m.textContent=r,L.href=c,L.textContent="Read More",d.style.backgroundImage=`url(${s})`,3%i==0&&l.classList.add("alt"),a.appendChild(d),h.appendChild(p),h.appendChild(g),h.appendChild(m),f.forEach((e=>h.appendChild(e))),h.appendChild(L),l.appendChild(a),l.appendChild(u),u.appendChild(p),u.appendChild(g),u.appendChild(m),u.appendChild(h),e.appendChild(l)}))}function addTechnologies(e,t){return t.classList.add("technologies"),e.forEach((e=>{e=e.toLowerCase().split(" ")[0];const n=document.createElement("img"),r=badgesInPng.includes(e)?"png":"svg";badgesInPng.includes(e)?n.src=`./${e}.png`:n.src=`./${e}.svg`,n.src=`./${e}.${r}`,n.alt=`${e} logo`,n.classList.add("tech-badge"),t.appendChild(n)})),t}function renderProjects(e){}function addSurveyListener(){const e=document.querySelector(".survey"),t=e.querySelector("h4"),n=e.querySelector(".survey-content"),r=n.querySelector("form"),o=e.querySelector(".survey .close"),s=document.querySelector(".post-survey.error"),c=document.querySelector(".post-survey.success");[t,o].forEach((r=>r.addEventListener("click",(({target:r})=>{isSurveyTaken&&(s.classList.add("hide"),c.classList.add("hide"),o.classList.add("hide"),t.innerText="Thanks for participating!"),(navigator.userAgentData.mobile||window.innerWidth<865)&&(e.classList.toggle("mobile"),toggleModal(e)),!isSurveyTaken&&e.contains(r)?(n.classList.toggle("hide"),o.classList.toggle("hide")):n.classList.contains("hide")||(n.classList.add("hide"),o.classList.add("hide"))})))),r.addEventListener("submit",(async e=>{e.preventDefault();const t=new FormData(r),o=new URLSearchParams;t.forEach(((e,t)=>{o.append(t,e)}));try{await fetch("https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLScZO7Uk0NfkvJi4t288cMPumhZzOtBnCZMgQVX2LKBxrNOEWQ/formResponse",{method:"POST",body:o}),isSurveyTaken=!0,n.classList.add("hide"),c.classList.remove("hide")}catch(e){n.classList.add("hide"),s.classList.remove("hide")}}))}function addNavListeners(){const e=document.querySelector("nav.mobile"),t=(document.querySelector(".nav-list"),document.querySelector(".me")),n=document.querySelectorAll("nav a"),r=document.querySelector(".conversation-btn");[t,r,...n].forEach((n=>{n.addEventListener("click",(n=>{n.preventDefault();const r=n.target.hash,o=document.querySelector(r),s=n.target!=t?o.offsetTop-70:0;e.classList.toggle("open"),window.scrollTo(0,s)}))})),e.addEventListener("click",(({target:t})=>{t==e&&e.classList.remove("open")}))}function setMobileMenuListener(){const e=document.querySelector("nav.mobile"),t=document.querySelector(".menu-toggle"),n=t.querySelector(".bars"),r=t.querySelector(".menu-toggle .close");t.addEventListener("click",(()=>{e.classList.toggle("open"),r.classList.toggle("hide"),n.classList.toggle("hide")}))}function setPrintListener(){const e=()=>{window.location.href="https://drive.google.com/file/d/1R5c_-jpCvC3_e1QuuR5Ph1NXcsrhzc77/view?usp=sharing"};window.addEventListener("keydown",(t=>{80===t.keyCode&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),e())})),window.onbeforeprint=e}function generateRandomRgbColor(e,t,n,r,o){return Math.floor(n/29*(parseInt(t.substring(r,o),16)-parseInt(e.substring(r,o),16))+parseInt(e.substring(r,o),16))}function getRandomGradientColors(e){const t="#"+Math.floor(16777215*Math.random()).toString(16),n="#"+Math.floor(16777215*Math.random()).toString(16),r=[];for(let o=0;o<e;o++){const e=generateRandomRgbColor(t,n,o,1,3),s=generateRandomRgbColor(t,n,o,3,5),c=generateRandomRgbColor(t,n,o,5,7);r.push(`rgb(${e}, ${s}, ${c})`)}return r}function setHeroGradientListener(){[document.querySelector("main #top h2"),document.querySelector("main #top p")].forEach((e=>{const t=e.innerText,n=getRandomGradientColors(t.length);e.innerHTML="",t.split("").forEach(((t,r)=>{const o=document.createElement("span");o.innerText=t,o.addEventListener("mouseover",(()=>{o.style.color=n[r]})),o.addEventListener("mouseleave",(()=>{setTimeout((()=>{o.style.color="#fff"}),100)})),e.appendChild(o)}))}))}function toggleModal(e){const t=document.querySelector(".modal");if(t){const n=document.querySelector(".contact .container");return t.remove(),n.appendChild(e)}if(isSurveyTaken)return;const n=document.createElement("div");n.className="modal",n.appendChild(e),document.body.appendChild(n),n.style.display="block"}function setContactListener(){document.querySelector(".contact-form-inputs").addEventListener("submit",(e=>{e.preventDefault()}))}setMobileMenuListener(),addButtonToggleListeners(),addSurveyListener(),addNavListeners(),setPrintListener(),setHeroGradientListener(),setContactListener(),updateArticles(),Pong.initialize();