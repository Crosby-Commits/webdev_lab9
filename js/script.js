function init(){
  function myEventFunction(){
   var text = document.getElementById('entryinput').value;
   alert('Jamie Crosby: ' + text);
  }
  
  var d4 = document.getElementById('entrybutton');
  d4.addEventListener('click', myEventFunction);
  d4.addEventListener('click', function (){
    console.log('I was Clicked!');
    d4.style.backgroundColor = '#C00';
    d4.innerHTML = '<strong>Goodbye</strong>';
    var text = document.getElementById('entryinput').value;
    document.getElementById("textoutput").textContent = text;
  });
}
  window.addEventListener('load', init);