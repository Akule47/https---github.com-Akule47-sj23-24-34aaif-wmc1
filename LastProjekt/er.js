let formButton = document.querySelector("#submit");
formButton.addEventListener("click", infoSubmitted);

function infoSubmitted(event) {
  event.preventDefault();
  alert("Thank you for subsribing!");
}