var tree = document.getElementById('ClickObject');

tree.onclick = function(evt) {
  var evt = evt || event;
  var target = evt.target || evt.srcElement;
  
  var node = target.getElementsByClassName('right')[0];
  if (!node){ 
      return;
  }
  node.style.display = " ";
  
}