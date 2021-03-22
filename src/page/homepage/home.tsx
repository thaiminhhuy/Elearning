import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/carousel/carousel";
import CourseInfor from "../../components/courseInfor/courseInfor";
import IntroduceStep from "../../components/IntroduceStep/IntroduceStep";
import ListCourses from "../../components/ListCourses/listCourses";
import IntroduceTarget from "../../components/IntroduceTarget/IntroduceTarget";
import IntroduceCourse from "../../components/IntroduceCourse/IntroduceCourse";
import Instructors from "../../components/Instructors/Instructors";
import Achievements from "../../components/Achievements/Achievements";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Footer from "../../components/Footer/footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { connect } from "react-redux";
import { rootState } from "../../../src/redux/reducers/Reducers";
import { useEffect } from "react";
import * as action from "./module/actions/action";

function HomePage(props: any) {
  const [darkMode, setDarkMode] = React.useState(false);
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  const lightTheme = createMuiTheme({
    palette: {
      type: "light",
    },
  });
  const setBackground = (value: boolean) => {
    setDarkMode(value);
  };
  useEffect(() => {
    props.getListCourses();
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Navbar setBackground={setBackground} props={props} />
        <Carousel />
        <CourseInfor />
        <IntroduceStep />
        <IntroduceTarget />
        <ListCourses listCourses={props.newListCourses} />
        <IntroduceCourse />
        <Instructors />
        <Achievements />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}
const mapStateToProps = (state: rootState) => {
  return {
    newListCourses: state.reducerHome.listCourses,
    user: state.SignInReducer.user,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    getListCourses: () => {
      dispatch(action.funGetListCoureseAPI());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
