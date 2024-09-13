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
let selectionOptionNormal = "select-number";
let selectionOptionColumn = "select-number";


function deleteAllShowcaseElements() {
  childrenArray = Object.values(showcaseContainer.children);
  childrenArray.forEach((child) => {child.remove()})
}

// function addCodeLines(text){
//   const newCode = document.createElement("p");
//   newCode.classList.add("code");
//   newCode.innerHTML = text;
//   return newCode;
// }


// function orderCodeLines(newCodeLines){
//   let existingLines = Array.from(codeContainer.children);
//   allCodeLines = existingLines.concat(newCodeLines);
//   existingLines.forEach((element) => {element.remove()});
//   existingLines = [];
//   allCodeLines.forEach((eleemnt) => {codeContainer.appendChild(eleemnt)});
// }

nextButton.addEventListener("click", () => {  
  if (optionsOrder.indexOf(selectionOptionNormal) + 1 < optionsOrder.length){

    document.getElementById(selectionOptionNormal).classList.add("hidden");
    const newSelection = optionsOrder[optionsOrder.indexOf(selectionOptionNormal) + 1];
    document.getElementById(newSelection).classList.remove("hidden");
    selectionOptionNormal = newSelection;
  }
})

previousButton.addEventListener("click", () => {  
  if (optionsOrder.indexOf(selectionOptionNormal) > 0){

    document.getElementById(selectionOptionNormal).classList.add("hidden");
    const newSelection = optionsOrder[optionsOrder.indexOf(selectionOptionNormal) - 1];
    document.getElementById(newSelection).classList.remove("hidden");
    selectionOptionNormal = newSelection;
  }
})

selectNumber.addEventListener("input", () => {
  deleteAllShowcaseElements();

  for(let i=0; i<selectNumber.value; i++) {
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    showcaseContainer.appendChild(newBox);
  }
});

selectOnOff.addEventListener("click", () => {
  if (selectOnOff.value==="on") {
    showcaseContainer.style.display = "flex";
    codeOnOff.classList.remove("hidden");
    codeOnOff.innerHTML = "&nbsp;&nbsp;display: flex;";
  }
  else if (selectOnOff.value==="off") {
    showcaseContainer.style.display = "block"
    codeOnOff.classList.add("hidden");
  }
})

selectDirection.addEventListener("click", () => {
  if (selectDirection.value==="row") {
    showcaseContainer.style.flexDirection = "row";
    codeDirection.classList.remove("hidden");
    codeDirection.innerHTML = "&nbsp;&nbsp;flex-direction: row;";
  }
  else if (selectDirection.value==="column") {
    showcaseContainer.style.flexDirection = "column";
    codeDirection.classList.remove("hidden");
    codeDirection.innerHTML = "&nbsp;&nbsp;flex-direction: column;";
  }
});

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
  codeGap.innerHTML = `&nbsp;&nbsp;gap: ${selectGap.value}px;`
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
