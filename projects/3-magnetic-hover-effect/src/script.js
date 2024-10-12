const cursorBig = document.querySelector("#cursor-big"); // The outter cursor that moves slower
const cursorSmall = document.querySelector("#cursor-small"); // The main cursor
const icons = document.querySelectorAll(".icon");

let mousePos = { // Postition of the mouse, This changes using updateMousePosition function
	x: 0,
	y: 0,
};
let  isStuck = false; // flase: mouse has the circle shape, not hovering the icons / true:  mouse is takken the shape of the icon, Hovering the icon
let cursorBigOriginalData = { // The info for the circle shape  for the  outter cursor
	width: cursorBig.getBoundingClientRect().width,
	height: cursorBig.getBoundingClientRect().height,
}

function updateMousePosition(e) {
	mousePos.x = e.pageX;
	mousePos.y = e.pageY;
}

function updateCursor() {
	gsap.set(cursorSmall, { // Updating main mouse cursor position
		x: mousePos.x,
		y: mousePos.y,
	});

	if (!isStuck) {
		gsap.to(cursorBig, { // Updating the outter mouse cursor with a delay of 80ms
			duration: 0.08,
			x: mousePos.x,
			y: mousePos.y,
		});
	}
	requestAnimationFrame(updateCursor); // Calling the update function every frame
}

updateCursor();


function smallCursorMouseDown() { // Handling clicking effect on main mouse cursor
	cursorSmall.style.borderWidth = "10px";
}

function  smallCursorMouseUp() { // Chaging back the shape after releasing the mouse key
	cursorSmall.style.borderWidth = "4px";
}

// Handling the outter mouse cursor shape conversion to the shape of the icon with a delay of 100ms
function mouseEnter(e) { 
	isStuck = true;
	const target = e.currentTarget.getBoundingClientRect(); 
	gsap.to(cursorBig, 0.1, {
		x: target.left + target.width/2, // Position of the new shaped  cursor
		y: target.top + target.height/2,// Position of the new shaped  cursor
		width: target.width, // Width of the new shape
		height: target.height, // Height of the new shape
		borderRadius: 0, // Square
		borderWidth: 3, // Making the border more thick
		backgroundColor: "#ffffff22", // Adjusting the background
		borderColor: "#f00", // Adjusting the border color
	});
}

// Reverting back all the changes for when the nouse leaves the icons with a delay of 100ms
function mouseLeave() {
	isStuck = false;
	gsap.to(cursorBig, 0.1, {
		width: cursorBigOriginalData.width,
		height: cursorBigOriginalData.height,
		borderRadius: "50%",
		borderWidth: 1,
		backgroundColor: "#ffffff00",
		borderColor: "#ff0037",
	})
}


// Event listeners
icons.forEach((icon) => {
	icon.addEventListener("pointerenter", mouseEnter);
})
icons.forEach((icon) => {
	icon.addEventListener("pointerleave", mouseLeave);
})
document.addEventListener("pointermove", updateMousePosition);
document.addEventListener("pointerdown", smallCursorMouseDown);
document.addEventListener("pointerup", smallCursorMouseUp);
