(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))e(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function r(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(l){if(l.ep)return;l.ep=!0;const a=r(l);fetch(l.href,a)}})();async function c(){const s="http://localhost:4000/story";try{const t=await fetch(s);if(!t.ok)throw new Error(`Response status: ${t.status}`);const r=await t.json();let e="";e=r.map(l=>`<div
      class="swiper-slide text-center font-[18px] flex justify-center items-center pr-1.5 pt-10 box-border"
      >
      <img
      src=${l.image}
      class="w-18.5 h-18.5 rounded-[50%] outline-[3px] outline-solid outline-purple-700 outline-offset-3"
      alt=""
      />
      <h2 class="w-[80%] text-[12px] line-clamp-[2px] pt-1.5 m-1 font-Yekan">
      ${l.title}
      </h2>
      </div>`),document.querySelector(".story-swiper .swiper-wrapper").innerHTML=e.join(" ")}catch(t){console.error(t.message)}}c();async function o(){let s="http://localhost:4000/slider";try{let t=await fetch(s);if(!t.ok)throw new Error(`Response status:${t.status}`);let r=await t.json(),e=" ";e=r.map(l=>` <div class="swiper-slide"> <div class="bg-[#444] flex justify-center items-center">
                <img src=${l} alt="" class="w-full h-full block object-cover"/>
                </div></div>`),document.querySelector(".swiper-widget .swiper-wrapper").innerHTML=e.join(" ")}catch(t){console.log(t.message)}}o();async function d(){let s="http://localhost:4000/wonderfull";try{let t=await fetch(s);if(!t.ok)throw new Error(`response status:${t.status}`);let r=await t.json();const e=`<div class="swiper-slide text-center font-[18px] flex justify-center items-center">
                <img src="./images/wonderfull/wonder.svg" class="item-image-1 w-22 h-22 block m-auto" alt="">
                <div class="clock w-full inline-flex justify-center items-center gap-x-1.5 mt-4 whitespace-nowrap" dir="ltr">
                  <span class="saat font-number p-px text-[14px] bg-white rounded-md w-6 inline-flex items-center justify-center">07</span>
                  <span class="text-white">:</span>
                  <span class="daghighe font-number p-px text-[14px] bg-white rounded-md w-6 inline-flex items-center justify-center">56</span>
                  <span class="text-white">:</span>
                  <span class="seconds font-number p-px text-[14px] bg-white rounded-md w-6 inline-flex items-center justify-center">42</span>
                </div>
                <img src="./images/wonderfull/percent.svg" class="item-image-2 w-20 h-20 block m-auto" alt="">
                <a href="#" class="font-Yekan block w-full h-full text-[12px] text-white mt-2">مشاهده همه ></a>
            </div>`,l=`<div class="swiper-slide text-center font-[18px] flex justify-center items-center ">
    <div class="bg-white w-50 h-60 pt-14">
              <div class=""> <div class="rounded-full  border-2 w-15 h-15 text-[#19BFD3] mr-16 flex"><img class="text-blue-500 w-8 h-8 m-auto"  src="../images/wonderfull/arrow.svg"></div>
              </div>
              <div>
              <p class="mt-5 text-dark-400 no-wrap w-30 mr-9">مشاهده همه<p/>
              </div>
              </div>
              </div>`;let a=r.map((i,n)=>`
      <div class="swiper-slide">
        <div class="swiper-slide-product w-50 h-60 bg-white ${n===0?"rounded-r-xl":null} ${n===r.length-1?"rounded-l-xl":null} p-2 flex flex-col">
          <img 
            src="${i.image}" 
            class="w-[132px] h-[132px] mx-auto object-contain" 
            alt="${i.title||""}"
          />
          <p class="font-Yekan text-xs text-gray-600 line-clamp-2 text-right mt-2 px-1">
            ${i.title||""}
          </p>
          
          <div class="price font-number mt-auto flex flex-row-reverse justify-between items-end">
            <div class="price-real flex flex-row-reverse items-center gap-1 text-base font-medium text-gray-800">
              <img src="./images/wonderfull/toman.svg" class="w-4 h-4" alt="">
              ${i["price-real"]}
            </div>
            <div class="price-discount bg-[#d12d4c] text-white text-sm px-3 py-0.5 rounded-2xl">
              ${i["price-discount"]}
            </div>
          </div>

          <div class="real font-number text-xs text-gray-400 line-through text-left mt-1">
            ${i.real||""}
          </div>
        </div>
      </div>
    `);a.unshift(e),a.push(l),document.querySelector(".swiper-wonderfull .swiper-wrapper").innerHTML=a.join(" ")}catch(t){console.error(t.message)}}d();async function p(){let s=" ";try{s=(await(await fetch("http://localhost:4000/gallery")).json()).map(e=>`
          <img src=${e} class="w-84.5 h-60.5 rounded-2xl" alt="">`),document.querySelector(".gallery-center").innerHTML=s.join(" ")}catch(t){console.log(t.message)}}p();async function u(){let s=" ";try{s=(await(await fetch("http://localhost:4000/gallery-2")).json()).map(e=>` <img src=${e} class="w-84.5 h-60.5 rounded-2xl" alt=""> `),document.querySelector(".gallery-2-center").innerHTML=s.join(" ")}catch(t){console.log(t.message)}}u();async function f(){let s=" ";try{s=(await(await fetch("http://localhost:4000/floor-tag")).json()).map(e=>`<img src="${e}" class="w-full rounded-2xl" alt="">`),document.querySelector(".floor-1-item").innerHTML=s.join(" ")}catch(t){console.log(t.message)}}f();async function m(){let s=" ";try{let r=await(await fetch("http://localhost:4000/device")).json();for(let e=0;e<r.length;e++)e!=r.length-1?s+=`<div class="device-center-item w-[25%] h-full border-l border-gray-500">
    <div class="device-center-item-top w-full">
        <h3 class="font-Yekan text-lg w-fit mr-2.5 mb-2.5">${r[e].title}</h3>
        <p class="font-Yekan text-sm text-gray-500 w-fit mr-2.5">براساس سلیقه شما</p>
    </div>
    <div class="device-center-item-bottom text-center p-2.5 font-Yekan mr-3">
       
    </div>
    <div class="device-center-item-center w-full flex flex-wrap mt-2.5 pr-6">
        <div class="w-[49%] flex justify-center border-l">
            <img src="${r[e].image1}" class="w-32.5 h-32.5" alt="" />
        </div>
        <div class="w-[49%] flex justify-center"><img src="${r[e].image2}" class="w-32.5 h-32.5" alt="" /></div>
        <div class="w-[49%] flex justify-center border-l border-t">
            <img src="${r[e].image3}" class="w-32.5 h-32.5" alt="" />
        </div>
        <div class="w-[49] flex justify-center border-t"><img src="${r[e].image4}" class="w-32.5 h-32.5 " alt="" /></div>
    </div>
     <a href="#" class="text-[#43cfda] text-sm mr-44">مشاهده ></a>
</div>
 `:s+=`<div class="device-center-item w-[25%] h-full border-gray-500">
    <div class="device-center-item-top w-full">
        <h3 class="font-Yekan text-lg w-fit mr-2.5 mb-2.5">${r[e].title}</h3>
        <p class="font-Yekan text-sm text-gray-500 w-fit mr-2.5">براساس سلیقه شما</p>
    </div>
    <div class="device-center-item-bottom text-center p-2.5 font-Yekan mr-3">
       
    </div>
    <div class="device-center-item-center w-full flex flex-wrap mt-2.5 pr-6">
        <div class="w-[49%] flex justify-center border-l">
            <img src="${r[e].image1}" class="w-32.5 h-32.5" alt="" />
        </div>
        <div class="w-[49%] flex justify-center"><img src="${r[e].image2}" class="w-32.5 h-32.5" alt="" /></div>
        <div class="w-[49%] flex justify-center border-l border-t">
            <img src="${r[e].image3}" class="w-32.5 h-32.5" alt="" />
        </div>
        <div class="w-[49] flex justify-center border-t"><img src="${r[e].image4}" class="w-32.5 h-32.5 " alt="" /></div>
    </div>
     <a href="#" class="text-[#43cfda] text-sm mr-44">مشاهده ></a>
</div>
 `;document.querySelector(".device-center").innerHTML=s}catch(t){console.log(t.message)}}m();async function w(){try{let r=` <img src=${(await(await fetch("http://localhost:4000/task")).json()).image} class="rounded-2xl" alt=""> `;document.querySelector(".task-center").innerHTML=r}catch(s){console.log(s.message)}}w();async function g(){try{let t=await(await fetch("http://localhost:4000/best-seller")).json(),r="";for(let e=0;e<t.length;e+=3)r+=`<div class="swiper-slide ${e==0?"text-center text-lg flex justify-center items-center":""} ">
                <div class="swiper-slide-item w-full h-[25%] flex items-center gap-x-0.5"><img src=${t[e].image} class="w-21 h-21 mr-2.5" alt="">
                  <span class="font-number text-5xl text-blue-300">${e+1}</span>
                   <p class="text-sm font-Yekan line-clamp-2 overflow-hidden ">${t[e].title}</p> 
                </div>
                <div class="swiper-slide-item w-full h-[33%] flex items-center gap-x-0.5">
                   <img src=${t[e+1].image} class="w-21 h-21 mr-2.5" alt=""> 
                  <span class="font-number text-5xl text-blue-300">${e+2}</span>
                   <p class="text-sm font-Yekan line-clamp-2 overflow-hidden">${t[e+1].title}</p> 
                </div>
                <div class="swiper-slide-item w-full h-[33%] flex items-center gap-x-0.5">
                   <img src=${t[e+2].image} class="w-21 h-21 mr-2.5" alt=""> 
                  <span class="font-number text-5xl text-blue-300">${e+3}</span>
                   <p class="text-sm font-Yekan line-clamp-2 overflow-hidden ">${t[e+2].title}</p> 
                </div>
              </div>`;document.querySelector(".swiper-hottest .swiper-wrapper").innerHTML=r}catch(s){console.log(s.message)}}async function x(){await g(),new Swiper(".swiper-hottest",{slidesPerView:3,spaceBetween:1,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}x();async function v(){try{let r=(await(await fetch("http://localhost:4000/review")).json()).map(e=>`<div class="magazine w-full h-full rounded-xl border border-gray-500 ">
          <img src=${e.image} class="rounded-t-lg rounded-xl border border-gray-500" alt="">
          <p class="font-Yekan text-xs mt-3 mr-3"> ${e.text}</p>
          </div>`);document.querySelector(".review-centere").innerHTML=r.join(" ")}catch(s){console.log(s.message)}}v();async function h(){let s=" ";try{s=(await(await fetch("http://localhost:4000/devicee")).json()).map(e=>`<div class="device-center-item w-[25%] h-full border-l border-gray-500">
    <div class="device-center-item-top w-full">
        <h3 class="font-Yekan text-lg w-fit mr-2.5 mb-2.5">${e.title}</h3>
        <p class="font-Yekan text-sm text-gray-500 w-fit mr-2.5">براساس سلیقه شما</p>
    </div>
    <div class="device-center-item-bottom text-center p-2.5 font-Yekan mr-3">
        <a href="#" class="text-[#43cfda] text-sm">مشاهده ></a>
    </div>
    <div class="device-center-item-center w-full flex flex-wrap mt-2.5 pr-6">
        <div class="w-[49%] flex justify-center border-l">
            <img src="${e.image1}" class="w-32.5 h-32.5" alt="" />
        </div>
        <div class="w-[49%] flex justify-center"><img src="${e.image2}" class="w-32.5 h-32.5" alt="" /></div>
        <div class="w-[49%] flex justify-center border-l border-t">
            <img src="${e.image3}" class="w-32.5 h-32.5" alt="" />
        </div>
        <div class="w-[49] flex justify-center border-t"><img src="${e.image4}" class="w-32.5 h-32.5" alt="" /></div>
    </div>
</div>
`),document.querySelector(".device-between").innerHTML=s.join("   ")}catch(t){console.log(t.message)}}h();async function y(){let s=" ";try{s=(await(await fetch("http://localhost:4000/chosen")).json()).map(e=>`<div class="item w-60 h-60.5 border-e border-b">
              <img src=${e.image} class="w-37.5 h-37.5 mt-3 mr-8" alt="">
              <div class="number w-full flex flex-row-reverse justify-between mt-1">
                <div class="real flex font-number flex-row-reverse items-center text-lg pl-1">
                  <img src="./images/wonderfull/toman.svg" alt="">${e.price}</div>
                <div class="discount font-number text-lg bg-[#d12d4c] mr-2.5  rounded-xl flex items-center text-white">${e.discount}</div>
              </div>
              <div class="worth font-number text-sm w-[80%] text-left mr-6 text-gray-500 line-through">${e.worth}</div>
            </div>`),document.querySelector(".chosen-products").innerHTML=s.join(" ")}catch(t){console.log(t.message)}}y();function b(){new Swiper(".mySwiper",{spaceBetween:0,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextE1:".swiper-button-next",prevE1:".swiper-button-prev"}})}b();async function $(){try{let r=(await(await fetch("http://localhost:4000/brands")).json()).map(e=>`<div class="swiper-slide"><img src=${e} class="text-center text-lg " alt="">
              </div>`);document.querySelector(".mybrands .swiper-wrapper").innerHTML=r.join(" ")}catch(s){console.log(s.message)}}$();function j(){new Swiper(".mybrands",{slidesPerView:9,spaceBetween:1,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextE1:".swiper-button-next",prevE1:".swiper-button-prev"}})}j();async function k(){try{let t=await(await fetch("http://localhost:4000/best-seller")).json(),r="";for(let e=0;e<t.length;e+=3)r+=`<div class="swiper-slide ${e==0?"text-center text-lg flex justify-center items-center":""} ">
                <div class="swiper-slide-item w-full h-[25%] flex items-center gap-x-0.5"><img src=${t[e].image} class="w-21 h-21 mr-2.5" alt="">
                  <span class="font-number text-5xl text-blue-300">${e+1}</span>
                   <p class="text-sm font-Yekan line-clamp-2 overflow-hidden ">${t[e].title}</p> 
                </div>
                <div class="swiper-slide-item w-full h-[33%] flex items-center gap-x-0.5">
                   <img src=${t[e+1].image} class="w-21 h-21 mr-2.5" alt=""> 
                  <span class="font-number text-5xl text-blue-300">${e+2}</span>
                   <p class="text-sm font-Yekan line-clamp-2 overflow-hidden">${t[e+1].title}</p> 
                </div>
                <div class="swiper-slide-item w-full h-[33%] flex items-center gap-x-0.5">
                   <img src=${t[e+2].image} class="w-21 h-21 mr-2.5" alt=""> 
                  <span class="font-number text-5xl text-blue-300">${e+3}</span>
                   <p class="text-sm font-Yekan line-clamp-2 overflow-hidden ">${t[e+2].title}</p> 
                </div>
              </div>`;document.querySelector(".myBest-seller .swiper-wrapper").innerHTML=r}catch(s){console.log(s.message)}}async function S(){await k(),new Swiper(".myBest-seller",{slidesPerView:3,spaceBetween:1,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}S();function L(){new Swiper(".story-swiper",{slidesPerView:12.5,spaceBetween:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}L();function Y(){new Swiper(".swiper-widget",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}Y();function E(){new Swiper(".swiper-wonderfull",{slidesPerView:7,navigation:{nextEl:".wonderfull-next",prevEl:".wonderfull-prev"}})}E();
