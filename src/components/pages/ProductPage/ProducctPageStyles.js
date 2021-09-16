
import styled from 'styled-components';

export const ProductContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
    display: inline-block;

`;

export const Name = styled.h2`
    color: ${({ theme }) => theme.colors.black};
    padding-top: 40px;
    padding-right: 40px;
    padding-bottom: 170px; //I just choose this number because it adds the total padding top and bottom to 300
    padding-left: 40px;
`;

export const Description = styled.h3`
    color: ${({ theme }) => theme.colors.black};
    padding: 10px 40px 30px 40px;
`;

export const Price = styled.h3`
    color: ${({ theme }) => theme.colors.black};
    padding: 10px 20px 20px 40px;
    float: right;
`;


