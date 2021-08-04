const menuBtns = document.getElementsByClassName("btn--menu");
let activeSection = document.getElementById("home");
for (let button of menuBtns) {
  button.addEventListener("click", (evt) => {
    let clicked = document.getElementById(evt.target.innerText.toLowerCase());
    console.log()
    /*
            If the clicked button is already active, don't change the active state
         */
    if (clicked === activeSection) {
      console.log("Active button clicked");
    } else {
      activeSection.classList.add("inactive");
      activeSection.classList.remove("active");
      clicked.classList.add("active");
      clicked.classList.remove("inactive");
      activeSection = clicked;
    }
  });
}
