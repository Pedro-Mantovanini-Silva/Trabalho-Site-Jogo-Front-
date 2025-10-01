var mapaimages = document.querySelectorAll("#quad img");
for(i=0; i<mapaimages.length; i++) {
  mapaimages[i].addEventListener('click', function(){ this.classList.toggle("expanded")}); 
}