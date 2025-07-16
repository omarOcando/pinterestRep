import "./_button.scss";

export const button = (text, color, bgColor) => {
    const button = document.createElement("button");

    button.classList.add("commonButton");
    button.textContent = text;
    button.style.color = color;
    button.style.backgroundColor = bgColor;

    return button;
}