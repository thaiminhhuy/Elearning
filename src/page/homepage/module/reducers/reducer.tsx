import { Home } from "../../../../components/Interface/Interface";
import * as ActionType from "../contants/contant";
const initialState: Home = {
  listCourses: [],
};

const reducerHome = (state: Home = initialState, action: any) => {
  switch (action.type) {
    case ActionType.getListCoursesAPI:
      const newListCourse = action.value;
      state.listCourses = newListCourse;
      return { ...state };

    default:
      break;
  }
  return { ...state };
};
export default reducerHome;
