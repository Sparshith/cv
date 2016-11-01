// document.addEventListener('keydown', this.handleKeyEvent_.bind(this));
// document.addEventListener('mousemove', this.handleMouseEvent_.bind(this));
// document.addEventListener('mouseout', this.handleMouseEvent_.bind(this));

function printCV() {
	document.getElementById('toolbar').style.display = 'none';
	window.print();
}

function hideToolbarAfterDelay(delay) {
	var delay = delay | 4000;
	setTimeout(
	function() {
       hideToolbar()	
    }, delay);
}

function showToolbar() {
	document.getElementById("toolbar").style.transform = 'none';
}

function hideToolbar() {
	document.getElementById('toolbar').style.transformOrigin = '50% 0px 0px';
    document.getElementById("toolbar").style.transform = 'translateY(-100%)';
}

document.addEventListener("mousemove", function(event) {
	if(event.clientX < 100 || event.clientX > screen.availWidth - 100 || event.clientY < 100) {
   		showToolbar();
	} else {
		hideToolbarAfterDelay(8000);
	}
});