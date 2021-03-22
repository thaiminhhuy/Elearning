import { connect } from "react-redux";
import React from "react";
import CourseDetail from "../../components/CourseDetail/CourseDetail";
import { rootState } from "../../redux/reducers/Reducers";
function DetailCourse(props: any) {
  // console.log(props.arrContainCourseAndQuantity);

  return (
    <React.Fragment>
      <CourseDetail />
    </React.Fragment>
  );
}

const mapStateToProps = (state: rootState) => {
  return {
    arrContainCourseAndQuantity: state.cardReducer.ArrContainCourseAndQuantity,
  };
};
export default connect(mapStateToProps, null)(DetailCourse);
