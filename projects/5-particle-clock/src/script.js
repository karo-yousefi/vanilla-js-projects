const particle = document.querySelector(".particle");
const container = document.querySelector(".container");
let particleList = [];
const numberMap = {
	1: [[1, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0]],
	
	2: [[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0]],

}


function showNumber(number){
	particleList = [];
	const map = numberMap[number];
	for (let r=0; r<map.length; r++){
		for (let c=0; c<map[r].length; c++){
			if (map[r][c] === 1) {
				const newDot = document.createElement("div");
				newDot.classList.add("particle");
				container.appendChild(newDot);
				particleList.push(newDot);
			}
			else {
				const newDot = document.createElement("div");
				newDot.classList.add("particle");
				newDot.classList.add("hidden");
				container.appendChild(newDot);
			}
		}
	}
}

showNumber(1)

function changeNumber(nextNumber) {
	for (let i=0; i<particleList.length; i++){
		gsap.to(particleList[i], 0.3, {
			x: 100,
			y: 200,
			ease: "power1.inOut"
		})
	}
}
