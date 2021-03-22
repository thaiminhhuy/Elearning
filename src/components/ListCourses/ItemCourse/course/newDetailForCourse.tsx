import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import img1 from "../../../../images/jane-doe.jpg";
import img2 from "../../../../images/george-clinton.jpg";
import img3 from "../../../../images/george-richards.jpg";
import { Link } from "react-router-dom";
import "../style/style.css";
function NewCourses(props: any) {
  let { course } = props;

 

  return (
    <div className="course">
      <div className="front">
        <img src={course.hinhAnh} alt="" className="course__img" />

        <h3 className="name-course">{course.tenKhoaHoc}</h3>
        <div className="contain-viewers-img">
          <p className="views">
            {course.luotXem}
            <VisibilityIcon />
          </p>
          <div className="contain-img">
            <img src={img1} alt="" className="contain__img" />
            <img src={img2} alt="" className="contain__img" />
            <img src={img3} alt="" className="contain__img" />
          </div>
        </div>
      </div>

      <div className="back">
        <div className="coursesInfor">
          <p className="startandview">
            {course.luotXem}
            <span>Watching</span>
          </p>
          <p className="startandview">
            {course.ngayTao}
            <span>Opening</span>
          </p>
        </div>
        <Button variant="contained" color="secondary">
          <Link to={`/detail/${course.maKhoaHoc}`} className="colorStyle">
            See Detail
          </Link>
        </Button>
      </div>

      <div className="background"></div>
    </div>
  );
}

export default NewCourses;
