function init() {
	let image = document.createElement("img");
	image.src="flower2.png";
	document.getElementById("new_element").appendChild(image);

	let spans = document.getElementById("rainbow").getElementsByTagName("span");
	let colors = ["red", "orange"];

	for (var i = spans.length - 1; i >= 0; i--) {
		spans[i].style.color = colors[Math.round(Math.random())];
	}

}