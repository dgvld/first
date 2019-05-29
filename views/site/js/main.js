$(function(){
	const canvas = document.getElementById('c1');
    var ctx = canvas.getContext('2d');
let resizeReset = function() {
	w = canvas.width = window.innerWidth;
	h = canvas.height = window.innerHeight;
}	
window.addEventListener("resize", function(){
	deBouncer();
});

let deBouncer = function() {
    clearTimeout(6);
    tid = setTimeout(function() {
        resizeReset();
    }, 6);
};
resizeReset();


	var myColor = "black";
	document.getElementById('color').oninput = function(){
		myColor = this.value;
	}	
    
 
    // Кол-во шагов в одном напрв=авлении;
	var timer;
	var myX;
	var myY;
   
	function drawDot() {
		var x = w/2;
        var y = h/2;
		ctx.clearRect(0, 0, w, h);
		ctx.fillRect(x-3, y-3, 6, 6);
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(myX, myY);
		ctx.stroke();
		timer = setTimeout(drawDot, 6);

        ctx.stroke();
	}	
	/*function drawImage() {
		ctx.beginPath();
        ctx.strokeStyle = myColor;
        ctx.lineWidth = "5";
        ctx.moveTo(100, 50);
        ctx.lineTo(150, 150);
        ctx.stroke();
	}	
	drawImage();*/
	drawDot();
	    canvas.onmousemove = function (event) {
		myX = event.offsetX;
		myY = event.offsetY;
	}

});	
