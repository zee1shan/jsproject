const imgContainer=document.querySelector(".image-container");
const prevel=document.getElementById("prev")
const nextel=document.getElementById("next")
let x=0;
let timer;
 prevel.addEventListener("click",()=>{
    clearTimeout(timer)
     x=x+45;
     update()
 })
 nextel.addEventListener("click",()=>{
     clearTimeout(timer)
    x=x-45;
    update()
})

 function update(){
     imgContainer.style.transform=`perspective(1000px) rotateY(${x}deg)`
     timer=setTimeout(()=>{
        x=x-45;
        update()
     },3000)

 }
 update();