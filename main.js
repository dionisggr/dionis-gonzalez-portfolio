(()=>{"use strict";(()=>{var t=[5,5,3,3,2],e=["#1abc9c","#2ecc71","#3498db","#e74c3c","#9b59b6"],i={new:function(t){return{width:18,height:18,x:this.canvas.width/2-9,y:this.canvas.height/2-9,moveX:0,moveY:0,speed:t||9}}},s={new:function(t){return{width:18,height:70,x:"left"===t?150:this.canvas.width-150,y:this.canvas.height/2-35,score:0,move:0,speed:10}}};function a(t){l.player.y=1.75*(t.clientY-l.player.height/.22)}var n={initialize:function(){this.canvas=document.querySelector("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.width=2e3,this.canvas.height=600,this.canvas.style.width="100%",this.canvas.style.height="auto",this.canvas.style.border="solid 1px #22222233",this.canvas.style.borderRadius="5px",this.canvas.style.boxShadow="0 0 10px #22222233",this.player=s.new.call(this,"left"),this.paddle=s.new.call(this,"right"),this.ball=i.new.call(this),this.paddle.speed=8,this.running=this.over=!1,this.turn=this.paddle,this.timer=this.round=0,this.color="#f5f5f5",l.menu(),l.listen()},endGameMenu:function(t){l.context.font="50px Courier New",l.context.fillStyle=this.color,l.context.fillRect(l.canvas.width/2-350,l.canvas.height/2-48,700,100),l.context.fillStyle="#222;",l.context.fillText(t,l.canvas.width/2,l.canvas.height/2+15),setTimeout((function(){l=Object.assign({},n),l.initialize()}),3e3)},menu:function(){l.draw(),this.context.font="50px Courier New",this.context.fillStyle=this.color,this.context.fillRect(this.canvas.width/2-350,this.canvas.height/2-48,700,100),this.context.fillStyle="#222;",this.context.fillText("Press any key to begin",this.canvas.width/2,this.canvas.height/2+15)},update:function(){this.over||(this.ball.x<=0&&l._resetTurn.call(this,this.paddle,this.player),this.ball.x>=this.canvas.width-this.ball.width&&l._resetTurn.call(this,this.player,this.paddle),this.ball.y<=0&&(this.ball.moveY=2),this.ball.y>=this.canvas.height-this.ball.height&&(this.ball.moveY=1),1===this.player.move?this.player.y-=this.player.speed:2===this.player.move&&(this.player.y+=this.player.speed),l._turnDelayIsOver.call(this)&&this.turn&&(this.ball.moveX=this.turn===this.player?3:4,this.ball.moveY=[1,2][Math.round(Math.random())],this.ball.y=Math.floor(Math.random()*this.canvas.height-200)+200,this.turn=null),this.player.y<=0?this.player.y=0:this.player.y>=this.canvas.height-this.player.height&&(this.player.y=this.canvas.height-this.player.height),1===this.ball.moveY?this.ball.y-=this.ball.speed/1.5:2===this.ball.moveY&&(this.ball.y+=this.ball.speed/1.5),3===this.ball.moveX?this.ball.x-=this.ball.speed:4===this.ball.moveX&&(this.ball.x+=this.ball.speed),this.paddle.y>this.ball.y-this.paddle.height/2&&(4===this.ball.moveX?this.paddle.y-=this.paddle.speed/1.5:this.paddle.y-=this.paddle.speed/4),this.paddle.y<this.ball.y-this.paddle.height/2&&(4===this.ball.moveX?this.paddle.y+=this.paddle.speed/1.5:this.paddle.y+=this.paddle.speed/4),this.paddle.y>=this.canvas.height-this.paddle.height?this.paddle.y=this.canvas.height-this.paddle.height:this.paddle.y<=0&&(this.paddle.y=0),this.ball.x-this.ball.width<=this.player.x&&this.ball.x>=this.player.x-this.player.width&&this.ball.y<=this.player.y+this.player.height&&this.ball.y+this.ball.height>=this.player.y&&(this.ball.x=this.player.x+this.ball.width,this.ball.moveX=4),this.ball.x-this.ball.width<=this.paddle.x&&this.ball.x>=this.paddle.x-this.paddle.width&&this.ball.y<=this.paddle.y+this.paddle.height&&this.ball.y+this.ball.height>=this.paddle.y&&(this.ball.x=this.paddle.x-this.ball.width,this.ball.moveX=3)),this.player.score===t[this.round]?t[this.round+1]?(this.color=this._generateRoundColor(),this.player.score=this.paddle.score=0,this.player.speed+=.5,this.paddle.speed+=1,this.ball.speed+=1,this.round+=1):(this.over=!0,setTimeout((function(){l.endGameMenu("Winner!")}),1e3)):this.paddle.score===t[this.round]&&(this.over=!0,setTimeout((function(){l.endGameMenu("Game Over!")}),1e3))},draw:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.color,this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle="#222;",this.context.fillStyle="#222",this.context.fillRect(this.player.x,this.player.y,this.player.width,this.player.height),this.context.fillRect(this.paddle.x,this.paddle.y,this.paddle.width,this.paddle.height),l._turnDelayIsOver.call(this)&&this.context.fillRect(this.ball.x,this.ball.y,this.ball.width,this.ball.height),this.context.beginPath(),this.context.setLineDash([7,15]),this.context.moveTo(this.canvas.width/2,this.canvas.height-140),this.context.lineTo(this.canvas.width/2,140),this.context.lineWidth=10,this.context.strokeStyle="#222;",this.context.stroke(),this.context.font="100px Courier New",this.context.textAlign="center",this.context.fillText(this.player.score.toString(),this.canvas.width/2-300,200),this.context.fillText(this.paddle.score.toString(),this.canvas.width/2+300,200),this.context.font="30px Courier New",this.context.fillText("Round "+(l.round+1),this.canvas.width/2,35),this.context.font="40px Courier",this.context.fillText(t[l.round]?t[l.round]:t[l.round-1],this.canvas.width/2,100)},loop:function(){l.update(),l.draw(),l.over||requestAnimationFrame(l.loop)},listen:function(){document.addEventListener("keydown",(function({keyCode:t}){13===t&&(l.running=!l.running,l.over=!l.running,document.body.style.cursor=l.running?"none":"default",l.running?(document.addEventListener("mousemove",a),window.requestAnimationFrame(l.loop)):(document.removeEventListener("mousemove",a),window.cancelAnimationFrame(l.loop)))}))},_resetTurn:function(t,e){this.ball=i.new.call(this,this.ball.speed),this.turn=e,this.timer=(new Date).getTime(),t.score++},_turnDelayIsOver:function(){return(new Date).getTime()-this.timer>=1e3},_generateRoundColor:function(){var t=e[Math.floor(Math.random()*e.length)];return t===this.color?l._generateRoundColor():t}};const l=Object.assign({},n),o=l,r={projects:[{title:"Tutorize",description:"AI-powered tutoring platform that personalizes video course content to learners.",technologies:["Vue.js","TailwindCSS","Vite","Vuex","JavaScript","GPT","Nodejs","Express","Knex","PostgreSQL","JWT","Vercel","Supabase"],image:"../src/img/tutorize_banner.png",url:"https://tutorize.vercel.app/"},{title:"PixelHaus",description:"Online renting platform for the niche of AI-generated wall art",technologies:["Vue.js","TailwindCSS","Vite","Vuex","JavaScript","GPT","Vercel"],image:"../src/img/pixelhaus.png",url:"https://pixelhaus.vercel.app"},{title:"PromptGarage",description:"Web-based GPT prompt enhancer, evaluator and builder.",technologies:["Vue.js","TailwindCSS","Vite","Vuex","JavaScript","GPT","Vercel"],image:"../src/img/promptgarage.png",url:"https://promptgarage.vercel.app"}],articles:[{title:"A Hitchhiker’s Guide to ChatGPT",subtitle:"UNDERSTANDING AI'S TALKATIVE COUSIN",description:"Have you ever wished you had a buddy who could straight up answer your deepest, most random questions at the right time, or make up a captivating story on the spot, maybe even simply keep you company during an insomnia-ridden night? Well, in comes ChatGPT, the charismatic AI that’s been taking the digital world by storm. It’s like the Siri of texting, but with the verve of Shakespeare and the knowledge of a trivia champion.",tags:[{src:"https://img.shields.io/badge/Artificial_Intelligence-FF6F00.svg?style=flat&logoColor=white",alt:"Artificial Intelligence"},{src:"https://img.shields.io/badge/GPT-1F1F1F.svg?style=flat",alt:"GPT"}],image:"../src/img/robot.webp",url:"https://medium.com/@dionisggr/a-hitchhikers-guide-to-chatgpt-19e5f4c0be6a?source=your_stories_page-------------------------------------"},{title:"The Art of Prompt Engineering",subtitle:"HOW TO TALK TO CHATGPT AND GET IT RIGHT EVERYTIME",description:"In the ever-evolving orchestra of our digital reality, OpenAI’s ChatGPT has truly stolen the limelight, painting the canvas of our daily lives with its whimsical and almost magical conversational capabilities. It’s answered our midnight existential queries, gracefully composed our overflowing inbox, and even narrated bedtime stories in the velvety voice of prose. Yet, the true secret sauce to unlocking its full potential doesn’t really lie in ‘how it works’, but rather in ‘how you work it’.",tags:[{src:"https://img.shields.io/badge/GPT-1F1F1F.svg?style=flat",alt:"GPT"},{src:"https://img.shields.io/badge/Prompt_Engineering-74B8B1.svg?style=flat",alt:"Prompt Engineering"}],image:"../src/img/art-of-prompt-engineering.jpeg",url:"https://medium.com/@dionisggr/the-art-of-prompt-engineering-aa07d8c787ca?source=your_stories_page-------------------------------------"},{title:"Building Apps with ChatGPT: A Practical Approach",subtitle:"OVERCOMING COMMON CHALLENGES",description:"As the world has shifted into hyperdrive with AI, large language models, and the emergence of what I like to call the ‘GPT phenomenon’, it’s become almost a Herculean task to keep up with the sheer pace of technological advancements. It feels a bit like trying to catch a runaway train — but this train’s on an infinite loop, and we’re chasing it on foot. Well, let’s change that narrative.",tags:[{src:"https://img.shields.io/badge/Technology%20Trends-8E44AD.svg?style=flat",alt:"Technology Trends"},{src:"https://img.shields.io/badge/Artificial%20Intelligence-FF6F00.svg?style=flat",alt:"Artificial Intelligence"}],image:"../src/img/building-apps-with-chatgpt.webp",url:"https://medium.com/design-bootcamp/building-apps-with-chatgpt-a-practical-approach-d8d76c8de239"},{title:"Navigating the AI Startup Hype",subtitle:"LESSONS FROM THE PAST AND A LOOK INTO THE FUTURE",description:"One of the biggest mistakes designers make when designing interfaces is that they often rush straight to the prototype (or drawing board), sketching out how the buttons and screens will look, without first understanding the task and, more importantly, their users better. Think about it, it’s like trying to solve a jigsaw puzzle without having seen the picture on the box, or knowing it’s context.",tags:[{src:"https://img.shields.io/badge/HCI-663399.svg?style=flat",alt:"HCI"},{src:"https://img.shields.io/badge/UX-4D4D4D.svg?style=flat",alt:"UX"},{src:"https://img.shields.io/badge/User--Centered%20Design-FFA500.svg?style=flat",alt:"User-Centered Design"}],image:"../src/img/navigating-ai-startup-hype.webp",url:"https://medium.com/latinxinai/navigating-the-ai-startup-hype-af3b3967a2c"}]},h=document.querySelector(".project-list"),c={all:r.projects,filters:[]},d={all:r.articles,filtered:r.articles,filters:[]},p={png:["cypress","passportjs","supabase","vuex"]};let u=!1;function g({target:t},e){let i="projects"===e?c.filters:d.filters,{innerText:s}=t;s=s.toLowerCase(),i.includes(s)?i=i.filter((t=>t!==s)):i.push(s),t.classList.toggle("active"),"projects"===e?(c.filters=i,function(){if(!c.filters.length)return y(c.all);const t=c.all.filter((t=>c.filters.every((e=>t.technologies.map((t=>t.toLowerCase())).includes(e)))));if(!t.length)return h.innerHTML='<p class="no-match">Sorry, no projects match that combination.</p>';t.sort(((t,e)=>{const i=t.technologies.filter((t=>c.filters.includes(t))).length;return e.technologies.filter((t=>c.filters.includes(t))).length-i})),y(t)}()):(d.filters=i,m())}function m(){const t=document.querySelector(".blog-list");t.innerHTML="",d.filters.length&&(d.filtered=d.all.filter((t=>{const e=t.tags.map((({alt:t})=>t.toLowerCase()));return d.filters.every((t=>e.includes(t.toLowerCase())))})).sort(((t,e)=>{const i=t.tags.filter((t=>d.filters.includes(t))).length;return e.tags.filter((t=>d.filters.includes(t))).length-i}))),d.filtered.forEach((({title:e,subtitle:i,description:s,tags:a,image:n,url:l},o)=>{const r=document.createElement("a"),h=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div"),p=document.createElement("h1"),u=document.createElement("h2"),g=document.createElement("p"),m=document.createElement("p"),y=document.createElement("a"),f=a.map((({src:t,alt:e})=>{const i=document.createElement("img");return i.alt=e,i.src=t,i.classList.add("badge"),i}));r.classList.add("blog-card"),r.href=l,r.target="_blank",h.classList.add("meta"),c.classList.add("photo"),d.classList.add("description"),m.classList.add("read-more"),p.textContent=e,u.textContent=i,g.textContent=s,y.href=l,y.textContent="Read More",c.style.backgroundImage=`url(${n})`,3%o==0&&r.classList.add("alt"),h.appendChild(c),m.appendChild(p),m.appendChild(u),m.appendChild(g),f.forEach((t=>m.appendChild(t))),m.appendChild(y),r.appendChild(h),r.appendChild(d),d.appendChild(p),d.appendChild(u),d.appendChild(g),d.appendChild(m),t.appendChild(r)}))}function y(t){h.innerHTML="",t.forEach((t=>{const e=document.createElement("div"),i=document.createElement("img"),s=document.createElement("h3"),a=document.createElement("p"),n=document.createElement("a"),l=(o=t.technologies,(r=document.createElement("div")).classList.add("technologies"),o.forEach((t=>{const e=t.toLowerCase().replace(".","").split(" ")[0],i=document.createElement("img"),s=p.png.includes(e)?"png":"svg";i.src=`../src/img/icons/${e}.${s}`,i.alt=`${t} logo`,i.title=t,i.classList.add("tech-badge"),r.appendChild(i)})),r);var o,r;const c=[i,s,a,l,n];e.classList.add("project",t.title.toLowerCase()),i.classList.add("project-image"),i.src=t.image,i.alt=t.title,s.innerText=t.title,a.innerText=t.description,n.textContent="View Project",n.href=t.url,n.target="_blank",t.comingSoon&&n.classList.add("coming-soon"),c.forEach((t=>e.appendChild(t))),h.appendChild(e)}))}function f(t,e,i,s,a){return Math.floor(i/29*(parseInt(e.substring(s,a),16)-parseInt(t.substring(s,a),16))+parseInt(t.substring(s,a),16))}!function(){const t=document.querySelector("nav.mobile"),e=document.querySelector(".menu-toggle"),i=e.querySelector(".bars"),s=e.querySelector(".menu-toggle .close");e.addEventListener("click",(()=>{t.classList.toggle("open"),s.classList.toggle("hide"),i.classList.toggle("hide")}))}(),document.querySelectorAll(".projects .filter-bar button").forEach((t=>{t.addEventListener("click",(t=>g(t,"projects")))})),document.querySelectorAll(".blog .filter-bar button").forEach((t=>{t.addEventListener("click",(t=>g(t,"articles")))})),function(){const t=document.querySelector(".survey"),e=t.querySelector("h4"),i=t.querySelector(".survey-content"),s=i.querySelector("form"),a=t.querySelector(".survey .close"),n=document.querySelector(".post-survey.error"),l=document.querySelector(".post-survey.success");[e,a].forEach((s=>s.addEventListener("click",(({target:s})=>{u&&(n.classList.add("hide"),l.classList.add("hide"),a.classList.add("hide"),e.innerText="Thanks for participating!"),(navigator?.userAgentData?.mobile||window.innerWidth<865)&&(t.classList.toggle("mobile"),function(t){const e=document.querySelector(".modal");if(e){const i=document.querySelector(".contact .container");return e.remove(),i.appendChild(t)}if(u)return;const i=document.createElement("div");i.className="modal",i.appendChild(t),document.body.appendChild(i),i.style.display="block"}(t)),!u&&t.contains(s)?(i.classList.toggle("hide"),a.classList.toggle("hide")):i.classList.contains("hide")||(i.classList.add("hide"),a.classList.add("hide"))})))),s.addEventListener("submit",(async t=>{t.preventDefault();const e=new FormData(s),a=new URLSearchParams;e.forEach(((t,e)=>{a.append(e,t)}));try{await fetch("https://docs.google.com/forms/d/e/1FAIpQLScZO7Uk0NfkvJi4t288cMPumhZzOtBnCZMgQVX2LKBxrNOEWQ/formResponse",{method:"POST",body:a})}catch(t){}finally{u=!0,i.classList.add("hide"),l.classList.remove("hide")}}))}(),function(){const t=document.querySelector("nav.mobile"),e=document.querySelector(".me"),i=document.querySelectorAll("nav a"),s=document.querySelector(".conversation-btn");[e,s,...i].forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault();const i=t.target.hash,s=document.querySelector(i),a=t.target!=e?s.offsetTop-70:0;window.scrollTo(0,a)}))})),t.addEventListener("click",(e=>{t.contains(e.target)&&t.classList.remove("open")}))}(),function(){const t=()=>{window.location.href="https://drive.google.com/file/d/1R5c_-jpCvC3_e1QuuR5Ph1NXcsrhzc77/view?usp=sharing"};window.addEventListener("keydown",(e=>{80===e.keyCode&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),t())})),window.onbeforeprint=t}(),[document.querySelector("main #top h2"),document.querySelector("main #top p")].forEach((t=>{const e=t.innerText,i=function(t){const e="#"+Math.floor(16777215*Math.random()).toString(16),i="#"+Math.floor(16777215*Math.random()).toString(16),s=[];for(let a=0;a<t;a++){const t=f(e,i,a,1,3),n=f(e,i,a,3,5),l=f(e,i,a,5,7);s.push(`rgb(${t}, ${n}, ${l})`)}return s}(e.length);t.innerHTML="",e.split("").forEach(((e,s)=>{const a=document.createElement("span");a.innerText=e,a.addEventListener("mouseover",(()=>{a.style.color=i[s]})),a.addEventListener("mouseleave",(()=>{setTimeout((()=>{a.style.color="#fff"}),100)})),t.appendChild(a)}))})),document.querySelector(".contact-form-inputs").addEventListener("submit",(t=>{t.preventDefault()})),y(c.all),m(),o.initialize()})()})();