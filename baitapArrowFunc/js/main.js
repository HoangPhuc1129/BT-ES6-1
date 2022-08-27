const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

let domDiv = document.getElementById("colorContainer");

const createBtns = () => {
  colorList.forEach((color, index) => {
    let btn = document.createElement("button");
    domDiv.append(btn);
    btn.setAttribute(`class`, `color-button ${color}`);
    // btn.setAttribute(`data-id`, ` ${index}`);
    btn.dataset.id = index;
  });
};

createBtns();

const changeColor = () => {
  let btnList = document.querySelectorAll(".color-button");
  console.log(btnList);
  domDiv.addEventListener("click", (event) => {
    let id = +event.target.getAttribute("data-id");
    btnList.forEach((btn, index) => {
      if (id == index) {
        btnList[index].classList.add("active");
      } else {
        btnList[index].classList.remove("active");
      }
    });
    document
      .getElementById("house")
      .setAttribute(`class`, `house ${colorList[id]}`);
  });
};

changeColor();

// const colorList = [
//   "pallet",
//   "viridian",
//   "pewter",
//   "cerulean",
//   "vermillion",
//   "lavender",
//   "celadon",
//   "saffron",
//   "fuschia",
//   "cinnabar",
// ];
// let domDiv = document.getElementById("colorContainer");

// let activeFlag = -1;
// const loadColors = () => {
//   // create button
//   colorList.forEach((color, index) => {
//     let btn = document.createElement("button");
//     domDiv.append(btn);
//     btn.setAttribute(`class`, `color-button ${color}`);
//     btn.setAttribute(`data-type`, `${color}`);
//     btn.setAttribute(`data-id`, ` ${index}`);
//   });

//   // Click => change color
//   domDiv.addEventListener("click", (event) => {
//     event.target.classList.add("active");
//     let elType = event.target.getAttribute(`data-type`);
//     let id = event.target.getAttribute(`data-id`);
//     let btnList = document.getElementsByClassName("color-button");

//     for (let i = 0; i < btnList.length; i++) {
//       if (id == i) {
//         btnList[i].classList.add("active");
//       } else {
//         btnList[i].classList.remove("active");
//       }
//     }

//     let houseColor = document.getElementById("house");
//     houseColor.setAttribute(`class`, `house ${elType}`);
//   });
// };

// loadColors();
