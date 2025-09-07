(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d=(s,n,t)=>{const o=document.createElement("button");return o.classList.add("commonButton"),o.textContent=s,o.style.color=n,o.style.backgroundColor=t,o},q="/pinterestRep/assets/bellPic-B9akEdoH.png",_="/pinterestRep/assets/cloudPic-cSMtqKgf.png",P="/pinterestRep/assets/downloadButtonPic-Bc5ITx5J.png";function w(s,n){for(const t of s){const o=document.createElement("div");o.classList.add("container1");const e=document.createElement("div"),r=document.createElement("img");r.src=t.urls.regular,r.alt=t.alt_description,e.appendChild(r),o.appendChild(e);const a=document.createElement("div"),u=d(`❤️ ${t.likes}`,"black","white");u.classList.add("likesButton"),a.appendChild(u),e.appendChild(a);const c=document.createElement("div"),p=d("Visitar","white","");p.classList.add("visitButton"),p.addEventListener("click",()=>{window.open(t.links.html,"_blank")}),c.appendChild(p),e.appendChild(c);const i=document.createElement("div");i.classList.add("container2");const m=document.createElement("div");m.classList.add("userInfo");const v=document.createElement("img");v.src=t.user.profile_image.small;const y=document.createElement("h3");y.textContent=`${t.user.name}`,m.append(v,y),i.appendChild(m);const C=document.createElement("div"),h=document.createElement("h2");h.textContent=`${t.height} x ${t.width}`,h.classList.add("imageSize"),C.appendChild(h),i.appendChild(C);const b=document.createElement("div"),f=document.createElement("p");f.textContent=`${t.created_at}`,f.classList.add("imageDate"),b.appendChild(f),i.appendChild(b);const E=document.createElement("div"),l=document.createElement("img");l.src=P,l.classList.add("downloadButton"),l.addEventListener("click",()=>{window.open(t.urls.full,"_blank")}),E.appendChild(l),i.appendChild(E);const g=document.createElement("div");g.classList.add("card"),g.append(o,i),n.appendChild(g)}}const S=()=>`
        <main class="mainContainer"></main>   
    `,$=()=>S(),k="kn_PCdAKe5VlgTVdd7XWmP3F_8Y6E1386KHQr7LqeEo",B="https://api.unsplash.com";async function L(){try{const n=await fetch(`${B}/search/photos?query=trending&client_id=${k}`);if(!n.ok)throw new Error(`Error HTTP: ${n.status} - ${n.statusText}`);const t=await n.json(),o=document.querySelector(".mainContainer");t.results&&t.results.length>0?w(t.results,o):o.innerHTML=`
                <div class="no-results">
                    <p>📸 No hay imágenes trending disponibles</p>
                    <p>Intenta buscar algo específico.</p>
                </div>
            `}catch(s){console.error("Error al cargar imágenes trending:",s);const n=document.querySelector(".mainContainer");n.innerHTML=`
            <div class="error-message">
                <p>❌ Error al cargar las imágenes trending</p>
                <p>Revisa tu conexión e inténtalo de nuevo.</p>
                <button onclick="getHomeImages()" class="retry-button">
                    🔄 Reintentar
                </button>
            </div>
        `}}const I="/pinterestRep/assets/favicon-Bg2mBBz2.ico",T=()=>`
        <header>
            <nav class="navbar"></nav>

            <form>
                <button type="submit">🔎</button>
                <input type="search" placeholder="Buscar" class="inputValue">
            </form>

            <div class="setbar"></div>
        </header>
    `,H=()=>T(),x="kn_PCdAKe5VlgTVdd7XWmP3F_8Y6E1386KHQr7LqeEo",D="https://api.unsplash.com";async function M(){const s=document.querySelector(".inputValue").value;if(s)try{document.querySelector(".inputValue").value="";const n=document.querySelector(".mainContainer");n.innerHTML="";const o=await fetch(`${D}/search/photos?query=${s}&client_id=${x}`);if(!o.ok)throw new Error(`Error HTTP: ${o.status} - ${o.statusText}`);const e=await o.json();e.results&&e.results.length>0?w(e.results,n):n.innerHTML="<p>No se encontraron imágenes para esta búsqueda.</p>"}catch(n){console.error("Error al buscar imágenes:",n);const t=document.querySelector(".mainContainer");t.innerHTML=`
                <div class="error-message">
                    <p>❌ Error al cargar las imágenes</p>
                    <p>Por favor, inténtalo de nuevo más tarde.</p>
                </div>
            `}}function V(){const s=document.createElement("img");s.src=I,s.alt="Pinterest logo",s.addEventListener("click",()=>{const c=document.querySelector(".mainContainer");c.innerHTML="",L()}),document.querySelector(".navbar").appendChild(s);const n=d("Inicio","white","black");n.classList.add("navButtons"),n.addEventListener("click",()=>{window.location.href="https://es.pinterest.com/#shop:~:text=Lo%20nuevo-,Iniciar,-sesi%C3%B3n"}),document.querySelector(".navbar").appendChild(n);const t=d("Explorar","black","white");t.classList.add("navButtons"),t.addEventListener("click",()=>{window.location.href="https://es.pinterest.com/ideas/"}),document.querySelector(".navbar").appendChild(t);const o=d("Crear","black","white");o.classList.add("navButtons"),o.addEventListener("click",()=>{window.location.href="https://es.pinterest.com/_/_/create/"}),document.querySelector(".navbar").appendChild(o);const e=document.createElement("img");e.src=q,e.classList.add("headerIcons"),document.querySelector(".setbar").appendChild(e);const r=document.createElement("img");r.src=_,r.classList.add("headerIcons"),document.querySelector(".setbar").appendChild(r);const a=document.createElement("button");a.textContent="D",document.querySelector(".setbar").appendChild(a),document.querySelector("form").addEventListener("submit",c=>{c.preventDefault(),M()})}const A=()=>`
        <footer>
            <a href="https://es.pinterest.com/_/_/policy/terms-of-service">Condiciones de servicio</a>
            <a href="https://es.pinterest.com/_/_/policy/privacy-policy">Política de privacidad</a>
            <a href="https://es.pinterest.com/_/_/help">Ayuda</a>
            <a href="https://itunes.apple.com/us/app/pinterest/id429047995">Aplicación para iPhone</a>
            <a href="https://play.google.com/store/apps/details?id=com.pinterest">Aplicación para Android</a>
            <a href="https://www.pinterest.com/html_sitemap/pinners_a.html">Usuarios</a>
            <a href="https://www.pinterest.com/html_sitemap/boards_a.html">Colecciones</a>
            <a href="https://www.pinterest.com/html_sitemap/shopping_0.html">Compras</a>
            <a href="https://es.pinterest.com/ideas/">Explorar</a>
            <a href="https://policy.pinterest.com/non-user-notice">Aviso de no usuario</a>
        </footer>
    `,K=()=>A(),O=()=>{document.querySelector("#app").innerHTML=H()+$()+K(),V(),L()};O();
