const requestDirectory = 'data';



async function getDirectory(requestDirectory) {

    const response = await fetch(requestDirectory);

    console.log(response);

    if (response.ok) {

        const jsObject = await response.json();

        console.log(jsObject);

        const businesses = jsObject['businesses'];

        console.log(businesses[0].lastname);

        businesses.forEach(displayDirectory);

    }

}



getDirectory(requestDirectory);



function displayDirectory(item) {

    let card = document.createElement('section');

    let h2 = document.createElement('h2');

    let p1 = document.createElement('p'); 

    let p2 = document.createElement('p'); 

    let a = document.createElement('a')

    let img = document.createElement('img');



    h2.textContent = item.name; 

    p1.textContent = 'Address: ' + item.address ;

    p2.textContent = ' phone: ' + item.phone;
    
    a.textContent = ' url: ' + item.websiteurl;

    a.setAttribute('href', item.websiteurl);

    img.setAttribute('src', item.imageurl);

    img.setAttribute('alt', item.name);


    card.appendChild(h2);

    card.appendChild(p1); 

    card.appendChild(p2); 

    card.appendChild(img); 

    document.querySelector('.cards').appendChild(card); 

}