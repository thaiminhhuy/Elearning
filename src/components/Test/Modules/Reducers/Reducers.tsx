import { Test } from "../../../Interface/Interface";
import * as ActionType from "../Contants/Contants";

const initialState: Test = {
  arr1: [
    { name: "hihi", age: 20 },
    { name: "bảo", age: 20 },
    { name: "sang", age: 20 },
  ],
};

const testReducer = (state: Test = initialState, action: any) => {
  switch (action.type) {
    case ActionType.getHihi:
      console.log("hihi");
      return { ...state };
    case ActionType.addHello:
      console.log("gui len roi", action.value);

      return { ...state };
    case ActionType.getHaha:
      console.log("haha");

      return { ...state };
    default:
      break;
  }
  return { ...state };
};

export default testReducer;
