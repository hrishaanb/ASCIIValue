canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

img_width = 600;
img_height = 300;

var img_image;

img_x = 125;
img_y = 175;

function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploadimg;
	img_imgTag.src = img_image;
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown", my_keydown);
function my_keydown (e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if((keyPressed >= 97 && keyPressed <= 122) || (keyPressed >= 65 && keyPressed <= 90)) {
			alphabetkey();
			document.getElementById("d1").innerHTML="You pressed Alphabet Key";
			console.log("alphabet key");
		}
		else if ((keyPressed >= 48 && keyPressed<=57)) {
			numberkey();
			document.getElementById("d1").innerHTML="You pressed Number Key";
			console.log("number key");
		}
		else if ((keyPressed >= 37 && keyPressed <= 40)) {
			arrowkey();
			document.getElementById("d1").innerHTML="You pressed Arrow Key";
			console.log("arrow key");
		}
		else if ((keyPressed == 17) || (keyPressed == 18) || (keyPressd == 27)) {
			specialkey();
			document.getElementById("d1").innerHTML="You pressed Special Key";
			console.log("special key");
		}
		else {
			otherkey();
			document.getElementById("d1").innerHTML="You pressed symbol or other key";
			console.log("other key");
		}

}

function alphabetkey()
{
	img_image="Alpkey.png";
	add();
}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
