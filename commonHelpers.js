import{i,S as c}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="22615360-5cbe46b430b53ed17aa097d2d",u="https://pixabay.com/api/",f=new URLSearchParams({key:d,image_type:"photo",orientation:"horizontal",safesearch:!0});function y(o){return fetch(`${u}?${f}&q=${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const l=document.querySelector(".gallery");function h(o){let s="";o.forEach(t=>{s+=`
    <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
            <img
                class="gallery-image"
                src="${t.webformatURL}"
                data-source="${t.largeImageURL}"
                alt="${t.tags}"
            />
        </a>
        <div class="stats">
          <div>Likes<span>${t.likes}</span></div>
          <div>Views<span>${t.views}</span></div>
          <div>Comments<span>${t.comments}</span></div>
          <div>Downloads<span>${t.downloads}</span></div>
        </div>
    </li>
  `}),l.innerHTML=s}function p(){l.innerHTML=""}i.settings({position:"topRight",progressBar:!1,messageColor:"#FFFFFF",icon:"",close:!1});document.addEventListener("DOMContentLoaded",()=>{const o=new c(".gallery a",{captionsData:"alt",captionDelay:250}),s=document.querySelector(".btn"),t=document.querySelector(".search"),n=document.querySelector(".loader"),e="Sorry, there are no images matching your search query. Please try again!";s.addEventListener("click",()=>{const r=t.value.trim();r!==""&&(p(),n.style.display="block",y(r).then(a=>{if(a.hits.length===0)throw new Error(e);n.style.display="none",h(a.hits),o.refresh(),t.value=""}).catch(()=>{n.style.display="none",t.value="",i.error({message:e})}))})});
//# sourceMappingURL=commonHelpers.js.map
