import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { FacebookLogo, InstagramLogo, Logos } from './SocialLinksStyles';

const SocialLinks = ({ user }) => {
  return (
    <Logos>
      {user.social?.facebook && (
        <a href={user.social.facebook}>
          <FacebookLogo>
            <AiOutlineFacebook />
          </FacebookLogo>
        </a>
      )}
      {user.social?.instagram && (
        <a href={user.social.instagram}>
          <InstagramLogo>
            <AiOutlineInstagram />
          </InstagramLogo>
        </a>
      )}
    </Logos>
  );
};

export default SocialLinks;
