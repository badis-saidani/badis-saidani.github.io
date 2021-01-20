"use strict";
window.onload = loadJS;
var timer = null;
var btnPlay; 
var btnStop;
var animation;
var selectSize;
var selectSpeed;

var txtAnimation; 
var animationArray = [];
var start = 0;
var end = 0;
var interval = 250;
var turbointerval = 50;
var i;
function loadJS()
{
	btnPlay = document.getElementById('btnPlay');
	btnStop = document.getElementById('btnStop');
	animation = document.getElementById('Animation');
	selectSize = document.getElementById('Size');
	selectSpeed = document.getElementById('Speed');

	btnPlay.addEventListener("click", play);
	btnStop.addEventListener("click", stop);
	selectSize.addEventListener("change", size);
	selectSpeed.addEventListener("click", speed);

	txtAnimation = document.getElementById("txtAnim");
	
	btnStop.setAttribute("disabled", true);
}


function play ()
{
	
	var selected = animation.options[animation.selectedIndex].value;

	btnStop.removeAttribute("disabled");
	btnPlay.setAttribute("disabled", true);
	animation.setAttribute("disabled", true);
	
	if (selected == "Excercise")
	animationArray = EXERCISE.split("=====\n");
	else if (selected == "Juggler")
	animationArray = JUGGLER.split("=====\n");
	else if (selected == "Bike")
	animationArray = BIKE.split("=====\n");
	else if (selected == "Dive")
	animationArray = DIVE.split("=====\n");
	else if (selected == "Custom")
	animationArray = CUSTOM.split("=====\n");
	 
	 i = start;
	 end = animationArray.length;

	 if (timer === null) 
        timer = setInterval(animate,interval);
		
	
}


function animate()
{
	
	if ( i < end)
	{
		txtAnimation.value = animationArray[i];
		i++;
	}
	else
	{
		i = start;
		txtAnimation.value = animationArray[i];
	}
}

function stop ()
{
	btnStop.setAttribute("disabled", true);
	btnPlay.removeAttribute("disabled");
	animation.removeAttribute("disabled");
	//txtAnimation.value = animationArray;
	clearInterval(timer);
	timer = null;
	
}

function size() {
	txtAnimation.style.fontSize = selectSize.value;
}

function speed() {
	if (selectSpeed.checked) {
		console.log('fast');
		interval = 50;
	} else {
		console.log('slow');
		interval = 250;
	}
	
	 
}