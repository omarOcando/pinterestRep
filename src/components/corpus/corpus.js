import "./_corpus.scss";
import { renderImages } from "../renderImages";




const template = () => {
    return `
        <main class="mainContainer"></main>   
    `
};

const corpus = () => {
    return template();
};

export default corpus;




const accessKeyUnsplash = import.meta.env.VITE_ACCESS_KEY_UNSPLASH;
const apiUrl = "https://api.unsplash.com";




async function getHomeImages() {
    try {
        const query = "trending";
        const res = await fetch(`${apiUrl}/search/photos?query=${query}&client_id=${accessKeyUnsplash}`);
        
        // Verificar si la respuesta es exitosa
        if (!res.ok) {
            throw new Error(`Error HTTP: ${res.status} - ${res.statusText}`);
        }
        
        const data = await res.json();
        const totalContainer = document.querySelector(".mainContainer");
        
        // Verificar si hay resultados
        if (data.results && data.results.length > 0) {
            renderImages(data.results, totalContainer);
        } else {
            totalContainer.innerHTML = `
                <div class="no-results">
                    <p>📸 No hay imágenes trending disponibles</p>
                    <p>Intenta buscar algo específico.</p>
                </div>
            `;
        }
        
    } catch (error) {
        console.error("Error al cargar imágenes trending:", error);
        
        // Mostrar mensaje de error al usuario
        const totalContainer = document.querySelector(".mainContainer");
        totalContainer.innerHTML = `
            <div class="error-message">
                <p>❌ Error al cargar las imágenes trending</p>
                <p>Revisa tu conexión e inténtalo de nuevo.</p>
                <button onclick="getHomeImages()" class="retry-button">
                    🔄 Reintentar
                </button>
            </div>
        `;
    }
}

export { getHomeImages };