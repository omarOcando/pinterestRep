import "./_header.scss";
import { button } from "../../components/button/button";
import bellPic from "../../assets/bellPic.png";
import cloudPic from "../../assets/cloudPic.png";
import downloadButtonPic from "../../assets/downloadButtonPic.png";
import { getHomeImages } from "../corpus/corpus";




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




const accessKeyUnsplash = "kn_PCdAKe5VlgTVdd7XWmP3F_8Y6E1386KHQr7LqeEo";
const apiUrl = "https://api.unsplash.com";




async function searchImage() {
    const enterValue = document.querySelector(".inputValue").value;

    if (enterValue) {
        document.querySelector(".inputValue").value = "";
        
        const containerCorpus = document.querySelector(".mainContainer");
        containerCorpus.innerHTML = "";

        const query = enterValue;
        const res = await fetch(`${apiUrl}/search/photos?query=${query}&per_page=10&client_id=${accessKeyUnsplash}`);
        const data = await res.json();
    
        const selectedImages = [
            {
                url: data.results[0].urls.regular,
                alt: data.results[0].alt_description,
                created: data.results[0].created_at,
                height: data.results[0].height,
                width: data.results[0].width,
                likes: data.results[0].likes
            },
            {
                url: data.results[1].urls.regular,
                alt: data.results[1].alt_description,
                created: data.results[1].created_at,
                height: data.results[1].height,
                width: data.results[1].width,
                likes: data.results[1].likes
            },
            {
                url: data.results[2].urls.regular,
                alt: data.results[2].alt_description,
                created: data.results[2].created_at,
                height: data.results[2].height,
                width: data.results[2].width,
                likes: data.results[2].likes
            },
            {
                url: data.results[3].urls.regular,
                alt: data.results[3].alt_description,
                created: data.results[3].created_at,
                height: data.results[3].height,
                width: data.results[3].width,
                likes: data.results[3].likes
            },
            {
                url: data.results[4].urls.regular,
                alt: data.results[4].alt_description,
                created: data.results[4].created_at,
                height: data.results[4].height,
                width: data.results[4].width,
                likes: data.results[4].likes
            },
            {
                url: data.results[5].urls.regular,
                alt: data.results[5].alt_description,
                created: data.results[5].created_at,
                height: data.results[5].height,
                width: data.results[5].width,
                likes: data.results[5].likes
            },
            {
                url: data.results[6].urls.regular,
                alt: data.results[6].alt_description,
                created: data.results[6].created_at,
                height: data.results[6].height,
                width: data.results[6].width,
                likes: data.results[6].likes
            },
            {
                url: data.results[7].urls.regular,
                alt: data.results[7].alt_description,
                created: data.results[7].created_at,
                height: data.results[7].height,
                width: data.results[7].width,
                likes: data.results[7].likes
            },
            {
                url: data.results[8].urls.regular,
                alt: data.results[8].alt_description,
                created: data.results[8].created_at,
                height: data.results[8].height,
                width: data.results[8].width,
                likes: data.results[8].likes
            },
            {
                url: data.results[9].urls.regular,
                alt: data.results[9].alt_description,
                created: data.results[9].created_at,
                height: data.results[9].height,
                width: data.results[9].width,
                likes: data.results[9].likes
            }
        ];
    
        for (const selectedImage of selectedImages) {
    
            const div1 = document.createElement("div");
            div1.classList.add("container1");
    
            const imageDiv = document.createElement("div");
            const imageContainer = document.createElement("img");
            imageContainer.src = selectedImage.url;
            imageContainer.alt = selectedImage.alt;
            imageDiv.appendChild(imageContainer);
            div1.appendChild(imageDiv);
    
            const button1Div = document.createElement("div");
            const button1 = document.createElement("button");
            button1.textContent = `❤️ ${selectedImage.likes}`;
            button1.classList.add("likesButton");
            button1Div.appendChild(button1);
            imageDiv.appendChild(button1Div);
    
            const button2Div = document.createElement("div");
    
            const button2 = button("Visitar", "white", "red");
            button2.classList.add("visitButton");
            button2.addEventListener("click", () => {
                window.open(selectedImage.url, "_blank");
            });
            button2Div.appendChild(button2);
            imageDiv.appendChild(button2Div);
    
            const div2 = document.createElement("div");
            div2.classList.add("container2");
    
            const text1Div = document.createElement("div");
            const text1 = document.createElement("h3");
            text1.textContent = `${selectedImage.height} x ${selectedImage.width}`;
            text1.classList.add("imageSize");
            text1Div.appendChild(text1);
            div2.appendChild(text1Div);
    
            const text2Div = document.createElement("div");
            const text2 = document.createElement("p");
            text2.textContent = selectedImage.created;
            text2.classList.add("imageDate");
            text2Div.appendChild(text2);
            div2.appendChild(text2Div);
    
            const button3Div = document.createElement("div");
            const button3 = document.createElement("img");
            button3.src = downloadButtonPic;
            button3.classList.add("donwloadButton");
            button3.addEventListener("click", () => {
                window.open(selectedImage.url, "_blank");
            });
            button3Div.appendChild(button3);
            div2.appendChild(button3Div);
    
            const divCard = document.createElement("div");
            divCard.classList.add("card");
            divCard.append(div1, div2);
    
            const totalContainer = document.querySelector(".mainContainer");
            totalContainer.appendChild(divCard);
        }
    }
}

export { searchImage };




function renderHeaderElements() {

    async function getPinterestLogo() {
        const query = "Rounded Pinterest logo";
        const res = await fetch(`${apiUrl}/search/photos?query=${query}&per_page=1&client_id=${accessKeyUnsplash}`);
        const data = await res.json();
        const logo = data.results[0];
    
        const logoContainer = document.createElement("img");
        logoContainer.src = logo.urls.thumb;
        logoContainer.alt = "Pinterest logo";
        logoContainer.addEventListener("click", () => {
            const containerCorpus = document.querySelector(".mainContainer");
            containerCorpus.innerHTML = "";
            getHomeImages();
        });
        document.querySelector(".navbar").appendChild(logoContainer);
    }

    getPinterestLogo().then(() => {
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
    });

    const searchForm = document.querySelector("form");
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        searchImage();
    });
}

export { header, renderHeaderElements };