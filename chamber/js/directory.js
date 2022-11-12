const requestDirectory = 'https://ederim1.github.io/wdd230-2/chamber/js/data.json';

let businesses = [];


async function loadDirectory(requestDirectory) {

    const response = await fetch(requestDirectory);

    console.log(response);

    if (response.ok) {

        const jsObject = await response.json();

        console.log(jsObject);

        businesses = jsObject['businesses'];

        businesses.forEach(createBusinessCard);
        businesses.forEach(createBusinessRows);

    
    }

} 

loadDirectory(requestDirectory);


function createBusinessCard(item) {

    let card = document.createElement('section');

    let img = document.createElement('img');

    let h2 = document.createElement('h2');

    let p1 = document.createElement('p'); 

    let p2 = document.createElement('p'); 

    let a = document.createElement('a')
    

    h2.textContent = item.name; 

    p1.textContent = 'Address: ' + item.address ;

    p2.textContent = ' phone: ' + item.phone;
    
    a.textContent = ' url: ' + item.websiteurl;

    a.setAttribute('href', item.websiteurl);

    img.setAttribute('src', item.imageurl);

    img.setAttribute('alt', item.name);

    img.setAttribute('class', 'companyimg');

    card.appendChild(img);

    card.appendChild(h2);

    card.appendChild(p1); 

    card.appendChild(p2);
    
    card.appendChild(a);
    
    document.querySelector('.cards').appendChild(card); 

}

function createBusinessRows(item) {

    let tableRow = document.createElement('tr');

    let td1 = document.createElement('td');

    let td2 = document.createElement('td'); 

    let td3 = document.createElement('td'); 

    let td4 = document.createElement('td');

    let a = document.createElement('a');

    td1.textContent = item.name; 

    td2.textContent = 'Address: ' + item.address ;

    td3.textContent = ' phone: ' + item.phone;
    
    a.textContent = "url: " + item.websiteurl;

    a.setAttribute('href', item.websiteurl);

    td4.appendChild(a);

    tableRow.appendChild(td1);

    tableRow.appendChild(td2); 

    tableRow.appendChild(td3); 

    tableRow.appendChild(td4); 

    document.querySelector('.directoryTable').appendChild(tableRow); 

}


function displayDirectory() {
    document.querySelector(".cards").classList.remove("hidden");
    document.querySelector(".directoryTable").classList.add("hidden");
}

function displayTable() {
    document.querySelector(".directoryTable").classList.remove("hidden");
    document.querySelector(".cards").classList.add("hidden")
}

document.querySelector("#directory").addEventListener("click", displayDirectory);
document.querySelector("#table").addEventListener("click", displayTable);

