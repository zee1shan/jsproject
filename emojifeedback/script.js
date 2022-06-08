var star=document.querySelectorAll(".fas")
var emoji=document.querySelectorAll(".fa-solid")
var colorA=["crimson","orange","lightblue","lightgreen","green"]
console.log(emoji);
star.forEach((ele,index)=>{
    ele.addEventListener("click",()=>{
        updateR(index);
    })
})
function updateR(index){
    star.forEach((ele,idx)=>{
        if(idx<=index){
            ele.classList.add("visit")
        }else{
            ele.classList.remove("visit")
        }
    })
    emoji.forEach((ele,idx)=>{
        if(idx==index){
            ele.classList.add("visible")
            ele.style.color=colorA[idx]
        }else{
            ele.classList.remove("visible")
        }
    })

}