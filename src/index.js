import { legacy_createStore } from "redux";

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

number.innerText = 0;

const PLUS = "Plus";
const MINUS = "Minus";

const countModifier = (count = 0, action) => {
  // Reducer는 Application의 데이터인 state와
  // 할 일을 정의하는 action을 포함한다.
  // Reducer가 return하는 것은 무엇이든지 Application의 state가 된다.
  switch (action.type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = legacy_createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

plus.addEventListener("click", () => countStore.dispatch({ type: PLUS }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
