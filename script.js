//toma las variables con la clase box_element y las mete en un array, esto es pa poder usarlas en el JS
const element = document.querySelectorAll(".box_element");

//Esto es para darle la propiedad a cada elemento del array
element.forEach(element =>{
    element.addEventListener("mousedown", () =>{ //Cuando se da clic sobre el elemento
        element.classList.add("shrink"); //Se aplica la propiedad (la de disminuir el tamaño q sale en el css)
    });
//Esto es lo mismo pero pa telefono
    element.addEventListener("touchstart", () =>{
        element.classList.add("shrink");
    });
});

/*
    Esto le quita la propiedad cuando se suelta el clic
    se usa document para q si se suelta el clic en cualquier otra parte del documento q no sea el cuadrito de la receta
    aun asi vuelva a su tamaño original

    La primera es para PC y la segunda para telefono
*/

document.addEventListener("mouseup", () =>{
    element.forEach(element => element.classList.remove("shrink"));
});

document.addEventListener("touchend", () =>{
    element.forEach(element => element.classList.remove("shrink"));
});