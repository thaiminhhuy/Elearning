import * as actiontype from "../contants/contant";

import Axios from "axios";

export const funGetListCoureseAPI = () => {
  return (dispatch: any) => {
    Axios({
      method: "get",
      url:
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    })
      .then((res: any) => {
        dispatch(funGetListCourese(res.data));
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
};

export const funGetListCourese = (value: any) => {
  return {
    type: actiontype.getListCoursesAPI,
    value,
  };
};
