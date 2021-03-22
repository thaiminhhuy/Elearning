import styled from "styled-components";



export const Div = styled.div`
  background-image: url(../../images/background1.jpg);
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const DivSpace = styled.div`
  height: 87px;
`
export const DivCard = styled.div`
  &.yellow{
    background-color: #ff3d00;
  }
  &.blue{
    background-color: #307ad5;
  }
  &.blueSea{
    background-color: #0d47a1;
  }
  &.green{
    background-color: #10c45c;
  }
  &.purple{
     background-color: #d94da6;
  }
  &.pink{
    background-color: #8564ea;
  }
  &:hover{
    transform: translateY(-10px);
  }
  padding: 15px;
  margin: 0 0 33px;
  min-height: 200px;
  align-items: center;
  justify-content: center;
  transition: .3s ease;
  border-radius: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const H4 = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`
export const DivButton = styled.div`
display: block;
margin-bottom: 21.73913043px;
max-width: 100%;
text-align: center;
`
export const Button = styled.button`
    border-color: #fff;
    background-color: transparent;
    min-width: 190px;
    padding: 17px 24px;
    color: white;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: .7px;
    border-radius: 15px;
    &:hover{
      color: #666;
      border-color: #fff;
      background-color: #ffffffeb;
    }
`