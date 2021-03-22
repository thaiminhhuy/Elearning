import React from "react";
import { connect } from "react-redux";
import { rootState } from "../../redux/reducers/Reducers";
import * as action from "./Modules/Actions/Action";
function Test(props: any) {
  console.log(props.arr);

  return (
    <div>
      <button
        onClick={() => {
          props.GuiLenStore();
        }}
      >
        Gui len
      </button>
    </div>
  );
}

const mapStateToProps = (state: rootState) => {
  return {
    arr: state.testReducer.arr1,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  // return {
  //   getAddhello : () => {

  //   }
  // }
  return {
    GuiLenStore: () => {
      dispatch(action.GuiStore());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
