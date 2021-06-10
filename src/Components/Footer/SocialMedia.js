import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = (props) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
  const {size} = props

  return (
    <nav>
      <ul style={containerStyle}>
        <li>
          <a href="https://twitter.com/" className='socialMediaLink'>
            <FontAwesomeIcon icon={faTwitter}  size={size}/>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/" className='socialMediaLink'>
            <FontAwesomeIcon icon={faInstagram} size={size}/>
          </a>
        </li>
        <li>
          <a href="https://facebook.com/" className='socialMediaLink'>
            <FontAwesomeIcon icon={faFacebook}  size={size}/>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialMedia;