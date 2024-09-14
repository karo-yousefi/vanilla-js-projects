const titleSectiopn = document.querySelectorAll(".title-section");
const collapsible = document.querySelectorAll(".collapsible");

titleSectiopn.forEach((e, i) => {
  e.addEventListener("click",() => {
    collapsible[i].classList.toggle("collapse");
  });
});