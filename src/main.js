import "./main.scss";
import { header, renderHeaderElements, searchImage } from "./components/header/header";
import corpus, { getHomeImages } from "./components/corpus/corpus";
import footer from "./components/footer/footer";




const render = () => {
    document.querySelector("#app").innerHTML = header() + corpus() + footer();
    renderHeaderElements();
    getHomeImages();
};

render();