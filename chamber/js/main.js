//Hamburger menu
const hamburgerBtn = document.querySelector('.ham');
const navigation = document.querySelector('.navigation')
hamburgerBtn.addEventListener('click', () => {navigation.classList.toggle('responsive')});

//DATE

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<h3>${fulldate}</h3>`;

// LAST Modification//
let date = new Date();
let year = date.getFullYear();

document.querySelector('#year').textContent = year;

let text = document.lastModified;
document.getElementById("updated").innerHTML = text;
document.getElementById("updated2").innerHTML = text;




