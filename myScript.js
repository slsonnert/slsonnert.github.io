

var i = 0
var txt = 'Small things to change to help the environment';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("k").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter,speeed);
  }
}
