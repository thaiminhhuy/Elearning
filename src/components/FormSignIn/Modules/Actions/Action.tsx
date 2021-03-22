import Axios from "axios";
import Swal from 'sweetalert2'
import * as ActionType from "../Contants/Contants"
interface Data{
  taiKhoan: string, 
  matKhau: string,
  errorInput: string
}
export const actSignInAPI =  (data: Data, history: any) => {
  console.log(data);
  return async (dispatch: any) => {
    try {
      const res = await Axios({
        method: "POST",
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        data
      })
      let matKhau: any = data.matKhau;
      let allData: Data = { ...res.data, matKhau };

      Swal.fire("Sign In Success !", "Click OK to exit!", "success");
      localStorage.setItem("user", JSON.stringify(res.data))
      dispatch(actSignIn(res.data))
      history.push("/");
  } catch (error) {

      Swal.fire("Sign In Fail!", error.response.data, "error");
  }  
 }
}
export const actSignIn =  (user: any) => {  
  return {
     type: ActionType.signIn,
     data: user
  }
}