// About me text
const aboutMeText = document.querySelector(".about-me-text");
const aboutMeTextContent =
    "An Android & Web enthusiast, constantly learning and training to reach perfection";

Array.from(aboutMeTextContent).forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    aboutMeText.appendChild(span);

    span.addEventListener("mouseenter", (e) => {
        e.target.style.animation = "aboutMeTextAnim 0.5s forwards";
    });
    span.addEventListener("mouseleave", (e) => {
        e.target.style.animation = "aboutMeTextAnimOut 3s forwards";
    });
});
// End of about me text
