(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))b(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&b(d)}).observe(document,{childList:!0,subtree:!0});function v(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function b(n){if(n.ep)return;n.ep=!0;const r=v(n);fetch(n.href,r)}})();const E=`<div class="output">\r
    <div class="prev-op" data-prev-op></div>\r
    <div class="current-op" data-current-op></div>\r
</div>\r
<button class="operator" data-delete>CE</button>\r
<button class="operator" data-delete-all>C</button>\r
<button class="operator" data-delete-one>&#x232B;</button>\r
<button class="operator" data-operation>&#247;</button>\r
<button class="number" data-number>7</button>\r
<button class="number" data-number>8</button>\r
<button class="number" data-number>9</button>\r
<button class="operator" data-operation>&#215;</button>\r
<button class="number" data-number>4</button>\r
<button class="number" data-number>5</button>\r
<button class="number" data-number>6</button>\r
<button class="operator" data-operation>&#8722;</button>\r
<button class="number" data-number>1</button>\r
<button class="number" data-number>2</button>\r
<button class="number" data-number>3</button>\r
<button class="operator" data-operation>&#43;</button>\r
<button class="number" data-plus-minus>+/-</button>\r
<button class="number" data-number>0</button>\r
<button class="number" data-number>.</button>\r
<button class="equal" data-equal>&#61;</button>`;let f;const x=s=>{f=document.createElement("div"),f.innerHTML=E,f.className="calc-template",s.append(f)},B=()=>{const s=document.querySelectorAll("[data-number]"),i=document.querySelectorAll("[data-operation]"),v=document.querySelector("[data-equal]"),b=document.querySelector("[data-plus-minus]"),n=document.querySelector("[data-delete-all]"),r=document.querySelector("[data-delete]"),d=document.querySelector("[data-delete-one]"),y=document.querySelector("[data-prev-op]"),p=document.querySelector("[data-current-op]");let t="",u="",c;const S=()=>{t="",u="",c=void 0,l()},q=()=>{t="",l()},M=()=>{t=t.toString().slice(0,-1),l()},N=()=>{Math.sign(t)===1?(t=-Math.abs(t),p.innerHTML=-Math.abs(t)):(t=Math.abs(t),p.innerHTML=Math.abs(t))},O=e=>{e==="."&&p.innerHTML.includes(".")||(t=t.toString()+e.toString())},T=e=>{t!==""&&(u!==""&&g(),c=e,u=t,t="")},g=()=>{let e;const o=parseFloat(u),a=parseFloat(t);if(!(isNaN(o)||isNaN(a))){switch(c){case"+":e=o+a;break;case"−":e=o-a;break;case"×":e=o*a;break;case"÷":e=o/a;break;default:return}t=e,u="",c=void 0}},h=e=>{const o=e.toString(),a=parseFloat(o.split(".")[0]),L=o.split(".")[1];let m;return isNaN(a)?m="":m=a.toLocaleString("es",{maximumFractionDigits:0}),L!=null?`${m}.${L}`:m},l=()=>{p.innerText=h(t),c!=null?y.innerText=`${h(u)} ${c}`:y.innerText=""};n.addEventListener("click",S),r.addEventListener("click",q),d.addEventListener("click",M),b.addEventListener("click",N),s.forEach(e=>{e.addEventListener("click",()=>{O(e.innerText),l()})}),i.forEach(e=>{e.addEventListener("click",()=>{T(e.innerText),l()})}),v.addEventListener("click",()=>{g(),l()})},A=s=>{x(s),B()};document.querySelector("#app").innerHTML=`
  <h1>Calculator App</h1>
  <div class="calc-container"></div>
`;const k=document.querySelector(".calc-container");A(k);
