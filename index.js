
var count=0;


document.querySelector(".increment").addEventListener("click",function(){
    count++;
    document.querySelector(".count").innerHTML=count;
});
document.querySelector(".reset").addEventListener("click",function(){
   count=0;
   document.querySelector(".count").innerHTML=count;
});
document.querySelector(".decrement").addEventListener("click",function(){
    count--;
    document.querySelector(".count").innerHTML=count;
});


