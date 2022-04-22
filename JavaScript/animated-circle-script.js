//Animated circles
const circles = document.querySelectorAll(".circle");
const mainImg = document.querySelector(".main-circle img");
const trans = 30;

let mX = 0;
let mY = 0;

const animateCircles = (e, x, y) => {
    if (x < mX) {
        circles.forEach((circle) => {
            circle.style.left = `${trans}px`;
        });
        mainImg.style.left = `${trans}px`;
    } else if (x > mX) {
        circles.forEach((circle) => {
            circle.style.left = `-${trans}px`;
        });
        mainImg.style.left = `-${trans}px`;
    }

    if (y < mY) {
        circles.forEach((circle) => {
            circle.style.top = `${trans}px`;
        });
        mainImg.style.top = `${trans}px`;
    } else if (y > mY) {
        circles.forEach((circle) => {
            circle.style.top = `-${trans}px`;
        });
        mainImg.style.top = `-${trans}px`;
    }

    mX = e.clientX;
    mY = e.clientY;
};
//End of animated circles