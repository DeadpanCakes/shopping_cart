import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }

  return (
    <nav>
      <ul style={containerStyle}>
        <li>
          <a href="https://twitter.com/" className='socialMediaLink'>
            <FontAwesomeIcon icon={faTwitter}  size={'lg'}/>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/" className='socialMediaLink'>
            <FontAwesomeIcon icon={faInstagram} size={'lg'}/>
          </a>
        </li>
        <li>
          <a href="https://facebook.com/" className='socialMediaLink'>
            <FontAwesomeIcon icon={faFacebook}  size={'lg'}/>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialMedia;