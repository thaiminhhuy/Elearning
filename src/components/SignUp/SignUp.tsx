import React from "react";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import { connect } from "react-redux"
import {
  BodySignUp,
  DivBackground,
  DivSignUpContent,
  H2SignUp,
  DivFormGroup,
  InputFormSignUp,
  InputSubmitSignUp,
  ElementpLoginHere,
  ElementaLoginHere,
} from "./styled-component-signup";
import * as action from "./modules/Action/Action";
interface InputSignUp {
  taiKhoan: string,
  matKhau: string,
  hoTen: string,
  soDT: string,
  maNhom: string,
  email: string,
  maLoaiNguoiDung: string,
}
function SignUp(props: any) {
  const { register, handleSubmit, errors } = useForm<InputSignUp>({
    mode: "onBlur"
  });
  const onSubmit = (data: InputSignUp) => {
    props.getSignUp(data);
  }
  const moveToLogin = () => {
    props.history.push("/signIn")
  }
  return (
    <BodySignUp>
      <DivBackground>
        <Container maxWidth="sm">
          <DivSignUpContent>
            <form id="signup-form" className="signup-form" onSubmit={handleSubmit(onSubmit)}>
              <H2SignUp>Create account</H2SignUp>
              <DivFormGroup>
                <InputFormSignUp name="email" type="text" placeholder="Your Email" ref={register({
                  required: true,
                  maxLength: 30,
                  pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                })}
                  style={{ borderColor: errors.email && "red" }}
                />
                {errors.email?.type === "required" && (
                  <p style={{ color: "red" }}>Your input is required</p>
                )}
                {errors.email?.type === "pattern" && (
                  <p style={{ color: "red" }}>Your email is invalid</p>
                )}
              </DivFormGroup>
              <DivFormGroup>
                <InputFormSignUp name="taiKhoan" type="text" placeholder="Account" ref={register({
                  required: "Please enter your Account",
                  maxLength: 20,
                })}
                  style={{ borderColor: errors.taiKhoan && "red" }} />
                {errors.taiKhoan && (
                  <p style={{ color: "red" }}>{errors.taiKhoan.message}</p>
                )}
              </DivFormGroup>
              <DivFormGroup>
                <InputFormSignUp name="matKhau" type="password" placeholder="Password" ref={register({
                  required: "Please enter your Password",
                  maxLength: 20,
                })} style={{ borderColor: errors.matKhau && "red" }} />
                {errors.matKhau && (
                  <p style={{ color: "red" }}>{errors.matKhau.message}</p>
                )}
              </DivFormGroup>

              <DivFormGroup>
                <InputFormSignUp name="hoTen" type="text" placeholder="Your Name" ref={register({
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i
                })} style={{ borderColor: errors.hoTen && "red" }} />
                {errors.hoTen?.type === "required" && (
                  <p style={{ color: "red" }}>Your input is required</p>
                )}
                {errors.hoTen?.type === "pattern" && (
                  <p style={{ color: "red" }}>Your name is invalid</p>
                )}
              </DivFormGroup>
              <DivFormGroup>
                <InputFormSignUp name="soDT" type="text" placeholder="Phone Number" ref={register({
                  required: "Please enter your Phone (10 numbers)",
                  pattern: /[0-9]{10}$/i
                })} style={{ borderColor: errors.soDT && "red" }} />
                {errors.soDT?.type === "required" && (
                  <p style={{ color: "red" }}>Your input is required</p>
                )}
                {errors.soDT?.type === "pattern" && (
                  <p style={{ color: "red" }}>Your phone is invalid (10 numbers)</p>
                )}
              </DivFormGroup>
              <DivFormGroup>
                <InputSubmitSignUp
                  type="submit"
                  placeholder="Code Group"
                  value="Sign up"
                />
              </DivFormGroup>
            </form>
            <ElementpLoginHere>
              Have already an account ?
              <ElementaLoginHere
                className="loginhere-link"
                onClick={moveToLogin}
              >
                Login here
              </ElementaLoginHere>
            </ElementpLoginHere>
          </DivSignUpContent>
        </Container>
      </DivBackground>
    </BodySignUp>
  );
}
const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    getSignUp: (data: any) => {
      dispatch(action.actSignUpAPI(data, props));
    }
  }
}
export default connect(null, mapDispatchToProps)(SignUp);

