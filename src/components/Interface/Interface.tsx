export interface Test {
  arr1: { name: String; age: number }[];
}

// export interface RootState {}

export interface SignIn {
  user: {
    hoTen: String;
    accessToken: String;
    email: String;
    maLoaiNguoiDung: String;
    maNhom: String;
    soDT: String;
    taiKhoan: String;
  };
}
export interface Home {
  listCourses: [];
}
export interface SignUps {
  user: {};
}
export interface DetailCourse {
  detailCourse: {};
}
export interface YourProfiles {
  dataUpdate: {
    taiKhoan: string;
    matKhau: String;
    soDT: String;
    email: String;
    hoTen: String;
    maNhom: String;
    maLoaiNguoiDung: String;
  };
}
export interface CourseFromCard {
  quantity: Number | any;
  ArrContainCourseAndQuantity: [
    {
      Course: {
        maKhoaHoc: any;
        biDanh: any;
        tenKhoaHoc: any;
        moTa: any;
        luotXem: any;
        hinhAnh: any;
        maNhom: any;
        ngayTao: any;
        soLuongHocVien: any;
        nguoiTao: {
          taiKhoan: any;
          hoTen: any;
          maLoaiNguoiDung: any;
          tenLoaiNguoiDung: any;
        };
        danhMucKhoaHoc: {
          maDanhMucKhoahoc: any;
          tenDanhMucKhoaHoc: any;
        };
      };
      quantityForCourse: 0;
    }
  ];
}
export interface Course {
  Course: {
    maKhoaHoc: any;
    biDanh: any;
    tenKhoaHoc: any;
    moTa: any;
    luotXem: any;
    hinhAnh: any;
    maNhom: any;
    ngayTao: any;
    soLuongHocVien: any;
    nguoiTao: {
      taiKhoan: any;
      hoTen: any;
      maLoaiNguoiDung: any;
      tenLoaiNguoiDung: any;
    };
    danhMucKhoaHoc: {
      maDanhMucKhoahoc: any;
      tenDanhMucKhoaHoc: any;
    };
  };
  quantityForCourse: 0;
  type: any;
  codeCourse: any;
}
