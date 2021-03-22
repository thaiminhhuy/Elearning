import { CourseFromCard } from "../../../Interface/Interface";
import * as ActionType from "../contants/contants";

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

const comfirmReducer = (state: CourseFromCard = initialState, action: any) => {
  switch (action.type) {
    case ActionType.sendArrContainCourseAndQuantity:
      let newArrContainCourseAndQuantity = action.value;
      state.ArrContainCourseAndQuantity = newArrContainCourseAndQuantity;
      return { ...state };

    default:
      break;
  }
  return { ...state };
};
export default comfirmReducer;
