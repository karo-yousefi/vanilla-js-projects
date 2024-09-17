const filterButton = document.querySelector(".filter-button");
const filterMenu = document.querySelector(".filter-menu");
const filterContainer = document.querySelector(".filter-container");
const filterDumbbell = document.querySelector("#dumbbell");
const filterBook = document.querySelector("#book");
const filterWave = document.querySelector("#wave");
const items = document.querySelectorAll(".item");

let isWorkoutActive = true;
let isStudyoutActive = true;
let isOtherActive = true;


function toggleHideItems(itemType){
	items.forEach((item) => {
		const title = item.querySelector("h1").innerHTML;
		if (title === itemType) {
			item.classList.toggle("hidden");
		}
	})
}

filterButton.addEventListener("click", () => {
	filterMenu.classList.toggle("closed");
	filterContainer.classList.toggle("lowerOpacity");
});


filterDumbbell.addEventListener("click", () => {
	toggleHideItems("Workout");

	if (isWorkoutActive) {
		filterDumbbell.style.color = "#fff"
		isWorkoutActive = false
	}
	else {
		filterDumbbell.style.color = "#61dd61";
		isWorkoutActive = true;
	}

});

filterBook.addEventListener("click", () => {
	toggleHideItems("Study");
	
	if (isStudyoutActive) {
		filterBook.style.color = "#fff"
		isStudyoutActive = false
	}
	else {
		filterBook.style.color = "#5ed9e9";
		isStudyoutActive = true;
	}
})


filterWave.addEventListener("click", () => {
	toggleHideItems("Other");

	if (isOtherActive) {
		filterWave.style.color = "#fff"
		isOtherActive = false
	}
	else {
		filterWave.style.color = "#EB3743";
		isOtherActive = true;
	}
})