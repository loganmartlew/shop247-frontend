import {FooterContainer, Links, About, Logos, FacebookLogo, TwitterLogo, InstagramLogo, Copyright, Careers, terms, Contactus} from './FooterStyles';
import {AiOutlineFacebook} from 'react-icons/ai';
import {AiFillTwitterSquare} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';

const Footer = () => {
    return (
        <FooterContainer >
            <Links>
                <About>About Us</About>
                <Careers>Careers</Careers>
                <terms>Terms & conditions</terms>
                <Contactus>Contact Us</Contactus>
            </Links>
            <Logos>
                <FacebookLogo><AiOutlineFacebook /></FacebookLogo>
                <TwitterLogo><AiFillTwitterSquare /></TwitterLogo>
                <InstagramLogo><AiOutlineInstagram /></InstagramLogo>
            </Logos>
            <Copyright>Copyright &copy; 2021 by Shop247. All rights reserved.</Copyright>
        </FooterContainer>
    )
};

export default Footer;