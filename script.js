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
		
		if (event.target.src) {
			if(event.target.src.includes("flower1.png"))
				event.target.src="flower2.png";	
			else
				event.target.src="flower1.png";
		}
	};

	document.getElementById("event").addEventListener("mouseover", changeSrc);
}

function addItem(){
	let c1 = document.getElementById("check1");
	let c2 = document.getElementById("check2");
	let list = document.createElement("li");
	let element = document.getElementById("name").value;
	list.appendChild(document.createTextNode(element));
	if(c1.checked){list.style.textDecoration = "underline";}
	if(c2.checked){list.style.color = "red";}
	document.getElementById("mylist").appendChild(list);
}