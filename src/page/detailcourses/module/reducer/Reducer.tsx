import { DetailCourse } from "../../../../../src/components/Interface/Interface";
import * as ActionType from "../contants/Contants";
const initialState: DetailCourse = {
  detailCourse: {},
};

const detailCourseReducer = (
  state: DetailCourse = initialState,
  action: any
) => {
  switch (action.type) {
    case ActionType.getDetailCourse:
      state.detailCourse = action.value;
      return { ...state };

    default:
      break;
  }
  return { ...state };
};
export default detailCourseReducer;
