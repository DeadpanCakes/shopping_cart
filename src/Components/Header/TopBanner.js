import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBanner = () => {
  return (
    <div style={{maxHeight: '3vh', color: '#DDFFF7',backgroundColor: '#2A2B2A'}}>
      <h3 style={{textAlign: 'center', minHeight: '100%'}}>
        <FontAwesomeIcon icon={faSeedling} />
        {' '} Sign Up For Exclusive Deals! {' '}
        <FontAwesomeIcon icon={faSeedling} />
      </h3>
    </div>
  );
};

export default TopBanner;
