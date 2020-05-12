var tree = document.getElementById('ClickObject');
let i
let j
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
    return;
  }

   
    
    i = i-0.50;
    event.target.style.opacity = i;
    

    },100);
  }
  else {
    event.target.className = 'fail';
  }
}