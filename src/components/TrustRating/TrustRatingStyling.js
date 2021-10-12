import styled from "styled-components"



export const RatingContainer = styled.div`
    color: grey;
    font-size: 1.2rem;
    padding-left: 10px;
`;

export const Star = styled.span`
    
            
    ${({selected, hoverSelected}) => {
        switch(true) {
            case selected: {
                return 'color: hsl(51, 100%, 50%)'; //gold
            }
            case hoverSelected: {
                return 'color: hsl(60, 100%, 50%)'; //yellow
            }
            default: {
                return 'color: grey';
            }
        }
    }};


`;



