import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
// import Courses from "./ItemCourse/course/DetailForCourse";
import NewCourses from "./ItemCourse/course/newDetailForCourse";
function ListCourses(props: any) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let { listCourses } = props;

  const renderListCourses = () => {
    return listCourses.map((course: any, index: any) => {
    

      return <NewCourses course={course} key={index} />;
    });
  };
  const Wrapper = styled.div`
    .course {
      &:focus {
        outline: none !important;
      }
    }
    .slick-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .slick-prev {
      left: -15px;
      z-index: 99999;
      :before {
        font-size: 35px;
        color: #234;
      }
    }
    .slick-next {
      z-index: 99999;
      border-radius: 50%;
      right: 0px;

      :before {
        font-size: 35px;
        color: #234;
      }
    }
    .listcourse-titel {
      text-align: center;
      font-size: 40px;
    }
    @media only screen and (max-width: 660px) {
      .listcourse-titel {
        text-align: center;
        font-size: 18px;
      }
    }
  `;
  const Div = styled.div`
    &.listcourse {
      padding: 40px 0 0 0;
      height: 500px;
      margin-top: 3em;
      background-image: url(/images/backgroundforlist.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      background-attachment: fixed;
      color: #fff;
    }
    &.tiltecourse {
      text-align: center;
      padding: 50px 20px 50px 20px;
      font-size: 25px;
    }
  `;

  return (
    <React.Fragment>
      <Div className="listcourse">
        {/* <DivContaintSearch>
        <InputForSearchCourses type="text" placeholder="Search For Courses" />

        <span>Search</span>
      </DivContaintSearch> */}
        <Container>
          <Wrapper>
            <p className="listcourse-titel">LIST OF COURSES</p>
            <Slider {...settings}>{renderListCourses()}</Slider>
          </Wrapper>
        </Container>
      </Div>
    </React.Fragment>
  );
}

export default ListCourses;
