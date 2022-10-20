const input = document.getElementById('favchap');
const button = document.getElementsByTagName('button')[0];
const list = document.getElementsByClassName('list')[0];

button.addEventListener('click', 
    function() { 
        const item = document.createElement('li');
        const span = document.createElement('span');
        const xbutton = document.createElement('button');
        item.textContent = input.value;
        xbutton.textContent = "❌";
        
        span.appendChild(item);
        span.appendChild(xbutton);
        list.appendChild(span);
    
        xbutton.addEventListener('click', 
    function() { 
        list.removeChild(span);
    })
    input.focus();});
    


    