const circles = document.querySelectorAll(".circle");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const lines = document.querySelectorAll(".line");

// Next button event listener
next.addEventListener("click", () => {
  toggleNextElement(".circle:not(.active)", "add");
  toggleNextElement(".line:not(.active)", "add");
  prev.classList.add("active");
  updatePrevButtonState();
  updateNextButtonState();
});

// Previous button event listener
prev.addEventListener("click", () => {
  toggleLastActiveElement(".circle.active", "remove");
  toggleLastActiveElement(".line.active", "remove");
  updatePrevButtonState();
  updateNextButtonState();
});

function toggleNextElement(selector, action) {
  const element = document.querySelector(selector);
  if (element) {
    element.classList[action]("active");
  }
}

function toggleLastActiveElement(selector, action) {
  const elements = document.querySelectorAll(selector);
  if (elements.length > 0) {
    elements[elements.length - 1].classList[action]("active");
  }
}
function updatePrevButtonState() {
  const isFirstCircleOnlyActive =
    circles[0].classList.contains("active") &&
    !circles[1].classList.contains("active");

  prev.disabled = isFirstCircleOnlyActive;
  prev.classList.toggle("active", !isFirstCircleOnlyActive);
}
function updateNextButtonState() {
  const isLastCircleActive = circles[3].classList.contains("active");
  next.disabled = isLastCircleActive;
  next.classList.toggle("active", !isLastCircleActive);
}
