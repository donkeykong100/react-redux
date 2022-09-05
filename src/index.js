const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handlePlus = () => {
  count += 1; // number.innerText = number.innerText + 1;
  updateText();
};

const handleMinus = () => {
  count -= 1;
  updateText();
};

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
