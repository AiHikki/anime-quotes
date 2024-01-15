import{i as y,a as x}from"./assets/vendor-7af2edd1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();y.settings({timeout:3e3,icon:"material-icons",transitionIn:"bounceInLeft",transitionOut:"flipOutX",position:"topRight",backgroundColor:"red",messageColor:"#fff",messageSize:"16",progressBarColor:"#fff",rtl:!0,pauseOnHover:!1});function d(t){y.show({message:t})}const f=x.create({baseURL:"https://animechan.xyz/api/"});async function q(){try{return(await f.get("quotes")).data}catch(t){d("Oops, something has gone wrong"),console.error(t)}}async function L(t){try{return(await f.get("quotes/anime",{params:t})).data}catch(e){d("Oops! We couldn't find any results for your search"),console.log(e)}}async function O(t){try{return(await f.get("quotes/character",{params:t})).data}catch(e){d("Oops! We couldn't find any results for your search"),console.log(e)}}const b=document.querySelector(".js-quotes"),g=document.querySelector(".js-form"),n=document.querySelector("canvas");function l(t){const e=t.reduce((o,{anime:r,character:i,quote:s})=>o+`
      <article class="scroll-cards__item" aria-label="Wie - 1">
        <h2 class="anime-title">${r}</h2>
        <p class="quote">"${s}"</p>
        <p class="anime-character">${i}</p>
      </article>
  `,"");b.innerHTML=e}async function v(t,e){let o;t==="character"?(o=await O({name:e}),l(o)):t==="title"&&(o=await L({title:e}),l(o))}g.addEventListener("submit",M);function M(t){t.preventDefault();const e=new FormData(t.currentTarget),o=e.get("searchOption"),r=e.get("searchInput").trim();v(o,r),g.reset()}n.width=innerWidth;n.height=innerHeight;const h=n.getContext("2d"),m=["#BB0000","#666666","#DDDEC6","#453831","#000000"];let c={x:n.width/2,y:n.height/2};window.addEventListener("resize",()=>{n.width=innerWidth,n.height=innerHeight,p()});window.addEventListener("mousemove",t=>{c.x=t.clientX,c.y=t.clientY});class E{constructor(e,o,r,i,s,a){this.x=e,this.y=o,this.width=s,this.height=s,this.minWidth=s,this.dx=r,this.dy=i,this.color=a}draw(){h.beginPath(),h.fillRect(this.x,this.y,this.width,this.height),h.fillStyle=this.color,h.fill()}update(){(this.x>n.width-50||this.x<0)&&(this.dx=-this.dx),(this.y>n.height-50||this.y<0)&&(this.dy=-this.dy),this.x+=this.dx,this.y+=this.dy,c.x-this.x<50&&c.x-this.x>-50&&c.y-this.y<50&&c.y-this.y>-50?this.width<50&&(this.width+=2,this.height+=2):this.width>this.minWidth&&(this.width-=1,this.height-=1),this.draw()}}let u=[];p();w();function p(){u=[];for(let t=0;t<1e3;t++){const e=Math.random()*4+2,o=Math.random()*n.width-e,r=Math.random()*n.height-e,i=Math.random()>.5?1:-1,s=Math.random()>.5?1:-1,a=m[Math.floor(Math.random()*m.length)];u.push(new E(o,r,i,s,e,a))}}function w(){requestAnimationFrame(w),h.clearRect(0,0,n.width,n.height),u.forEach(t=>t.update())}async function R(){const t=await q();l(t)}R();
//# sourceMappingURL=commonHelpers.js.map
