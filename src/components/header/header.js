import "./_header.scss";
import { button } from "../../components/button/button";
import bellPic from "../../assets/bellPic.png";
import cloudPic from "../../assets/cloudPic.png";
import { getHomeImages } from "../corpus/corpus";
import logo from "../../assets/favicon.ico";
import { renderImages } from "../renderImages";




const template = () => {
    return `
        <header>
            <nav class="navbar"></nav>

            <form>
                <button type="submit">🔎</button>
                <input type="search" placeholder="Buscar" class="inputValue">
            </form>

            <div class="setbar"></div>
        </header>
    `
};

const header = () => {
    return template();
};




const accessKeyUnsplash = import.meta.env.VITE_ACCESS_KEY_UNSPLASH;
const apiUrl = "https://api.unsplash.com";




async function searchImage() {
    const enterValue = document.querySelector(".inputValue").value;
    
    if (enterValue) {
        try {
            document.querySelector(".inputValue").value = "";
            const containerCorpus = document.querySelector(".mainContainer");
            containerCorpus.innerHTML = "";
            
            const query = enterValue;
            const res = await fetch(`${apiUrl}/search/photos?query=${query}&client_id=${accessKeyUnsplash}`);
            
            // Verificar si la respuesta es exitosa
            if (!res.ok) {
                throw new Error(`Error HTTP: ${res.status} - ${res.statusText}`);
            }
            
            const data = await res.json();
            
            // Verificar si hay resultados
            if (data.results && data.results.length > 0) {
                renderImages(data.results, containerCorpus);
            } else {
                containerCorpus.innerHTML = "<p>No se encontraron imágenes para esta búsqueda.</p>";
            }
            
        } catch (error) {
            console.error("Error al buscar imágenes:", error);
            
            // Mostrar mensaje de error al usuario
            const containerCorpus = document.querySelector(".mainContainer");
            containerCorpus.innerHTML = `
                <div class="error-message">
                    <p>❌ Error al cargar las imágenes</p>
                    <p>Por favor, inténtalo de nuevo más tarde.</p>
                </div>
            `;
        }
    }
}

export { searchImage };




function renderHeaderElements() {

    const logoContainer = document.createElement("img");
    logoContainer.src = logo;
    logoContainer.alt = "Pinterest logo";
    logoContainer.addEventListener("click", () => {
        const containerCorpus = document.querySelector(".mainContainer");
        containerCorpus.innerHTML = "";
        getHomeImages();
    });
    document.querySelector(".navbar").appendChild(logoContainer);

    const buttonI = button("Inicio", "white", "black");
    buttonI.classList.add("navButtons");
    buttonI.addEventListener("click", () => {
        window.location.href = "https://es.pinterest.com/#shop:~:text=Lo%20nuevo-,Iniciar,-sesi%C3%B3n";
    })
    document.querySelector(".navbar").appendChild(buttonI);

    const buttonE = button("Explorar", "black", "white");
    buttonE.classList.add("navButtons");
    buttonE.addEventListener("click", () => {
        window.location.href = "https://es.pinterest.com/ideas/";
    })
    document.querySelector(".navbar").appendChild(buttonE);

    const buttonC = button("Crear", "black", "white");
    buttonC.classList.add("navButtons");
    buttonC.addEventListener("click", () => {
        window.location.href = "https://es.pinterest.com/_/_/create/";
    })
    document.querySelector(".navbar").appendChild(buttonC);

    const bellImg = document.createElement("img");
    bellImg.src = bellPic;
    bellImg.classList.add("headerIcons");
    document.querySelector(".setbar").appendChild(bellImg);

    const cloudImg = document.createElement("img");
    cloudImg.src = cloudPic;
    cloudImg.classList.add("headerIcons");
    document.querySelector(".setbar").appendChild(cloudImg);

    const profilePic = document.createElement("button");
    profilePic.textContent = "D";
    document.querySelector(".setbar").appendChild(profilePic);

    const searchForm = document.querySelector("form");
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        searchImage();
    });
}

export { header, renderHeaderElements };