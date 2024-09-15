const cursorBig = document.querySelector("#cursor-big");
const cursorSmall = document.querySelector("#cursor-small");
const icons = document.querySelectorAll(".icon");
let mousePos = {
	x: -100,
	y:-100
};
let  isStuck = false;
let cursorBigData = {
	width: cursorBig.getBoundingClientRect().width,
	height: cursorBig.getBoundingClientRect().height,
}

let scrollHeight = 0;
window.addEventListener('scroll', function(e) {
	scrollHeight = window.scrollY
})

const { gsap } = window;
function updateMousePosition(e)  {
	mousePos.x = e.pageX;
	mousePos.y = e.pageY;
}

function updateCursor() {
	gsap.set(cursorSmall, {
		x: mousePos.x,
		y: mousePos.y,
	});

	if (!isStuck) {
		gsap.to(cursorBig, {
			duration: 0.05,
			x: mousePos.x - cursorBigData.width/2 + 15,
			y: mousePos.y - cursorBigData.height/2 + 15,
		});
	}

	requestAnimationFrame(updateCursor);
}

updateCursor();


function smallCursorMouseDown() {
	cursorSmall.style.borderWidth = "10px";
}

function  smallCursorMouseUp() {
	cursorSmall.style.borderWidth = "4px";
}

function mouseEnter(e) {
	isStuck = true;
	const target = e.currentTarget.getBoundingClientRect();
	gsap.to(cursorBig, 0.1, {
		x: target.left + 30,
		y: target.top + scrollHeight + 30,
		width: target.width,
		height: target.height,
		borderRadius: 0,
		backgroundColor: "#ffffff22",
	});
}

function mouseLeave() {
	isStuck = false;
	gsap.to(cursorBig, 0.1, {
		width: cursorBigData.width,
		height: cursorBigData.height,
		borderRadius: "50%",
		backgroundColor: "#ffffff00",
	})
}

icons.forEach((icon) => {
	icon.addEventListener("pointerenter", mouseEnter);
})

icons.forEach((icon) => {
	icon.addEventListener("pointerleave", mouseLeave);
})

document.addEventListener("pointermove", updateMousePosition);
document.addEventListener("pointerdown", smallCursorMouseDown);
document.addEventListener("pointerup", smallCursorMouseUp);
