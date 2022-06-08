import {show} from "./lib/progessBar.js";
import {zoom} from "./lib/zoom.js";
show();
zoom();

/* const progress =document.getElementById("progress");
const photo =document.getElementById("photo");
const shop =document.getElementById("shop");
const webD =document.getElementById("webD");
const imgElements = document.querySelectorAll(".mini>img");
const imgFull = [];
const frameImg = document.createElement("div");
 let defil; 
frameImg.style.width = "100vw";
frameImg.style.height = "100vh";
frameImg.style.justifyContent = "center";
frameImg.style.backgroundColor ="rgba(155,155,155,0.5)";
frameImg.style.backdropFilter="blur(20px)";
frameImg.style.alignItems = "center";
frameImg.style.position = "fixed";
frameImg.style.display ="none";
frameImg.style.zIndex="2";
document.body.prepend(frameImg);

window.addEventListener(
    "scroll",
    function(){
        defil= document.scrollingElement.scrollTop | window.scrollY 
      if(photo.scrollIntoView=(true)  defil+document.documentElement.clientHeight>=  document.scrollingElement.offsetHeight - 70 ) {
           photo.style.width="90%";
           shop.style.width="75%";
           webD.style.width="85%";
        }
                    
                  
    }
)
for (let i = 0; i < imgElements.length; i++) {
    let n = i;
    imgElements[i].addEventListener(
        "click",
        () => {
            console.log("blablabla");
            imgFull[n] = document.createElement("img");
            frameImg.style.display = "flex";
            imgFull[n].src = imgElements[n].src;
            frameImg.append(imgFull[n]);
            imgFull[n].style.width="70%";
        }
    )
    
} 
frameImg.addEventListener(
        "click",
        function(event){
            if(!frameImg.querySelector("img").contains(event.target)){
                frameImg.style.display = "none";
                frameImg.innerHTML = "";
                }
            }
        
    ) //


   /* //correction foad
console.log("js ok");
// déclarations de variables
const photos = document.querySelector(".photos");
const tabPhotos = [
    "./assets/img/p1.jpg",
    "./assets/img/p2.jpg",
    "./assets/img/p3.jpg",
    "./assets/img/p4.jpg",
    "./assets/img/p5.jpg",
    "./assets/img/p6.jpg",
    "./assets/img/p7.jpg",
    "./assets/img/p8.jpg"

];
const imgFull = [];
const frameImg = document.createElement("div");
frameImg.style.width = "100vw";
frameImg.style.height = "100vh";
frameImg.style.backdropFilter = "blur(18px)";
frameImg.style.backgroundColor = "rgba(0,0,0,0.7)";
frameImg.style.display = "none";
frameImg.style.justifyContent = "center";
frameImg.style.alignItems = "center";
frameImg.style.position = "fixed";
document.body.prepend(frameImg);
photos.style.display = "flex";
photos.style.flexWrap = "wrap";
photos.style.justifyContent = "space-between";

//document.write(tabPhotos[2]);
let index = 0;
while (index<tabPhotos.length) {
    // créer mes ElementHTML
    let divImg = document.createElement("div");
    divImg.classList.add("divImg");
    divImg.style.width = "23%";
    divImg.style.marginBottom = "2%";
    photos.append(divImg);
    let imgPhotos = document.createElement("img");
    imgPhotos.alt = "description photo p"+(index+1);
    imgPhotos.src = tabPhotos[index];
    imgPhotos.style.width = "100%";
    divImg.append(imgPhotos);
    // detection click
    let n = index;
    console.dir(imgPhotos);
    console.log(typeof(imgPhotos));   
    imgPhotos.addEventListener(
        "click",
        () => {
            frameImg.style.display = "flex";
            console.log(n)
            imgFull[n] = document.createElement("img");
            imgFull[n].width = 700;
            imgFull[n].height = 500;
            imgFull[n].src = tabPhotos[n];
            frameImg.append(imgFull[n]);
        }
    )
    //incrémentation de l'index
    index++; 
}
frameImg.addEventListener("click", function(event){
    if (!frameImg.querySelector("img").contains(event.target)) {
        frameImg.style.display = "none";
        frameImg.innerHTML ="";
    }
})*/