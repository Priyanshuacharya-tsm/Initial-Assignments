const btn=document.getElementById('btn');
const box=document.getElementById('boxes');
let check1=true;
let colorArr = [
  "red",
  "black",
  "green",
  "blue",
  "pink",
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A8",
  "#33FFF2",
  "#F3FF33",
  "rgb(120, 50, 200)",
  "rgb(10, 200, 150)",
  "rgb(240, 100, 50)",
  "rgb(80, 180, 255)",
  "#8E44AD",
  "#E67E22",
  "#2ECC71",
  "#1ABC9C",
  "#F39C12"
];
btn.addEventListener('click',function(){
    let idx=Math.floor(Math.random()*colorArr.length);
    if(check1){
        box.style.backgroundColor=colorArr[idx];
        check1=false;
    }
    else{
        box.style.backgroundColor=colorArr[idx];
        check1=true;
    }

})
// btn.addEventListener("click",function(){
    
//     if(check1){
//         box.style.backgroundColor="black";
//         check1=false;
//     }
//     else{
//         box.style.backgroundColor="red";
//         check1=true;
//     }
    
// })