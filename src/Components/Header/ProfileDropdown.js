import { Link, useHistory } from "react-router-dom";
import { UserConsumer } from "../../UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const ProfileDropdown = (props) => {
  const history = useHistory();
  return (
    <UserConsumer>
      {(user) => {
        const { loggedUser, signOut } = user;
        const { isVisible } = props;

        const handleSignOut = () => {
          signOut();
          history.push("/");
        };

        const containerStyle = {
          display: isVisible ? "flex" : "none",
          position: "absolute",
          top: "140%",
          left: "0%",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
          border: "#f12b6b 2px solid",
          borderRadius: "10px",
          backgroundColor: "#f6c7c7",
        };

        return loggedUser ? (
          <div style={containerStyle}>
            <Link to="/profile" className="headerLink">
              Account
            </Link>
            <Link to="/profile/wishlist" className="headerLink">
              Wishlist
            </Link>
            <Link to="/profile/orders" className="headerLink">
              Order History
            </Link>
            <button onClick={handleSignOut} style={{borderRadius: '8px'}}>
              Sign Out {" "}<FontAwesomeIcon icon={faSignOutAlt} size='sm'/>
            </button>
          </div>
        ) : (
          <div style={containerStyle}>
            <Link to="/profile/log-in" className="headerLink">
              Log In
            </Link>
            <Link to="/profile/sign-up" className="headerLink">
              Sign Up
            </Link>
          </div>
        );
      }}
    </UserConsumer>
  );
};

export default ProfileDropdown;
