import styled from 'styled-components';


export const Tile = styled.div`
    
    border-style:solid;
    border-color: gray;
    border-width: 2px;
    border-radius: 10px;
    margin: 10px 10px 10px 10px;
    display:inline-block;
    width:300px;
    

`;

export const Title = styled.h3` 
    padding-top: 20px;
    padding-bottom: 10px;
    text-align: center;
    font-family: inherit;
`;

export const Subtitle = styled.h4` 
    padding-bottom: 10px;
    text-align: center;
    font-family: inherit;
`;

export const Info = styled.h5`
    text-align: center;
    font-family: inherit;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    
`;

export const Img = styled.img`
    border-style: solid;
    border-color: black;
    border-width: 2px;
    
`;

export const Price = styled.h4`
    float: right;
    font: inherit;
    font-weight: bolder;
    padding-right: 20px;
    padding-top: 20px;
`;