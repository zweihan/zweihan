console.log('This would be the main JS file.');

document.getElementById("about").onclick = function() {
  hideAllContent();
  document.getElementById("about-block").style.display = 'block';

};

document.getElementById("projects").onclick = function() {
  hideAllContent();
  document.getElementById("projects-block").style.display = 'block';
};

document.getElementById("links").onclick = function() {
  hideAllContent();
  document.getElementById("links-block").style.display = 'block';
};

document.getElementById("greetings").textContent = function (){
  var currDate = new Date();
  var hour = currDate.getHours();
  if(hour < 12) {
    return "Good morning"
  }else if(hour < 18) {
    return "Good afternoon"
  }else {
    return "Good evening"
  }
}();
var hideAllContent = function() {
  document.getElementById("about-block").style.display = 'none';
  document.getElementById("projects-block").style.display = 'none';
  document.getElementById("links-block").style.display = 'none';
}