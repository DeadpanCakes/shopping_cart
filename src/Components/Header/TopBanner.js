import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserConsumer } from "../../UserContext";

const TopBanner = () => {
  return (
    <UserConsumer>
      {(user) => {
        const { loggedUser } = user;
        return loggedUser ? (
          <div style={{ color: "#DDFFF7", backgroundColor: "#2A2B2A" }}>
            <h3 style={{ textAlign: "center" }}>
              <FontAwesomeIcon icon={faSeedling} /> Use Offer Code: GRDOPN For
              20% Off! <FontAwesomeIcon icon={faSeedling} />
            </h3>
          </div>
        ) : (
          <div style={{ color: "#DDFFF7", backgroundColor: "#2A2B2A" }}>
            <h3 style={{ textAlign: "center" }}>
              <FontAwesomeIcon icon={faSeedling} /> Sign Up For Exclusive Deals!{" "}
              <FontAwesomeIcon icon={faSeedling} />
            </h3>
          </div>
        );
      }}
    </UserConsumer>
  );
};

export default TopBanner;
