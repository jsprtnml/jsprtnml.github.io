var i = 0;
var txt = 'This website is under development...'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("test").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}