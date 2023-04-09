/*! For license information please see a14b82b13f47919cb211.js.LICENSE.txt */
function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _regeneratorRuntime(){"use strict";_regeneratorRuntime=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function l(e,t,r,o){var i=t&&t.prototype instanceof p?t:p,a=Object.create(i.prototype),c=new T(o||[]);return n(a,"_invoke",{value:w(e,r,c)}),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d={};function p(){}function f(){}function h(){}var g={};s(g,i,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(j([])));y&&y!==t&&r.call(y,i)&&(g=y);var v=h.prototype=p.prototype=Object.create(g);function b(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function o(n,i,a,c){var s=u(e[n],e,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==_typeof(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){o("next",e,a,c)}),(function(e){o("throw",e,a,c)})):t.resolve(d).then((function(e){l.value=e,a(l)}),(function(e){return o("throw",e,a,c)}))}c(s.arg)}var i;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return i=i?i.then(n,n):n()}})}function w(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function S(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=u(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function j(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=h,n(v,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:f,configurable:!0}),f.displayName=s(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,s(e,c,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},b(L.prototype),s(L.prototype,a,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new L(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(v),s(v,c,"Generator"),s(v,i,(function(){return this})),s(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function asyncGeneratorStep(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){asyncGeneratorStep(i,n,o,a,c,"next",e)}function c(e){asyncGeneratorStep(i,n,o,a,c,"throw",e)}a(void 0)}))}}import Pong from"./pong.js";var projectListSection=document.querySelector(".project-list"),allProjects=[{title:"FlickShare",description:"Personalized movie suggestions based from full custom lists, and not just one movie!",technologies:["React","CSS","JavaScript","Nodejs","Express","Knex","PostgreSQL","Mocha","Chai","JWT","Vercel","Heroku"],image:"../img/flickshare.png",url:"https://dionis-gonzalez-portfolio.netlify.app/pong.html"},{title:"LangCards",description:"A Spanish language trainer app that uses spaced repetition for effective learning.",technologies:["React","CSS","JavaScript","Nodejs","Express","Knex","PostgreSQL","Mocha","Chai","Cypress","JWT","Helmet","Vercel","Heroku"],image:"../img/langcards.png",url:"https://dionis-gonzalez-portfolio.netlify.app/pong.html"},{title:"TabGPT",description:"An AI-powered Chrome extension that answer questions from the text in active tabs.",technologies:["HTML","CSS","JavaScript","Chrome API","GPT"],image:"../img/tabgpt.png",url:"https://dionis-gonzalez-portfolio.netlify.app/pong.html"}],allArticles=[{title:"The Fast-Paced Software Engineering Journey",subtitle:"MASTERING CODE & THE ART OF REFLECTION",description:"In the rapidly-evolving world of software engineering, mastering code is truly just the tip of the iceberg. It quickly becomes a reflective process of welcoming mistakes in a way that encourages learning and growth, while being patient with yourself. And the connections you get to make along the way are definitely just as important as the code you write.",tags:[{src:"https://img.shields.io/badge/Software%20Engineering-4B8BBE.svg?style=flat&logoColor=white",alt:"Software Engineering"},{src:"https://img.shields.io/badge/Networking-0078D7.svg?style=flat",alt:"Networking"}],image:"https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406__480.jpg",url:"!"},{title:"Why I Like JavaScript",subtitle:"BALANCED, AS ALL THINGS SHOULD BE",description:"JavaScript has been a key web development language, providing quick development, full-stack capabilities, cross-platform compatibility, and a generally low learning curve. It comes with trade-offs, often noted as a reduced maintainability for larger-scale applications. But I've found its untyped and flexible nature can be advantageous when used appropriately.",tags:[{src:"https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat",alt:"JavaScript"}],image:"../img/developer.jpeg",url:"!"},{title:"HCI: It Takes Two to Tango",subtitle:"TECHNOLOGY FOR HUMANS, NOT ROBOTS",description:"The field of Human-Computer Interaction has become an increasingly interesting topic these days, and for good reason! We rely on our computers for everything, from work to entertainment, and it's safe to say they're not going away anytime soon. So what is this field about? What is user-centered design, and what should these mean to you?",tags:[{src:"https://img.shields.io/badge/HCI-663399.svg?style=flat",alt:"HCI"},{src:"https://img.shields.io/badge/UX-4D4D4D.svg?style=flat",alt:"UX"},{src:"https://img.shields.io/badge/User--Centered%20Design-FFA500.svg?style=flat",alt:"User-Centered Design"}],image:"../img/human-robot-hand.jpeg",url:"!"},{title:"ChatGPT: A Phenomenom",subtitle:"ENGLISH, THE HOTTEST NEW LANGUAGE",description:"Just a few years ago, learning to code was considered an essential skill to harness the power of technology. Now the advent of powerful AI language models like GPT have begun to revolutionize our problem-solving approaches. The need for specialized coding languages may just begin to fade, albeit slowly, but making it easier for more non-technical roles to participate in the development process.",tags:[{src:"https://img.shields.io/badge/Artificial_Intelligence-FF6F00.svg?style=flat&logoColor=white",alt:"Artificial Intelligence"},{src:"https://img.shields.io/badge/GPT-1F1F1F.svg?style=flat",alt:"GPT"}],image:"../img/robot.webp",url:"!"}],projectFilters=[],articleFilters=[],badgesInPng=["cypress"],isSurveyTaken=!1;function addButtonToggleListeners(){document.querySelectorAll(".projects .filter-bar button").forEach((function(e){e.addEventListener("click",(function(e){return toggleFilter(e,"projects")}))})),document.querySelectorAll(".blog .filter-bar button").forEach((function(e){e.addEventListener("click",(function(e){return toggleFilter(e,"articles")}))}))}function toggleFilter(e,t){var r=e.target,n="projects"===t?projectFilters:articleFilters,o=r.innerText;o=o.toLowerCase(),n.includes(o)?n=n.filter((function(e){return e!==o})):n.push(o),r.classList.toggle("active"),"projects"===t?(projectFilters=n,updateProjects()):(articleFilters=n,updateArticles())}function updateProjects(){if(!projectFilters.length)return renderProjects(allProjects);var e=allProjects.filter((function(e){return projectFilters.every((function(t){return e.technologies.map((function(e){return e.toLowerCase()})).includes(t)}))}));if(!e.length)return projectListSection.innerHTML='<p class="no-match">Sorry, no projects match that combination.</p>';e.sort((function(e,t){var r=e.technologies.filter((function(e){return projectFilters.includes(e)})).length;return t.technologies.filter((function(e){return projectFilters.includes(e)})).length-r})),renderProjects(e)}function updateArticles(){var e=document.querySelector(".blog-list"),t=allArticles;e.innerHTML="",articleFilters.length&&(t=t.filter((function(e){var t=e.tags.map((function(e){return e.alt.toLowerCase()}));return articleFilters.every((function(e){return t.includes(e.toLowerCase())}))}))),t.sort((function(e,t){var r=e.tags.filter((function(e){return articleFilters.includes(e)})).length;return t.tags.filter((function(e){return articleFilters.includes(e)})).length-r})),t.forEach((function(t,r){var n=t.title,o=t.subtitle,i=t.description,a=t.tags,c=t.image,s=t.url,l=document.createElement("div"),u=document.createElement("div"),d=document.createElement("div"),p=document.createElement("div"),f=document.createElement("h1"),h=document.createElement("h2"),g=document.createElement("p"),m=document.createElement("p"),y=document.createElement("a"),v=a.map((function(e){var t=e.src,r=e.alt,n=document.createElement("img");return n.alt=r,n.src=t,n.classList.add("badge"),n}));l.classList.add("blog-card"),u.classList.add("meta"),d.classList.add("photo"),p.classList.add("description"),m.classList.add("read-more"),f.textContent=n,h.textContent=o,g.textContent=i,y.href=s,y.textContent="Read More",d.style.backgroundImage="url(".concat(c,")"),3%r==0&&l.classList.add("alt"),u.appendChild(d),m.appendChild(f),m.appendChild(h),m.appendChild(g),v.forEach((function(e){return m.appendChild(e)})),m.appendChild(y),l.appendChild(u),l.appendChild(p),p.appendChild(f),p.appendChild(h),p.appendChild(g),p.appendChild(m),e.appendChild(l)}))}function addTechnologies(e,t){return t.classList.add("technologies"),e.forEach((function(e){e=e.toLowerCase().split(" ")[0];var r=document.createElement("img"),n=badgesInPng.includes(e)?"png":"svg";badgesInPng.includes(e)?r.src="./".concat(e,".png"):r.src="./".concat(e,".svg"),r.src="./".concat(e,".").concat(n),r.alt="".concat(e," logo"),r.classList.add("tech-badge"),t.appendChild(r)})),t}function renderProjects(e){projectListSection.innerHTML="",e.forEach((function(e){var t=document.createElement("div"),r=document.createElement("img"),n=document.createElement("h3"),o=document.createElement("p"),i=document.createElement("a"),a=[r,n,o,addTechnologies(e.technologies,document.createElement("div")),i];t.classList.add("project",e.title.toLowerCase()),r.src=e.image,r.alt=e.alt,n.innerText=e.title,o.innerText=e.description,i.textContent="View Project",a.forEach((function(e){return t.appendChild(e)})),projectListSection.appendChild(t)}))}function addSurveyListener(){var e=document.querySelector(".survey"),t=e.querySelector("h4"),r=e.querySelector(".survey-content"),n=r.querySelector("form"),o=e.querySelector(".survey .close"),i=document.querySelector(".post-survey.error"),a=document.querySelector(".post-survey.success");[t,o].forEach((function(n){return n.addEventListener("click",(function(n){var c=n.target;isSurveyTaken&&(i.classList.add("hide"),a.classList.add("hide"),o.classList.add("hide"),t.innerText="Thanks for participating!"),(navigator.userAgentData.mobile||window.innerWidth<865)&&(e.classList.toggle("mobile"),toggleModal(e)),!isSurveyTaken&&e.contains(c)?(r.classList.toggle("hide"),o.classList.toggle("hide")):r.classList.contains("hide")||(r.classList.add("hide"),o.classList.add("hide"))}))})),n.addEventListener("submit",function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function e(t){var o,c;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),o=new FormData(n),c=new URLSearchParams,o.forEach((function(e,t){c.append(t,e)})),e.prev=6,e.next=9,fetch("https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLScZO7Uk0NfkvJi4t288cMPumhZzOtBnCZMgQVX2LKBxrNOEWQ/formResponse",{method:"POST",body:c});case 9:isSurveyTaken=!0,r.classList.add("hide"),a.classList.remove("hide"),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(6),r.classList.add("hide"),i.classList.remove("hide");case 18:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t){return e.apply(this,arguments)}}())}function addNavListeners(){var e=document.querySelector("nav.mobile"),t=document.querySelector(".me"),r=document.querySelectorAll("nav a"),n=document.querySelector(".conversation-btn");[t,n].concat(_toConsumableArray(r)).forEach((function(r){r.addEventListener("click",(function(r){r.preventDefault();var n=r.target.hash,o=document.querySelector(n),i=r.target!=t?o.offsetTop-70:0;e.classList.toggle("open"),window.scrollTo(0,i)}))}))}function setMobileMenuListener(){var e=document.querySelector("nav.mobile"),t=document.querySelector(".menu-toggle"),r=t.querySelector(".bars"),n=t.querySelector(".menu-toggle .close");t.addEventListener("click",(function(){e.classList.toggle("open"),n.classList.toggle("hide"),r.classList.toggle("hide")}))}function setPrintListener(){var e=function(){window.location.href="https://drive.google.com/file/d/1R5c_-jpCvC3_e1QuuR5Ph1NXcsrhzc77/view?usp=sharing"};window.addEventListener("keydown",(function(t){80===t.keyCode&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),e())})),window.onbeforeprint=e}function generateRandomRgbColor(e,t,r,n,o){return Math.floor(r/29*(parseInt(t.substring(n,o),16)-parseInt(e.substring(n,o),16))+parseInt(e.substring(n,o),16))}function getRandomGradientColors(e){for(var t="#"+Math.floor(16777215*Math.random()).toString(16),r="#"+Math.floor(16777215*Math.random()).toString(16),n=[],o=0;o<e;o++){var i=generateRandomRgbColor(t,r,o,1,3),a=generateRandomRgbColor(t,r,o,3,5),c=generateRandomRgbColor(t,r,o,5,7);n.push("rgb(".concat(i,", ").concat(a,", ").concat(c,")"))}return n}function setHeroGradientListener(){[document.querySelector("main #top h2"),document.querySelector("main #top p")].forEach((function(e){var t=e.innerText,r=getRandomGradientColors(t.length);e.innerHTML="",t.split("").forEach((function(t,n){var o=document.createElement("span");o.innerText=t,o.addEventListener("mouseover",(function(){o.style.color=r[n]})),o.addEventListener("mouseleave",(function(){setTimeout((function(){o.style.color="#fff"}),100)})),e.appendChild(o)}))}))}function toggleModal(e){var t=document.querySelector(".modal");if(t){var r=document.querySelector(".contact .container");return t.remove(),r.appendChild(e)}if(!isSurveyTaken){var n=document.createElement("div");n.className="modal",n.appendChild(e),document.body.appendChild(n),n.style.display="block"}}function setContactListener(){document.querySelector(".contact-form-inputs").addEventListener("submit",(function(e){e.preventDefault()}))}setMobileMenuListener(),addButtonToggleListeners(),addSurveyListener(),addNavListeners(),setPrintListener(),setHeroGradientListener(),setContactListener(),renderProjects(allProjects),updateArticles(),Pong.initialize();