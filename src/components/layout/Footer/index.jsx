import {FooterContainer, Links, About, Logos, FacebookLogo, TwitterLogo, InstagramLogo, Copyright} from './FooterStyles';
import {AiOutlineFacebook} from 'react-icons/ai';
import {AiFillTwitterSquare} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';

const Footer = () => {
    return (
        <FooterContainer >
            <Links>
                <About>Link to About page</About>
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