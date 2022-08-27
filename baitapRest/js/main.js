const dom = (selector) => document.querySelector(selector);

dom("#btnKhoi1").onclick = () => {
  let diemToan = +dom("#inpToan").value;
  let diemLy = +dom("#inpLy").value;
  let diemHoa = +dom("#inpHoa").value;
  dom("#tbKhoi1").innerHTML = averagePoint(diemToan, diemLy, diemHoa);
};

dom("#btnKhoi2").onclick = () => {
  let diemVan = +dom("#inpVan").value;
  let diemSu = +dom("#inpSu").value;
  let diemDia = +dom("#inpDia").value;
  let diemAnh = +dom("#inpEnglish").value;
  dom("#tbKhoi2").innerHTML = averagePoint(diemVan, diemSu, diemDia, diemAnh);
};

const averagePoint = (...numbers) => {
  let sum = numbers.reduce((result, value) => result + value);
  0;
  let result = sum / numbers.length;
  return result;
};
// console.log(averagePoint(3, 3, 3, 3));
