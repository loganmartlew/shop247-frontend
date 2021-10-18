import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { FacebookLogo, InstagramLogo, Logos } from './SocialLinksStyles';

const SocialLinks = ({ user }) => {
  return (
    <Logos>
      {user?.social?.facebook && (
        <a href={user.social.facebook} target='_blank' rel='noreferrer'>
          <FacebookLogo data-testid='facebook'>
            <AiOutlineFacebook />
          </FacebookLogo>
        </a>
      )}
      {user?.social?.instagram && (
        <a href={user.social.instagram} target='_blank' rel='noreferrer'>
          <InstagramLogo data-testid='instagram'>
            <AiOutlineInstagram />
          </InstagramLogo>
        </a>
      )}
    </Logos>
  );
};

export default SocialLinks;
