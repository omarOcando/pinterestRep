import "./main.scss";
import { header, renderHeaderElements, searchImage } from "./pages/header/header";
import corpus, { getHomeImages } from "./pages/corpus/corpus";
import footer from "./pages/footer/footer";




const render = () => {
    document.querySelector("#app").innerHTML = header() + corpus() + footer();
    renderHeaderElements();
    getHomeImages();

    setTimeout(() => {
        const testMain = document.querySelector(".mainContainer");
        if (testMain) {
            searchImage();
        } else {
            console.warn("❌ .mainContainer aún no existe");
        }
    }, 0);
};

render();