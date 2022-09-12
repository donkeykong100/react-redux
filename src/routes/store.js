import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((element) => element.id !== action.payload);
//     default:
//       return state;
//   }
// };

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
    // 새로운 배열을 반환하지 않고 기존 배열을 변형하는 경우 return문을 사용하지 않음
  },
  [deleteToDo]: (state, action) =>
    state.filter((element) => element.id !== action.payload),
  // 새로운 배열을 반환하기 때문에 return문 사용(화살표 함수 한 줄 표현식 return문 생략)
});

const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
