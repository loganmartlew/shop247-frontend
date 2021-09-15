import styled from 'styled-components';

export const FooterContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.pewter};
    padding: 20px;
	font-size: 80%;
`;

export const Links = styled.div`
    color: black;
    text-align: center;
    padding-left: 25px;
`;

export const About = styled.li`
    list-style: none;
    display: inline-block;
`;

export const Careers = styled.li`
    list-style: none;
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;
`;

export const terms = styled.li`
    list-style: none;
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;
`;

export const Contactus = styled.li`
    list-style: none;
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;
`;

export const Logos = styled.div`
    float: right;
    padding-right: 20px;
    color: black;
    font-size: 150%;
`;

export const FacebookLogo = styled.li`
    list-style: none;
    display: inline-block;
    padding-right: 10px;
`;

export const TwitterLogo = styled.li`
    list-style: none;
    display: inline-block;
    padding-right: 10px;
`;

export const InstagramLogo = styled.li`
    list-style: none;
    display: inline-block;
`;

export const Copyright = styled.div`
    color: black;
	text-align: left;
	font-size: 90%;
`;