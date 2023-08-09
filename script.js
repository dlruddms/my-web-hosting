const h1 = document.querySelector(".hello h1");
let a=0;

function handleTitleClick() {
	a=a+1
	h1.innerText = "click: " + a;
}

h1.addEventListener("click", handleTitleClick);