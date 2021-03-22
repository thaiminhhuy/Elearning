import * as ActionType from "../constant/contants";

export const sendCourseConfirmed = (codeCourse: any) => {
  return {
    type: ActionType.confirmCourse,
    codeCourse,
  };
};
