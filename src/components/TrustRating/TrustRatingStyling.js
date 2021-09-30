import styled from "styled-components"



export const RatingContainer = styled.div`
    color: grey;
    font-size: 2rem;
`;

export const Star = styled.span`
        
    ${({selected, hoverSelected}) => {
        switch(true) {
            case selected: {
                return 'color: hsl(49, 82%, 56%)';
            }
            case hoverSelected: {
                return 'color: hsl(49, 82%, 76%)';
            }
            default: {
                return 'color: hsl(0, 0%, 30%)';
            }
        }
    }};


`;

