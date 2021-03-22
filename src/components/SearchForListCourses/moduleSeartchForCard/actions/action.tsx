import * as ActionType from "../contants/contants";

export const actSendCourseToStore = (course: any) => {
  return {
    type: ActionType.sendCourseToStore,
    Course: course,
    quantityForCourse: 0,
  };
};
export const actIncreaseCourses = (course: any) => {
  return {
    type: ActionType.increaseCourse,
    Course: course,
  };
};

export const actDecreaseCourses = (course: any) => {
  return {
    type: ActionType.decreaseCourse,
    Course: course,
  };
};
export const actDeleteCourses = (course: any) => {
  return {
    type: ActionType.deleteCourse,
    Course: course,
  };
};
export const actSendArrContainCourseAndQuantity = (value: any) => {
  return {
    type: ActionType.sendArrContainCourseAndQuantity,
    value,
  };
};
