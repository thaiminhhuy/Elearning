import React, { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { DivItem2, H3Item2 } from "../styled-inforusers";
import Axios from "axios";
const useStyles = makeStyles((theme: Theme) => ({
  root2: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    },
    display: "flex"
  }
}));

interface Inputs {
  email: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  errorInput: string;
}

export default function UserProfile() {
  const classes = useStyles();
  const [taiKhoan, settaiKhoan] = useState("");
  const [matKhau, setmatKhau] = useState("");
  const [hoTen, sethoTen] = useState("");
  const [soDT, setsoDT] = useState("");
  const [maLoaiNguoiDung, setmaLoaiNguoiDung] = useState("");
  const [maNhom, setmaNhom] = useState("");
  const [email, setemail] = useState("");
  const [detail, setDetail] = useState();
  const [isOk, setIsOk] = useState(false);

  const { register, handleSubmit, errors } = useForm<Inputs>({
    mode: "onBlur"
  });

  useEffect(() => {
    if (localStorage.getItem("user")) {
      let userLocalS: any = localStorage.getItem("user");
      if (userLocalS) {
        var user = JSON.parse(userLocalS);
      }
      setDetail(user);
    }
  }, []);
  useEffect(() => {
    settaiKhoan(detail?.taiKhoan);
    setmaLoaiNguoiDung(detail?.maLoaiNguoiDung);
    setmaNhom(detail?.maNhom);
    setmatKhau(detail?.matKhau);
    sethoTen(detail?.hoTen);
    setsoDT(detail?.soDT);
    setemail(detail?.email);
  }, [detail]);

  const editUser = () => {
    let obj = {
      taiKhoan: taiKhoan,
      matKhau: matKhau,
      hoTen: hoTen,
      soDT: soDT,
      maLoaiNguoiDung: maLoaiNguoiDung,
      maNhom: maNhom,
      email: email
    };
    Axios({
      method: "PUT",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      data: obj,
      headers: {
        Authorization: `Bearer ${detail?.accessToken}`
      }
    })
      .then(() => {
        let userLocal: any = localStorage.getItem("user");
        if (userLocal) {
          var allUser: any = JSON.parse(userLocal);
        }
        allUser.hoTen = hoTen;
        allUser.email = email;
        allUser.soDT = soDT;
        allUser.matKhau = matKhau;
        setIsOk(true);
        Swal.fire(
          "Account Editing Is Successful!",
          "Nhấn OK để thoát!",
          "success"
        );
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(allUser));
      })
      .catch(error => {
        console.log(error);
        Swal.fire("Account Editing Failed!", error.response.data, "error");
      });
  };
  const enable = matKhau?.length > 0
    && hoTen?.length > 0
    && soDT?.length > 0
    && email?.length > 0
    && soDT?.match("^[0-9]{1,20}$")
    && email?.match("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");
  return (
    <DivItem2>
      <form>
        <div style={{ marginBottom: "3rem" }}>
          <H3Item2>Your Profile</H3Item2>
          <form className={classes.root2} >
            <TextField id="name-basic" label="Account" name="taiKhoan" value={taiKhoan} disabled />
            <TextField
              id="email-basic"
              label={errors.matKhau ? "Error Password" : "Password"}
              name="matKhau"
              value={matKhau}
              onChange={e => {
                setmatKhau(e.target.value)
              }}
              inputRef={register({
                required: true,
              })}
              error={errors.matKhau && true}
              helperText={errors.matKhau?.type === "required" && "Password input is required"}
            />
          </form>
        </div>
        <div style={{ marginBottom: "3rem" }}>
          <form className={classes.root2}>
            <TextField
              id="name-basic"
              label={errors.hoTen ? "Error Name" : "Name"}
              name="hoTen"
              value={hoTen}
              onChange={e => sethoTen(e.target.value)}
              inputRef={register({
                required: true,
              })}
              error={errors.hoTen && true}
              helperText={errors.hoTen?.type === "required" && "Name input is required"}
            />
            <TextField

              id="email-basic"
              label={errors.email ? "Error Email" : "Email"}
              name="email"
              value={email}
              onChange={e => setemail(e.target.value)}
              inputRef={register({
                required: true,
                maxLength: 30,
                pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i
              })}
              error={errors.email && true}
              helperText={errors.email?.type === "required" && "Email input is required" || errors.email?.type === "pattern" && "Email is invalid"}
            />
          </form>
        </div>
        <div style={{ marginBottom: "3rem" }}>
          <form className={classes.root2}>
            <TextField id="email-basic" label="User Type Code" value={maLoaiNguoiDung} disabled />
            <TextField
              id="phone-basic"
              label={errors.soDT ? "Error Phone Number" : "Phone Number"}
              name="soDT"
              value={soDT}
              onChange={e => setsoDT(e.target.value)}
              inputRef={register({
                required: true,
                pattern: /[0-9]{1,20}$/i
              })}
              error={errors.soDT && true}
              helperText={errors.soDT?.type === "required" && "Phone Number is required" || errors.soDT?.type === "pattern" && "Phone is Invalid"}
            />
          </form>
        </div>
        <div style={{ marginBottom: "3rem" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#009e7f" }}
            size="large"
            startIcon={<SaveIcon />}
            onClick={editUser}
            disabled={!enable}
          >
            Save your changes
          </Button>
        </div>
      </form>
    </DivItem2>
  );
}
