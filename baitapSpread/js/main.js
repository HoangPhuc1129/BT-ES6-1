let dom = document.querySelector(".heading");
let txt = dom.innerHTML;
let letters = [...txt];

const hoverText = () => {
  dom.innerHTML = "";

  letters.forEach((item) => {
    console.log(item);
    let tagSpan = document.createElement("span");
    dom.append(tagSpan);
    tagSpan.innerHTML = item;
  });
};

hoverText();
