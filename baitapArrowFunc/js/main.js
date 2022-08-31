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
  let house = document.getElementById("house");
  let btnList = document.querySelectorAll(".color-button");
  btnList[0].classList.add("active");
  let activeFlag = 0;

  // console.log(btnList);
  btnList.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      let id = event.target.getAttribute("data-id");
      if (activeFlag != id) {
        btnList[activeFlag].classList.remove("active");
      }
      event.target.classList.add("active");
      activeFlag = id;
      house.setAttribute("class", `house ${colorList[activeFlag]} `);
      // console.log(btnList);
    });
  });
};

changeColor();

// const changeColor = () => {
//   let house = document.getElementById("house");
//   let btnList = document.querySelectorAll(".color-button");
//   btnList[0].classList.add("active");
//   // console.log(btnList);
//   btnList.forEach((btn) => {
//     btn.addEventListener("click", (event) => {
//       let id = event.target.getAttribute("data-id");
//       let active = document.getElementsByClassName("active");
//       active[0].classList.remove("active");
//       btn.classList.add("active");

//       house.setAttribute("class", `house ${colorList[id]} `);
//     });
//   });
// };
