console.log('Loaded!');
//move! moving!!
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
 
 marginleft= marginLeft + 10;
 img.style.marginLeft = marginleft + 'px';
 
}
img.onclick = function()
{
    
  
  var interval = setInterval(moveRight, 100);
};