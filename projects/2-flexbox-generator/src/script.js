const selectNumber = document.querySelector("#select-number");
const selectOnOff = document.querySelector("#select-on-off");
const selectDirection = document.querySelector("#select-direction");
const selectJustify = document.querySelector("#select-justify");
const selectAlign = document.querySelector("#select-align");
const selectGap = document.querySelector("#select-gap");
const selectWrap = document.querySelector("#select-wrap");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");
const showcaseContainer = document.querySelector(".showcase-container");
const codeContainer = document.querySelector(".code-container");
const codeOnOff = document.querySelector("#code-on-off");
const codeDirection = document.querySelector("#code-direction");
const codeJustify = document.querySelector("#code-justify");
const codeAlign = document.querySelector("#code-align");
const codeGap = document.querySelector("#code-gap");
const codewrap = document.querySelector("#code-wrap");

const optionsOrder = ["select-number", "select-on-off", "select-direction", "select-justify", "select-align", "select-gap", "select-wrap"];
let selectionOption = "select-number";


function deleteAllShowcaseElements() { 
  childrenArray = Object.values(showcaseContainer.children);
  childrenArray.forEach((child) => {child.remove()})
}

nextButton.addEventListener("click", () => {  
  if (optionsOrder.indexOf(selectionOption) + 1 < optionsOrder.length){ 

    document.getElementById(selectionOption).classList.add("hidden"); // Hiding the current option selector
    const newSelection = optionsOrder[optionsOrder.indexOf(selectionOption) + 1]; // Getting the next option selector based on the optionsOrder array
    document.getElementById(newSelection).classList.remove("hidden"); // Showing the new current option
    selectionOption = newSelection; // Updatng the new current option
  }
})

previousButton.addEventListener("click", () => {  
  if (optionsOrder.indexOf(selectionOption) > 0){

    document.getElementById(selectionOption).classList.add("hidden"); // Hiding the current option selector
    const newSelection = optionsOrder[optionsOrder.indexOf(selectionOption) - 1]; // Getting the previous option selector based on the optionsOrder array
    document.getElementById(newSelection).classList.remove("hidden"); // Showing the new current option
    selectionOption = newSelection; // Updatng the new current option
  }
})

selectNumber.addEventListener("input", () => {
  deleteAllShowcaseElements(); // Clearning everything before changing the number of elements on the screen

  for(let i=0; i<selectNumber.value; i++) { 
    const newBox = document.createElement("div"); // Creating a new element
    newBox.classList.add("box"); // Styling it
    showcaseContainer.appendChild(newBox); // Adding it the the DOM
  }
});

// Changing the display to flex 
selectOnOff.addEventListener("click", () => {
  if (selectOnOff.value==="on") {
    showcaseContainer.style.display = "flex"; // Changing the display of the shocase box to flex
    codeOnOff.classList.remove("hidden"); // Showing the display: flex text in the code box
    codeOnOff.innerHTML = "&nbsp;&nbsp;display: flex;"; // Updating the text in the code box
  }
  else if (selectOnOff.value==="off") {
    showcaseContainer.style.display = "block" // Changing the display of the shocase box to block
    codeOnOff.classList.add("hidden"); // Hiding the display: flex text in the code box
  }
})

// Changing the direction of flex
selectDirection.addEventListener("click", () => {
  if (selectDirection.value==="row") {
    showcaseContainer.style.flexDirection = "row"; // Changing the direction to rwo
    codeDirection.classList.remove("hidden"); // Showing the flex-direction text in the code box
    codeDirection.innerHTML = "&nbsp;&nbsp;flex-direction: row;"; // Updating the text in the code box
  }
  else if (selectDirection.value==="column") {
    showcaseContainer.style.flexDirection = "column"; // Changing the direction to column
    codeDirection.classList.remove("hidden"); // Showing the flex-direction text in the code box
    codeDirection.innerHTML = "&nbsp;&nbsp;flex-direction: column;"; // Updating the text in the code box
  }
});

// ==== Same logic as before ====

selectJustify.addEventListener("click", () => {
  if (selectJustify.value === "flex-start"){
    showcaseContainer.style.justifyContent = "flex-start";
    codeJustify.classList.remove("hidden");
    codeJustify.innerHTML = "&nbsp;&nbsp;justify-content: flex-start;";
  }
  else if (selectJustify.value === "center") {
    showcaseContainer.style.justifyContent = "center";
    codeJustify.classList.remove("hidden");
    codeJustify.innerHTML = "&nbsp;&nbsp;justify-content: center;";
  }
  else if (selectJustify.value === "flex-end") {
    showcaseContainer.style.justifyContent = "flex-end";
    codeJustify.classList.remove("hidden");
    codeJustify.innerHTML = "&nbsp;&nbsp;justify-content: flex-end;";
  }
  else if (selectJustify.value === "space-around") {
    showcaseContainer.style.justifyContent = "space-around";
    codeJustify.classList.remove("hidden");
    codeJustify.innerHTML = "&nbsp;&nbsp;justify-content: space-around;";
  }
  else if (selectJustify.value === "space-between") {
    showcaseContainer.style.justifyContent = "space-between";
    codeJustify.classList.remove("hidden");
    codeJustify.innerHTML = "&nbsp;&nbsp;justify-content: space-between;";
  }
  else if (selectJustify.value === "space-evenly") {
    showcaseContainer.style.justifyContent = "space-evenly";
    codeJustify.classList.remove("hidden");
    codeJustify.innerHTML = "&nbsp;&nbsp;justify-content: space-evenly;";
  }
})

selectAlign.addEventListener("click", () => {
  if (selectAlign.value === "flex-start"){
    showcaseContainer.style.alignItems = "flex-start";
    codeAlign.classList.remove("hidden");
    codeAlign.innerHTML = "&nbsp;&nbsp;align-items: flex-start;";
  }
  else if (selectAlign.value === "center") {
    showcaseContainer.style.alignItems = "center";
    codeAlign.classList.remove("hidden");
    codeAlign.innerHTML = "&nbsp;&nbsp;align-items: center;";
  }
  else if (selectAlign.value === "flex-end") {
    showcaseContainer.style.alignItems = "flex-end";
    codeAlign.classList.remove("hidden");
    codeAlign.innerHTML = "&nbsp;&nbsp;align-items: flex-end;";
  }
})

selectGap.addEventListener("input", () => {
  showcaseContainer.style.gap = selectGap.value + "px";
  codeGap.classList.remove("hidden");
  codeGap.innerHTML = `&nbsp;&nbsp;gap: ${selectGap.value}px;`;
})

selectWrap.addEventListener("click", () => {
  if (selectWrap.value==="no-wrap") {
    showcaseContainer.style.flexWrap = "nowrap";
    codewrap.classList.remove("hidden");
    codewrap.innerHTML = "&nbsp;&nbsp;flex-wrap: nowrap;";
  }
  else if (selectWrap.value==="wrap") {
    showcaseContainer.style.flexWrap = "wrap";
    codewrap.classList.add("hidden");
  }
});

// ================