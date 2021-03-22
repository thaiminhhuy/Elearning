import { combineReducers } from "redux";
import testReducer from "../../components/Test/Modules/Reducers/Reducers";
import SignInReducer from "../../components/FormSignIn/Modules/Reducers/Reducers";
import SignUpsReducer from "../../components/SignUp/modules/Reducers/Reducers";
import reducerHome from "../../page/homepage/module/reducers/reducer";
import detailCourseReducer from "../../page/detailcourses/module/reducer/Reducer";
import cardReducer from "../../components/SearchForListCourses/moduleSeartchForCard/reducers/cardReducer";
import comfirmReducer from "../../components/SearchForListCourses/moduleSeartchForCard/reducers/confirmReducer";

const rootReducer = combineReducers({
  testReducer,
  reducerHome,
  SignInReducer,
  SignUpsReducer,
  detailCourseReducer,
  cardReducer,
  comfirmReducer,
});

export type rootState = ReturnType<typeof rootReducer>;

export default rootReducer;
