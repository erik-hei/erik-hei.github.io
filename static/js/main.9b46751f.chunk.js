(this["webpackJsonperik-portfolio"]=this["webpackJsonperik-portfolio"]||[]).push([[0],{24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(9),c=a.n(l),i=(a(29),a(30),a(42));function o(e){return n.a.createElement("div",{className:"header"},n.a.createElement(i.a,{direction:"right",in:"true",timeout:{enter:1e3}},n.a.createElement("div",{className:"header-img",style:{backgroundImage:"url(../city.jpg)"}})),n.a.createElement(i.a,{direction:"left",in:"true",timeout:{enter:1e3}},n.a.createElement("div",{className:"header-text"},n.a.createElement("h1",{className:"fancy"},"Erik Heikkila"),n.a.createElement("h2",null,"Full Stack Web Developer"))))}var s=a(11);function m(e){return n.a.createElement(i.a,{direction:"up",in:"true",timeout:{enter:2e3}},n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement(s.HashLink,{to:"/#about"},n.a.createElement("li",null,"About")),n.a.createElement(s.HashLink,{to:"/#projects"},n.a.createElement("li",null,"Projects")),n.a.createElement(s.HashLink,{to:"/#skills"},n.a.createElement("li",null,"Skills")),n.a.createElement(s.HashLink,{to:"/#contact"},n.a.createElement("li",null,"Contact & Resume")))))}function u(e){return n.a.createElement("div",{className:"section about"},n.a.createElement("div",{style:{backgroundImage:"url(../erik.jpeg)"},className:"about-image"}),n.a.createElement("div",{className:"about-text"},n.a.createElement("h1",{className:"fancy"},"About"),n.a.createElement("p",null,"I am a Seattle-based full-stack developer with a strong technical industrial engineering background. My experience solving a diverse range of engineering problems and knowledge of human factors add to my statistical research background for a full stack mindset. Experience with Javascript, Python, React.js, SQL dialects, and Java.")))}function p(e){var t={backgroundImage:"url("+e.project.img+")"},a={backgroundImage:"url("+e.project.gif+")",backgroundPosition:"left"};return n.a.createElement("div",{className:"section"},n.a.createElement("div",{style:t,className:"proj-img"},n.a.createElement("div",{style:a,className:"proj-img"})),n.a.createElement("div",{className:"proj-text"},n.a.createElement("h2",{className:"fancy"},e.project.name),n.a.createElement("p",null,e.project.description),e.project.quote?n.a.createElement("blockquote",null,e.project.quote):"",n.a.createElement("p",null,n.a.createElement("strong",null,"Tech: "),n.a.createElement("span",{className:"tech"},e.project.tech)),n.a.createElement("div",{className:"proj-links"},n.a.createElement("a",{href:e.project.link,target:"_blank"},"View ",e.project.name," live"),n.a.createElement("span",{className:"divider"},"|"),n.a.createElement("a",{href:e.project.github,target:"_blank"},"Project GitHub"))))}function h(e){return n.a.createElement("div",{className:"section skills"},n.a.createElement("div",null,n.a.createElement("h1",{className:"fancy"},"Skills"),n.a.createElement("p",null,"Javascript, Java, Python, Node.js, Express, React, Flask, SQL (MySQL, PostGreSQL, Sequelize, SQLAlchemy), Mongo (Mongoose), Bootstrap, Heroku, Git, HTML, CSS, R")))}var d=a(7);function g(e){return n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement("li",{alt:"email"},n.a.createElement(d.e,{icon:d.b}),n.a.createElement("div",{className:"spacer"}),"erikjheikkila@gmail.com"),n.a.createElement("li",null,n.a.createElement(d.e,{icon:d.d}),n.a.createElement("div",{className:"spacer"}),n.a.createElement("a",{href:"https://www.linkedin.com/in/erik-hei/",target:"_blank"},"LinkedIn")),n.a.createElement("li",{alt:"github"},n.a.createElement(d.e,{icon:d.c}),n.a.createElement("div",{className:"spacer"}),"GitHub: ",n.a.createElement("div",{className:"spacer"}),n.a.createElement("a",{href:"https://github.com/erik-hei",target:"_blank"},"erik-hei")),n.a.createElement("li",null,n.a.createElement(d.e,{icon:d.a}),n.a.createElement("div",{className:"spacer"}),n.a.createElement("a",{href:"https://www.dropbox.com/s/z38saj60byygo59/Erik-Heikkila-Resume.pdf?dl=0",target:"_blank"},"Resume"))))}var E=function(e){var t=[{name:"Frogcraft",description:"You\u2019re a little frog in a big world, and the rest is up to you! In this 2D platformer, hop around and flick your tongue to manipulate terrain.",tech:"Javascript, CSS, HTML5 Canvas",link:"https://erik-hei.github.io/frogcraft/",github:"https://github.com/erik-hei/frogcraft",img:"./frogcraft.png",gif:"./frogcraft.gif"},{name:"NatureFinder",description:"Looking for wildlife in your area? NatureFinder allows you to search for any location worldwide and see animals that were spotted recently nearby.",tech:"Express.js, Node.js, PostGreSQL(Sequelize), EJS, HTML, CSS, Bootstrap, Mapbox",link:"http://naturefinder.herokuapp.com/",github:"https://github.com/erik-hei/nature-finder",img:"./naturefinder.png",gif:"./naturefinder.gif"},{name:"No Scroll Recipes",description:"Are you tired of scrolling past a food blogger\u2019s life story to get to their recipe? This app is for you. No Scroll is a micro-blogging platform for recipes that limits recipe descriptions to the length of a tweet.",tech:"MERN - MongoDB (Mongoose), Express.js, React, Node.js, CSS",link:"https://recipe-app-29.herokuapp.com/",github:"https://github.com/erik-hei/recipe-app-project3",img:"./noscroll.png",gif:"./noscroll.gif"},{name:"Lyrical",description:"Now you can create poetry using your favorite song lyrics. Make new poems and then search lyrics from Genius to add fresh phrases to your creations.",quote:"\u201cThis app sparks joy.\u201d - Sarah King, GA Instructor",tech:"Flask (Python), React, PostGreSQL (SQLALchemy), Material-UI, CSS",link:"https://erik-hei.github.io/lyrical/",github:"https://github.com/erik-hei/lyrical",img:"./lyrical.png",gif:"./lyrical.png"}];return n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement(o,{className:"header"}),n.a.createElement(m,null)),n.a.createElement("main",null,n.a.createElement("div",{id:"about"},n.a.createElement(u,null)),n.a.createElement("div",{id:"projects"},n.a.createElement("h1",{className:"fancy proj-title"},"Projects"),n.a.createElement(p,{project:t[3]}),n.a.createElement(p,{project:t[2]}),n.a.createElement(p,{project:t[1]}),n.a.createElement(p,{project:t[0]})),n.a.createElement("div",{id:"skills"},n.a.createElement(h,null))),n.a.createElement("div",{id:"contact"},n.a.createElement(g,null)))},f=a(13),k=a(8);var v=function(){return n.a.createElement(f.HashRouter,null,n.a.createElement(k.d,{exact:!0,path:"/",component:E}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.9b46751f.chunk.js.map