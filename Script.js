let myDiv = document.getElementById("myDiv");
myDiv.style.width = "500px";
myDiv.style.height = "500px";
myDiv.style.textAlign = "center";
myDiv.style.backgroundColor = "olive";

function MakeColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

// function resize() {
//     // let size = Math.floor(Math.random() * 500);
//     // return `${size}px`
// }

// function resize() {
//   for (let i = 500 ; i >= 0; i -= 10) {
//     return `${i}px`
//   }
// }

myDiv.addEventListener("click", () => {
  myDiv.style.backgroundColor = MakeColor();
    
});
