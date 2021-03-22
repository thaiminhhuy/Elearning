import React from "react";
import { DivProductView, ButtonCard, ButtonBack, Img } from "./StyleDetail";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Container from "@material-ui/core/Container";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Cart from "../SearchForListCourses/cart";
import { RouteComponentProps, withRouter, useParams } from "react-router-dom";
import { rootState } from "../../redux/reducers/Reducers";
import { connect } from "react-redux";
import { useEffect } from "react";
import Axios from "axios";
import { Course, CourseFromCard } from "../Interface/Interface";
import * as action from "../SearchForListCourses/moduleSeartchForCard/actions/action";
const useStyles = makeStyles((theme) => ({
  h2: {
    fontSize: "21px",
    fontWeight: 700,
    color: "#0d1136",
  },
  p: {
    fontSize: "14px",
    color: "#77798c",
  },
  content: {
    fontSize: "15px",
    fontWeight: 400,
    color: "#777a8c",
    lineHeight: "1.8",
    height: "115px",
    // do readMore and less
    overflow: "hidden",
    margin: "0",
  },
  readMore: {
    color: "#009e7f",
    fontWeight: 600,
    cursor: "pointer",
    marginBottom: "50px",
    textTransform: "uppercase",
  },
  price: {
    fontSize: "22px",
    fontWeight: 600,
    color: "#009e7f",
    marginBottom: "20px",
  },
  add: {
    margin: "0px 10px",
    cursor: "pointer",
  },
  icon: {
    margin: "-7px 0px",
    fontSize: "25px",
  },
  backButton: {
    zIndex: 99999,
    cursor: "pointer",
  },
}));
// interface Props {
//   arrContainCourseAndQuantity: Course[];
//   allQuantity: 0;
// }
// interface PropsParams extends RouteComponentProps<{ id: string }> {}
interface Props {
  handleIncreaseCourse: (value: any) => void;
  handleDecrease: (value: any) => void;
  handleDeleteCourse: (value: any) => void;
}
function CourseDetailChild(props: any) {
  const classes = useStyles();
  const [isOpen, setOpen] = React.useState(false);
  const [newCourse, setNewCourse] = React.useState({
    maKhoaHoc: "string",
    biDanh: "string",
    tenKhoaHoc: "string",
    moTa: "string",
    luotXem: Number,
    hinhAnh: "string",
    maNhom: "string",
    ngayTao: "string",
    soLuongHocVien: Number,
    nguoiTao: {
      taiKhoan: "string",
      hoTen: "string",
      maLoaiNguoiDung: "string",
      tenLoaiNguoiDung: "string",
    },
    danhMucKhoaHoc: {
      maDanhMucKhoahoc: "string",
      tenDanhMucKhoaHoc: "string",
    },
  });
  let { arrContainCourseAndQuantity, allQuantity } = props;
  // let id = props.match.params.id;
  let { id } = useParams();
  console.log(arrContainCourseAndQuantity);

  const [valueForCart, setValueForCart] = React.useState(false);
  const handleCart = (value: any) => {
    setValueForCart(value);
  };
  // console.log(props.arrContainCourseAndQuantity);
  const handleIncreaseCourse = (course: any) => {
    props.increaseCourse(course);
  };
  const handleDecrease = (course: any) => {
    props.decreaseCourse(course);
  };
  const handleDeleteCourse = (course: any) => {
    props.deleteCourse(course);
  };
  const sendArrContainCourseAndQuantity = (value: Course[]) => {
    props.sendArrCourseToStore(value);
  };
  useEffect(() => {
    console.log(id);

    Axios({
      method: "GET",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
    })
      .then((res: any) => {
        setNewCourse(res.data);
      })
      .catch((err: any) => {
        console.log(err.request);
      });
  }, []);
  return (
    <React.Fragment>
      <ButtonBack
        className={classes.backButton}
        onClick={() => {
          console.log(1);

          props.history.push("/");
        }}
      >
        <ArrowBackIcon className={classes.icon} />
        <Typography component="span" variant="button">
          Back
        </Typography>
      </ButtonBack>
      <Container>
        <DivProductView>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <Grid lg={6} xl={6} md={6}>
              <Img>
                <img
                  src={newCourse.hinhAnh}
                  width="100%"
                  height="100%"
                  alt=""
                />
              </Img>
            </Grid>
            <Grid lg={6} xl={6} md={6}>
              <Typography variant="h5" component="h2" className={classes.h2}>
                {newCourse.biDanh}
              </Typography>
              <Typography
                variant="caption"
                component="span"
                className={classes.p}
              >
                By {newCourse.nguoiTao.hoTen}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className={classes.content}
              >
                The direction and constancy of the will is what really matters,
                and intellect and feeling are only important insofar as they
                contribute to that . There is only one way to happiness, and
                that is to cease worrying things which are beyond the power of
                our will . Don’t let your will roar when your power only
                whispers. You can bind my body, tie my hands, govern my actions:
                you are the strongest, and society adds to your power; but with
                my will, sir, you can do nothing.
              </Typography>
              <Typography
                component="div"
                variant="button"
                className={classes.readMore}
              >
                read more
              </Typography>
              <Typography component="div" className={classes.price}>
                $10
              </Typography>
              <Typography component="div">
                <ButtonCard>
                  <ShoppingBasketIcon />
                  <Typography
                    component="p"
                    className={classes.add}
                    onClick={() => {
                      setOpen(true);
                      setValueForCart(true);
                      props.sendCourse(newCourse);
                    }}
                  >
                    Add To Cart
                  </Typography>
                </ButtonCard>
              </Typography>
            </Grid>
          </Grid>
        </DivProductView>
      </Container>

      <Cart
        valueForCart={valueForCart}
        handleCart={handleCart}
        arrContainCourseAndQuantity={arrContainCourseAndQuantity}
        allQuantity={allQuantity}
        handleIncreaseCourse={handleIncreaseCourse}
        handleDecrease={handleDecrease}
        handleDeleteCourse={handleDeleteCourse}
        sendArrContainCourseAndQuantity={sendArrContainCourseAndQuantity}
      />
    </React.Fragment>
  );
}
// const mapStateToProps = (state: rootState) => {
//   return {
//     newDetailCourse: state.detailCourseReducer.detailCourse,
//   };
// };
// const mapDispatchToProps = (dispatch: any) => {
//   return {};
// };

// const CourseDetail = withRouter(CourseDetailChild as any); //Note: It is a workaround not an actual solution
// export default CourseDetail;
const mapStateToProps = (state: rootState) => {
  return {
    arrContainCourseAndQuantity: state.cardReducer.ArrContainCourseAndQuantity,
    allQuantity: state.cardReducer.quantity,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    sendCourse: (course: any) => {
      dispatch(action.actSendCourseToStore(course));
    },
    increaseCourse: (course: any) => {
      dispatch(action.actIncreaseCourses(course));
    },
    decreaseCourse: (course: any) => {
      dispatch(action.actDecreaseCourses(course));
    },
    deleteCourse: (course: any) => {
      dispatch(action.actDeleteCourses(course));
    },
    sendArrCourseToStore: (value: Course[]) => {
      dispatch(action.actSendArrContainCourseAndQuantity(value));
    },
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CourseDetailChild) as any
);
