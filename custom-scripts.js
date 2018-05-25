
var thisButtonTogglesDisplay = document.querySelector("button");
var displayThisElementWhenClicked = document.querySelector("#shirtAndSignupWrapper");

thisButtonTogglesDisplay.addEventListener("click", function(){
    displayThisElementWhenClicked.classList.add("hideMe");
});
