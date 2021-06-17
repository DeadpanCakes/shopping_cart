import { Link } from "react-router-dom";
import { UserConsumer } from "../../UserContext";

const ProfileDropdown = (props) => {
  return (
    <UserConsumer>
      {(user) => {
        const { loggedUser, signOut } = user;
        const { isVisible } = props;

        const handleSignOut = () => {
          signOut();
          //Push homepage history
        };

        const containerStyle = {
          display: isVisible ? "flex" : "none",
          position: "absolute",
          top: "140%",
          left: "0%",
          flexDirection: "column",
          textAlign: 'center',
          width: "100%",
          border: "#f12b6b 2px solid",
          borderRadius: "10px",
          backgroundColor: "#f6c7c7",
        };

        return loggedUser ? (
          <div>
            <Link to="/profile" className="headerLink">
              Account
            </Link>
            <Link to="/profile/wishlist" className="headerLink">
              Wishlist
            </Link>
            <Link to="/profile/orders" className="headerLink">
              Order History
            </Link>
            <button>Sign Out</button>
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
