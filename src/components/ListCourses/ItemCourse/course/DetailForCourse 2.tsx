import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import img1 from "../../../../images/jane-doe.jpg";
import img2 from "../../../../images/george-clinton.jpg";
import img3 from "../../../../images/george-richards.jpg";
import { Link } from "react-router-dom";

function Courses(props: any) {
  let { course } = props;

  const DivGame = styled.div`
    padding: 30px;
    position: relative !important;
    width: 14em !important;
    color: white;
    .course__img {
      min-height: 100px;
      max-width: 100%;
      border-radius: 0.5em;
    }
    &:hover {
      z-index: 1;

      .name-course {
        color: white;
        animation: gameName 250ms forwards;
      }
      .front {
        transform: translateY(-20%) scale(0.8);
        color: white;
      }
      .background {
        background: #009e7f;
        transition: transform 250ms ease-in-out, opacity 100ms linear;
        opacity: 1;
        transform: scale(1, 0.5);
        display: block;
        min-height: 350px;
        border-radius: 0.5rem;
      }
      .contain-viewers-img {
        display: none;
      }
      .back {
        opacity: 1;
        bottom: 0;
      }
      .colorStyle {
        color: #fff;
        text-decoration: none !important;
      }
    }
  `;

  const ElementP = styled.p`
    &.views {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &.startandview {
      font-size: 0.725rem;
      text-align: center;
      padding: 0.3rem;
    }
  `;
  const Div = styled.div`
    &.contain-viewers-img {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &.back {
      opacity: 0;
      position: absolute;
      bottom: 5%;
      right: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      .colorStyle {
        text-decoration: none !important;
      }
    }
    &.coursesInfor {
      columns: 2;
      column-rule: 1px solid white;
      display: flex;
      align-items: center;
      color: white;
    }
    &.contain-img {
      display: flex;
      .contain__img
      {
        max-width: 100%;
        width: 1.5em;
          height: 1.5em;
          border-radius: 50%;
          border: 2px solid #0d1113; }
          &:nth-of-type(1) {
            transform: translate(50%);
            z-index: 1; }
         &:nth-of-type(2) {
            transform: translate(25%);
            z-index: 1; }
      }
    }
    &.background {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
      transform: scale(0.2, 0.9);
      transition: 250ms;
      border-radius: 0.5em;
      opacity: 0;
    }
  `;

  const SpanCoursesInfor = styled.span`
    font-size: 1rem;
    display: block;
  `;

  const H3Name = styled.h3`
    white-space: nowrap;
    @keyframes gameName {
      0% {
        text-align: center;
        opacity: 1;
      }
      20% {
        text-align: center;
        opacity: 0;
      }
      50% {
        text-align: center;
        opacity: 0;
      }
      100% {
        text-align: center;
        opacity: 1;
      }
    }
  `;

  return (
    <DivGame className="course">
      <div className="front">
        <img src={course.hinhAnh} alt="" className="course__img" />

        <H3Name className="name-course">{course.tenKhoaHoc}</H3Name>
        <Div className="contain-viewers-img">
          <ElementP className="views">
            {course.luotXem}
            <VisibilityIcon />
          </ElementP>
          <Div className="contain-img">
            <img src={img1} alt="" className="contain__img" />
            <img src={img2} alt="" className="contain__img" />
            <img src={img3} alt="" className="contain__img" />
          </Div>
        </Div>
      </div>

      <Div className="back">
        <Div className="coursesInfor">
          <ElementP className="startandview">
            {course.luotXem}
            <SpanCoursesInfor>Watching</SpanCoursesInfor>
          </ElementP>
          <ElementP className="startandview">
            {course.ngayTao}
            <SpanCoursesInfor>Opening</SpanCoursesInfor>
          </ElementP>
        </Div>
        <Button variant="contained" color="secondary">
          <Link to={`/detail/${course.maKhoaHoc}`} className="colorStyle">
            See Detail
          </Link>
        </Button>
      </Div>

      <Div className="background"></Div>
    </DivGame>
  );
}

export default Courses;
