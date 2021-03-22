import * as ActionType from "../Contants/Contants";

export const hihi = () => {
  return {
    type: typeof ActionType.getHihi,
    value: "hihi",
  };
};
export const haha = () => {
  return {
    type: typeof ActionType.getHaha,
    value: "haha",
  };
};
export const GuiStore = () => {
  return {
    type: ActionType.addHello,
    value: "Them tui vap",
  };
};
