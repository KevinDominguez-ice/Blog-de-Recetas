const element = document.querySelectorAll(".box_element");

element.forEach(element =>{
    element.addEventListener("mousedown", () =>{
        element.classList.add("shrink");
    });

    element.addEventListener("touchstart", () =>{
        element.classList.add("shrink");
    });
});

document.addEventListener("mouseup", () =>{
    element.forEach(element => element.classList.remove("shrink"));
});

document.addEventListener("touchend", () =>{
    element.forEach(element => element.classList.remove("shrink"));
});