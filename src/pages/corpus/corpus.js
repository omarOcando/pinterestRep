import "./_corpus.scss";
import downloadButtonPic from "../../assets/downloadButtonPic.png";
import { button } from "../../components/button/button";




const template = () => {
    return `
        <main class="mainContainer"></main>   
    `
};

const corpus = () => {
    return template();
};

export default corpus;




const accessKeyUnsplash = "kn_PCdAKe5VlgTVdd7XWmP3F_8Y6E1386KHQr7LqeEo";
const apiUrl = "https://api.unsplash.com";

async function getHomeImages() {
    const query = "trending";
    const res = await fetch(`${apiUrl}/search/photos?query=${query}&client_id=${accessKeyUnsplash}`);
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

export { getHomeImages };