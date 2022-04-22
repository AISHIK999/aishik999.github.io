//Mouse cicle code
const mouseCircle = document.getElementById("mouse-circle");
const mouseDot = document.getElementById("mouse-dot");
// The mouseCircleFn() function that we have created, will take two parameters as input, the x and y coordinates (or avlues)
//The block of code after => and between the '{' and  '}' will get executed whenever the function is called while giving the respective parameters as it's input
const mouseCircleFn = (x, y) => {
    mouseCircle.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
    mouseDot.style.cssText = `top:${y}px; left: ${x}px; opacity: 1`;
};
//End of mouse circle code

//Mouse code
//Create an event listener
//This record the movement of the mouse cursor and sets the variables x and y based on the clientX and clientY, i.e the x and y coordinate position from the let end of out screen
document.body.addEventListener("mousemove", (e) => {
    let x = e.clientX; //Set the x variable as per x coordinate of the mouse cursor
    let y = e.clientY; //Set the y variable as per y coordinate of the mouse cursor

    // Now we call the mouse circle function that we created earlier and give the stored x and y values of the cursor
    // Thus the mouse circle and dot will both move as per the movement of the mouse cursor on screen
    mouseCircleFn(x, y);
    animateCircles(e, x, y);
});

document.body.addEventListener("mouseleave", () => {
    mouseCircle.style.opacity = "0";
    mouseDot.style.opacity = "0";
});