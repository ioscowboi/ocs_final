function parallax(){
  var heartbeat = document.getElementById('heartbeat');
  var heartbeat2 = document.getElementById('heartbeat2');
  var heartbeater = document.getElementById('heartbeater');
  var heartbeater2 = document.getElementById('heartbeater2');
  var heartbeater3 = document.getElementById('heartbeater3');
  var title = document.getElementById('title');
  var section = document.getElementById('cont2');
  heartbeat.style.top = -(window.pageYOffset * 3.5)+'px';
  heartbeat2.style.top = -(window.pageYOffset / 8)+'px';
  heartbeater.style.top = -(window.pageYOffset / 2)+'px';
  heartbeater2.style.top = (window.pageYOffset / 2)+'px';
  heartbeater3.style.top = -(window.pageYOffset / 10)+'px';
  title.style.top = -(window.pageYOffset)+'px';
  section.style.top = -(window.pageYOffset / 3)+'px';
}
window.addEventListener("scroll", parallax, false);