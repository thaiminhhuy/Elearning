import { Course, CourseFromCard } from "../../../Interface/Interface";
import * as ActionType from "../contants/contants";
import * as ActionTypeConfirmedCourse from "../../../InforUsers/module/constant/contants";
const initialState: CourseFromCard = {
  quantity: 0,
  ArrContainCourseAndQuantity: [
    {
      Course: {
        maKhoaHoc: null,
        biDanh: null,
        tenKhoaHoc: null,
        moTa: null,
        luotXem: null,
        hinhAnh: null,
        maNhom: null,
        ngayTao: null,
        soLuongHocVien: 0,
        nguoiTao: {
          taiKhoan: null,
          hoTen: null,
          maLoaiNguoiDung: null,
          tenLoaiNguoiDung: null,
        },
        danhMucKhoaHoc: {
          maDanhMucKhoahoc: null,
          tenDanhMucKhoaHoc: null,
        },
      },
      quantityForCourse: 0,
    },
  ],
};

const cardReducer = (state: CourseFromCard = initialState, action: Course) => {
  let index = 0;
  switch (action.type) {
    case ActionType.sendCourseToStore:
      if (state.ArrContainCourseAndQuantity.length < 1) {
        let obj = {
          Course: action.Course,
          quantityForCourse: action.quantityForCourse,
        };
        obj.quantityForCourse++;
        state.ArrContainCourseAndQuantity.push(obj);
        state.quantity++;
      } else if (
        state.ArrContainCourseAndQuantity[0].Course.maKhoaHoc === null
      ) {
        state.ArrContainCourseAndQuantity[0].Course = action.Course;
        state.ArrContainCourseAndQuantity[0].quantityForCourse++;
        state.quantity++;
      } else {
        index = state.ArrContainCourseAndQuantity.findIndex(
          (ContainCourseAndQuantity: any) => {
            return (
              ContainCourseAndQuantity.Course.maKhoaHoc ===
              action.Course.maKhoaHoc
            );
          }
        );

        if (index === -1) {
          let obj = {
            Course: action.Course,
            quantityForCourse: action.quantityForCourse,
          };
          obj.quantityForCourse++;
          state.ArrContainCourseAndQuantity.push(obj);
          state.quantity++;
        } else {
          state.quantity++;
          state.ArrContainCourseAndQuantity[index].quantityForCourse++;
        }
      }

      return { ...state };
    case ActionType.increaseCourse:
      index = state.ArrContainCourseAndQuantity.findIndex(
        (ContainCourseAndQuantity: any) => {
          return (
            ContainCourseAndQuantity.Course.maKhoaHoc ===
            action.Course.maKhoaHoc
          );
        }
      );

      if (index === -1) {
        let obj = {
          Course: action.Course,
          quantityForCourse: action.quantityForCourse,
        };
        obj.quantityForCourse++;
        state.ArrContainCourseAndQuantity.push(obj);
        state.quantity++;
      } else {
        state.quantity++;
        state.ArrContainCourseAndQuantity[index].quantityForCourse++;
      }
      return { ...state };
    case ActionType.decreaseCourse:
      index = state.ArrContainCourseAndQuantity.findIndex(
        (ContainCourseAndQuantity: any) => {
          return (
            ContainCourseAndQuantity.Course.maKhoaHoc ===
            action.Course.maKhoaHoc
          );
        }
      );

      if (state.ArrContainCourseAndQuantity[index].quantityForCourse > 1) {
        state.quantity--;
        state.ArrContainCourseAndQuantity[index].quantityForCourse--;
      }
      return { ...state };
    case ActionType.deleteCourse:
      index = state.ArrContainCourseAndQuantity.findIndex(
        (ContainCourseAndQuantity: any) => {
          return (
            ContainCourseAndQuantity.Course.maKhoaHoc ===
            action.Course.maKhoaHoc
          );
        }
      );
      let newQuantity = 0;
      newQuantity =
        state.quantity -
        state.ArrContainCourseAndQuantity[index].quantityForCourse;

      state.quantity = newQuantity;

      state.ArrContainCourseAndQuantity.splice(index, 1);

      return { ...state };
    case ActionTypeConfirmedCourse.confirmCourse:
      index = state.ArrContainCourseAndQuantity.findIndex(
        (ContainCourseAndQuantity: any) => {
          return (
            ContainCourseAndQuantity.Course.maKhoaHoc === action.codeCourse
          );
        }
      );
      let newQuantityConfirm = 0;
      newQuantityConfirm =
        state.quantity -
        state.ArrContainCourseAndQuantity[index].quantityForCourse;

      state.quantity = newQuantityConfirm;

      state.ArrContainCourseAndQuantity.splice(index, 1);

      console.log(state.ArrContainCourseAndQuantity);
      return { ...state };
    default:
      break;
  }
  return { ...state };
};
export default cardReducer;
