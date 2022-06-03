const progress =document.getElementById("progress");
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


console.dir(progress);


window.addEventListener(
    "scroll",
    function(){
       /*  defil= document.scrollingElement.scrollTop | window.scrollY */
      if(photo.scrollIntoView=(true) /* defil+document.documentElement.clientHeight>=  document.scrollingElement.offsetHeight - 70 */) {
            console.log(document);
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
        
    )