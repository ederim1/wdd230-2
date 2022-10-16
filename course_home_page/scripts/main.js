let date = new Date();
let year = date.getFullYear();

document.querySelector('#year').textContent = year;

let text = document.lastModified;
document.getElementById("updated").innerHTML = text;


// como se hara el menu desplegable

let button = document.querySelector('.btn'); //intento de boton, el class es btn
let title = document.querySelector('h2'); // esto haria que el h2 desaparezca y aparezca cuando hay un click

function show(){
    button.classList.toggle('newstyle');
}

button.addEventListener('click', show)

// esto va en algun lugar del css.
// VER ESTOS VIDEOS URGENTEMENTE https://byui.instructure.com/courses/201508/pages/w04-activity-responsive-menus-using-javascript?module_item_id=26863894