var pagina = document.querySelector('body');
if (window.addEventListener) {
  // IE9, Chrome, Safari, Opera
  window.addEventListener("mousewheel", mouseWheel, false);
  // Firefox
  window.addEventListener("DOMMouseScroll", mouseWheel, false);
} else {
  // IE 6/7/8
  window.attachEvent("onmousewheel", mouseWheel);
}


function mouseWheel(){
  var el = document.querySelectorAll('.element');
	// cross-browser wheel delta
	var e = window.event || e; // old IE support
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

  for (var i = 0; i < el.length; i++) {
    el[i].style.width = Math.max(50, Math.min(800, el[i].width + (30 * delta))) + 'px';
    el[i].style.transform = "translate("+ Math.max(50, Math.min(800, el[i].width + (30 * delta))) + "%," + Math.max(50, Math.min(800, el[i].width + (30 * delta))) + "%)";
  }

	return false;

}
