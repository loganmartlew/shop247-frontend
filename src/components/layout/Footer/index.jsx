import {FooterContainer, Links, About, Logos, FacebookLogo, TwitterLogo, InstagramLogo, Copyright, Careers, terms, Contactus, Termscon} from './FooterStyles';
import {AiOutlineFacebook} from 'react-icons/ai';
import {AiFillTwitterSquare} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <FooterContainer >
            <Links>
                <Link to='/'>
                    <About>About Us</About>
                </Link>
                <Link to='/'>
                    <Careers>Careers</Careers>
                </Link>
                <Link to='/'>
                    <Termscon>Terms & Conditions</Termscon>
                </Link>
                <Link to='/'>
                    <Contactus>Contact Us</Contactus>
                </Link>
            </Links>

            <Logos>
                <Link to='/'>
                    <FacebookLogo><AiOutlineFacebook /></FacebookLogo>
                </Link>
                <Link to='/'>
                    <TwitterLogo><AiFillTwitterSquare /></TwitterLogo>
                </Link>
                <Link to='/'>
                    <InstagramLogo><AiOutlineInstagram /></InstagramLogo>
                </Link>
            </Logos>
            <Copyright>Copyright &copy; 2021 by Shop247. All rights reserved.</Copyright>
        </FooterContainer>
    )
};

export default Footer;