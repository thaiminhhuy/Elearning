import Axios from 'axios';
import Swal from 'sweetalert2';
import * as ActionType from "../Constant/Constants"
interface Data {
    taiKhoan: string,
    matKhau: string,
    hoTen: string,
    soDT: string,
    maNhom: string,
    email: string,
}
export const actSignUpAPI = (data: Data, props: any) => {
    const newData: Data = { ...data, maNhom: "GP01" }
    return (dispatch: any) => {
        Axios({
            method: "POST",
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data: newData,
        })
            .then((res: any) => {
                Swal.fire("Sign Up Success!!!", "Click OK to Login", "success").then(
                    () => {
                      props.history.push("/signIn");
                    }
                  );
                dispatch(actSignUp(res.data));
            })
            .catch((err: any) => {
                Swal.fire("Fail to Sign Up ", err.response.data, "error");
            })
    }
}
export const actSignUp = (user: any) => {
    return {
        type: ActionType.SIGN_UP,
        data: user
    }
}







