function init() {
	let image = document.createElement("img");
	image.src="flower2.png";
	document.getElementById("new_element").appendChild(image);

	let spans = document.getElementById("rainbow").getElementsByTagName("span");
	let colors = ["red", "orange"];

	for (var i = spans.length - 1; i >= 0; i--) {
		spans[i].style.color = colors[Math.round(Math.random())];
	}

	let memory;
	var changeSrc = function(event) {
		let imgs = document.getElementById("event").getElementsByTagName("img")
		for (var i = imgs.length - 1; i >= 0; i--) {
		imgs[i].src="flower1.png";
		}
		if (event.target.src) {
			event.target.src = "flower2.png";
			
		}
	};

	document.getElementById("event").addEventListener("mouseover", changeSrc);
}