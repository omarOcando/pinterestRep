import "./_corpus.scss";
import downloadButtonPic from "../../assets/downloadButtonPic.png";
import { button } from "../../components/button/button";
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

    const query = "trending";
    const res = await fetch(`${apiUrl}/search/photos?query=${query}&client_id=${accessKeyUnsplash}`);
    const data = await res.json();
    
    const totalContainer = document.querySelector(".mainContainer");
    renderImages(data.results, totalContainer);
}

export { getHomeImages };