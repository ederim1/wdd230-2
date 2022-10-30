// pimages.forEach(images => {
//     import.observe(image);
// })
// //localStorage
// localStorage.setItem('msg1', 'Hello Permanent');
// localStorage.setItem('visitDate', Date.now());

// sessionStorage.setItem('msg1', 'Hi Temporary');
// let message = localStorage.getItem('msg1');
// let visitDate = localStorage.getItem('visitDate');

//difference in day between to dates for last time they visited
//Days since last visit

if (! localStorage.getItem('lastvisit') ) {
    localStorage.setItem('lastvisit', Date.now());
    document.getElementById('diff').textContent = "this is your 1st visit";
}
else { 
    setStyles();
}

function setStyles() {
    let prevDate = localStorage.getItem('lastvisit');
    let currDate = Date.now();
    let difference = currDate - prevDate; 
    console.log(difference);
    let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
    document.getElementById('diff').textContent = "Last visit was " + daysDifference + " days ago.";
    localStorage.setItem('lastvisit', Date.now());
}
    
/////   Images Lazy /////
const image = document.querySelectorAll('img');

const pimages = document.querySelectorAll('[data-src]');
const options = {
threshold: 1,
rootMargin: "0px 0px 100px 0px"
}

function preloadImage(img){
const source = img.getAttribute('data-src');
if (!source) {
return;
}

img.src = source;
}

const io = new IntersectionObserver (
(entries, io) => {
entries.forEach(entry => {
if (!entry.isIntersecting) {
return;
} else {
preloadImage(entry.target);
io.unobserve(entry.target);
}
});
},options);

pimages.forEach(image => {
    io.observe(image);
});