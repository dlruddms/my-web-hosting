const images = ["0.jpg", "1.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");

image.src = `img/${chosenImage}`;
image.id = "background";
image.classList.add("hidden");

document.body.appendChild(image);

