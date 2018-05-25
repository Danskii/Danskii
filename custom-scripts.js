var button = document.getElementByTagName("button")[0];
var shirtWrapper = document.getElementById("shirtWrapper"); 

button.addEventListener("click", function() {
shirtWrapper.classList.add("hidden");
})
