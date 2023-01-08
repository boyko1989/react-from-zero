function changeButton(e) {
  this.innerHTML = "Hello from Vanilla JS";
  this.className = "green-btn green";
}

myButton = document.getElementById("my-button");
myButton2 = document.getElementById("my-button2");

// myButton.onclick = function () {
//   myButton.innerHTML = "Hello from Vanilla JS";
// };

myButton.onclick = changeButton;
myButton2.onclick = changeButton;
