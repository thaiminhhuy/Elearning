import styled from "styled-components";

export const Item = styled.div`
padding: 20px;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid #f1f1f1;
`

export const QuantityAdjustment = styled.div`
flex-direction: column-reverse;
    width: 30px;
    padding: 10px 0;
    background-color: #f7f7f7;
    color: #0d1136;
    font-weight: 600;
    border-radius: 30px;
    font-size: 16px;
`

export const Img = styled.div`
width: 70px;
height: 70px;
margin: 0 15px;
flex-shrink: 0;
`

export const Info = styled.div`
 flex-grow: 1;
`