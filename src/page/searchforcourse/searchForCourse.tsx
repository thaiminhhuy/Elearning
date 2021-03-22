import React from "react";
import SearchForListCourse from "../../components/SearchForListCourses/searchforlistcourses";
import { useEffect } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { rootState } from "../../redux/reducers/Reducers";
import * as action from "../../components/SearchForListCourses/moduleSeartchForCard/actions/action";
import { Course } from "../../components/Interface/Interface";
function SearchForCourse(props: any) {
  const [listCourses, setListCourse] = React.useState([]);

  useEffect(() => {
    Axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    })
      .then((res: any) => {
        setListCourse(res.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);
  // useEffect(() => {
  //   console.log(props.arrContainCourseAndQuantity);
  // }, [props.arrContainCourseAndQuantity]);
  const handleIncreaseCourse = (course: any) => {
    props.increaseCourse(course);
  };
  const handleDecrease = (course: any) => {
    props.decreaseCourse(course);
  };
  const handleDeleteCourse = (course: any) => {
    props.deleteCourse(course);
  };
  const sendArrContainCourseAndQuantity = (value: Course[]) => {
    props.sendArrCourseToStore(value);
  };
  return (
    <React.Fragment>
      <SearchForListCourse
        listCourses={listCourses}
        arrContainCourseAndQuantity={props.arrContainCourseAndQuantity}
        allQuantity={props.allQuantity}
        handleIncreaseCourse={handleIncreaseCourse}
        handleDecrease={handleDecrease}
        handleDeleteCourse={handleDeleteCourse}
        sendArrContainCourseAndQuantity={sendArrContainCourseAndQuantity}
      />
    </React.Fragment>
  );
}
const mapStateToProps = (state: rootState) => {
  return {
    arrContainCourseAndQuantity: state.cardReducer.ArrContainCourseAndQuantity,
    allQuantity: state.cardReducer.quantity,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    increaseCourse: (course: any) => {
      dispatch(action.actIncreaseCourses(course));
    },
    decreaseCourse: (course: any) => {
      dispatch(action.actDecreaseCourses(course));
    },
    deleteCourse: (course: any) => {
      dispatch(action.actDeleteCourses(course));
    },
    sendArrCourseToStore: (value: Course[]) => {
      dispatch(action.actSendArrContainCourseAndQuantity(value));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchForCourse);
