import React from "react";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import {
  DivSlider,
  DivContentImages,
  DivContainer,
  DivContentSliderImage,
  DivContentIntroduce,
} from "./styled-component-carousel";
const DivSliderCarousel = styled.div``;
export const DivSliderMobile = styled.div`
  display: none;
  @media only screen and (max-width: 767px) {
    height: 100vh;
    display: block;
  }
`;
function Carousel() {
  return (
    <DivSliderCarousel>
      <DivSliderMobile>123</DivSliderMobile>
      <DivSlider>
        <DivContainer>
          <Container>
            <DivContentImages>
              <DivContainer>
                <DivContentSliderImage></DivContentSliderImage>
              </DivContainer>
              <DivContentIntroduce>
                The place to train professional programmers, Come With Us A
                Place To Help You Become A Professional Programmer, Bring
                patience and diligence to succeed
              </DivContentIntroduce>
            </DivContentImages>
          </Container>
        </DivContainer>
      </DivSlider>
    </DivSliderCarousel>
  );
}

export default Carousel;
