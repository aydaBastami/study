// let divs = document.querySelectorAll("div");
// divs.forEach(function(div, index) {
//     div.addEventListener("click", (e) => {
//         div.style.backgroundColor = "rgb(251, 224, 236)"
//         e.stopPropagation()
//         console.log(`I am div ${index +1}`);
//     })
// })

// let divs = document.querySelectorAll("div");
// divs.forEach(function(div, index) {
//     div.addEventListener("click", (e) => {
//         e.target.style.backgroundColor = "rgb(251, 224, 236)"
//         console.log(`I am div ${index +1}`);
//     })
// })

let list = document.querySelector(".list");
let listItem = document.querySelectorAll(".list li");
let input = document.querySelector("input");

// listItem.forEach(function (item) {
//   item.addEventListener("click", () => {
//     item.remove();
//   });
// });

// input.addEventListener("keypress", (e) => {
//   if (e.charCode === 13) {
//     let value = e.target.value;
//     let li = document.createElement("li");
//     li.textContent = value;
//     list.appendChild(li);
//   }
// });

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});

input.addEventListener("keypress", (e) => {
  if (e.charCode === 13) {
    let value = e.target.value;
    let li = document.createElement("li");
    li.textContent = value;
    list.appendChild(li);
  }
});
