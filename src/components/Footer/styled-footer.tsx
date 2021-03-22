import styled from "styled-components";
export const BodyFooter = styled.div`
    background-color: #2c2e32;
    padding-top: 83px;
    padding-bottom: 0;
    padding: 63px 0 30px;
    color: #ccc;
    box-sizing: border-box;
    display: block;
`;
export const PageContent = styled.aside`
    float: left;
    padding: 0 15px 15px;
    width: 25%;
`;
export const PageContentIMG = styled.aside`
    float: left;
    padding: 0 15px 15px;
    width: 25%;
    @media (min-width: 600px) and (max-width: 850px){
        display: none;
    }
    @media (min-width: 320px) and (max-width: 439px){
        display: none;
    }
`;
export const Content = styled.div`
    box-sizing: border-box;
    display: block;
`;

export const H6Content = styled.h6`
    padding-top: 10px;
    font-size: 18px;
    margin: 0;
    letter-spacing: 2px;
    text-transform: uppercase;
    border: none;
    :hover {
        color: #009e7f;
    }
     
`;
export const PageList = styled.ul`
    padding: 0;
    list-style: none;
`;
export const PageListItem = styled.li`
    margin-bottom: 0;
    list-style: none;
`;
export const H6Item = styled.a`
    position: relative;
    display: block;
    padding: 5px 0;
    color: #fff;
    font-size: 12px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    text-decoration: none !important;
    line-height: 12px;
    font-weight: 400;
    :hover{
        color:#009e7f;
    }
`;
export const PageListIMG = styled.ul`
    padding: 0;
    list-style: none;
    display:flex;
`;
export const PageListItemIMG = styled.li`
    float: left;
    margin: 0 5px 10px;
    width: 45px;
    height: 45px;
`;
export const IMGitem = styled.li`
    transition: .6s;
    transform-style: preserve-3d;
    position: relative;
`;
export const H6ItemIMG = styled.a`
    position: relative;
    display: block;
    padding: 4px 5px;
    color: #fff;
    font-size: 18px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    text-decoration: none !important;
    line-height: 12px;
    font-weight: 400;
    background-color: #48a7d4;
    border: 1px solid #48a7d4;
    border-radius: 50%;
    :hover{
        color:white;
        background-color:#009e7f;
        border: 1px solid #009e7f;
    }


    
    
`;
