const container = document.querySelector(".container");
const randomText = document.querySelector(".random-text");
const colorGradient = document.querySelector(".color-gradient");



function generateRandom() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let text = "";

	let numberOfLetters = 400;
	while(numberOfLetters>0){
		const randomLetter = letters.at(Math.floor(Math.random() * letters.length));
		text += randomLetter;
		numberOfLetters--;
	}
	randomText.innerHTML = text;
}
generateRandom();


function followMouse(e) {
	const x = e.offsetX;
	const y = e.offsetY;

	colorGradient.style.background = `radial-gradient(at ${x}px ${y}px, #e664e6b9, #69b2e2aa)`
}


container.addEventListener("mousemove", (e) => {
  generateRandom();
	followMouse(e);
});