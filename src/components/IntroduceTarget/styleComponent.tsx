import styled from "styled-components";

export const Div = styled.div`
  &.start {
    margin: 50px 0px;
    background-color: #009e7f !important;
    img {
      max-width: 100%;
    }
  }

  &.images {
    text-align: center;
    img {
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.18);
      border-radius: 40px;
      transition: 0.3s;
      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 18.69px 2.31px rgba(77, 179, 113, 0.5);
        transition: all 0.5s ease;
        z-index: 1;
      }
    }
  }

  @media only screen and (max-width: 959px) {
    &.content {
      text-align: center;
    }
  }

  &.div-padding {
    padding: 2em;
  }
`;
