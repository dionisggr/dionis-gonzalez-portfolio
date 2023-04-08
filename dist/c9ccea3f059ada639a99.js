/*! For license information please see c9ccea3f059ada639a99.js.LICENSE.txt */
function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}!function(){"use strict";!function(){var t=[5,5,3,3,2],e=["#1abc9c","#2ecc71","#3498db","#e74c3c","#9b59b6"],n={new:function(t){return{width:18,height:18,x:this.canvas.width/2-9,y:this.canvas.height/2-9,moveX:0,moveY:0,speed:t||9}}},i={new:function(t){return{width:18,height:70,x:"left"===t?150:this.canvas.width-150,y:this.canvas.height/2-35,score:0,move:0,speed:10}}};function r(t){a.player.y=1.75*(t.clientY-a.player.height/.22)}var o={initialize:function(){this.canvas=document.querySelector("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.width=2e3,this.canvas.height=600,this.canvas.style.width="100%",this.canvas.style.height="auto",this.canvas.style.border="solid 1px #22222233",this.canvas.style.borderRadius="5px",this.canvas.style.boxShadow="0 0 10px #22222233",this.player=i.new.call(this,"left"),this.paddle=i.new.call(this,"right"),this.ball=n.new.call(this),this.paddle.speed=8,this.running=this.over=!1,this.turn=this.paddle,this.timer=this.round=0,this.color="#f5f5f5",a.menu(),a.listen()},endGameMenu:function(t){a.context.font="50px Courier New",a.context.fillStyle=this.color,a.context.fillRect(a.canvas.width/2-350,a.canvas.height/2-48,700,100),a.context.fillStyle="#222;",a.context.fillText(t,a.canvas.width/2,a.canvas.height/2+15),setTimeout((function(){Object.assign({},o),function(t){throw new TypeError('"Pong" is read-only')}(),a.initialize()}),3e3)},menu:function(){a.draw(),this.context.font="50px Courier New",this.context.fillStyle=this.color,this.context.fillRect(this.canvas.width/2-350,this.canvas.height/2-48,700,100),this.context.fillStyle="#222;",this.context.fillText("Press any key to begin",this.canvas.width/2,this.canvas.height/2+15)},update:function(){this.over||(this.ball.x<=0&&a._resetTurn.call(this,this.paddle,this.player),this.ball.x>=this.canvas.width-this.ball.width&&a._resetTurn.call(this,this.player,this.paddle),this.ball.y<=0&&(this.ball.moveY=2),this.ball.y>=this.canvas.height-this.ball.height&&(this.ball.moveY=1),1===this.player.move?this.player.y-=this.player.speed:2===this.player.move&&(this.player.y+=this.player.speed),a._turnDelayIsOver.call(this)&&this.turn&&(this.ball.moveX=this.turn===this.player?3:4,this.ball.moveY=[1,2][Math.round(Math.random())],this.ball.y=Math.floor(Math.random()*this.canvas.height-200)+200,this.turn=null),this.player.y<=0?this.player.y=0:this.player.y>=this.canvas.height-this.player.height&&(this.player.y=this.canvas.height-this.player.height),1===this.ball.moveY?this.ball.y-=this.ball.speed/1.5:2===this.ball.moveY&&(this.ball.y+=this.ball.speed/1.5),3===this.ball.moveX?this.ball.x-=this.ball.speed:4===this.ball.moveX&&(this.ball.x+=this.ball.speed),this.paddle.y>this.ball.y-this.paddle.height/2&&(4===this.ball.moveX?this.paddle.y-=this.paddle.speed/1.5:this.paddle.y-=this.paddle.speed/4),this.paddle.y<this.ball.y-this.paddle.height/2&&(4===this.ball.moveX?this.paddle.y+=this.paddle.speed/1.5:this.paddle.y+=this.paddle.speed/4),this.paddle.y>=this.canvas.height-this.paddle.height?this.paddle.y=this.canvas.height-this.paddle.height:this.paddle.y<=0&&(this.paddle.y=0),this.ball.x-this.ball.width<=this.player.x&&this.ball.x>=this.player.x-this.player.width&&this.ball.y<=this.player.y+this.player.height&&this.ball.y+this.ball.height>=this.player.y&&(this.ball.x=this.player.x+this.ball.width,this.ball.moveX=4),this.ball.x-this.ball.width<=this.paddle.x&&this.ball.x>=this.paddle.x-this.paddle.width&&this.ball.y<=this.paddle.y+this.paddle.height&&this.ball.y+this.ball.height>=this.paddle.y&&(this.ball.x=this.paddle.x-this.ball.width,this.ball.moveX=3)),this.player.score===t[this.round]?t[this.round+1]?(this.color=this._generateRoundColor(),this.player.score=this.paddle.score=0,this.player.speed+=.5,this.paddle.speed+=1,this.ball.speed+=1,this.round+=1):(this.over=!0,setTimeout((function(){a.endGameMenu("Winner!")}),1e3)):this.paddle.score===t[this.round]&&(this.over=!0,setTimeout((function(){a.endGameMenu("Game Over!")}),1e3))},draw:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.color,this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle="#222;",this.context.fillStyle="#222",this.context.fillRect(this.player.x,this.player.y,this.player.width,this.player.height),this.context.fillRect(this.paddle.x,this.paddle.y,this.paddle.width,this.paddle.height),a._turnDelayIsOver.call(this)&&this.context.fillRect(this.ball.x,this.ball.y,this.ball.width,this.ball.height),this.context.beginPath(),this.context.setLineDash([7,15]),this.context.moveTo(this.canvas.width/2,this.canvas.height-140),this.context.lineTo(this.canvas.width/2,140),this.context.lineWidth=10,this.context.strokeStyle="#222;",this.context.stroke(),this.context.font="100px Courier New",this.context.textAlign="center",this.context.fillText(this.player.score.toString(),this.canvas.width/2-300,200),this.context.fillText(this.paddle.score.toString(),this.canvas.width/2+300,200),this.context.font="30px Courier New",this.context.fillText("Round "+(a.round+1),this.canvas.width/2,35),this.context.font="40px Courier",this.context.fillText(t[a.round]?t[a.round]:t[a.round-1],this.canvas.width/2,100)},loop:function(){a.update(),a.draw(),a.over||requestAnimationFrame(a.loop)},listen:function(){document.addEventListener("keydown",(function(t){13===t.keyCode&&(a.running=!a.running,a.over=!a.running,document.body.style.cursor=a.running?"none":"default",a.running?(document.addEventListener("mousemove",r),window.requestAnimationFrame(a.loop)):(document.removeEventListener("mousemove",r),window.cancelAnimationFrame(a.loop)))}))},_resetTurn:function(t,e){this.ball=n.new.call(this,this.ball.speed),this.turn=e,this.timer=(new Date).getTime(),t.score++},_turnDelayIsOver:function(){return(new Date).getTime()-this.timer>=1e3},_generateRoundColor:function(){var t=e[Math.floor(Math.random()*e.length)];return t===this.color?a._generateRoundColor():t}},a=Object.assign({},o),s=a;function l(t){return l="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(t){return _typeof(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof(t)},l(t)}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function h(){h=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),s=new k(r||[]);return i(a,"_invoke",{value:S(t,n,s)}),a}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var p={};function f(){}function g(){}function y(){}var m={};c(m,o,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(A([])));b&&b!==e&&n.call(b,o)&&(m=b);var w=y.prototype=f.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(i,o,a,s){var c=d(t[i],t,o);if("throw"!==c.type){var h=c.arg,u=h.value;return u&&"object"==l(u)&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(u).then((function(t){h.value=t,a(h)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,i){r(t,n,e,i)}))}return o=o?o.then(i,i):i()}})}function S(t,e,n){var i="suspendedStart";return function(r,o){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===r)throw o;return{value:void 0,done:!0}}for(n.method=r,n.arg=o;;){var a=n.delegate;if(a){var s=E(a,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===i)throw i="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i="executing";var l=d(t,e,n);if("normal"===l.type){if(i=n.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i="completed",n.method="throw",n.arg=l.arg)}}}function E(t,e){var n=e.method,i=t.iterator[n];if(void 0===i)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var r=d(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,p;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function A(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,r=function e(){for(;++i<t.length;)if(n.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return g.prototype=y,i(w,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:g,configurable:!0}),g.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(L.prototype),c(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,i,r,o){void 0===o&&(o=Promise);var a=new L(u(e,n,i,r),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),c(w,s,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var i in e)n.push(i);return n.reverse(),function t(){for(;n.length;){var i=n.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},t.values=A,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(n,i){return a.type="throw",a.arg=t,e.next=n,i&&(e.method="next",e.arg=void 0),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;T(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}function u(t,e,n,i,r,o,a){try{var s=t[o](a),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(i,r)}var d,p,f,g,y,m,v,b,w,x,L=document.querySelector(".project-list"),S=[{title:"FlickShare",description:"Personalized movie suggestions based from full custom lists, and not just one movie!",technologies:["React","CSS","JavaScript","Nodejs","Express","Knex","PostgreSQL","Mocha","Chai","JWT","Vercel","Heroku"],image:"./img/flickshare.png",url:"https://dionis-gonzalez-portfolio.netlify.app/pong.html"},{title:"LangCards",description:"A Spanish language trainer app that uses spaced repetition for effective learning.",technologies:["React","CSS","JavaScript","Nodejs","Express","Knex","PostgreSQL","Mocha","Chai","Cypress","JWT","Helmet","Vercel","Heroku"],image:"./img/langcards.png",url:"https://dionis-gonzalez-portfolio.netlify.app/pong.html"},{title:"TabGPT",description:"An AI-powered Chrome extension that answer questions from the text in active tabs.",technologies:["HTML","CSS","JavaScript","Chrome API","GPT"],image:"./img/tabgpt.png",url:"https://dionis-gonzalez-portfolio.netlify.app/pong.html"}],E=[{title:"The Fast-Paced Software Engineering Journey",subtitle:"MASTERING CODE & THE ART OF REFLECTION",description:"In the rapidly-evolving world of software engineering, mastering code is truly just the tip of the iceberg. It quickly becomes a reflective process of welcoming mistakes in a way that encourages learning and growth, while being patient with yourself. And the connections you get to make along the way are definitely just as important as the code you write.",tags:[{src:"https://img.shields.io/badge/Software%20Engineering-4B8BBE.svg?style=flat&logoColor=white",alt:"Software Engineering"},{src:"https://img.shields.io/badge/Networking-0078D7.svg?style=flat",alt:"Networking"}],image:"https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406__480.jpg",url:"!"},{title:"Why I Like JavaScript",subtitle:"BALANCED, AS ALL THINGS SHOULD BE",description:"JavaScript has been a key web development language, providing quick development, full-stack capabilities, cross-platform compatibility, and a generally low learning curve. It comes with trade-offs, often noted as a reduced maintainability for larger-scale applications. But I've found its untyped and flexible nature can be advantageous when used appropriately.",tags:[{src:"https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat",alt:"JavaScript"}],image:"./img/developer.jpeg",url:"!"},{title:"HCI: It Takes Two to Tango",subtitle:"TECHNOLOGY FOR HUMANS, NOT ROBOTS",description:"The field of Human-Computer Interaction has become an increasingly interesting topic these days, and for good reason! We rely on our computers for everything, from work to entertainment, and it's safe to say they're not going away anytime soon. So what is this field about? What is user-centered design, and what should these mean to you?",tags:[{src:"https://img.shields.io/badge/HCI-663399.svg?style=flat",alt:"HCI"},{src:"https://img.shields.io/badge/UX-4D4D4D.svg?style=flat",alt:"UX"},{src:"https://img.shields.io/badge/User--Centered%20Design-FFA500.svg?style=flat",alt:"User-Centered Design"}],image:"https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406__480.jpg",url:"!"},{title:"ChatGPT: A Phenomenom",subtitle:"ENGLISH, THE HOTTEST NEW LANGUAGE",description:"Just a few years ago, learning to code was considered an essential skill to harness the power of technology. Now the advent of powerful AI language models like GPT have begun to revolutionize our problem-solving approaches. The need for specialized coding languages may just begin to fade, albeit slowly, but making it easier for more non-technical roles to participate in the development process.",tags:[{src:"https://img.shields.io/badge/Artificial_Intelligence-FF6F00.svg?style=flat&logoColor=white",alt:"Artificial Intelligence"},{src:"https://img.shields.io/badge/GPT-1F1F1F.svg?style=flat",alt:"GPT"}],image:"./img/robot.webp",url:"!"}],C=[],T=[],k=["cypress"],A=!1;function O(t,e){var n=t.target,i="projects"===e?C:T,r=n.innerText;r=r.toLowerCase(),i.includes(r)?i=i.filter((function(t){return t!==r})):i.push(r),n.classList.toggle("active"),"projects"===e?(C=i,function(){if(!C.length)return j(S);var t=S.filter((function(t){return C.every((function(e){return t.technologies.map((function(t){return t.toLowerCase()})).includes(e)}))}));if(!t.length)return L.innerHTML='<p class="no-match">Sorry, no projects match that combination.</p>';t.sort((function(t,e){var n=t.technologies.filter((function(t){return C.includes(t)})).length;return e.technologies.filter((function(t){return C.includes(t)})).length-n})),j(t)}()):(T=i,_())}function _(){var t=document.querySelector(".blog-list"),e=E;t.innerHTML="",T.length&&(e=e.filter((function(t){var e=t.tags.map((function(t){return t.alt.toLowerCase()}));return T.every((function(t){return e.includes(t.toLowerCase())}))}))),e.sort((function(t,e){var n=t.tags.filter((function(t){return T.includes(t)})).length;return e.tags.filter((function(t){return T.includes(t)})).length-n})),e.forEach((function(e,n){var i=e.title,r=e.subtitle,o=e.description,a=e.tags,s=e.image,l=e.url,c=document.createElement("div"),h=document.createElement("div"),u=document.createElement("div"),d=document.createElement("div"),p=document.createElement("h1"),f=document.createElement("h2"),g=document.createElement("p"),y=document.createElement("p"),m=document.createElement("a"),v=a.map((function(t){var e=t.src,n=t.alt,i=document.createElement("img");return i.alt=n,i.src=e,i.classList.add("badge"),i}));c.classList.add("blog-card"),h.classList.add("meta"),u.classList.add("photo"),d.classList.add("description"),y.classList.add("read-more"),p.textContent=i,f.textContent=r,g.textContent=o,m.href=l,m.textContent="Read More",u.style.backgroundImage="url(".concat(s,")"),3%n==0&&c.classList.add("alt"),h.appendChild(u),y.appendChild(p),y.appendChild(f),y.appendChild(g),v.forEach((function(t){return y.appendChild(t)})),y.appendChild(m),c.appendChild(h),c.appendChild(d),d.appendChild(p),d.appendChild(f),d.appendChild(g),d.appendChild(y),t.appendChild(c)}))}function j(t){L.innerHTML="",t.forEach((function(t){var e,n,i=document.createElement("div"),r=document.createElement("img"),o=document.createElement("h3"),a=document.createElement("p"),s=document.createElement("a"),l=(e=t.technologies,(n=document.createElement("div")).classList.add("technologies"),e.forEach((function(t){t=t.toLowerCase().split(" ")[0];var e=document.createElement("img"),i=k.includes(t)?"png":"svg";k.includes(t)?e.src="./".concat(t,".png"):e.src="./".concat(t,".svg"),e.src="./".concat(t,".").concat(i),e.alt="".concat(t," logo"),e.classList.add("tech-badge"),n.appendChild(e)})),n),c=[r,o,a,l,s];i.classList.add("project",t.title.toLowerCase()),r.src=t.image,r.alt=t.alt,o.innerText=t.title,a.innerText=t.description,s.textContent="View Project",c.forEach((function(t){return i.appendChild(t)})),L.appendChild(i)}))}function I(t,e,n,i,r){return Math.floor(n/29*(parseInt(e.substring(i,r),16)-parseInt(t.substring(i,r),16))+parseInt(t.substring(i,r),16))}d=document.querySelector("nav.mobile"),p=document.querySelector(".menu-toggle"),f=p.querySelector(".bars"),g=p.querySelector(".menu-toggle .close"),p.addEventListener("click",(function(){d.classList.toggle("open"),g.classList.toggle("hide"),f.classList.toggle("hide")})),document.querySelectorAll(".projects .filter-bar button").forEach((function(t){t.addEventListener("click",(function(t){return O(t,"projects")}))})),document.querySelectorAll(".blog .filter-bar button").forEach((function(t){t.addEventListener("click",(function(t){return O(t,"articles")}))})),function(){var t=document.querySelector(".survey"),e=t.querySelector("h4"),n=t.querySelector(".survey-content"),i=n.querySelector("form"),r=t.querySelector(".survey .close"),o=document.querySelector(".post-survey.error"),a=document.querySelector(".post-survey.success");[e,r].forEach((function(i){return i.addEventListener("click",(function(i){var s=i.target;A&&(o.classList.add("hide"),a.classList.add("hide"),r.classList.add("hide"),e.innerText="Thanks for participating!"),(navigator.userAgentData.mobile||window.innerWidth<865)&&(t.classList.toggle("mobile"),function(t){var e=document.querySelector(".modal");if(e){var n=document.querySelector(".contact .container");return e.remove(),n.appendChild(t)}if(!A){var i=document.createElement("div");i.className="modal",i.appendChild(t),document.body.appendChild(i),i.style.display="block"}}(t)),!A&&t.contains(s)?(n.classList.toggle("hide"),r.classList.toggle("hide")):n.classList.contains("hide")||(n.classList.add("hide"),r.classList.add("hide"))}))})),i.addEventListener("submit",function(){var t,e=(t=h().mark((function t(e){var r,s;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r=new FormData(i),s=new URLSearchParams,r.forEach((function(t,e){s.append(e,t)})),t.prev=6,t.next=9,fetch("https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLScZO7Uk0NfkvJi4t288cMPumhZzOtBnCZMgQVX2LKBxrNOEWQ/formResponse",{method:"POST",body:s});case 9:A=!0,n.classList.add("hide"),a.classList.remove("hide"),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(6),n.classList.add("hide"),o.classList.remove("hide");case 18:case"end":return t.stop()}}),t,null,[[6,14]])})),function(){var e=this,n=arguments;return new Promise((function(i,r){var o=t.apply(e,n);function a(t){u(o,i,r,a,s,"next",t)}function s(t){u(o,i,r,a,s,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}())}(),y=document.querySelector("nav.mobile"),m=document.querySelector(".me"),v=document.querySelectorAll("nav a"),b=document.querySelector(".conversation-btn"),[m,b].concat((x=v,function(t){if(Array.isArray(t))return c(t)}(x)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(x)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(x)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())).forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault();var e=t.target.hash,n=document.querySelector(e),i=t.target!=m?n.offsetTop-70:0;y.classList.toggle("open"),window.scrollTo(0,i)}))})),w=function(){window.location.href="https://drive.google.com/file/d/1R5c_-jpCvC3_e1QuuR5Ph1NXcsrhzc77/view?usp=sharing"},window.addEventListener("keydown",(function(t){80===t.keyCode&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),w())})),window.onbeforeprint=w,[document.querySelector("main #top h2"),document.querySelector("main #top p")].forEach((function(t){var e=t.innerText,n=function(t){for(var e="#"+Math.floor(16777215*Math.random()).toString(16),n="#"+Math.floor(16777215*Math.random()).toString(16),i=[],r=0;r<t;r++){var o=I(e,n,r,1,3),a=I(e,n,r,3,5),s=I(e,n,r,5,7);i.push("rgb(".concat(o,", ").concat(a,", ").concat(s,")"))}return i}(e.length);t.innerHTML="",e.split("").forEach((function(e,i){var r=document.createElement("span");r.innerText=e,r.addEventListener("mouseover",(function(){r.style.color=n[i]})),r.addEventListener("mouseleave",(function(){setTimeout((function(){r.style.color="#fff"}),100)})),t.appendChild(r)}))})),document.querySelector(".contact-form-inputs").addEventListener("submit",(function(t){t.preventDefault()})),j(S),_(),s.initialize()}()}();