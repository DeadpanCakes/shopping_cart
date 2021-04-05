import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }

  const aStyle = {
    color: '#f6c7c7',
    padding: '0 10px',
  }

  return (
    <nav>
      <ul style={containerStyle}>
        <li>
          <a href="https://twitter.com/" style={aStyle}>
            <FontAwesomeIcon icon={faTwitter}  size={'lg'}/>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/" style={aStyle}>
            <FontAwesomeIcon icon={faInstagram} size={'lg'}/>
          </a>
        </li>
        <li>
          <a href="https://facebook.com/" style={aStyle}>
            <FontAwesomeIcon icon={faFacebook}  size={'lg'}/>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialMedia;