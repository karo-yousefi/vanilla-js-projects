const filterButton = document.querySelector(".filter-button");
const filterMenu = document.querySelector(".filter-menu");

filterButton.addEventListener("click", () => {
	filterMenu.classList.toggle("closed");
})