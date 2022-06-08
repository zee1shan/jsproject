let counter=document.querySelectorAll(".counter")
counter.forEach(ele=>{
ele.innerText=0
  let curr=0;
  const data=ele.getAttribute("data-ceil");
  let increment=Math.floor(data/15);
  let strt=setInterval(()=>{
   curr+=increment;
   ele.innerHTML=curr;
   if(curr>data){
    ele.innerHTML=data;
       clearInterval(strt);
   }
  },50)
})
