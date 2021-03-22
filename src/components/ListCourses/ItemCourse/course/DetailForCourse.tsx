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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f671e7b194993178b1be98e8c898a7d4d9bcf362
    .course__img {
      border-radius: 0.5em;
      width: 100%;

      height: 100px;
    }
<<<<<<< HEAD
=======

>>>>>>> 69b1ac88112264326407729e4c2ac22254cffe0b
=======
>>>>>>> f671e7b194993178b1be98e8c898a7d4d9bcf362
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

  const DivViews = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const DivBackInFor = styled.div`
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
  `;
  const DivCoursesInfor = styled.div`
    columns: 2;
    column-rule: 1px solid white;
    display: flex;
    align-items: center;
    color: white;
  `;
  const PCoursesStartandViewers = styled.p`
    font-size: 0.725rem;
    text-align: center;
    padding: 0.3rem;
  `;
  const SpanCoursesInfor = styled.span`
    font-size: 1rem;
    display: block;
  `;
  const DivContainIMG = styled.div`
    display: flex;
  `;
  const ContainIMG = styled.img`
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
  `;
  const IMGCourse = styled.img`
    min-height: 100px;
    max-width: 100%;
    border-radius: 0.5em;
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
  const DivContaintViewersAndIMGs = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const DivBackGroundForCourse = styled.div`
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
  `;
  return (
    <DivGame className="course">
      <div className="front">
        <IMGCourse src={course.hinhAnh} alt="" />

        <H3Name className="name-course">{course.tenKhoaHoc}</H3Name>
        <DivContaintViewersAndIMGs className="contain-viewers-img">
          <DivViews>
            {course.luotXem}
            <VisibilityIcon />
          </DivViews>
          <DivContainIMG>
            <ContainIMG src={img1} alt="" />
            <ContainIMG src={img2} alt="" />
            <ContainIMG src={img3} alt="" />
          </DivContainIMG>
        </DivContaintViewersAndIMGs>
      </div>

      <DivBackInFor className="back">
        <DivCoursesInfor>
          <PCoursesStartandViewers>
            {course.luotXem}
            <SpanCoursesInfor>Watching</SpanCoursesInfor>
          </PCoursesStartandViewers>
          <PCoursesStartandViewers>
            {course.ngayTao}
            <SpanCoursesInfor>Opening</SpanCoursesInfor>
          </PCoursesStartandViewers>
        </DivCoursesInfor>
        <Button variant="contained" color="secondary">
          <Link to={`/detail/${course.maKhoaHoc}`} className="colorStyle">
            See Detail
          </Link>
        </Button>
      </DivBackInFor>

      <DivBackGroundForCourse className="background"></DivBackGroundForCourse>
    </DivGame>
  );
}

export default Courses;
