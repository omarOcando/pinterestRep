import { button } from "../components/button/button";
import downloadButtonPic from "../assets/downloadButtonPic.png";




function renderImages (images, container) {

    console.log(images);

    for (const image of images) {

        const div1 = document.createElement("div");
        div1.classList.add("container1");

        const imageDiv = document.createElement("div");
        const imageContainer = document.createElement("img");
        imageContainer.src = image.urls.regular;
        imageContainer.alt = image.alt_description; 
        imageDiv.appendChild(imageContainer);
        div1.appendChild(imageDiv);

        const button1Div = document.createElement("div");
        const button1 = button(`❤️ ${image.likes}`, "black", "white");
        button1.classList.add("likesButton");
        button1Div.appendChild(button1);
        imageDiv.appendChild(button1Div);

        const button2Div = document.createElement("div");
        const button2 = button("Visitar", "white", "");
        button2.classList.add("visitButton");
        button2.addEventListener("click", () => {
            window.open(image.links.html, "_blank");
        });
        button2Div.appendChild(button2);
        imageDiv.appendChild(button2Div);

        const div2 = document.createElement("div");
        div2.classList.add("container2");

        const userInfoDiv = document.createElement("div");
        userInfoDiv.classList.add("userInfo");
        const userPic = document.createElement("img");
        userPic.src = image.user.profile_image.small;
        const userData = document.createElement("h3");
        userData.textContent = `${image.user.name}`;
        userInfoDiv.append(userPic, userData);
        div2.appendChild(userInfoDiv);

        const dimensionsDiv = document.createElement("div");
        const dimensions = document.createElement("h2");
        dimensions.textContent = `${image.height} x ${image.width}`;
        dimensions.classList.add("imageSize");
        dimensionsDiv.appendChild(dimensions);
        div2.appendChild(dimensionsDiv);

        const dateDiv = document.createElement("div");
        const date = document.createElement("p");
        date.textContent = `${image.created_at}`;
        date.classList.add("imageDate");
        dateDiv.appendChild(date);
        div2.appendChild(dateDiv);

        const button3Div = document.createElement("div");
        const button3 = document.createElement("img");
        button3.src = downloadButtonPic;
        button3.classList.add("downloadButton");
        button3.addEventListener("click", () => {
            window.open(image.urls.full, "_blank");
        });
        button3Div.appendChild(button3);
        div2.appendChild(button3Div);

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.append(div1, div2);

        container.appendChild(cardDiv);
    }
}

export { renderImages };