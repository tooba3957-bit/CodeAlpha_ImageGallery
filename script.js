const galleries = {

nature: [

"Nature.jpeg",
"Nature (2).jpeg",
"Nature (3).jpeg",
"Nature (4).jpeg",
"Nature (5).jpeg",
"Nature (6).jpeg",
"Nature (7).jpeg",
"Nature (8).jpeg",
"Nature (9).jpeg",
"Nature (10).jpeg",
"Nature (11).jpeg",
"Nature (12).jpeg",
"Nature (13).jpeg"

],

flowers: [

"flowers.jpeg",
"flowers (2).jpeg",
"flowers (3).jpeg",
"flowers (4).jpeg",
"flowers (5).jpeg",
"flowers (6).jpeg",
"flowers (7).jpeg",
"flowers (8).jpeg",
"flowers (9).jpeg",
"flowers (10).jpeg"
],

city: [

"city.jpeg",
"city (2).jpeg",
"city (3).jpeg",
"city (4).jpeg",
"city (5).jpeg",
"city (6).jpeg",
"city (7).jpeg",
"city (8).jpeg",
"city (9).jpeg",
"city (10).jpeg"
],

animals: [

"Animal.jpeg",
"Animal (2).jpeg",
"Animal (3).jpeg",
"Animal (4).jpeg",
"Animal (5).jpeg",
"Animal (6).jpeg",
"Animal (7).jpeg",
"Animal (8).jpeg",
"Animal (9).jpeg"

],

countries: [

"country.jpeg",
"country (2).jpeg",
"country (3).jpeg",
"country (4).jpeg",
"country (5).jpeg",
"country (6).jpeg",
"country (7).jpeg",
"country (8).jpeg",
"country (9).jpeg",
"country (10).jpeg",
"country (11).jpeg",
"country (12).jpeg",
"country (13).jpeg"
]

};

let currentImages = [];
let currentIndex = 0;

function openGallery(category){

document.getElementById("homePage").style.display="none";
document.getElementById("galleryPage").style.display="block";

document.getElementById("galleryTitle").innerText =
category.toUpperCase()+" GALLERY";

const container =
document.getElementById("galleryImages");

container.innerHTML="";

currentImages = galleries[category];

currentImages.forEach((img,index)=>{

const image = document.createElement("img");

image.src = img;

image.onclick = ()=>{

openLightbox(index);

};

container.appendChild(image);

});

}

function goBack(){

document.getElementById("galleryPage").style.display="none";
document.getElementById("homePage").style.display="flex";

}

function openLightbox(index){

currentIndex = index;

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightboxImg").src =
currentImages[currentIndex];

}

function closeLightbox(){

document.getElementById("lightbox").style.display="none";

}

function changeImage(step){

currentIndex += step;

if(currentIndex < 0){
currentIndex = currentImages.length - 1;
}

if(currentIndex >= currentImages.length){
currentIndex = 0;
}

document.getElementById("lightboxImg").src =
currentImages[currentIndex];

}
