let tree = document.getElementById('ClickObject');
let i
let j
let r = document.querySelectorAll("#right")["length"];
var referrer = document.referrer;
tree.onclick = function(event){
  
  event = event || window.event;
  if (!event.target) {
      event.target = event.srcElement;
  }
  //alert(event.target.id);
  
  let start = Date.now(); 

  if (event.target.id == "right"){
   i = 1;
   j++;
   
   let timer =  setInterval(function(){
    let timePassed = Date.now() - start;

    if (timePassed >= 300) {
      clearInterval(timer); // закончить анимацию через 2 секунды
    return; }
  
    i = i-0.50;
    event.target.style.opacity = i;
    

    },100);

    event.target.className = 'uponMe clickob'
    event.target.id = ''
    event.target.disabled = true;
    event.target.style.display = 'none';
    event.target.style.cursor = 'auto';
    
    
    if(window.matchMedia('(max-width: 768px)').matches){
      // do functionality on screens smaller than 768px
    event.target.style.position = 'absolute !important';
    event.target.style.left = "5%";
    event.target.style.right = "";
    event.target.style.top = "5%";
    event.target.style.bottom = "";
    document.getElementsByClassName('reload')[0].style.display = "block";

        }

    setTimeout(function test(){
      if (document.getElementsByClassName('uponMe')["length"] == r){
      alert ('Все ответы верны, поздравляю');
      
    }},250); 
    
  }
  else if (event.target.id == "no-right") {
    if (document.getElementsByClassName('uponMe')["length"] == r){
      return
    } else{
    event.target.className = 'fail';
    }
  } 
}

